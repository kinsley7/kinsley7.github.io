import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IComponent } from "../IComponent";
import { ReactNode } from "react";
import { Column } from "../foundation/Column";
import Image from "next/image";

interface CaptionedImageProps extends IComponent{
	image : ReactNode;
	caption : ReactNode;
}

export const CaptionedImage = ({classNames = '', image, caption} : CaptionedImageProps ) => {
	return <Column classNames={classNames.trim() + ' items-center'}>
		{image}
		<p className="text-[14px] italic pt-2">{caption}</p>
	</Column>
}