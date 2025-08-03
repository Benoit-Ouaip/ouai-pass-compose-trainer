import { Button } from "@/components/ui/button";

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
  // Mélanger les choix de manière aléatoire
  const shuffledChoices = exercise.choices ? [...exercise.choices].sort(() => Math.random() - 0.5) : [];
  // Mettre le verbe en gras et rouge dans la phrase au présent
  const highlightedPresentSentence = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    `<span style="font-weight: bold; color: #e55555;">$&</span>`
  );

  // Créer les tirets correspondant au nombre de lettres de l'auxiliaire seulement
  const generateDashesForAuxiliary = (answer: string) => {
    const parts = answer.split(' ');
    const auxiliary = parts[0];
    const participle = parts.slice(1).join(' ');
    return `${'_'.repeat(auxiliary.length)} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
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
    } else {
      // Afficher les tirets pour l'auxiliaire + participe passé en gras
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        generateDashesForAuxiliary(exercise.correctAnswer)
      );
    }
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
      
      <div className="p-6 border-3 border-primary/30 bg-primary/5 rounded-xl">
        <p className="text-lg font-medium text-ouaip-dark-blue mb-3">
          {isAnswered && isCorrect ? "Bravo ! Voici la phrase au passé composé :" : "Choisis le verbe au passé composé :"}
        </p>
        <p 
          className="text-xl text-muted-foreground mb-4 leading-relaxed font-mono"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        
        {!isAnswered && (
          <div className="flex justify-center gap-4 flex-wrap">
            {shuffledChoices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => setUserAnswer(choice)}
                disabled={isAnswered}
                variant={userAnswer === choice ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all ${
                  userAnswer === choice 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary/50 hover:border-primary'
                }`}
              >
                {choice}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleChoiceExercise;