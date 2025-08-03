import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import HelpPanel from "./HelpPanel";

interface Exercise {
  id: number;
  context: string;
  sentence: string;
  correctAnswer: string;
  explanation: string;
  verb: string;
  infinitive: string;
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

  const exercise = exercises[currentExercise];
  const progress = ((currentExercise + 1) / exercises.length) * 100;

  const handleVerify = () => {
    if (!userAnswer.trim()) return;

    const isCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase();
    
    setFeedback({
      type: isCorrect ? 'success' : 'error',
      message: isCorrect ? "Excellent !" : exercise.explanation
    });
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer("");
      setFeedback({type: null, message: ""});
      setIsAnswered(false);
    } else {
      onComplete(Math.round((score.correct / score.total) * 100));
    }
  };

  const renderSentence = () => {
    const parts = exercise.sentence.split('_____');
    return (
      <div className="text-xl text-center">
        {parts[0]}
        <Input
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="ouaip-input inline-block mx-2 w-40 text-center"
          placeholder="..."
          disabled={isAnswered}
          onKeyPress={(e) => e.key === 'Enter' && !isAnswered && handleVerify()}
        />
        {parts[1]}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-primary text-primary hover:bg-primary/10"
        >
          ← Retour
        </Button>
        <h2 className="text-2xl font-bold text-ouaip-dark-blue">
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
      <div className="mb-8">
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
      <div className="ouaip-card p-8 mb-6">
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground italic">
            {exercise.context}
          </p>
          
          {renderSentence()}
          
          {difficulty === 1 && (
            <p className="text-sm text-muted-foreground">
              Infinitif: {exercise.infinitive}
            </p>
          )}
        </div>
      </div>

      {/* Feedback */}
      {feedback.type && (
        <div className={`ouaip-card p-4 mb-6 border-2 fade-in ${
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
      <div className="text-center space-x-4">
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