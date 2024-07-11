import { IComponent } from "@/components/IComponent"
import Image from "next/image"

interface ButtonProps extends IComponent{
	label ?: string
	type ?: 'primary' | 'secondary' | 'text'
	image ?: React.ReactNode
	imagePosition ?: 'left' | 'right'
	callback ?: () => void
	arialabel ?: string
}


export const Button = ({classNames = '', label, type = 'primary', image, imagePosition = 'right', callback, arialabel}: ButtonProps) => {

	if (image) { 
		if (label) {
			return ( //button with image and text
				<button className={`button ${classNames} ${type}`} aria-label={arialabel} onClick={callback}>
					{imagePosition === 'left' && image}{label}{imagePosition === 'right' && image}
				</button>
			)
		}
		else { //image only button
			return (<button className={`button ${classNames} ${type}`} aria-label={arialabel} onClick={callback}>{image}</button>)
			}
	}
	else { //text only button
		return(<button className={`button ${classNames} ${type}`} aria-label={arialabel} onClick={callback}>{label}</button>)
    }
}
