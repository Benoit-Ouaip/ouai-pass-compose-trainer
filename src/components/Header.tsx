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

  return <header className="w-full border-b-2 border-primary p-4 shadow-sm bg-[#e2de55]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://ouaip.be/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/b5e828fb-5d4a-48b1-aa05-4d3a09ec8468.png" alt="OUAIP Logo" className="h-12 w-auto" />
          </a>
          {showBackButton && <Button variant="outline" onClick={onBackToHome} className="border-primary text-primary hover:bg-primary/10">
              ← Accueil
            </Button>}
        </div>
        <h1 className="text-2xl font-bold text-ouaip-dark-blue text-white">Entrainement sur le passé composé</h1>
        <Button 
          variant="outline" 
          onClick={toggleFullscreen}
          className="border-white text-white hover:bg-white/10"
          title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          <span className="ml-2 hidden sm:inline">Plein écran</span>
        </Button>
      </div>
    </header>;
};
export default Header;