import { ReactNode } from "react";
import { IComponent } from "../IComponent";

interface RowProps extends IComponent{
	children : ReactNode;
}

export const Row = ({classNames = "", children}: RowProps) => {
	return <div className={`flex flex-row ${classNames.trim()}`}>
		{children}
	</div>
}