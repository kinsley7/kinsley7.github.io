'use client'
import { IComponent } from "../IComponent";
import { Accordion, AccordionProps } from "../foundation/Accordion";
import { Card } from "../foundation/Card";
import { Column } from "../foundation/Column";
import { Icons } from "../foundation/Icons";
import Image from "next/image";
interface AccordionInfoProps extends IComponent{
	title ?: string;
	items : AccordionProps[]
}

export const AccordionInfo = ({title, items}: AccordionInfoProps) => {
	return <Card>
		<Column classNames="items-stretch">
			<h3 className="text-center text-[18px] py-4">{title}</h3>
			<Column classNames="divide-y-2">
				{items.map((info, index) => {
					return <Accordion classNames="pt-4 p-2" key={index} title={info.title} body={info.body} openIcon={<Image className='w-[25px] pl-2' src={Icons.ChevronDown} alt=''/>} closeIcon={<Image className='w-[25px] pl-2' src={Icons.ChevronUp} alt=''/>}/>
				}
			)}
			</Column>
		</Column>
	</Card>
}