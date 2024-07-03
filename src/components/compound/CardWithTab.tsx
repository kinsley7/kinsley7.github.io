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

	
export const CardWithTab = ({classNames = ''.trim(), title, children, type = 'normal' }:CardWithTabProps) => {

	return <div className={classNames}> 
				<Card type={type} classNames="border-[1px] border-black rounded-md">
					<Card classNames="border-b-[1px] border-black rounded-t-md">
						<Row classNames="bg-[var(--card-accent)] justify-center rounded-t-md p-1">
							<h3>{title}</h3>
						</Row>
					</Card>
					<Column>
						{children}
					</Column>
				</Card>
			</div>
}