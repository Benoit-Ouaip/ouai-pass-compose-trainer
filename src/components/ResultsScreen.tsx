import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

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
    if (score >= 80) return "Tu maîtrises le passé composé !";
    if (score >= 60) return "Tu es sur la bonne voie, continue comme ça !";
    return "Continue à t'entraîner, tu progresses !";
  };

  // Effet de confettis et son au chargement
  useEffect(() => {
    // Confettis
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Son d'applaudissements joyeux - créé avec Web Audio API
    const createApplauseSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Créer plusieurs oscillateurs pour simuler des applaudissements
      const createClap = (delay: number, frequency: number, volume: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configuration pour un son de claquement
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + delay);
        
        // Filtre passe-haut pour donner un son plus claquant
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(800, audioContext.currentTime + delay);
        
        // Enveloppe rapide pour simuler un claquement
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + delay + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.1);
        
        oscillator.start(audioContext.currentTime + delay);
        oscillator.stop(audioContext.currentTime + delay + 0.1);
      };
      
      // Créer une série d'applaudissements avec des variations
      for (let i = 0; i < 15; i++) {
        const delay = i * 0.08 + Math.random() * 0.04;
        const frequency = 1000 + Math.random() * 2000;
        const volume = 0.1 + Math.random() * 0.1;
        createClap(delay, frequency, volume);
      }
      
      // Ajouter une mélodie joyeuse par-dessus
      const melodyNotes = [523.25, 659.25, 783.99, 1046.5]; // Do, Mi, Sol, Do octave
      melodyNotes.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.2 + 0.5);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + index * 0.2 + 0.5);
        gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + index * 0.2 + 0.55);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + index * 0.2 + 0.8);
        
        oscillator.start(audioContext.currentTime + index * 0.2 + 0.5);
        oscillator.stop(audioContext.currentTime + index * 0.2 + 0.8);
      });
    };
    
    setTimeout(() => {
      createApplauseSound();
    }, 500);

  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="ouaip-card p-8 mb-6">
        {/* Badge */}
        <div className="mb-6">
          <div className="mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/7506fbef-dc4c-410c-b53f-bbcdbff9cb3e.png" 
              alt="Logo Ouaip" 
              className="w-48 h-24 object-contain"
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