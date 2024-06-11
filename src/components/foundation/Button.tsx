import { IComponent } from "@/components/IComponent"
import Image from "next/image"

interface ButtonProps extends IComponent{
	label ?: string
	type ?: 'primary' | 'secondary' | 'text'
	image ?: React.ReactNode
	imagePosition ?: 'left' | 'right'
	callback ?: () => void
}


export const Button = ({classNames = '', label, type = 'primary', image, imagePosition = 'right', callback}: ButtonProps) => {

	if (image) { 
		if (label) {
			return ( //button with image and text
				<button className={`button ${classNames} ${type}`} aria-label={label} onClick={callback}>
					{imagePosition === 'left' && image}{label}{imagePosition === 'right' && image}
				</button>
			)
		}
		else { //image only button
			return (<button className={`button ${classNames} ${type}`} aria-label="image button" onClick={callback}>{image}</button>)
			}
	}
	else { //text only button
		return(<button className={`button ${classNames} ${type}`} aria-label={label} onClick={callback}>{label}</button>)
    }
}
