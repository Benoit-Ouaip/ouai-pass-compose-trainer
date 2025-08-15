import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';

interface ConjugationForm {
  id: string;
  form: string;
  verb: 'avoir' | 'être';
}

interface DragDropConjugationExerciseProps {
  onComplete: (score: number) => void;
  onBack: () => void;
}

const conjugationForms: ConjugationForm[] = [
  { id: '1', form: "j'ai", verb: 'avoir' },
  { id: '2', form: "tu as", verb: 'avoir' },
  { id: '3', form: "il a", verb: 'avoir' },
  { id: '4', form: "nous avons", verb: 'avoir' },
  { id: '5', form: "vous avez", verb: 'avoir' },
  { id: '6', form: "ils ont", verb: 'avoir' },
  { id: '7', form: "je suis", verb: 'être' },
  { id: '8', form: "tu es", verb: 'être' },
  { id: '9', form: "il est", verb: 'être' },
  { id: '10', form: "nous sommes", verb: 'être' },
  { id: '11', form: "vous êtes", verb: 'être' },
  { id: '12', form: "ils sont", verb: 'être' }
];

const DragDropConjugationExercise = ({ onComplete, onBack }: DragDropConjugationExerciseProps) => {
  const [shuffledForms, setShuffledForms] = useState<ConjugationForm[]>([]);
  const [avoirForms, setAvoirForms] = useState<ConjugationForm[]>([]);
  const [etreForms, setEtreForms] = useState<ConjugationForm[]>([]);
  const [selectedItem, setSelectedItem] = useState<ConjugationForm | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Mélanger les formes au début
    const shuffled = [...conjugationForms].sort(() => Math.random() - 0.5);
    setShuffledForms(shuffled);
  }, []);

  // Système simple de clic pour iPad
  const handleFormClick = (form: ConjugationForm) => {
    if (selectedItem?.id === form.id) {
      // Déselectionner si on reclique sur la même étiquette
      setSelectedItem(null);
    } else {
      // Sélectionner l'étiquette
      setSelectedItem(form);
      toast({
        title: "Étiquette sélectionnée",
        description: `Maintenant clique sur la zone ${form.verb === 'avoir' ? 'AVOIR' : 'ÊTRE'}`,
      });
    }
  };

  const handleZoneClick = (targetVerb: 'avoir' | 'être') => {
    if (!selectedItem) {
      toast({
        title: "Aucune étiquette sélectionnée",
        description: "Clique d'abord sur une étiquette à placer",
        variant: "destructive"
      });
      return;
    }

    // Vérifier si c'est le bon verbe
    if (selectedItem.verb === targetVerb) {
      // Retirer de la liste mélangée
      setShuffledForms(prev => prev.filter(form => form.id !== selectedItem.id));
      
      // Ajouter à la bonne colonne
      if (targetVerb === 'avoir') {
        setAvoirForms(prev => [...prev, selectedItem].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      } else {
        setEtreForms(prev => [...prev, selectedItem].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      }
      
      setSelectedItem(null);
      toast({
        title: "Bravo !",
        description: "Bonne réponse !",
      });
    } else {
      toast({
        title: "Oups !",
        description: "Cette forme ne va pas avec ce verbe.",
        variant: "destructive"
      });
    }
  };

  const handleRemoveFromColumn = (formId: string, fromVerb: 'avoir' | 'être') => {
    const formToRemove = (fromVerb === 'avoir' ? avoirForms : etreForms).find(f => f.id === formId);
    if (!formToRemove) return;

    // Retirer de la colonne
    if (fromVerb === 'avoir') {
      setAvoirForms(prev => prev.filter(f => f.id !== formId));
    } else {
      setEtreForms(prev => prev.filter(f => f.id !== formId));
    }

    // Remettre dans la liste mélangée
    setShuffledForms(prev => [...prev, formToRemove]);
  };

  const checkCompletion = () => {
    if (shuffledForms.length === 0 && avoirForms.length === 6 && etreForms.length === 6) {
      setIsCompleted(true);
      setShowResults(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      setTimeout(() => {
        onComplete(100); // Score parfait pour la révision
      }, 2000);
    }
  };

  useEffect(() => {
    checkCompletion();
  }, [shuffledForms, avoirForms, etreForms]);

  const handleValidate = () => {
    if (shuffledForms.length > 0) {
      toast({
        title: "Exercice incomplet",
        description: "Place toutes les formes dans les bonnes colonnes !",
        variant: "destructive"
      });
      return;
    }
    checkCompletion();
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center space-y-6">
        <div className="animate-scale-in">
          <h2 className="text-3xl font-bold text-ouaip-purple mb-4">🎉 Félicitations !</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Tu maîtrises parfaitement les verbes avoir et être au présent !
          </p>
          <p className="text-lg text-ouaip-purple font-semibold">
            Tu es prêt(e) pour le passé composé ! 🚀
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-ouaip-purple">Révision : Avoir & Être au présent</h2>
        <p className="text-muted-foreground">Clique sur une étiquette puis sur la bonne zone</p>
      </div>

      {/* Zones de dépôt */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Colonne AVOIR */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-ouaip-blue">AVOIR</h3>
          <div 
            className="min-h-64 border-2 border-dashed border-ouaip-blue/30 rounded-lg p-4 space-y-2 cursor-pointer hover:bg-ouaip-blue/5 transition-colors"
            onClick={() => handleZoneClick('avoir')}
          >
            {avoirForms.map((form) => (
              <div
                key={form.id}
                className="bg-ouaip-blue/10 text-ouaip-blue p-4 rounded-lg text-center font-medium cursor-pointer hover:bg-ouaip-blue/20 transition-colors text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromColumn(form.id, 'avoir');
                }}
                title="Cliquer pour retirer"
              >
                {form.form}
              </div>
            ))}
            {avoirForms.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                Clique ici après avoir sélectionné une forme du verbe avoir
              </div>
            )}
          </div>
        </Card>

        {/* Colonne ÊTRE */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-ouaip-green">ÊTRE</h3>
          <div 
            className="min-h-64 border-2 border-dashed border-ouaip-green/30 rounded-lg p-4 space-y-2 cursor-pointer hover:bg-ouaip-green/5 transition-colors"
            onClick={() => handleZoneClick('être')}
          >
            {etreForms.map((form) => (
              <div
                key={form.id}
                className="bg-ouaip-green/10 text-ouaip-green p-4 rounded-lg text-center font-medium cursor-pointer hover:bg-ouaip-green/20 transition-colors text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromColumn(form.id, 'être');
                }}
                title="Cliquer pour retirer"
              >
                {form.form}
              </div>
            ))}
            {etreForms.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                Clique ici après avoir sélectionné une forme du verbe être
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Formes à placer */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-center mb-4">Formes à placer</h3>
        <div className="flex flex-wrap gap-3 justify-center min-h-20">
          {shuffledForms.map((form) => (
            <div
              key={form.id}
              className={`p-4 rounded-lg font-medium cursor-pointer transition-all text-lg select-none ${
                selectedItem?.id === form.id 
                  ? 'bg-primary text-primary-foreground ring-2 ring-primary scale-105' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
              onClick={() => handleFormClick(form)}
            >
              {form.form}
            </div>
          ))}
          {shuffledForms.length === 0 && (
            <div className="text-center text-muted-foreground py-4">
              Toutes les formes ont été placées ! 🎉
            </div>
          )}
        </div>
      </Card>

      {/* Instructions */}
      {selectedItem && (
        <Card className="p-4 bg-primary/5 border-primary/20">
          <p className="text-center text-primary font-medium">
            Étiquette "{selectedItem.form}" sélectionnée. Clique maintenant sur la zone {selectedItem.verb === 'avoir' ? 'AVOIR' : 'ÊTRE'} pour la placer.
          </p>
        </Card>
      )}

      {/* Boutons d'action */}
      <div className="flex gap-4 justify-center">
        <Button variant="outline" onClick={onBack}>
          ← Retour
        </Button>
        {!isCompleted && (
          <Button onClick={handleValidate}>
            Valider l'exercice
          </Button>
        )}
      </div>
    </div>
  );
};

export default DragDropConjugationExercise;