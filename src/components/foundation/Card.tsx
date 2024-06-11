import { ReactNode } from "react";
import { IComponent } from "../IComponent";

//cards
interface CardProps extends IComponent{
	children: ReactNode
	type ?: 'elevated' | 'normal' | 'rounded'
}

export const Card =({classNames = "", children, type = 'normal'}: CardProps) => {
		return <div className={`card ${type} ${classNames.trim()}`}>
			<div>{children}</div>
		</div>
}