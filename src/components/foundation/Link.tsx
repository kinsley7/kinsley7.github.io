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
	callback ?: () => void
	//onClick? 
}

//if link is internal then use this svg in the ::after. if its external than a different svg

//<Image classNames='w-[20px] p-1' src={externalLink} alt='external image'/>
export const Link = ({type, url, children, callback} : LinkProps) => {
	if(type == 'external'){
		return(
				<span>
					<a className='link external'target="_blank" href={url} onClick={callback}>{children}</a>
				</span>
		)
	}
	if(type == 'internal'){
		return(
			<span>
				<a className="link internal" onClick={callback}>{children}</a>
				</span>
			)
	}
}