import React, { useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';

interface Position {
  x: number;
  y: number;
}

export const DragHandlers = () => { 
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState<Position>({ x: 0, y: 0 });

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    console.log('being dragged')
  };

  const onStart = () => {
    setActiveDrags((prev) => prev + 1);
    console.log('started drag')
  };

  const onStop = () => {
    setActiveDrags((prev) => prev - 1);
    console.log('ended drag')
  };

  const dragHandlers = { onStart, onStop, onDrag: handleDrag };

  return dragHandlers;

};
