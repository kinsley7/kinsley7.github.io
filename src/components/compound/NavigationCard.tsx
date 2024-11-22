import Draggable from "react-draggable";
import { IComponent } from "../IComponent";
import { DragHandlers } from "@/utils/DragHandlers";
import { RefObject,} from "react";
import { Tree, TreeProps } from "../foundation/Tree";
import { Card } from "../foundation/Card";
import { Row } from "../foundation/Row";
import Image from "next/image";

import { Icons } from "../foundation/Icons";

interface NavigationCardProps extends IComponent {
	togglePopupResume : () => void
}


  //logic that says when label = the section that has been scrolled to make bold and open node


export const NavigationCard = ({togglePopupResume}:NavigationCardProps) => {

	const treeData: TreeProps = {
		label: 'home',
		linkName: '',
		icon: <Image className="w-[20px] mr-1" src={Icons.Folder} alt=""/>,
		children: [
		  {
			label: 'about-me',
			linkName: '',
			icon: <Image className="w-[20px] mr-1" src={Icons.Folder} alt=""/>,
			children: [
				{
					label: 'resume',
					linkName: '',
					icon: <Image className="w-[20px] mr-1" src={Icons.PDF} alt=""/>,
					callback: togglePopupResume
				},
				{
					label: 'contact',
					linkName: '',
					icon: <Image className="w-[20px] mr-1" src={Icons.Email} alt=""/>,
				},
			],
			},
			{
				label : 'school-artifacts',
				linkName : 'school-artifacts',
				icon : <Image className="w-[20px] mr-1" src={Icons.Document} alt=""/>,
				children: [
					{
						label: 'reflection',
						linkName: 'school-artifacts#reflection',
						icon : <Image className="w-[20px] mr-1" src={Icons.Video} alt=""/>,
					}
				]
			},
			{
			label : 'internship',
			linkName: 'internship',
			icon: <Image className="w-[20px] mr-1" src={Icons.Folder} alt=""/>,
			children: [
				{
					label: 'first-rotation',
					linkName: 'internship#first-rotation',
					icon : <Image className="w-[20px] mr-1" src={Icons.Document} alt=""/>,
				},
				{
					label: 'second-rotation',
					linkName: 'internship#second-rotation',
					icon : <Image className="w-[20px] mr-1" src={Icons.Document} alt=""/>,
				},
				{
					label: 'third-rotation',
					linkName: 'internship#third-rotation',
					icon : <Image className="w-[20px] mr-1" src={Icons.Document} alt=""/>,
				},
			],
			},
		],
	  }

	  

	const dragHandlers = DragHandlers();
	//const treeData = TreeScrollLogic ({sectionIds, scrollContainerRef})
	
	return <>	
	<Draggable handle="div" {...dragHandlers}>
	  <div className="cursor-move absolute z-50" id='navigation'>
		<Card type="elevated" classNames="nav border-[1px] border-[#cf5f9b] rounded-md">
			<Card classNames="border-b-[1px] border-[#cf5f9b] rounded-t-md ">
			<Row classNames="p-1 justify-center rounded-t-md bg-gradient-to-b from-[#ffd9f9] to-[#cf5f9b]">
					<Image className='!w-[25px] stroke-white pr-1' src={Icons.Navigation} alt=''/>
					<p className="!text-black font-bold">Navigation</p>
			</Row>
			</Card>
	  			<Tree classNames="m-2 mx-4" {...treeData}/>
	  	</Card>
	  </div>
	</Draggable>
	</>
}
