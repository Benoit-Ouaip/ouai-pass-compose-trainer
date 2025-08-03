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
  
  // Mélanger les choix de manière aléatoire
  const shuffledChoices = exercise.choices ? [...exercise.choices].sort(() => Math.random() - 0.5) : [];

  // Mettre le verbe en gras et rouge dans la phrase au présent
  const highlightedPresentSentence = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    `<span style="font-weight: bold; color: #e55555;">$&</span>`
  );

  // Créer les tirets correspondant au nombre de lettres de la réponse complète
  const generateDashes = (answer: string) => {
    const parts = answer.split(' ');
    return parts.map(part => '_'.repeat(part.length)).join(' ');
  };

  // Créer la phrase avec tirets ou avec la réponse si correcte
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Séparer l'auxiliaire du participe passé pour le mettre en gras
      const correctParts = exercise.correctAnswer.split(' ');
      const auxiliary = correctParts[0];
      const participle = correctParts.slice(1).join(' ');
      
      // Afficher la phrase avec l'auxiliaire normal et le participe passé en gras
      const styledAnswer = `<span style="color: #22c55e;">${auxiliary} <strong>${participle}</strong></span>`;
      
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        styledAnswer
      );
    } else if (userAnswer) {
      // Afficher la réponse déposée avec style d'étiquette
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        `<span style="color: #3b82f6; font-weight: bold; background: #e0f2fe; padding: 4px 12px; border-radius: 8px; border: 2px solid #3b82f6; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);">${userAnswer}</span>`
      );
    } else {
      // Afficher une zone de dépôt stylée
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        `<span style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 8px 16px; border: 2px dashed #94a3b8; border-radius: 8px; min-width: 120px; display: inline-block; color: #64748b; font-style: italic;">Dépose ici</span>`
      );
    }
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

  return (
    <div className="text-center space-y-4">
      <div className="p-6 bg-muted/30 rounded-lg">
        <p className="text-lg font-medium text-ouaip-dark-blue mb-4">
          Phrase au présent :
        </p>
        <p 
          className="text-2xl text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightedPresentSentence }}
        />
      </div>
      
      <div 
        className="p-6 border-3 border-primary/30 bg-primary/5 rounded-xl relative"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className="text-lg font-medium text-ouaip-dark-blue mb-3">
          {isAnswered && isCorrect ? "Bravo ! Voici la phrase au passé composé :" : 
           userAnswer ? "Tu as déposé une étiquette ! Clique sur Vérifier :" :
           "Glisse une étiquette dans la zone de dépôt :"}
        </p>
        <p 
          className="text-xl text-muted-foreground mb-4 leading-relaxed font-mono"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        
        {!isAnswered && !userAnswer && (
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            {shuffledChoices.map((choice, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, choice)}
                onDragEnd={handleDragEnd}
                className={`px-6 py-3 text-lg font-medium bg-white border-2 border-primary/50 rounded-lg cursor-move hover:border-primary hover:shadow-lg transition-all select-none transform hover:scale-105 ${
                  draggedItem === choice ? 'opacity-50 scale-95' : ''
                }`}
                style={{ touchAction: 'none' }}
              >
                {choice}
              </div>
            ))}
          </div>
        )}

        {userAnswer && !isAnswered && (
          <div className="mt-4 flex justify-center gap-2">
            <Button
              onClick={() => setUserAnswer("")}
              variant="outline"
              className="px-4 py-2"
            >
              🔄 Changer
            </Button>
          </div>
        )}
        
        {!userAnswer && !isAnswered && (
          <p className="text-sm text-muted-foreground mt-4 italic">
            💡 Conseil : Clique et fais glisser une étiquette vers la zone "Dépose ici"
          </p>
        )}
      </div>
    </div>
  );
};

export default MultipleChoiceExercise;