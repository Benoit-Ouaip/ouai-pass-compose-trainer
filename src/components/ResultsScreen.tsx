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
    if (score >= 70) return { type: "argent", emoji: "🥈", title: "Très bien !" };
    if (score >= 60) return { type: "bronze", emoji: "🥉", title: "Bien joué !" };
    return { type: "effort", emoji: "💪", title: "Il va falloir s'améliorer !" };
  };

  const badge = getBadge();

  const getScoreColor = () => {
    if (score >= 80) return "text-warning";
    if (score >= 70) return "text-success";
    if (score >= 60) return "text-primary";
    return "text-error";
  };

  const getEncouragement = () => {
    if (score >= 80) return "Tu maîtrises le passé composé !";
    if (score >= 70) return "Tu es sur la bonne voie, continue comme ça !";
    if (score >= 60) return "Continue à t'entraîner, tu progresses !";
    return "Ne te décourage pas, la persévérance est la clé du succès !";
  };

  // Effet de confettis/pluie et son au chargement
  useEffect(() => {
    if (score >= 70) {
      // Confettis pour les bons scores
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

      // Son d'applaudissements joyeux
      const createApplauseSound = () => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        const createClap = (delay: number, frequency: number, volume: number) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          const filter = audioContext.createBiquadFilter();
          
          oscillator.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.type = 'sawtooth';
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + delay);
          
          filter.type = 'highpass';
          filter.frequency.setValueAtTime(800, audioContext.currentTime + delay);
          
          gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
          gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + delay + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.1);
          
          oscillator.start(audioContext.currentTime + delay);
          oscillator.stop(audioContext.currentTime + delay + 0.1);
        };
        
        for (let i = 0; i < 15; i++) {
          const delay = i * 0.08 + Math.random() * 0.04;
          const frequency = 1000 + Math.random() * 2000;
          const volume = 0.1 + Math.random() * 0.1;
          createClap(delay, frequency, volume);
        }
        
        const melodyNotes = [523.25, 659.25, 783.99, 1046.5];
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
    } else {
      // Animation de pluie pour les scores insuffisants
      const duration = 4000;
      const end = Date.now() + duration;

      (function frame() {
        // Créer des gouttes de pluie (particules bleues qui tombent)
        confetti({
          particleCount: 2,
          angle: 90,
          spread: 10,
          origin: { x: Math.random(), y: 0 },
          colors: ['#3B82F6', '#1E40AF', '#60A5FA'],
          gravity: 1.5,
          scalar: 0.6,
          drift: 0
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

      // Son de pluie
      const createRainSound = () => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Créer un bruit blanc filtré pour simuler la pluie
        const bufferSize = audioContext.sampleRate * 2;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        
        const whiteNoise = audioContext.createBufferSource();
        whiteNoise.buffer = buffer;
        whiteNoise.loop = true;
        
        const bandpass = audioContext.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 1000;
        
        const lowpass = audioContext.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 3000;
        
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.1;
        
        whiteNoise.connect(bandpass);
        bandpass.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        whiteNoise.start();
        
        setTimeout(() => {
          whiteNoise.stop();
        }, 3000);
      };
      
      setTimeout(() => {
        createRainSound();
      }, 300);
    }
  }, [score]);

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
          <div className={`px-4 py-2 rounded-lg inline-block ${
            score >= 70 ? 'bg-warning/20 text-warning' : 'bg-error/20 text-error'
          }`}>
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
        <div className={`p-4 rounded-lg mb-6 ${
          score >= 70 ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'
        }`}>
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