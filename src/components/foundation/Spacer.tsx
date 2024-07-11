import { IComponent } from "../IComponent";

interface SpacerProps extends IComponent {
	direction ?: 'horizontal' | 'vertical'
	size : number;
}

export const Spacer = ({direction = 'horizontal', size}:SpacerProps) =>{
	if (direction == 'vertical')
		return <span style={{height : `${size}px`, minHeight : `${size}px`, display: 'block'}}></span>
	else
		return <span style={{width : `${size}px`, minWidth: `${size}px`, display: 'block'}}/>
}