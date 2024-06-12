import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps {
	id: string;
	children: ReactNode;
}

//make the entire screen 'droppable'
export const Droppable = ({id, children}:DroppableProps) => {
	const {setNodeRef} = useDroppable({id});
	
	return <div ref={setNodeRef} style={{ height: '100vh', width: '100vw' }}>{children}</div>
}