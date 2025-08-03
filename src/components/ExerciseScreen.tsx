import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import HelpPanel from "./HelpPanel";
import MultipleChoiceExercise from "./exercises/MultipleChoiceExercise";
import AuxiliaryOnlyExercise from "./exercises/AuxiliaryOnlyExercise";
import FullConjugationExercise from "./exercises/FullConjugationExercise";

interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
  choices?: string[];
}

interface ExerciseScreenProps {
  exercises: Exercise[];
  scenarioTitle: string;
  difficulty: number;
  onComplete: (score: number) => void;
  onBack: () => void;
}

const ExerciseScreen = ({ 
  exercises, 
  scenarioTitle, 
  difficulty, 
  onComplete, 
  onBack 
}: ExerciseScreenProps) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ""});
  const [score, setScore] = useState({correct: 0, total: 0});
  const [showHelp, setShowHelp] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const exercise = exercises[currentExercise];
  const progress = ((currentExercise + 1) / exercises.length) * 100;

  const handleVerify = () => {
    if (!userAnswer.trim()) return;

    let isCorrect = false;
    
    if (difficulty === 1) {
      // Niveau 1: choix multiple - comparaison exacte
      isCorrect = userAnswer.trim() === exercise.correctAnswer;
    } else if (difficulty === 2) {
      // Niveau 2: seulement l'auxiliaire
      const correctAuxiliary = exercise.correctAnswer.split(' ')[0];
      isCorrect = userAnswer.trim().toLowerCase() === correctAuxiliary.toLowerCase();
    } else {
      // Niveau 3: réponse complète
      isCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase();
    }

    // Messages de félicitations variés
    const successMessages = [
      "Excellent ! 🎉",
      "Bravo ! 👏",
      "Parfait ! ⭐",
      "Super ! 🌟",
      "Magnifique ! 🎯",
      "Fantastique ! 🚀",
      "Génial ! 💫",
      "Formidable ! ✨",
      "C'est ça ! 🎊",
      "Bien joué ! 🏆",
      "Tu as réussi ! 🎈",
      "Chapeau ! 🎩",
      "Exactement ! 💯",
      "Tu es fort(e) ! 💪",
      "Continue comme ça ! 🔥"
    ];
    
    const randomSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
    
    setFeedback({
      type: isCorrect ? 'success' : 'error',
      message: isCorrect ? randomSuccessMessage : exercise.explanation
    });
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    setIsCorrect(isCorrect);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer("");
      setFeedback({type: null, message: ""});
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      onComplete(Math.round((score.correct / score.total) * 100));
    }
  };

  const renderExercise = () => {
    const commonProps = {
      exercise,
      userAnswer,
      setUserAnswer,
      isAnswered,
      isCorrect,
      onKeyPress: (e: React.KeyboardEvent) => e.key === 'Enter' && !isAnswered && handleVerify()
    };

    switch (difficulty) {
      case 1:
        return <MultipleChoiceExercise {...commonProps} />;
      case 2:
        return <AuxiliaryOnlyExercise {...commonProps} />;
      case 3:
      default:
        return <FullConjugationExercise {...commonProps} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-primary text-primary hover:bg-primary/10"
        >
          ← Retour
        </Button>
        <h2 className="text-xl font-bold text-ouaip-dark-blue">
          {scenarioTitle}
        </h2>
        <Button 
          variant="outline"
          onClick={() => setShowHelp(true)}
          className="border-warning text-warning hover:bg-warning/10"
        >
          💡 Aide
        </Button>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentExercise + 1} sur {exercises.length}
          </span>
          <span className="text-sm text-muted-foreground">
            Score: {score.correct}/{score.total}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Exercise */}
      <div className="ouaip-card p-6 mb-4">
        {renderExercise()}
      </div>

      {/* Feedback */}
      {feedback.type && (
        <div className={`ouaip-card p-3 mb-4 border-2 fade-in ${
          feedback.type === 'success' 
            ? 'border-success bg-success/10' 
            : 'border-error bg-error/10'
        }`}>
          <p className={`text-center font-medium ${
            feedback.type === 'success' ? 'text-success' : 'text-error'
          }`}>
            {feedback.message}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="text-center">
        {!isAnswered ? (
          <Button 
            onClick={handleVerify}
            className="ouaip-button-primary px-8 py-3"
            disabled={!userAnswer.trim()}
          >
            Vérifier
          </Button>
        ) : (
          <Button 
            onClick={handleNext}
            className="ouaip-button-success px-8 py-3"
          >
            {currentExercise < exercises.length - 1 ? 'Suivant' : 'Terminer'}
          </Button>
        )}
      </div>

      {/* Help Panel */}
      <HelpPanel 
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
        scenarioId={1}
      />
    </div>
  );
};

export default ExerciseScreen;