import React, { ReactNode } from 'react';
import {useDraggable} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface DraggableProps{
  id : string;
  children : ReactNode;
}

export const Draggable = ({id, children}:DraggableProps) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}