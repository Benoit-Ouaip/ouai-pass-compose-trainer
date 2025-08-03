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
  return (
    <div className="ouaip-card p-6 h-full flex flex-col">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-4 ${color}`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-ouaip-dark-blue mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground flex-grow mb-6">
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