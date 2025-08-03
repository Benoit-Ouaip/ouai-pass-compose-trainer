import { Input } from "@/components/ui/input";

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

  const participle = getParticipleFromAnswer(exercise.correctAnswer);

  // Créer la phrase avec l'auxiliaire à compléter ou avec la réponse si correcte
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Afficher la phrase avec la réponse correcte en vert et en gras
      const correctParts = exercise.correctAnswer.split(' ');
      const auxiliary = correctParts[0];
      const participle = correctParts.slice(1).join(' ');
      const styledAnswer = `<span style="color: #22c55e; font-weight: bold;"><strong>${auxiliary}</strong> <strong>${participle}</strong></span>`;
      
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        styledAnswer
      );
    } else {
      // Afficher avec des tirets pour l'auxiliaire et le participe passé en bleu gras
      const auxiliaryLength = exercise.correctAnswer.split(' ')[0].length;
      const dashes = '_'.repeat(auxiliaryLength);
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        `${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`
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
          {isAnswered && isCorrect ? "Parfait ! Voici la phrase complète :" : "Complète avec l'auxiliaire :"}
        </p>
        <p 
          className="text-xl text-muted-foreground mb-4 leading-relaxed font-mono"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        {!isAnswered && (
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="ouaip-input text-center text-xl py-4 h-16 border-2 border-primary/50 focus:border-primary text-lg font-medium bg-white shadow-lg w-40 mx-auto"
            placeholder="avoir ou être ?"
            disabled={isAnswered}
            onKeyPress={onKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default AuxiliaryOnlyExercise;