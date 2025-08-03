import { Input } from "@/components/ui/input";

interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
}

interface FullConjugationExerciseProps {
  exercise: Exercise;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const FullConjugationExercise = ({
  exercise,
  userAnswer,
  setUserAnswer,
  isAnswered,
  isCorrect,
  onKeyPress
}: FullConjugationExerciseProps) => {
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
      // Afficher la phrase avec la réponse correcte en vert
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        `<span style="font-weight: bold; color: #72ba69;">${exercise.correctAnswer}</span>`
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
          {isAnswered && isCorrect ? "Excellent ! Voici la phrase au passé composé :" : "Complète avec le verbe au passé composé :"}
        </p>
        <p 
          className="text-xl text-muted-foreground mb-4 leading-relaxed font-mono"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        {!isAnswered && (
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="ouaip-input text-center text-xl py-4 h-16 border-2 border-primary/50 focus:border-primary text-lg font-medium bg-white shadow-lg w-80 mx-auto"
            placeholder="Tape ta réponse ici..."
            disabled={isAnswered}
            onKeyPress={onKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default FullConjugationExercise;