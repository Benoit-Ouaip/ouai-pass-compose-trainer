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
      description: "Verbe surligné, choix entre 2 auxiliaires pré-proposés"
    },
    {
      level: 2,
      stars: "★★",
      title: "Moyen",
      description: "Verbe donné à l'infinitif, auxiliaire masqué"
    },
    {
      level: 3,
      stars: "★★★",
      title: "Difficile",
      description: "Verbe à deviner (contexte) + ponctuation/négation à gérer"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-ouaip-dark-blue mb-4">
          {scenarioTitle}
        </h2>
        <p className="text-lg text-muted-foreground">
          Choisissez votre niveau de difficulté
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        {difficulties.map((diff) => (
          <div
            key={diff.level}
            className={`ouaip-card p-6 cursor-pointer transition-all duration-300 ${
              selectedDifficulty === diff.level 
                ? 'border-primary bg-primary/5 shadow-md' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => onDifficultyChange(diff.level)}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-warning">
                {diff.stars}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-ouaip-dark-blue mb-1">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground">
                  {diff.description}
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedDifficulty === diff.level
                  ? 'bg-primary border-primary'
                  : 'border-primary/30'
              }`}>
                {selectedDifficulty === diff.level && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={onStart}
          className="ouaip-button-primary text-lg px-8 py-4"
          disabled={!selectedDifficulty}
        >
          Commencer l'exercice
        </Button>
      </div>
    </div>
  );
};

export default DifficultySelector;