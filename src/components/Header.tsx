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
          <a 
            href="https://ouaip.be/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl hover:bg-primary/90 transition-colors"
          >
            Ouaip
          </a>
          {showBackButton && <Button variant="outline" onClick={onBackToHome} className="border-primary text-primary hover:bg-primary/10">
              ← Accueil
            </Button>}
        </div>
        <h1 className="text-2xl font-bold text-ouaip-dark-blue">Atelier d'entrainement sur le passé composé</h1>
      </div>
    </header>;
};
export default Header;