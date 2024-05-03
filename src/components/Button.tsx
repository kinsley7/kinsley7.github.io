import { IComponent } from "@/models/IComponent"

interface ButtonProps extends IComponent{
	label ?: string
	type : 'pill'
}

export const Button = ({classNames, label, type}) => {

	return (
		<button className={classNames} type={type}>{label}</button>
	)
}
