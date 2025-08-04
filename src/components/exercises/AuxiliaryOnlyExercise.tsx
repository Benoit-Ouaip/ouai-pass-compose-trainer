import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HelpCircle } from "lucide-react";
import { useEffect, useRef } from "react";

interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
}

interface AuxiliaryOnlyExerciseProps {
  exercise: Exercise;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const AuxiliaryOnlyExercise = ({
  exercise,
  userAnswer,
  setUserAnswer,
  isAnswered,
  isCorrect,
  onKeyPress
}: AuxiliaryOnlyExerciseProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAnswered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAnswered, exercise.id]);
  // Mettre le verbe en gras et rouge dans la phrase au présent
  const highlightedPresentSentence = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    `<span style="font-weight: bold; color: #e55555;">$&</span>`
  );

  // Extraire le participe passé de la réponse correcte
  const getParticipleFromAnswer = (answer: string) => {
    const parts = answer.split(' ');
    return parts.length > 1 ? parts.slice(1).join(' ') : '';
  };

  // Extraire l'auxiliaire et le participe passé (sans les pronoms)
  const getAuxiliaryAndParticiple = (answer: string) => {
    const parts = answer.split(' ');
    if (parts.length === 2) {
      return answer; // cas simple: "a mangé"
    } else if (parts.length > 2) {
      // cas pronominal: "vous vous êtes régalés" -> "êtes régalés"
      return parts.slice(-2).join(' ');
    }
    return answer;
  };

  const auxiliaryAndParticiple = getAuxiliaryAndParticiple(exercise.correctAnswer);

  // Fonction pour extraire le participe passé avec l'explication de l'accord
  const getParticipleHelp = () => {
    const parts = exercise.correctAnswer.split(' ');
    let participle = '';
    let explanation = '';
    
    // Cas spécifique pour "se moquer de"
    if (exercise.presentSentence.toLowerCase().includes('se moquent')) {
      participle = parts[parts.length - 1];
      explanation = `Le verbe se moquer de n'a pas de CDV → le participe passé s'accorde avec le sujet.`;
    } 
    // Cas spécifique pour "se demander"
    else if (exercise.presentSentence.toLowerCase().includes('se demandent')) {
      participle = parts[parts.length - 1];
      explanation = `On ne met pas de "s" à la fin. Pourquoi ? Parce que dans "se demander", les cuisiniers se posent une question à eux-mêmes.`;
    }
    else if (parts.length === 2 && parts[0].match(/[''`]/)) {
      // Cas avec contraction: "s'est décidée"
      participle = parts[1];
      if (parts[0].startsWith('s\'')) {
        // Analyser la phrase pour déterminer le sujet réel
        if (exercise.presentSentence.toLowerCase().includes('il ') && exercise.presentSentence.toLowerCase().includes('se dirige')) {
          explanation = `Le verbe "se diriger" n'a pas de complément direct.\n👉 Le participe passé s'accorde avec le sujet.`;
        } else if (exercise.presentSentence.toLowerCase().includes('il ')) {
          explanation = `Le sujet "il" est masculin singulier, donc le participe passé s'accorde.`;
        } else if (exercise.presentSentence.toLowerCase().includes('elle ')) {
          explanation = `Le sujet "elle" est féminin singulier, donc le participe passé s'accorde.`;
        } else {
          explanation = `Regarde bien le sujet pour déterminer l'accord du participe passé.`;
        }
      } else if (parts[0].startsWith('t\'')) {
        explanation = `Regarde bien le contexte pour déterminer si "tu" est masculin ou féminin, le participe s'accorde.`;
      }
    } else if (parts.length > 2) {
      // Cas pronominal
      participle = parts[parts.length - 1];
      const subjectPronouns = parts.slice(0, -2).join(' ');
      if (subjectPronouns.includes('vous')) {
        explanation = `Avec "vous", le participe passé s'accorde selon le genre et nombre.`;
      } else if (subjectPronouns.includes('nous')) {
        explanation = `Avec "nous", le participe passé s'accorde selon le genre et nombre.`;
      } else {
        explanation = `Le participe passé s'accorde avec le sujet.`;
      }
    } else {
      // Cas simple
      participle = parts[1];
      
      // Vérifier si c'est l'auxiliaire "avoir"
      const isAvoirAuxiliary = exercise.correctAnswer.includes('avons') || 
                              exercise.correctAnswer.includes('avez') || 
                              exercise.correctAnswer.includes('ont') || 
                              exercise.correctAnswer.includes('as') || 
                              exercise.correctAnswer.includes('a ') ||
                              exercise.correctAnswer.includes('ai ');
      
      if (isAvoirAuxiliary) {
        explanation = `Avec l'auxiliaire "avoir", on n'accorde pas le participe passé avec le sujet.`;
      } else {
        // Analyser la phrase pour déterminer le sujet
        if (exercise.presentSentence.toLowerCase().includes('elle')) {
          explanation = `Le sujet "elle" est féminin singulier.`;
        } else if (exercise.presentSentence.toLowerCase().includes('elles')) {
          explanation = `Le sujet "elles" est féminin pluriel.`;
        } else if (exercise.presentSentence.toLowerCase().includes('ils')) {
          explanation = `Le sujet "ils" est masculin pluriel.`;
        } else {
          explanation = `Regarde le sujet pour accorder le participe passé.`;
        }
      }
    }
    
    return { participle, explanation };
  };

  // Créer la phrase avec seulement l'auxiliaire à compléter
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Afficher la phrase avec la réponse correcte en vert
      const styledAnswer = `<span style="color: #72ba69;">${exercise.correctAnswer}</span>`;
      
      let finalSentence = exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        styledAnswer
      );
      
      // Cas spécial : remplacer "Je " par "J'" quand l'auxiliaire commence par une voyelle
      if (finalSentence.startsWith("Je ") && exercise.correctAnswer.match(/^[aeiou]/i)) {
        finalSentence = finalSentence.replace(/^Je /, "J'");
      }
      
      return finalSentence;
    } else {
      // Gérer les contractions spécialement
      const parts = exercise.correctAnswer.split(' ');
      let replacement;
      
      if (parts.length === 2 && parts[0].match(/[''`]/)) {
        // Cas avec contraction: "s'est décidée" ou "t'es rappelé(e)"
        const contractedPart = parts[0]; // "s'est" ou "t'es"
        const participle = parts[1]; // "décidée" ou "rappelé(e)"
        
        if (contractedPart.endsWith('est')) {
          // "s'est" -> "s'" + "___"
          const pronoun = contractedPart.slice(0, -3); // "s'"
          const dashesAux = '___'; // 3 tirets pour "est"
          const dashesParticiple = '_'.repeat(participle.length);
          replacement = `${pronoun}${dashesAux} ${dashesParticiple}`;
        } else if (contractedPart.endsWith('es')) {
          // "t'es" -> "t'" + "__"
          const pronoun = contractedPart.slice(0, -2); // "t'"
          const dashesAux = '__'; // 2 tirets pour "es"
          const dashesParticiple = '_'.repeat(participle.length);
          replacement = `${pronoun}${dashesAux} ${dashesParticiple}`;
        } else {
          // Cas fallback
          const words = auxiliaryAndParticiple.split(' ');
          const dashesForWords = words.map(word => '_'.repeat(word.length)).join(' ');
          replacement = dashesForWords;
        }
      } else {
        // Cas normal (sans contraction) - créer des tirets seulement pour l'auxiliaire et le participe passé (sans pronoms)
        const words = auxiliaryAndParticiple.split(' ');
        const dashesForWords = words.map(word => '_'.repeat(word.length)).join(' ');
        replacement = dashesForWords;
      }
      
      // Remplacer le verbe à conjuguer par les tirets
      const regex = new RegExp(`\\b${exercise.verbToConjugate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      let modifiedSentence = exercise.presentSentence.replace(regex, replacement);
      
      // Si le remplacement n'a pas fonctionné, essayer sans les limites de mots
      if (modifiedSentence === exercise.presentSentence) {
        const simpleRegex = new RegExp(exercise.verbToConjugate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        modifiedSentence = exercise.presentSentence.replace(simpleRegex, replacement);
      }
      
      // Cas spécial : remplacer "Je " par "J'" quand l'auxiliaire commence par une voyelle
      console.log("Debug:", { modifiedSentence, auxiliaryAndParticiple, startsWithJe: modifiedSentence.startsWith("Je "), vowelMatch: auxiliaryAndParticiple.match(/^[aeiou]/i) });
      if (modifiedSentence.startsWith("Je ") && auxiliaryAndParticiple.match(/^[aeiou]/i)) {
        modifiedSentence = modifiedSentence.replace(/^Je /, "J'");
        console.log("Modified to:", modifiedSentence);
      }
      
      return modifiedSentence;
    }
  };

  return (
    <div className="text-center space-y-4">
      <div className="p-4 bg-muted/20 rounded-lg">
        <p className="text-base font-medium text-ouaip-dark-blue mb-3 text-[#9f9f9f]">La phrase au présent :</p>
        <p 
          className="text-xl text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightedPresentSentence }}
        />
      </div>
      
      <div className="p-8 border-3 border-primary/40 rounded-xl relative shadow-lg bg-[#c5c5b9]/[0.13]">
        <p className="text-base text-ouaip-dark-blue mb-4 font-normal text-[#59c2df]">
          {isAnswered && isCorrect ? "Parfait ! Voici la phrase complète :" : "Complète avec l'auxiliaire et le participe passé :"}
        </p>
        <p 
          className="text-xl text-foreground mb-6 leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        {!isAnswered && (
          <div className="flex items-center justify-center gap-4">
            <Input
              ref={inputRef}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onTouchStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              onDoubleClick={(e) => e.preventDefault()}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="ouaip-input text-center text-xl py-4 h-16 border-2 border-primary/50 focus:border-primary font-medium bg-white shadow-lg w-80"
              placeholder="Ex: est décidée, sont allés..."
              disabled={isAnswered}
              onKeyPress={onKeyPress}
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-12 w-12 rounded-full border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-50"
                >
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white border-2 border-blue-200 shadow-lg" side="top">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-700 text-sm">💡 Indice pour l'accord</h4>
                  <div className="text-center">
                    <span className="text-lg font-bold text-green-600">{getParticipleHelp().participle}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {getParticipleHelp().explanation}
                  </p>
                 </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuxiliaryOnlyExercise;