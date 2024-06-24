import Draggable from "react-draggable";
import { IComponent } from "../IComponent";
import { DragHandlers } from "@/utils/DragHandlers";
import { RefObject} from "react";
import { Tree, TreeProps } from "../foundation/Tree";
import { Card } from "../foundation/Card";
import { Row } from "../foundation/Row";
import Image from "next/image";


import Navigation from "../../../public/navigation.svg"
import Folder from "../../../public/folder.svg"
import Email from "../../../public/email.svg"

interface NavigationCardProps extends IComponent {
}

//need to put sectionIds into here:

const treeData: TreeProps = {
	label: 'home',
	link: true,
	icon: <Image className="w-[20px] mr-1" src={Folder} alt=""/>,
	children: [
	  {
		label: 'about me',
		link: true,
		icon: <Image className="w-[20px] mr-1" src={Folder} alt=""/>,
		children: [
		  {
			label: 'contact',
			link: true,
			icon: <Image className="w-[20px] mr-1" src={Email} alt=""/>,
		  },
		],
	  },
	  {
		label: 'flag',
		link: true,
	  },
	],
  }

  //logic that says when label = the section that has been scrolled to make bold and open node


export const NavigationCard = ({ }:NavigationCardProps) => {
	const dragHandlers = DragHandlers();
	//const treeData = TreeScrollLogic ({sectionIds, scrollContainerRef})
	
	return <>	
	<Draggable handle="div" {...dragHandlers}>
	  <div className="cursor-move">
		<Card type="elevated" classNames="nav absolute border-[1px] border-black rounded-md">
			<Card classNames="border-b-[1px] border-black rounded-t-md ">
			<Row classNames="p-1 justify-center rounded-t-md bg-[var(--card-accent)]">
					<Image className='!w-[25px] pr-1' src={Navigation} alt=''/>
					<h2 className="font-bold">Navigation</h2>
			</Row>
			</Card>
	  			<Tree classNames="m-2 mx-4" {...treeData}/>
	  	</Card>
	  </div>
	</Draggable>
	</>
}

