import { IComponent } from "../IComponent";
import { Card } from "@/components/foundation/Card";
import { Row } from "@/components/foundation/Row";
import hellokitty from "../../../public/hello-kitty.svg"
import { Column } from "@/components/foundation/Column";
import Image from "next/image";
import {ReactNode, useRef} from "react";
import { TitleChangeLogic } from "@/utils/TitleChangeLogic";

//title needs to change on scroll when a new section is reached
interface MainWindowCardProps extends IComponent{
	//content : WindowCardSection[]
	children : ReactNode;
	sectionIds : string[];
}

/* interface WindowCardSection {
	title : ReactNode;
	children : ReactNode;
} */

	
	  
export const MainWindowCard = ({classNames = ''.trim(), children, sectionIds }:MainWindowCardProps) => {

	const scrollContainerRef = useRef<HTMLDivElement>(null) 
	return <div className={classNames}> 
				<Card type='elevated' classNames="border-[1px] border-black rounded-md">
					<Card classNames="border-b-[1px] border-black rounded-t-md">
						<Row classNames="justify-center px-4">
							<h1 className="mx-auto">{<TitleChangeLogic sectionIds={sectionIds} scrollContainerRef={scrollContainerRef}/>}</h1>
							<Image src={hellokitty} alt='' className="justify-self-end w-[30px]"/>
						</Row>
					</Card>
					<Column ref={scrollContainerRef} classNames="p-4 overflow-y-auto h-[85vh]">
						{children}
					</Column>
				</Card>
			</div>
}

