import { Button } from "@/components/ui/button";

interface ScenarioCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  onSelect: (id: number) => void;
}

const ScenarioCard = ({ id, title, description, icon, color, onSelect }: ScenarioCardProps) => {
  // Taille spéciale pour la vignette de révision
  const isRevisionCard = id === 0;
  const iconSize = isRevisionCard ? "w-24 h-24" : "w-16 h-16";
  const textSize = isRevisionCard ? "text-4xl" : "text-2xl";
  
  return (
    <div className="ouaip-card p-6 h-full flex flex-col">
      <div className={`${iconSize} rounded-lg flex items-center justify-center ${textSize} mb-4 mx-auto ${color}`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold text-ouaip-dark-blue mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-lg text-muted-foreground flex-grow mb-6 text-center">
        {description}
      </p>
      
      <Button 
        onClick={() => onSelect(id)}
        className="ouaip-button-primary w-full"
      >
        Commencer
      </Button>
    </div>
  );
};

export default ScenarioCard;