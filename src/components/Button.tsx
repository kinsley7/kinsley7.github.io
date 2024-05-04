import { IComponent } from "@/components/IComponent"
import Image from "next/image"

type ButtonTypes = 'primary' | 'secondary'
interface ButtonProps extends IComponent{
	label ?: string
	type ?: ButtonTypes
	image ?: React.ReactNode
	callback ?: () => void
}


export const Button = ({classNames, label, type = 'primary', image, callback}: ButtonProps) => {

	if (label == null){ //image only button
		return (<button className={`${classNames} ${type}`}></button>)
	}
	else{
	return (
		<button className={`${classNames} ${type} px-2 py-1 items-center`} aria-label={label} onClick={callback}>{label}</button>
	)
}
}
