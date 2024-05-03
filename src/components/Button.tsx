import { IComponent } from "@/models/IComponent"

interface ButtonProps extends IComponent{
	label ?: string
}

export const Button = ({classNames, label}: ButtonProps) => {
	return (
		<button className={classNames} type='button'>{label}</button>
	)
}
