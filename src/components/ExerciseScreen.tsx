import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ""
  });
  const [score, setScore] = useState({
    correct: 0,
    total: 0
  });
  const [showHelp, setShowHelp] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const exercise = exercises[currentExercise];
  const progress = (currentExercise + 1) / exercises.length * 100;

  // Fonction pour jouer un son
  const playSound = (isSuccess: boolean) => {
    // Créer un contexte audio et jouer une mélodie simple
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (isSuccess) {
      // Son de succès : mélodie ascendante
      const frequencies = [523.25, 659.25, 783.99]; // Do, Mi, Sol
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.15);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + index * 0.15);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + index * 0.15 + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + index * 0.15 + 0.3);
        oscillator.start(audioContext.currentTime + index * 0.15);
        oscillator.stop(audioContext.currentTime + index * 0.15 + 0.3);
      });
    } else {
      // Son d'erreur : note descendante
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.5);
      oscillator.type = 'sawtooth';
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };
  const handleVerify = () => {
    if (!userAnswer.trim()) return;
    let isCorrect = false;
    if (difficulty === 1) {
      // Niveau 1: choix multiple - comparaison exacte
      isCorrect = userAnswer.trim() === exercise.correctAnswer;
    } else if (difficulty === 2) {
      // Niveau 2: auxiliaire et participe passé (sans pronoms)
      const parts = exercise.correctAnswer.split(' ');
      let correctAnswer;
      if (parts.length === 2 && parts[0].match(/[''`]/)) {
        // Cas avec contraction: "s'est décidée" -> réponse attendue: "est décidée"
        const contractedPart = parts[0]; // "s'est" ou "t'es"
        const participle = parts[1]; // "décidée"

        if (contractedPart.endsWith('est')) {
          correctAnswer = `est ${participle}`; // "est décidée"
        } else if (contractedPart.endsWith('es')) {
          correctAnswer = `es ${participle}`; // "es rappelé"
        } else {
          correctAnswer = exercise.correctAnswer; // fallback
        }
      } else if (parts.length === 2) {
        correctAnswer = exercise.correctAnswer; // cas simple: "a mangé"
      } else if (parts.length > 2) {
        // cas pronominal: "vous vous êtes régalés" -> "êtes régalés"
        correctAnswer = parts.slice(-2).join(' ');
      } else {
        correctAnswer = exercise.correctAnswer;
      }
      isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    } else {
      // Niveau 3: auxiliaire et participe passé (sans pronoms) - même logique que niveau 2
      const parts = exercise.correctAnswer.split(' ');
      let correctAnswer;
      if (parts.length === 2 && parts[0].match(/[''`]/)) {
        // Cas avec contraction: "s'est décidée" -> réponse attendue: "est décidée"
        const contractedPart = parts[0]; // "s'est" ou "t'es"
        const participle = parts[1]; // "décidée"

        if (contractedPart.endsWith('est')) {
          correctAnswer = `est ${participle}`; // "est décidée"
        } else if (contractedPart.endsWith('es')) {
          correctAnswer = `es ${participle}`; // "es rappelé"
        } else {
          correctAnswer = exercise.correctAnswer; // fallback
        }
      } else if (parts.length === 2) {
        correctAnswer = exercise.correctAnswer; // cas simple: "a mangé"
      } else if (parts.length > 2) {
        // cas pronominal: "vous vous êtes régalés" -> "êtes régalés"
        correctAnswer = parts.slice(-2).join(' ');
      } else {
        correctAnswer = exercise.correctAnswer;
      }
      isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    }

    // Messages de félicitations variés
    const successMessages = ["Excellent !", "Bravo !", "Parfait !", "Super !", "Magnifique !", "Fantastique !", "Génial !", "Formidable !", "C'est ça !", "Bien joué !", "Tu as réussi !", "Chapeau !", "Exactement !", "Tu es fort(e) !", "Continue comme ça !"];
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
    setShowFeedbackModal(true);

    // Jouer le son
    playSound(isCorrect);

    // Si correct, passer à l'exercice suivant automatiquement après 2.4 secondes
    if (isCorrect) {
      setTimeout(() => {
        setShowFeedbackModal(false);
        handleNext();
      }, 2400);
    }
  };
  const handleTryAgain = () => {
    console.log("handleTryAgain called - resetting state");
    setUserAnswer("");
    setFeedback({
      type: null,
      message: ""
    });
    setIsAnswered(false);
    setIsCorrect(false);
    setShowFeedbackModal(false);
  };
  const handleNext = () => {
    console.log("handleNext called - moving to next exercise");
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer("");
      setFeedback({
        type: null,
        message: ""
      });
      setIsAnswered(false);
      setIsCorrect(false);
      setShowFeedbackModal(false);
    } else {
      onComplete(Math.round(score.correct / score.total * 100));
    }
  };
  const renderExercise = () => {
    const commonProps = {
      exercise,
      userAnswer,
      setUserAnswer,
      isAnswered,
      isCorrect,
      onKeyPress: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isAnswered && userAnswer.trim()) {
          handleVerify();
        } else if (e.key === 'Enter' && isAnswered) {
          handleNext();
        }
      }
    };

    // Pour l'escape game virtuel, on force le choix multiple en niveau facile
    if (scenarioTitle === "Escape game virtuel" && difficulty === 1) {
      return <MultipleChoiceExercise {...commonProps} />;
    }
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
  return <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" onClick={onBack} className="border-primary text-primary hover:bg-primary/10">
          ← Retour
        </Button>
        <h2 className="font-bold text-ouaip-dark-blue text-2xl text-white">
          {scenarioTitle}
        </h2>
        <Button variant="outline" onClick={() => setShowHelp(true)} className="border-warning text-warning hover:bg-warning/10">
          💡 Aide
        </Button>
      </div>

      {/* Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Phrase {currentExercise + 1} sur {exercises.length}
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

      {/* Actions */}
      <div className="text-center">
        {!isAnswered ? <Button onClick={handleVerify} className="ouaip-button-primary px-8 py-3" disabled={!userAnswer.trim()}>
            Vérifier
          </Button> : <Button onClick={handleNext} className="ouaip-button-success px-8 py-3">
            {currentExercise < exercises.length - 1 ? 'Suivant' : 'Terminer'}
          </Button>}
      </div>

      {/* Modal de feedback */}
      <Dialog open={showFeedbackModal} onOpenChange={setShowFeedbackModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center">
              {isCorrect && <img src="/lovable-uploads/1ddd325c-cd8d-49cd-9320-443c846a5870.png" alt="Succès" className="w-16 h-16 mb-3" />}
              <DialogTitle className={`text-center text-xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {feedback.message}
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="text-center mt-4 space-x-3">
            {isCorrect ? <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {currentExercise < exercises.length - 1 ? 'Passage à l\'exercice suivant...' : 'Analyse des résultats...'}
                </p>
                <div className="w-8 h-8 mx-auto border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              </div> : <>
                <Button onClick={handleTryAgain} className="ouaip-button-primary">
                  Réessayer
                </Button>
                <Button onClick={() => {
              setShowFeedbackModal(false);
              handleNext();
            }} variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Passer
                </Button>
              </>}
          </div>
        </DialogContent>
      </Dialog>

      {/* Help Panel */}
      <HelpPanel isOpen={showHelp} onClose={() => setShowHelp(false)} scenarioId={1} />
    </div>;
};
export default ExerciseScreen;