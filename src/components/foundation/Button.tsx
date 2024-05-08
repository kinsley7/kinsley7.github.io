import { IComponent } from "@/components/IComponent"
import Image from "next/image"

type ButtonTypes = 'primary' | 'secondary' | 'text'
type ImagePosition = 'left' | 'right'
interface ButtonProps extends IComponent{
	label ?: string
	type ?: ButtonTypes
	image ?: React.ReactNode
	imagePosition ?: ImagePosition
	callback ?: () => void
}


export const Button = ({classNames, label, type = 'primary', image, imagePosition = 'right', callback}: ButtonProps) => {

	if (image) { 
		if (label) {
			return ( //button with image and text
				<button className={`${classNames} ${type}`} aria-label={label} onClick={callback}>
					{imagePosition === 'left' && image}{label}{imagePosition === 'right' && image}
				</button>
			)
		}
		else { //image only button
			return (<button className={`${classNames} ${type}`} aria-label="image button" onClick={callback}>{image}</button>)
			}
	}
	else { //text only button
		return(<button className={`${classNames} ${type}`} aria-label={label} onClick={callback}>{label}</button>)
    }
}
