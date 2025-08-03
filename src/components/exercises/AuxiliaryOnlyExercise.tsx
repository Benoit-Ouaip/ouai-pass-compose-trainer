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
      // Créer la forme avec l'auxiliaire masqué
      const parts = exercise.correctAnswer.split(' ');
      let replacement;
      
      if (parts.length === 2 && parts[0].match(/[''`]/)) {
        // Cas avec contraction: "t'es rappelé(e)" -> "t' _____ rappelé(e)"
        const contractedPart = parts[0]; // "t'es" ou "s'est"
        const participle = parts[1]; // "rappelé(e)" ou "brûlée"
        
        // Détecter le type de contraction
        if (contractedPart.endsWith('es')) {
          // "t'es" -> "t'" + "___"
          const pronoun = contractedPart.slice(0, -2); // "t'"
          const dashes = '___'; // 3 tirets pour "es"
          replacement = `${pronoun}${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
        } else if (contractedPart.endsWith('est')) {
          // "s'est" -> "s'" + "____"
          const pronoun = contractedPart.slice(0, -3); // "s'"
          const dashes = '____'; // 4 tirets pour "est"
          replacement = `${pronoun}${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
        } else {
          // Cas fallback
          const dashes = '_'.repeat(contractedPart.length);
          replacement = `${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
        }
      } else if (parts.length === 2) {
        // Cas simple: "a mangé" -> "_____ mangé"
        const dashes = '_'.repeat(parts[0].length);
        replacement = `${dashes} <span style="font-weight: bold; color: #3b82f6;">${parts[1]}</span>`;
      } else if (parts.length >= 3) {
        // Cas pronominal: toujours afficher les pronoms
        // - "se sont perfectionnés" -> "se _____ perfectionnés"
        // - "nous nous sommes aidés" -> "nous nous _____ aidés"
        const beforeAux = parts.slice(0, -2).join(' '); // "se" ou "nous nous"
        const auxiliary = parts[parts.length - 2]; // "sont" ou "sommes"
        const participle = parts[parts.length - 1]; // "perfectionnés" ou "aidés"
        const dashes = '_'.repeat(auxiliary.length);
        replacement = `${beforeAux} ${dashes} <span style="font-weight: bold; color: #3b82f6;">${participle}</span>`;
      } else {
        // Cas fallback
        const dashes = '_'.repeat(parts[0].length);
        replacement = `${dashes}`;
      }
      
      // Remplacer le verbe à conjuguer par la nouvelle forme
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
          {isAnswered && isCorrect ? "Parfait ! Voici la phrase complète :" : "Complète avec l'auxiliaire :"}
        </p>
        <p 
          className="text-xl text-foreground mb-6 leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: createDisplaySentence() }}
        />
        {!isAnswered && (
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="ouaip-input text-center text-xl py-4 h-16 border-2 border-primary/50 focus:border-primary font-medium bg-white shadow-lg w-40 mx-auto"
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