import { ReactNode, RefObject, forwardRef } from "react";
import { IComponent } from "../IComponent";

interface ColumnProps extends IComponent{
	children : ReactNode;
}

export const Column = forwardRef<HTMLDivElement, ColumnProps>(({classNames = "", children}, ref) => {
	return <div ref={ref} className={`flex flex-col ${classNames.trim()}`}>
		{children}
	</div>
});

Column.displayName = 'Column';