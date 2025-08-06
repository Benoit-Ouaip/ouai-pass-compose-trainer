import { Button } from "@/components/ui/button";
interface HeaderProps {
  onBackToHome?: () => void;
  showBackButton?: boolean;
}
const Header = ({
  onBackToHome,
  showBackButton = false
}: HeaderProps) => {
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
      </div>
    </header>;
};
export default Header;