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
            <svg 
              width="240" 
              height="120" 
              viewBox="0 0 240 120" 
              className="mx-auto"
            >
              {/* Couronne */}
              <path d="M180 15 L190 5 L200 15 L210 8 L220 18 L210 25 L200 20 L190 25 L180 15 Z" fill="#e2de55"/>
              <ellipse cx="195" cy="25" rx="20" ry="8" fill="#d4cc3f"/>
              <circle cx="185" cy="22" r="2" fill="white"/>
              <circle cx="195" cy="20" r="2" fill="white"/>
              <circle cx="205" cy="22" r="2" fill="white"/>
              
              {/* Lettres OUAIP */}
              {/* O */}
              <ellipse cx="30" cy="60" rx="25" ry="30" fill="#5cb3cc"/>
              <ellipse cx="30" cy="60" rx="12" ry="18" fill="white"/>
              
              {/* U */}
              <rect x="70" y="35" width="12" height="40" fill="#7cb342"/>
              <rect x="98" y="35" width="12" height="40" fill="#7cb342"/>
              <path d="M70 75 Q85 85 110 75" stroke="#7cb342" stroke-width="12" fill="none"/>
              
              {/* A */}
              <path d="M130 75 L145 35 L160 75 Z" fill="#e55555"/>
              <rect x="138" y="55" width="14" height="6" fill="white"/>
              
              {/* I */}
              <rect x="175" y="35" width="12" height="40" fill="#4285f4"/>
              
              {/* P avec couronne */}
              <rect x="195" y="35" width="12" height="40" fill="#e2de55"/>
              <rect x="195" y="35" width="25" height="12" fill="#e2de55"/>
              <rect x="195" y="47" width="20" height="8" fill="#e2de55"/>
            </svg>
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