
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
  const highlightVerb = (sentence: string, verb: string) => {
    const regex = new RegExp(`\\b${verb}\\b`, 'gi');
    return sentence.replace(regex, `<mark class="bg-yellow-200 px-1 rounded">${verb}</mark>`);
  };

  return (
    <div>
      <div className="mb-6">
        <p className="text-lg mb-2">Transforme cette phrase au passé composé :</p>
        <div 
          className="text-xl font-medium p-4 bg-blue-50 rounded-lg mb-4"
          dangerouslySetInnerHTML={{ 
            __html: highlightVerb(exercise.presentSentence, exercise.verbToConjugate) 
          }}
        />
        <p className="text-sm text-muted-foreground">
          💡 Écris seulement l'auxiliaire et le participe passé (exemple: "a mangé" ou "est parti")
        </p>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={onKeyPress}
          placeholder="Écris ta réponse ici..."
          className="text-lg py-3"
          disabled={isAnswered}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-form-type="other"
        />
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? '✓ Correct !' : '✗ Pas tout à fait...'}
          </p>
          {!isCorrect && (
            <div className="mt-2">
              <p className="text-sm text-red-700">
                La bonne réponse : <strong>{exercise.correctAnswer}</strong>
              </p>
              <p className="text-sm text-red-600 mt-1">
                {exercise.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuxiliaryOnlyExercise;
