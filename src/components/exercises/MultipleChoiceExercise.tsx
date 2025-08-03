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
}

const MultipleChoiceExercise = ({
  exercise,
  userAnswer,
  setUserAnswer,
  isAnswered
}: MultipleChoiceExerciseProps) => {
  // Mélanger les choix de manière aléatoire
  const shuffledChoices = exercise.choices ? [...exercise.choices].sort(() => Math.random() - 0.5) : [];
  // Mettre le verbe en gras et rouge dans la phrase au présent
  const highlightedPresentSentence = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    `<span style="font-weight: bold; color: #e55555;">$&</span>`
  );

  // Créer les tirets correspondant au nombre de lettres de la réponse
  const generateDashes = (answer: string) => {
    const parts = answer.split(' ');
    return parts.map(part => '_'.repeat(part.length)).join(' ');
  };

  // Créer la phrase avec tirets pour la visualisation
  const sentenceWithBlanks = exercise.presentSentence.replace(
    new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
    generateDashes(exercise.correctAnswer)
  );

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
          Choisis le verbe au passé composé :
        </p>
        <p className="text-xl text-muted-foreground mb-4 leading-relaxed font-mono">
          {sentenceWithBlanks}
        </p>
        
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
      </div>
    </div>
  );
};

export default MultipleChoiceExercise;