import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

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

  // Créer les tirets correspondant au nombre de lettres de toute la réponse
  const generateDashesForFullAnswer = (answer: string) => {
    // Compter seulement les lettres, pas les espaces
    const letterCount = answer.replace(/\s/g, '').length;
    return '_'.repeat(letterCount);
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
      // Afficher des tirets pour toute la réponse (auxiliaire + participe passé)
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        generateDashesForFullAnswer(exercise.correctAnswer)
      );
    }
  };

  return (
    <div className="text-center space-y-4">
      <div className="p-4 bg-muted/20 rounded-lg">
        <p className="text-base font-medium text-ouaip-dark-blue mb-3 text-[#9f9f9f]">Phrase au présent :</p>
        <p 
          className="text-xl text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightedPresentSentence }}
        />
      </div>
      
      <div className="p-8 border-3 border-primary/40 rounded-xl relative shadow-lg bg-[#c5c5b9]/[0.13]">
        <p className="text-base text-ouaip-dark-blue mb-4 font-normal text-[#59c2df]">
          {isAnswered && isCorrect ? "Excellent ! Voici la phrase au passé composé :" : "Écris l'auxiliaire ET le participe passé :"}
        </p>
        <p 
          className="text-xl text-foreground mb-6 leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        {!isAnswered && (
          <Input
            ref={inputRef}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="ouaip-input text-center text-xl py-4 h-16 border-2 border-primary/50 focus:border-primary font-medium bg-white shadow-lg w-80 mx-auto"
            placeholder="Ex: a mangé, sont allés..."
            disabled={isAnswered}
            onKeyPress={onKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default FullConjugationExercise;