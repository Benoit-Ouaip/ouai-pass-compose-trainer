import { Button } from "@/components/ui/button";

interface ResultsScreenProps {
  score: number;
  scenarioTitle: string;
  onReplay: () => void;
  onBackToHome: () => void;
}

const ResultsScreen = ({ score, scenarioTitle, onReplay, onBackToHome }: ResultsScreenProps) => {
  const getBadge = () => {
    if (score >= 80) return { type: "or", emoji: "🥇", title: "Excellent !" };
    if (score >= 60) return { type: "argent", emoji: "🥈", title: "Très bien !" };
    return { type: "bronze", emoji: "🥉", title: "Bien joué !" };
  };

  const badge = getBadge();

  const getScoreColor = () => {
    if (score >= 80) return "text-warning";
    if (score >= 60) return "text-success";
    return "text-primary";
  };

  const getEncouragement = () => {
    if (score >= 80) return "Tu maîtrises parfaitement le passé composé !";
    if (score >= 60) return "Tu es sur la bonne voie, continue comme ça !";
    return "Continue à t'entraîner, tu progresses !";
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="ouaip-card p-8 mb-6">
        {/* Badge */}
        <div className="mb-6">
          <div className="mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/ouaip-logo-transparent.png" 
              alt="Logo Ouaip" 
              className="w-60 h-60 object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-ouaip-dark-blue mb-2">
            {badge.title}
          </h2>
          <div className="bg-warning/20 text-warning px-4 py-2 rounded-lg inline-block">
            Badge {badge.type}
          </div>
        </div>

        {/* Score */}
        <div className="mb-6">
          <div className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>
            {score}%
          </div>
          <p className="text-xl text-muted-foreground">
            Score pour "{scenarioTitle}"
          </p>
        </div>

        {/* Encouragement */}
        <div className="bg-primary/10 text-primary p-4 rounded-lg mb-6">
          <p className="text-lg font-medium">
            {getEncouragement()}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-success/10 p-3 rounded-lg">
            <div className="text-2xl font-bold text-success">{Math.round(score/10)}</div>
            <div className="text-sm text-muted-foreground">Bonnes réponses</div>
          </div>
          <div className="bg-error/10 p-3 rounded-lg">
            <div className="text-2xl font-bold text-error">{10 - Math.round(score/10)}</div>
            <div className="text-sm text-muted-foreground">Erreurs</div>
          </div>
          <div className="bg-warning/10 p-3 rounded-lg">
            <div className="text-2xl font-bold text-warning">10</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <Button 
          onClick={onReplay}
          className="ouaip-button-primary w-full text-lg py-3"
        >
          🔄 Rejouer ce scénario
        </Button>
        
        <Button 
          onClick={onBackToHome}
          variant="outline"
          className="w-full text-lg py-3 border-primary text-primary hover:bg-primary/10"
        >
          🏠 Changer de scénario
        </Button>
      </div>
    </div>
  );
};

export default ResultsScreen;