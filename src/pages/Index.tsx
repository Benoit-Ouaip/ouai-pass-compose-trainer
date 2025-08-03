import { useState } from "react";
import Header from "@/components/Header";
import ScenarioCard from "@/components/ScenarioCard";
import DifficultySelector from "@/components/DifficultySelector";
import ExerciseScreen from "@/components/ExerciseScreen";
import ResultsScreen from "@/components/ResultsScreen";
import { scenarios } from "@/data/scenarios";

type GameState = 'home' | 'difficulty' | 'exercise' | 'results';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [selectedScenario, setSelectedScenario] = useState<number>(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(1);
  const [finalScore, setFinalScore] = useState<number>(0);

  const currentScenario = scenarios.find(s => s.id === selectedScenario);

  const handleScenarioSelect = (scenarioId: number) => {
    setSelectedScenario(scenarioId);
    setGameState('difficulty');
  };

  const handleDifficultySelect = (difficulty: number) => {
    setSelectedDifficulty(difficulty);
  };

  const handleStartExercise = () => {
    setGameState('exercise');
  };

  const handleExerciseComplete = (score: number) => {
    setFinalScore(score);
    setGameState('results');
  };

  const handleBackToHome = () => {
    setGameState('home');
    setSelectedDifficulty(1);
  };

  const handleReplay = () => {
    setGameState('difficulty');
  };

  const handleBackToDifficulty = () => {
    setGameState('difficulty');
  };

  const getExercises = () => {
    if (!currentScenario) return [];
    
    const startIndex = (selectedDifficulty - 1) * 10;
    const endIndex = startIndex + 10;
    return currentScenario.exercises.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Header 
        onBackToHome={gameState !== 'home' ? handleBackToHome : undefined}
        showBackButton={gameState !== 'home'}
      />
      
      <main className="container mx-auto py-8">
        {gameState === 'home' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ouaip-dark-blue mb-4">
                Choisissez votre aventure
              </h2>
              <p className="text-xl text-muted-foreground">
                Maîtrisez le passé composé en vous amusant !
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenarios.map((scenario) => (
                <div key={scenario.id} className="fade-in">
                  <ScenarioCard
                    id={scenario.id}
                    title={scenario.title}
                    description={scenario.description}
                    icon={scenario.icon}
                    color={scenario.color}
                    onSelect={handleScenarioSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {gameState === 'difficulty' && currentScenario && (
          <div className="fade-in">
            <DifficultySelector
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={handleDifficultySelect}
              onStart={handleStartExercise}
              scenarioTitle={currentScenario.title}
            />
          </div>
        )}

        {gameState === 'exercise' && currentScenario && (
          <div className="fade-in">
            <ExerciseScreen
              exercises={getExercises()}
              scenarioTitle={currentScenario.title}
              difficulty={selectedDifficulty}
              onComplete={handleExerciseComplete}
              onBack={handleBackToDifficulty}
            />
          </div>
        )}

        {gameState === 'results' && currentScenario && (
          <div className="fade-in">
            <ResultsScreen
              score={finalScore}
              scenarioTitle={currentScenario.title}
              onReplay={handleReplay}
              onBackToHome={handleBackToHome}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
