import { ReactNode } from "react";
import { IComponent } from "../IComponent";

interface ColumnProps extends IComponent{
	children : ReactNode;
}

export const Column = ({classNames = "", children}: ColumnProps) => {
	return <div className={`flex flex-col ${classNames.trim()}`}>
		{children}
	</div>
}