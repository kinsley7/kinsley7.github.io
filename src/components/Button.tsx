import { IComponent } from "@/components/IComponent"

type ButtonTypes = 'pill' | 'box' 

interface ButtonProps extends IComponent{
	label ?: string
	type : ButtonTypes 
	callback ?: () => void
}


export const Button = ({classNames, label, type, callback}: ButtonProps) => {
	return (
		<button className={`${classNames} ${type}`} type='button' aria-label={label} onClick={callback}>{label}</button>
	)
}
