"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoReorderControlsProps {
  currentIndex: number;
  totalItems: number;
  onMove: (direction: 'up' | 'down' | 'left' | 'right') => void;
  gridCols?: number;
}

export default function PhotoReorderControls({ 
  currentIndex, 
  totalItems, 
  onMove, 
  gridCols = 3 
}: PhotoReorderControlsProps) {
  const canMoveUp = currentIndex >= gridCols;
  const canMoveDown = currentIndex < totalItems - gridCols;
  const canMoveLeft = currentIndex % gridCols !== 0;
  const canMoveRight = (currentIndex + 1) % gridCols !== 0 && currentIndex < totalItems - 1;

  return (
    <div className="flex flex-col gap-1 p-2 bg-muted rounded-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onMove('up')}
        disabled={!canMoveUp}
        className="w-8 h-8 p-0"
        title="Mover para cima"
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
      
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onMove('left')}
          disabled={!canMoveLeft}
          className="w-8 h-8 p-0"
          title="Mover para esquerda"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onMove('right')}
          disabled={!canMoveRight}
          className="w-8 h-8 p-0"
          title="Mover para direita"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onMove('down')}
        disabled={!canMoveDown}
        className="w-8 h-8 p-0"
        title="Mover para baixo"
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
}