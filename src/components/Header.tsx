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
      <div className="w-full flex items-center justify-between gap-2 px-16">
        <div className="flex items-center gap-2 sm:gap-4">
          {showBackButton && <Button variant="outline" onClick={onBackToHome} className="!border-2 !border-white !text-white hover:!bg-white/20 !bg-white/10 text-xs sm:text-sm px-2 sm:px-4" title="Retour à l'accueil">
              <span className="hidden sm:inline">← Accueil</span>
              <span className="sm:hidden">←</span>
            </Button>}
        </div>
        <div className="flex-1"></div>
        <Button variant="outline" onClick={toggleFullscreen} className="border-2 border-white text-white hover:bg-white/20 bg-white/10 text-xs sm:text-sm px-2 sm:px-4" title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}>
          {isFullscreen ? <Minimize size={16} className="sm:w-5 sm:h-5" /> : <Maximize size={16} className="sm:w-5 sm:h-5" />}
          <span className="ml-1 sm:ml-2 hidden md:inline">Plein écran</span>
        </Button>
      </div>
    </header>;
};
export default Header;