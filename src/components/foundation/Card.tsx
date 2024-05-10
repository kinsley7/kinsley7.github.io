import { ReactNode } from "react";
import { IComponent } from "../IComponent";


//cards
interface CardProps extends IComponent{
	title ?: string
	body : ReactNode
	type ?: 'title' | 'elevated' | 'normal'
}

export const Card =({classNames, title, body, type = 'normal'}: CardProps) => {
	
}