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

  // Extraire les pronoms (tout sauf l'auxiliaire et le participe passé)
  const getPronouns = (answer: string) => {
    const parts = answer.split(' ');
    if (parts.length > 2) {
      return parts.slice(0, -2).join(' '); // "vous vous êtes régalés" -> "vous vous"
    }
    return ''; // pas de pronom pour les verbes non pronominaux
  };

  const auxiliaryAndParticiple = getAuxiliaryAndParticiple(exercise.correctAnswer);
  const pronouns = getPronouns(exercise.correctAnswer);

  // Créer la phrase avec pronoms + tirets pour auxiliaire et participe passé
  const createDisplaySentence = () => {
    if (isAnswered && isCorrect) {
      // Afficher la phrase avec la réponse correcte en vert
      return exercise.presentSentence.replace(
        new RegExp(`\\b${exercise.verbToConjugate}\\b`, 'gi'),
        `<span style="font-weight: bold; color: #72ba69;">${exercise.correctAnswer}</span>`
      );
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
        // Cas normal (sans contraction)
        const words = auxiliaryAndParticiple.split(' ');
        const dashesForWords = words.map(word => '_'.repeat(word.length)).join(' ');
        
        if (pronouns) {
          replacement = `${pronouns} ${dashesForWords}`;
        } else {
          replacement = dashesForWords;
        }
      }
      
      // Remplacer le verbe à conjuguer par le nouveau format
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