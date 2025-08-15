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
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [dragPosition, setDragPosition] = useState<{x: number, y: number} | null>(null);

  useEffect(() => {
    // Mélanger les formes au début
    const shuffled = [...conjugationForms].sort(() => Math.random() - 0.5);
    setShuffledForms(shuffled);
  }, []);

  // Gestion du drag and drop pour ordinateur
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

    placeItem(draggedItem, targetVerb);
    setDraggedItem(null);
  };

  // Gestion tactile pour iPad/mobile
  const handleTouchStart = (e: React.TouchEvent, form: ConjugationForm) => {
    e.preventDefault(); // Empêche la sélection de texte
    
    const touch = e.touches[0];
    setDraggedItem(form);
    setIsDragging(true);
    setDragPosition({ x: touch.clientX, y: touch.clientY });
    
    // Bloquer complètement le défilement
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.touchAction = 'none';
    
    // Vibration sur les appareils compatibles
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !draggedItem) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const touch = e.touches[0];
    setDragPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || !draggedItem) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Rétablir le défilement
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.touchAction = '';
    
    const touch = e.changedTouches[0];
    const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Recherche de la zone de dépôt
    let targetVerb: 'avoir' | 'être' | null = null;
    
    if (elementAtPoint) {
      // Chercher dans les parents jusqu'à trouver une zone de dépôt
      let current: Element | null = elementAtPoint;
      while (current && !targetVerb) {
        if (current.hasAttribute('data-drop-zone')) {
          targetVerb = current.getAttribute('data-drop-zone') as 'avoir' | 'être';
        }
        current = current.parentElement;
      }
    }
    
    if (targetVerb) {
      placeItem(draggedItem, targetVerb);
    }
    
    // Reset
    setDraggedItem(null);
    setIsDragging(false);
    setDragPosition(null);
  };

  const placeItem = (item: ConjugationForm, targetVerb: 'avoir' | 'être') => {
    // Vérifier si c'est le bon verbe
    if (item.verb === targetVerb) {
      // Retirer de la liste mélangée
      setShuffledForms(prev => prev.filter(form => form.id !== item.id));
      
      // Ajouter à la bonne colonne
      if (targetVerb === 'avoir') {
        setAvoirForms(prev => [...prev, item].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      } else {
        setEtreForms(prev => [...prev, item].sort((a, b) => 
          conjugationForms.findIndex(f => f.id === a.id) - conjugationForms.findIndex(f => f.id === b.id)
        ));
      }
      
      toast({
        title: "Bravo !",
        description: "Bonne réponse !",
      });
      
      // Vibration de succès
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    } else {
      toast({
        title: "Oups !",
        description: "Cette forme ne va pas avec ce verbe.",
        variant: "destructive"
      });
      
      // Vibration d'erreur
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
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
    <div className="max-w-6xl mx-auto p-4 space-y-6 relative">
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
            className="min-h-64 border-2 border-dashed border-ouaip-blue/30 rounded-lg p-4 space-y-2 transition-colors"
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
            className="min-h-64 border-2 border-dashed border-ouaip-green/30 rounded-lg p-4 space-y-2 transition-colors"
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
              className={`p-4 rounded-lg font-medium cursor-grab active:cursor-grabbing transition-all text-lg select-none touch-manipulation ${
                draggedItem?.id === form.id && isDragging
                  ? 'opacity-50 scale-110' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, form)}
              onTouchStart={(e) => handleTouchStart(e, form)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
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

      {/* Élément fantôme qui suit le doigt pendant le drag */}
      {isDragging && draggedItem && dragPosition && (
        <div
          className="fixed pointer-events-none z-50 bg-primary text-primary-foreground p-4 rounded-lg font-medium text-lg shadow-lg opacity-80"
          style={{
            left: dragPosition.x - 50,
            top: dragPosition.y - 25,
            transform: 'rotate(5deg)'
          }}
        >
          {draggedItem.form}
        </div>
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