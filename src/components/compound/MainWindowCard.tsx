import { IComponent } from "../IComponent";
import { Card } from "@/components/foundation/Card";
import { Row } from "@/components/foundation/Row";
import hellokitty from "../../../public/hello-kitty.svg"
import { Column } from "@/components/foundation/Column";
import Image from "next/image";
import { Children, ReactNode, cloneElement, useEffect, useRef, useState } from "react";


//title needs to change on scroll when a new section is reached
interface MainWindowCardProps extends IComponent{
	//content : WindowCardSection[]
	title : ReactNode;
	children : ReactNode;
}

/* interface WindowCardSection {
	title : ReactNode;
	children : ReactNode;
} */

export const MainWindowCard = ({classNames = ''.trim(), title, children }:MainWindowCardProps) => {
	
	return <div className={classNames}> 
				<Card type='elevated' classNames="border-[1px] border-black rounded-md">
					<Card classNames="border-b-[1px] border-black rounded-t-md">
						<Row classNames="justify-center px-4">
							<h1 className="mx-auto">{title}</h1>
							<Image src={hellokitty} alt='' className="justify-self-end w-[30px]"/>
						</Row>
					</Card>
					<Column classNames="p-4 overflow-y-auto">
						{children}
					</Column>
				</Card>
			</div>
}