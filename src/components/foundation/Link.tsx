//internal or external links

import { IComponent } from "../IComponent";

interface LinkProps extends IComponent {
	type : 'internal' | 'external'
}

//if link is internal then use this svg in the ::after. if its external than a different svg

export const Link = ({} : LinkProps) => {
	
}