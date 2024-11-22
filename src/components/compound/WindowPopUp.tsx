import { createRef, ReactNode, useState } from "react";
import { IComponent } from "../IComponent";
import { CardWithTab } from "./CardWithTab";
import Draggable from "react-draggable";
import { DragHandlers } from "@/utils/DragHandlers";
import { Card } from "../foundation/Card";
import { Row } from "../foundation/Row";
import { Column } from "../foundation/Column";
import Image from "next/image";
import { Button } from "../foundation/Button";
import { Icons } from "../foundation/Icons";

interface WindowPopUpProps extends IComponent{
	title ?: string;
	children: ReactNode;
	isOpen ?: boolean;
	togglePopup ?: () => void
}


export const WindowPopUp = ({classNames, title, children, isOpen, togglePopup}:WindowPopUpProps) => {
	
	if (!isOpen) {
		return null;
	}
	const wrapper = createRef();
	  
	const dragHandlers = DragHandlers();
	return <>
		<Draggable handle="div" {...dragHandlers}>
			<div  className="cursor-move absolute z-50 max-w-fit transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in">
				<div className={classNames}>
						<Card type='elevated' classNames=" nav border-[1px] border-[var(--card-accent)] rounded-md">
							<Card classNames="border-b-[1px] border-[var(--card-accent)] rounded-t-md">
								<Row classNames=" bg-gradient-to-b from-[#ffd9f9] to-[#cf5f9b] justify-between rounded-t-md p-1">
									<h3 className="!text-black font-bold m-auto">{title}</h3>
									<Button classNames='pr-2 hover:scale-110' type="text" callback={togglePopup} arialabel='close pop-up' image={<Image className='w-[20px]' src={Icons.Close} alt=''/>}/>
								</Row>
							</Card>
							<Column classNames="p-2">
								{children}
							</Column>
						</Card>
				</div>
			</div>
		</Draggable>
		</>
}