import { ReactNode } from "react";
import { IComponent } from "../IComponent";


//cards
interface CardProps extends IComponent{
	title ?: ReactNode
	body : ReactNode
	type ?: 'window' | 'elevated' | 'normal' 
}

export const Card =({classNames, title, body, type = 'normal'}: CardProps) => {
	
	if (type === 'window'){
		return <div className={`card window ${classNames}`}>
			<div>{title}</div>
			<div>{body}</div>
		</div>
	}
	else{
		if (title){
			return <div className={`card ${type} ${classNames}`}>
				<h2>{title}</h2>
				<div>{body}</div>
			</div>
		}
		else{
			return <div className={`card ${type} ${classNames}`}>
			{body}
		</div>
		}
	}
}