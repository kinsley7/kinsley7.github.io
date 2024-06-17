import Draggable from "react-draggable";
import { IComponent } from "../IComponent";
import { DragHandlers } from "@/utils/DragHandlers";
import { lazy, useState } from "react";
import { Tree, TreeProps } from "../foundation/Tree";
import { Card } from "../foundation/Card";
import { Row } from "../foundation/Row";

interface NavigationCardProps extends IComponent {
	sectionIds : string[]
}

//need to put sectionIds into here:
const treeData: TreeProps = {
	label: 'home',
	link: true,
	icon: '',
	children: [
	  {
		label: 'about me',
		children: [
		  {
			label: 'contact',
		  },
		  {
			label: 'Grandchild 2',
		  },
		],
	  },
	  {
		label: 'flag',
	  },
	],
  }
  
  /*const sectionData = 
	sectionIds.map((index, section) =>{
		TreeProps = {
			label : section,
			children?: [
				
			]
		}
	})
  }*/




export const NavigationCard = ({ sectionIds }:NavigationCardProps) => {
	const dragHandlers = DragHandlers();
	return <>	
	<Draggable handle="div" {...dragHandlers}>
	  <div>
		<Card type="elevated" classNames="absolute border-[1px] border-black rounded-md">
			<Card classNames="border-b-[1px] border-black rounded-t-md">
			<Row>
				{/* image */}
				<h2>Navigation</h2>
			</Row>
			</Card>
	  			<Tree {...treeData} />
	  	</Card>
	  </div>
	</Draggable>
	</>
}

