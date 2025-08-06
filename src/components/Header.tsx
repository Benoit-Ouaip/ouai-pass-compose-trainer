
import { Button } from "@/components/ui/button";
import { Maximize, Minimize } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onBackToHome?: () => void;
  showBackButton?: boolean;
}

const Header = ({
  onBackToHome,
  showBackButton = false
}: HeaderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return <header className="w-full border-b-2 border-primary p-2 sm:p-4 shadow-sm bg-primary">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://ouaip.be/" target="_blank" rel="noopener noreferrer" className="bg-white p-1 sm:p-2 rounded-lg hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/b5e828fb-5d4a-48b1-aa05-4d3a09ec8468.png" alt="OUAIP Logo" className="h-8 sm:h-12 w-auto" />
          </a>
          {showBackButton && <Button variant="outline" onClick={onBackToHome} className="border-white text-white hover:bg-white/20 text-xs sm:text-sm px-2 sm:px-4">
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
