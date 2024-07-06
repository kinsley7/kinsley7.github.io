import { ReactNode } from "react";
import { IComponent } from "../IComponent";

//cards
export interface CardProps extends IComponent{
	children: ReactNode
	type ?: 'elevated' | 'normal' | 'rounded'
	onClick ?: () => void
}

export const Card =({classNames = "", children, type = 'normal', onClick}: CardProps) => {
		return <div className={`card ${type} ${classNames.trim()}`} onClick={onClick}>
			<div>{children}</div>
		</div>
}