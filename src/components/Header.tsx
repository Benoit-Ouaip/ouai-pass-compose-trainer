import { Button } from "@/components/ui/button";
import { Maximize, Minimize } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onBackToHome?: () => void;
  showBackButton?: boolean;
}

const Header = ({
  onBackToHome,
  showBackButton = false
}: HeaderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      console.log('Fullscreen state changed:', isCurrentlyFullscreen);
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    console.log('Toggle fullscreen clicked, current state:', isFullscreen);
    
    try {
      if (!document.fullscreenElement) {
        console.log('Requesting fullscreen...');
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).mozRequestFullScreen) {
          await (document.documentElement as any).mozRequestFullScreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          await (document.documentElement as any).msRequestFullscreen();
        } else {
          console.error('Fullscreen API not supported');
          alert('Votre navigateur ne supporte pas le mode plein écran');
        }
      } else {
        console.log('Exiting fullscreen...');
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (error) {
      console.error('Erreur lors du changement de mode plein écran:', error);
      alert('Impossible de changer le mode plein écran. Cela peut être dû aux restrictions du navigateur.');
    }
  };

  return <header className="w-full border-b-2 border-primary p-2 sm:p-4 shadow-sm bg-primary">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://ouaip.be/" target="_blank" rel="noopener noreferrer" className="bg-white p-1 sm:p-2 rounded-lg hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/b5e828fb-5d4a-48b1-aa05-4d3a09ec8468.png" alt="OUAIP Logo" className="h-8 sm:h-12 w-auto" />
          </a>
          {showBackButton && <Button 
              variant="outline" 
              onClick={onBackToHome} 
              className="border-2 border-[#e55555] text-[#e55555] bg-white/90 hover:bg-[#e55555] hover:text-white active:scale-95 transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 h-10 sm:h-16 flex items-center justify-center"
            >
              <span className="hidden sm:inline">← Accueil</span>
              <span className="sm:hidden">←</span>
            </Button>}
        </div>
        <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-white text-center flex-1 mx-2">
          <span className="hidden sm:inline">Entrainement sur le passé composé</span>
          <span className="sm:hidden">Passé composé</span>
        </h1>
        <Button 
          variant="outline" 
          onClick={toggleFullscreen}
          className="border-white text-white hover:bg-white/20 bg-white/10 text-xs sm:text-sm px-2 sm:px-4"
          title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
        >
          {isFullscreen ? <Minimize size={16} className="sm:w-5 sm:h-5" /> : <Maximize size={16} className="sm:w-5 sm:h-5" />}
          <span className="ml-1 sm:ml-2 hidden md:inline">Plein écran</span>
        </Button>
      </div>
    </header>;
};

export default Header;
