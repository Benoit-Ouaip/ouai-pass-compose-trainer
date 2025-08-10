import { Button } from "@/components/ui/button";

interface DifficultySelectorProps {
  selectedDifficulty: number;
  onDifficultyChange: (difficulty: number) => void;
  onStart: () => void;
  scenarioTitle: string;
}

const DifficultySelector = ({ 
  selectedDifficulty, 
  onDifficultyChange, 
  onStart, 
  scenarioTitle 
}: DifficultySelectorProps) => {
  const difficulties = [
    {
      level: 1,
      stars: "★",
      title: "Facile",
      description: "Choisis parmi 3 réponses proposées"
    },
    {
      level: 2,
      stars: "★★",
      title: "Moyen",
      description: "Écris l'auxiliaire et le participe passé"
    },
    {
      level: 3,
      stars: "★★★",
      title: "Difficile",
      description: "Écris l'auxiliaire et le participe passé"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-white shadow-lg">
        <h2 className="text-4xl font-bold text-ouaip-dark-blue mb-4">
          {scenarioTitle}
        </h2>
        <p className="text-xl text-gray-700">
          Choisissez votre niveau de difficulté
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        {difficulties.map((diff) => (
          <div
            key={diff.level}
            className={`bg-white/90 backdrop-blur-sm border-2 border-white rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-lg ${
              selectedDifficulty === diff.level 
                ? 'border-ouaip-dark-blue bg-white shadow-xl scale-105' 
                : 'hover:border-ouaip-dark-blue/50 hover:shadow-xl hover:scale-102'
            }`}
            onClick={() => onDifficultyChange(diff.level)}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-warning">
                {diff.stars}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-ouaip-dark-blue mb-1">
                  {diff.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {diff.description}
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedDifficulty === diff.level
                  ? 'bg-ouaip-dark-blue border-ouaip-dark-blue'
                  : 'border-ouaip-dark-blue/30'
              }`}>
                {selectedDifficulty === diff.level && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-white shadow-lg">
        <Button 
          onClick={onStart}
          className="bg-ouaip-dark-blue hover:bg-ouaip-dark-blue/90 text-white text-xl px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          disabled={!selectedDifficulty}
        >
          Commencer l'exercice
        </Button>
      </div>
    </div>
  );
};

export default DifficultySelector;