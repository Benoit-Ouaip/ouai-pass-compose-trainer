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
  const [draggedItem, setDraggedItem] = useState<ConjugationForm | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState<{x: number, y: number} | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Mélanger les formes au début
    const shuffled = [...conjugationForms].sort(() => Math.random() - 0.5);
    setShuffledForms(shuffled);
  }, []);

  const handleDragStart = (e: React.DragEvent, form: ConjugationForm) => {
    setDraggedItem(form);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetVerb: 'avoir' | 'être') => {
    e.preventDefault();
    
    if (!draggedItem) return;

    // Vérifier si c'est le bon verbe
    if (draggedItem.verb === targetVerb) {
      // Retirer de la liste mélangée
      setShuffledForms(prev => prev.filter(form => form.id !== draggedItem.id));
      
      // Ajouter à la bonne colonne
      if (targetVerb === 'avoir') {
        setAvoirForms(prev => [...prev, draggedItem].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      } else {
        setEtreForms(prev => [...prev, draggedItem].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      }
      
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
    
    setDraggedItem(null);
  };

  const handleTouchStart = (e: React.TouchEvent, form: ConjugationForm) => {
    console.log('Touch start detected for:', form.form);
    e.preventDefault();
    e.stopPropagation();
    
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setDraggedItem(form);
    setIsDragging(true);
    
    // Bloquer le défilement de la page
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    
    console.log('Drag started, scroll blocked');
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Touch move detected');
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    console.log('Touch end detected');
    e.preventDefault();
    e.stopPropagation();
    
    // Rétablir le défilement
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    setIsDragging(false);
    
    if (!draggedItem || !touchStartPos) {
      console.log('No dragged item or touch position');
      setTouchStartPos(null);
      setDraggedItem(null);
      return;
    }

    const touch = e.changedTouches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    console.log('Touch ended at position:', x, y);
    
    // Obtenir l'élément à cette position
    const elementAtPoint = document.elementFromPoint(x, y);
    console.log('Element at point:', elementAtPoint);
    
    // Chercher une zone de dépôt
    let targetVerb: 'avoir' | 'être' | null = null;
    
    if (elementAtPoint) {
      // Vérifier si on est dans une zone avoir ou être
      const avoirZone = elementAtPoint.closest('[data-drop-zone="avoir"]');
      const etreZone = elementAtPoint.closest('[data-drop-zone="être"]');
      
      console.log('Avoir zone found:', !!avoirZone);
      console.log('Être zone found:', !!etreZone);
      
      if (avoirZone) targetVerb = 'avoir';
      else if (etreZone) targetVerb = 'être';
    }
    
    console.log('Target verb:', targetVerb);
    
    if (targetVerb) {
      // Vérifier si c'est le bon verbe
      if (draggedItem.verb === targetVerb) {
        console.log('Correct verb match!');
        // Retirer de la liste mélangée
        setShuffledForms(prev => prev.filter(form => form.id !== draggedItem.id));
        
        // Ajouter à la bonne colonne
        if (targetVerb === 'avoir') {
          setAvoirForms(prev => [...prev, draggedItem].sort((a, b) => 
            conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
          ));
        } else {
          setEtreForms(prev => [...prev, draggedItem].sort((a, b) => 
            conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
          ));
        }
        
        toast({
          title: "Bravo !",
          description: "Bonne réponse !",
        });
      } else {
        console.log('Wrong verb match');
        toast({
          title: "Oups !",
          description: "Cette forme ne va pas avec ce verbe.",
          variant: "destructive"
        });
      }
    } else {
      console.log('No target zone found');
    }

    setTouchStartPos(null);
    setDraggedItem(null);
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
        <p className="text-muted-foreground">Glisse chaque forme dans la bonne colonne</p>
      </div>

      {/* Zones de dépôt */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Colonne AVOIR */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-ouaip-blue">AVOIR</h3>
          <div 
            className="min-h-64 border-2 border-dashed border-ouaip-blue/30 rounded-lg p-4 space-y-2"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'avoir')}
            data-drop-zone="avoir"
          >
            {avoirForms.map((form) => (
              <div
                key={form.id}
                className="bg-ouaip-blue/10 text-ouaip-blue p-4 rounded-lg text-center font-medium cursor-pointer hover:bg-ouaip-blue/20 transition-colors text-lg"
                onClick={() => handleRemoveFromColumn(form.id, 'avoir')}
                title="Cliquer pour retirer"
              >
                {form.form}
              </div>
            ))}
            {avoirForms.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                Glisse les formes du verbe avoir ici
              </div>
            )}
          </div>
        </Card>

        {/* Colonne ÊTRE */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-ouaip-green">ÊTRE</h3>
          <div 
            className="min-h-64 border-2 border-dashed border-ouaip-green/30 rounded-lg p-4 space-y-2"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'être')}
            data-drop-zone="être"
          >
            {etreForms.map((form) => (
              <div
                key={form.id}
                className="bg-ouaip-green/10 text-ouaip-green p-4 rounded-lg text-center font-medium cursor-pointer hover:bg-ouaip-green/20 transition-colors text-lg"
                onClick={() => handleRemoveFromColumn(form.id, 'être')}
                title="Cliquer pour retirer"
              >
                {form.form}
              </div>
            ))}
            {etreForms.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                Glisse les formes du verbe être ici
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Formes à glisser */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-center mb-4">Formes à placer</h3>
        <div className="flex flex-wrap gap-3 justify-center min-h-20">
          {shuffledForms.map((form) => (
            <div
              key={form.id}
              className="bg-primary/10 text-primary p-4 rounded-lg font-medium cursor-grab active:cursor-grabbing hover:bg-primary/20 transition-colors select-none text-lg touch-manipulation"
              draggable
              onDragStart={(e) => handleDragStart(e, form)}
              onTouchStart={(e) => handleTouchStart(e, form)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
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