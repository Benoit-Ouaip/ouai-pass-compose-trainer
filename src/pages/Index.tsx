import { useState } from "react";
import Header from "@/components/Header";
import ScenarioCard from "@/components/ScenarioCard";
import DifficultySelector from "@/components/DifficultySelector";
import ExerciseScreen from "@/components/ExerciseScreen";
import ResultsScreen from "@/components/ResultsScreen";
import { scenarios, infoCard } from "@/data/scenarios";
import InfoCard from "@/components/InfoCard";
import BackgroundPreloader from "@/components/BackgroundPreloader";
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
  return <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: gameState === 'home' ? `url('/lovable-uploads/189513c8-c4b7-4617-b924-c40123e226d9.png')` : `url('/lovable-uploads/189513c8-c4b7-4617-b924-c40123e226d9.png')`}}>
      <BackgroundPreloader />
      {gameState !== 'home' && <Header onBackToHome={handleBackToHome} showBackButton={true} />}
      
      <main className="w-full py-4 px-4">
        {gameState === 'home' && <div className="mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/4dc33fb2-4505-4f21-910a-ec986970c3f2.png" 
                  alt="Aventures au passé composé" 
                  className="h-48 sm:h-64 w-auto border-4 border-white rounded-3xl"
                />
              </div>
              <h2 className="text-4xl font-bold text-ouaip-dark-blue mb-4">Choisis ton aventure !</h2>
              <p className="text-xl text-muted-foreground">Maitrise le passé composé en t'amusant !</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 w-full">
              {scenarios.map(scenario => <div key={scenario.id} className="fade-in">
                  <ScenarioCard id={scenario.id} title={scenario.title} description={scenario.description} icon={scenario.icon} color={scenario.color} onSelect={handleScenarioSelect} />
                </div>)}
              <div className="fade-in">
                <InfoCard title={infoCard.title} message={infoCard.message} logo={infoCard.logo} color={infoCard.color} />
              </div>
            </div>
          </div>}

        {gameState === 'difficulty' && currentScenario && <div className="fade-in">
            <DifficultySelector selectedDifficulty={selectedDifficulty} onDifficultyChange={handleDifficultySelect} onStart={handleStartExercise} scenarioTitle={currentScenario.title} />
          </div>}

        {gameState === 'exercise' && currentScenario && <div className="fade-in">
            <ExerciseScreen exercises={getExercises()} scenarioTitle={currentScenario.title} difficulty={selectedDifficulty} onComplete={handleExerciseComplete} onBack={handleBackToDifficulty} />
          </div>}

        {gameState === 'results' && currentScenario && <div className="fade-in">
            <ResultsScreen score={finalScore} scenarioTitle={currentScenario.title} onReplay={handleReplay} onBackToHome={handleBackToHome} />
          </div>}
      </main>
    </div>;
};
export default Index;