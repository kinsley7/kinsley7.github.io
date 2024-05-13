//internal or external links

import { IComponent } from "../IComponent";

interface Link extends IComponent {
	type : 'internal' | 'external'
}

//if link is internal then use this svg in the ::after. if its external than a different svg