import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
  scenarioId: number;
}

const HelpPanel = ({ isOpen, onClose, scenarioId }: HelpPanelProps) => {
  const auxiliaryRules = [
    {
      auxiliary: "AVOIR",
      icon: "🔧",
      description: "La plupart des verbes",
      examples: ["j'ai mangé", "tu as couru", "il a écrit"]
    },
    {
      auxiliary: "ÊTRE",
      icon: "🚶",
      description: "Verbes de mouvement et d'état",
      examples: ["je suis allé(e)", "tu es parti(e)", "elle est née"]
    }
  ];

  const accordRules = [
    {
      rule: "Avec ÊTRE",
      description: "Le participe s'accorde avec le sujet",
      example: "Marie est partie / Les filles sont arrivées"
    },
    {
      rule: "Avec AVOIR",
      description: "Pas d'accord sauf COD placé avant",
      example: "J'ai vu Marie / Je l'ai vue"
    }
  ];

  const negationTips = [
    "ne ... pas encore",
    "ne ... jamais", 
    "ne ... plus",
    "ne ... rien"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-ouaip-dark-blue">
            💡 Aide - Passé Composé
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Auxiliaires */}
          <div>
            <h3 className="text-lg font-semibold text-ouaip-dark-blue mb-3">
              📝 Choix de l'auxiliaire
            </h3>
            <div className="grid gap-3">
              {auxiliaryRules.map((rule, index) => (
                <div key={index} className="ouaip-card p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{rule.icon}</span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {rule.auxiliary}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {rule.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {rule.examples.map((ex, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accords */}
          <div>
            <h3 className="text-lg font-semibold text-ouaip-dark-blue mb-3">
              🎯 Règles d'accord
            </h3>
            <div className="space-y-3">
              {accordRules.map((rule, index) => (
                <div key={index} className="ouaip-card p-4">
                  <h4 className="font-semibold text-success mb-1">
                    {rule.rule}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {rule.description}
                  </p>
                  <p className="text-sm bg-success/10 text-success px-2 py-1 rounded">
                    Exemple: {rule.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Orthographe des participes passés */}
          <div>
            <h3 className="text-lg font-semibold text-ouaip-dark-blue mb-3">
              ✍️ Orthographe des participes passés
            </h3>
            <div className="ouaip-card p-4">
              <p className="text-sm text-muted-foreground mb-3">
                Astuce pour bien écrire le participe passé :
              </p>
              <div className="bg-info/10 text-info px-4 py-3 rounded mb-3">
                <p className="font-semibold mb-2">📝 Le participe s'écrit comme on l'entend</p>
                <p className="text-sm mb-2">
                  Pour vérifier la dernière lettre, mettez "une chose..." devant
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-primary/10 text-primary px-3 py-2 rounded text-sm">
                  <strong>Il a fait</strong> → Une chose <strong>faite</strong> → dernière lettre "t"
                </div>
                <div className="bg-primary/10 text-primary px-3 py-2 rounded text-sm">
                  <strong>Elle a pris</strong> → Une chose <strong>prise</strong> → dernière lettre "s"
                </div>
                <div className="bg-primary/10 text-primary px-3 py-2 rounded text-sm">
                  <strong>Nous avons dit</strong> → Une chose <strong>dite</strong> → dernière lettre "t"
                </div>
              </div>
            </div>
          </div>

          {/* Négation */}
          <div>
            <h3 className="text-lg font-semibold text-ouaip-dark-blue mb-3">
              ❌ Forme négative
            </h3>
            <div className="ouaip-card p-4">
              <p className="text-sm text-muted-foreground mb-3">
                La négation encadre l'auxiliaire :
              </p>
              <div className="grid grid-cols-2 gap-2">
                {negationTips.map((tip, index) => (
                  <span key={index} className="bg-warning/10 text-warning px-3 py-2 rounded text-sm text-center">
                    {tip}
                  </span>
                ))}
              </div>
              <p className="text-sm bg-warning/10 text-warning px-2 py-1 rounded mt-3">
                Exemple: Je n'ai pas encore mangé
              </p>
            </div>
          </div>

          {/* Bouton fermer */}
          <div className="text-center pt-4">
            <Button 
              onClick={onClose}
              className="ouaip-button-primary"
            >
              Fermer l'aide
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpPanel;