import { Button } from "@/components/ui/button";
import { useState } from "react";
interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
  choices?: string[];
}
interface MultipleChoiceExerciseProps {
  exercise: Exercise;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
}
const MultipleChoiceExercise = ({
  exercise,
  userAnswer,
  setUserAnswer,
  isAnswered,
  isCorrect
}: MultipleChoiceExerciseProps) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);

  // Mélanger les choix de manière aléatoire
  const shuffledChoices = exercise.choices ? [...exercise.choices].sort(() => Math.random() - 0.5) : [];

  // Mettre seulement le verbe en gras et rouge dans la phrase au présent (pas les pronoms)
  const highlightedPresentSentence = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    (match) => {
      // Pour les verbes pronominaux, ne mettre en rouge que la partie verbale
      const parts = match.split(' ');
      if (parts.length > 1) {
        // Garder les pronoms normaux et mettre seulement le dernier mot (le verbe) en rouge
        const pronouns = parts.slice(0, -1).join(' ');
        const verb = parts[parts.length - 1];
        return `${pronouns} <span style="font-weight: bold; color: #e55555;">${verb}</span>`;
      }
      return `<span style="font-weight: bold; color: #e55555;">${match}</span>`;
    }
  );

  // Créer les tirets correspondant au nombre de lettres de la réponse complète
  const generateDashes = (answer: string) => {
    const parts = answer.split(' ');
    return parts.map(part => '_'.repeat(part.length)).join(' ');
  };

  // Créer la phrase avec tirets ou avec la réponse si correcte
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Séparer l'auxiliaire du participe passé pour les mettre tous les deux en gras
      const correctParts = exercise.correctAnswer.split(' ');
      const auxiliary = correctParts[0];
      const participle = correctParts.slice(1).join(' ');

      // Afficher la phrase avec l'auxiliaire et le participe passé tous les deux en gras et vert
      const styledAnswer = `<span style="color: #72ba69;">${auxiliary} ${participle}</span>`;
      return exercise.presentSentence.replace(exercise.verbToConjugate, styledAnswer);
    } else if (userAnswer) {
      // Afficher la réponse déposée avec style d'étiquette
      return exercise.presentSentence.replace(
        exercise.verbToConjugate, 
        `<span style="color: #72ba69; background: #e0f2fe; padding: 4px 12px; border-radius: 8px; border: 2px solid #72ba69; box-shadow: 0 2px 4px rgba(114, 186, 105, 0.2);">${userAnswer}</span>`
      );
    } else {
      // Créer les tirets en gardant les pronoms réfléchis
      const parts = exercise.correctAnswer.split(' ');
      let replacement;
      
      if (parts.length === 2 && parts[0].match(/[''`]/)) {
        // Cas avec contraction: "s'est décidée" ou "t'es rappelé(e)"
        const contractedPart = parts[0]; // "s'est" ou "t'es"
        const pronoun = contractedPart.slice(0, contractedPart.length - (contractedPart.endsWith('est') ? 3 : 2));
        replacement = ` <span style="background: white; padding: 12px 16px; border: 2px solid #59c2df; border-radius: 8px; min-width: 160px; display: inline-block; color: #64748b; font-style: italic; font-size: 0.75rem; margin: 0 8px;">...</span> `;
      } else if (parts.length > 2) {
        // Cas pronominal avec pronoms séparés: "nous nous sommes amusé(e)s" ou "se sont disputés"
        const pronounParts = parts.slice(0, -2);
        // Filtrer pour enlever "se" des pronoms affichés
        const pronounsToShow = pronounParts.filter(part => part !== 'se').join(' ');
        replacement = `${pronounsToShow} <span style="background: white; padding: 12px 16px; border: 2px solid #59c2df; border-radius: 8px; min-width: 160px; display: inline-block; color: #64748b; font-style: italic; font-size: 0.75rem; margin: 0 8px;">...</span> `;
      } else {
        // Cas normal sans pronoms
        replacement = ` <span style="background: white; padding: 12px 16px; border: 2px solid #59c2df; border-radius: 8px; min-width: 160px; display: inline-block; color: #64748b; font-style: italic; font-size: 0.75rem; margin: 0 8px;">...</span> `;
      }
      
      return exercise.presentSentence.replace(exercise.verbToConjugate, replacement);
    }
  };
  
  // Générer un conseil contextuel basé sur le type de verbe
  const getContextualHint = () => {
    const verb = exercise.verbToConjugate.toLowerCase();
    const sentence = exercise.presentSentence.toLowerCase();
    const correctAnswer = exercise.correctAnswer.toLowerCase();
    
    // Verbes pronominaux
    if (verb.includes('se ') || verb.includes('s\'') || verb.includes('te ') || verb.includes('t\'') || 
        verb.includes('nous ') || verb.includes('vous ') || verb.includes('me ') || verb.includes('m\'')) {
      return "Attention, c'est un verbe pronominal ! Pense à l'auxiliaire 'être'.";
    }
    
    // Verbes de mouvement avec être
    if (correctAnswer.includes('est ') || correctAnswer.includes('sont ') || 
        correctAnswer.includes('sommes ') || correctAnswer.includes('êtes ') ||
        (correctAnswer.includes('suis ') && !correctAnswer.includes('me suis'))) {
      return "Ce verbe se conjugue avec l'auxiliaire 'être' - pense à l'accord !";
    }
    
    // Verbes avec avoir
    if (correctAnswer.includes('ai ') || correctAnswer.includes('as ') || 
        correctAnswer.includes('a ') || correctAnswer.includes('avons ') || 
        correctAnswer.includes('avez ') || correctAnswer.includes('ont ')) {
      return "Ce verbe se conjugue avec l'auxiliaire 'avoir'.";
    }
    
    // Conseil par défaut
    return "Clique et fais glisser une étiquette vers la zone avec les trois points.";
  };
  const handleDragStart = (e: React.DragEvent, choice: string) => {
    setDraggedItem(choice);
    e.dataTransfer.setData('text/plain', choice);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const choice = e.dataTransfer.getData('text/plain');
    if (choice && !isAnswered) {
      setUserAnswer(choice);
    }
    setDraggedItem(null);
  };
  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // Gestionnaires pour les événements tactiles (iPad/mobile)
  const handleTouchStart = (e: React.TouchEvent, choice: string) => {
    if (isAnswered) return;
    
    const touch = e.touches[0];
    const startPos = { x: touch.clientX, y: touch.clientY };
    setTouchStart(startPos);
    setDraggedItem(choice);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !draggedItem || isAnswered) return;
    
    const touch = e.touches[0];
    setDragPosition({ x: touch.clientX, y: touch.clientY });
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !draggedItem || isAnswered) return;

    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Vérifier si l'élément de destination est la zone de dépôt
    const dropZone = element?.closest('[data-drop-zone="true"]');
    if (dropZone) {
      setUserAnswer(draggedItem);
    }
    
    // Réinitialiser tous les états
    setDraggedItem(null);
    setTouchStart(null);
    setDragPosition(null);
    e.preventDefault();
  };
  return <div className="text-center space-y-4">
      <div className="p-4 bg-muted/20 rounded-lg">
        <p className="text-base font-medium text-ouaip-dark-blue mb-3 text-[#9f9f9f]">La phrase au présent :</p>
        <p className="text-xl text-foreground leading-relaxed" dangerouslySetInnerHTML={{
        __html: highlightedPresentSentence
      }} />
      </div>
      
      <div onDragOver={handleDragOver} onDrop={handleDrop} data-drop-zone="true" className="p-8 border-3 border-primary/40 rounded-xl relative shadow-lg bg-[#c5c5b9]/[0.13]">
        <p className="text-base text-ouaip-dark-blue mb-4 font-normal text-[#59c2df]">La phrase au passé composé :</p>
        <p className="text-xl text-foreground mb-6 leading-relaxed font-medium" dangerouslySetInnerHTML={{
        __html: createDisplaySentence()
      }} />
        
        {isAnswered && isCorrect && <div className="text-base font-medium text-green-600 mb-3 flex items-center justify-center gap-2">
            <img src="/lovable-uploads/67fac243-a62f-4f09-baef-5e4ec5394cdf.png" alt="Bravo" className="w-8 h-8 object-contain" />
            <span>Bravo ! Voici la phrase complète.</span>
          </div>}
        
        {userAnswer && !isAnswered && <p className="text-base font-medium text-ouaip-dark-blue mb-3">
            Tu as déposé une étiquette ! Clique sur Vérifier.
          </p>}
        
        {!isAnswered && !userAnswer && shuffledChoices.length > 0 && <div className="flex justify-center gap-4 flex-wrap mt-6">
            {shuffledChoices.map((choice, index) => <div key={index} 
              draggable 
              onDragStart={e => handleDragStart(e, choice)} 
              onDragEnd={handleDragEnd}
              onTouchStart={e => handleTouchStart(e, choice)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`px-6 py-3 text-lg font-medium bg-white border-2 border-primary/50 rounded-lg cursor-move hover:border-primary hover:shadow-lg transition-all select-none transform hover:scale-105 ${draggedItem === choice ? 'opacity-50 scale-95' : ''}`} 
              style={{
                touchAction: 'none'
              }}>
                {choice}
              </div>)}
          </div>}

        {!isAnswered && !userAnswer && shuffledChoices.length === 0 && <div className="mt-4 text-center">
            <p className="text-red-500 font-medium">⚠️ Aucun choix disponible pour cet exercice</p>
            <p className="text-sm text-muted-foreground">Cet exercice n'a pas de choix multiples définis.</p>
          </div>}

        {userAnswer && !isAnswered && <div className="mt-4 flex justify-center gap-2">
            <Button onClick={() => setUserAnswer("")} variant="outline" className="px-4 py-2">
              🔄 Changer
            </Button>
          </div>}
        
        {!userAnswer && !isAnswered && <p className="text-sm text-muted-foreground mt-4 italic">
            💡 Conseil : {getContextualHint()}
          </p>}
      </div>

      {/* Élément fantôme qui suit le doigt pendant le drag sur tactile */}
      {dragPosition && draggedItem && (
        <div 
          className="fixed pointer-events-none z-50 px-6 py-3 text-lg font-medium bg-white border-2 border-primary/50 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 opacity-80"
          style={{
            left: dragPosition.x,
            top: dragPosition.y,
          }}
        >
          {draggedItem}
        </div>
      )}
    </div>;
};
export default MultipleChoiceExercise;