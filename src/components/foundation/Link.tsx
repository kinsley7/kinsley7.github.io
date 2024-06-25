//internal or external links

import { ReactHTMLElement, ReactNode } from "react";
import { IComponent } from "../IComponent";
import { Row } from "./Row";
import Image from "next/image";
import externalLink from "../../../public/external-link.svg"

interface LinkProps extends IComponent {
	type : 'internal' | 'external'
	url ?: string
	children : string
	//onClick? 
}

//if link is internal then use this svg in the ::after. if its external than a different svg


//<Image classNames='w-[20px] p-1' src={externalLink} alt='external image'/>
export const Link = ({type, url, children} : LinkProps) => {
	if(type = 'external'){
		return(
				<span><a target="_blank" href={url} className="link">{children}</a></span>
		)
	}
	else{
		return(
			<span><a>{children}</a></span>
			)
	}
}