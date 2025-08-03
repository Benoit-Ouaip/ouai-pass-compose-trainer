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

  // Extraire seulement l'auxiliaire (le dernier mot avant le participe passé)
  const getAuxiliaryOnly = (answer: string) => {
    const parts = answer.split(' ');
    if (parts.length === 2) {
      return parts[0]; // cas simple: "a mangé"
    } else if (parts.length > 2) {
      return parts[parts.length - 2]; // cas pronominal: "vous vous êtes régalés" -> "êtes"
    }
    return parts[0];
  };

  // Extraire le pronom (tout sauf l'auxiliaire et le participe passé)
  const getPronounOnly = (answer: string, verbToConjugate: string) => {
    const parts = answer.split(' ');
    if (parts.length > 2) {
      return parts.slice(0, -2).join(' '); // "vous vous êtes régalés" -> "vous vous"
    }
    return ''; // pas de pronom pour les verbes non pronominaux
  };

  const participle = getParticipleFromAnswer(exercise.correctAnswer);
  const auxiliaryOnly = getAuxiliaryOnly(exercise.correctAnswer);
  const pronounOnly = getPronounOnly(exercise.correctAnswer, exercise.verbToConjugate);

  // Créer la phrase avec seulement l'auxiliaire à compléter
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Afficher la phrase avec la réponse correcte en vert
      const styledAnswer = `<span style="color: #72ba69;">${exercise.correctAnswer}</span>`;
      
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        styledAnswer
      );
    } else {
      // Afficher avec des tirets seulement pour l'auxiliaire
      const auxiliaryLength = auxiliaryOnly.length;
      const dashes = '_'.repeat(auxiliaryLength);
      
      // Créer le remplacement: pronom + tirets + participe passé
      let replacement;
      if (pronounOnly) {
        replacement = `${pronounOnly} ${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
      } else {
        replacement = `${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
      }
      
      // Essayer le remplacement avec une regex plus robuste
      const regex = new RegExp(`\\b${exercise.verbToConjugate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      let modifiedSentence = exercise.presentSentence.replace(regex, replacement);
      
      // Si le remplacement n'a pas fonctionné, essayer sans les limites de mots
      if (modifiedSentence === exercise.presentSentence) {
        const simpleRegex = new RegExp(exercise.verbToConjugate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        modifiedSentence = exercise.presentSentence.replace(simpleRegex, replacement);
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
          {isAnswered && isCorrect ? "Parfait ! Voici la phrase complète :" : "Complète avec l'auxiliaire et son pronom :"}
        </p>
        <p 
          className="text-xl text-foreground mb-6 leading-relaxed font-medium"
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