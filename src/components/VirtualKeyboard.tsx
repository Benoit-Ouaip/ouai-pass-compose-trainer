import { Button } from "@/components/ui/button";
import { Delete, Check } from "lucide-react";

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const VirtualKeyboard = ({ onKeyPress, onBackspace, onSubmit, disabled }: VirtualKeyboardProps) => {
  const letters = [
    ['a', 'à', 'á', 'â', 'ä', 'ã'],
    ['e', 'è', 'é', 'ê', 'ë'],
    ['i', 'î', 'ï'],
    ['o', 'ô', 'ö'],
    ['u', 'ù', 'ú', 'û', 'ü'],
    ['c', 'ç'],
    ['n', 'ñ']
  ];

  const consonants = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  return (
    <div className="bg-white border-2 border-primary/30 rounded-xl p-4 shadow-lg max-w-2xl mx-auto">
      <div className="space-y-3">
        {/* Voyelles avec accents */}
        {letters.map((vowelGroup, groupIndex) => (
          <div key={groupIndex} className="flex flex-wrap justify-center gap-1">
            {vowelGroup.map((letter) => (
              <Button
                key={letter}
                variant="outline"
                size="sm"
                className="w-10 h-10 text-lg font-medium hover:bg-primary/10 border-2 border-primary/20"
                onClick={() => onKeyPress(letter)}
                disabled={disabled}
              >
                {letter}
              </Button>
            ))}
          </div>
        ))}

        {/* Consonnes */}
        <div className="flex flex-wrap justify-center gap-1">
          {consonants.map((letter) => (
            <Button
              key={letter}
              variant="outline"
              size="sm"
              className="w-10 h-10 text-lg font-medium hover:bg-primary/10 border-2 border-primary/20"
              onClick={() => onKeyPress(letter)}
              disabled={disabled}
            >
              {letter}
            </Button>
          ))}
        </div>

        {/* Espace et ponctuation */}
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            className="px-8 h-10 text-sm font-medium hover:bg-primary/10 border-2 border-primary/20"
            onClick={() => onKeyPress(' ')}
            disabled={disabled}
          >
            Espace
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 text-lg font-medium hover:bg-primary/10 border-2 border-primary/20"
            onClick={() => onKeyPress("'")}
            disabled={disabled}
          >
            '
          </Button>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-2">
          <Button
            variant="outline"
            onClick={onBackspace}
            disabled={disabled}
            className="flex items-center gap-2 px-4 h-12 hover:bg-red-50 border-2 border-red-200"
          >
            <Delete className="w-4 h-4" />
            Effacer
          </Button>
          <Button
            onClick={onSubmit}
            disabled={disabled}
            className="flex items-center gap-2 px-6 h-12 bg-green-600 hover:bg-green-700 text-white"
          >
            <Check className="w-4 h-4" />
            Valider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;