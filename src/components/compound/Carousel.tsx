import { ReactNode } from "react";
import { IComponent } from "../IComponent";

interface CarouselProps extends IComponent{
	images : Images[],
	direction ?: 'vertical' | 'horizontal'
}

interface Images {
	image : ReactNode,
	title ?: string,
	caption ?: string
}

export const Carousel = ({images, direction = 'vertical'} : CarouselProps ) => {
	if (direction='vertical'){
		
	}
	else{
		return <></>
	}
}
