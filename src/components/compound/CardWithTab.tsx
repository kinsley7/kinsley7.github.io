import { ReactNode } from "react";
import { IComponent } from "../IComponent";
import { Card, CardProps } from "../foundation/Card";
import { Row } from "../foundation/Row";
import { Column } from "../foundation/Column";


interface CardWithTabProps extends IComponent{
	title: ReactNode
	children : ReactNode;
	type ?: CardProps["type"];

}
//bg-gradient-to-b from-[#ffd9f9] to-[#cf5f9b]
	
export const CardWithTab = ({classNames = ''.trim(), title, children, type = 'normal' }:CardWithTabProps) => {

	return <div className={classNames}> 
				<Card type={type} classNames="border-[1px] border-[var(--card-accent)] rounded-md ">
					<Card classNames="border-b-[1px] border-[var(--card-accent)] rounded-t-md">
						<Row classNames=" bg-[var(--card-accent)] justify-center rounded-t-md p-1">
							<h3 className="!text-black !font-bold">{title}</h3>
						</Row>
					</Card>
					<Column classNames="p-4">
						{children}
					</Column>
				</Card>
			</div>
}
