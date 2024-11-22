import { useState, ReactNode } from 'react';
import plusBox from '../../../public/plus-box.svg'
import minusBox from '../../../public/minus-box.svg'
import Image from 'next/image';
import { Row } from './Row';
import { IComponent } from '../IComponent';
import { Link } from 'wouter';
//import { Link, useLocation } from 'wouter';

export interface TreeProps extends IComponent {
  label: string;
  linkName : string
  icon ?: ReactNode; //if x then icon needs to be folder, if y then icon needs to be file etc (logic implemented in nav card)
  callback ?: () => void;
  children?: TreeProps[];
  activeSection ?: string;
  expandedSections ?: string[];
  //sectionIds ?: string[];
}



export const Tree = ({ classNames, label, children, icon, linkName, activeSection, expandedSections, callback }:TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const allowedLinks = ['school-artifacts', 'internship'];
  const hasChildren = children && children.length > 0
  const minusIcon = <Image className='w-[20px] h-auto cursor-pointer' src={minusBox} alt='close tree node'/>
  const plusIcon = <Image className='w-[20px] h-auto cursor-pointer' src={plusBox} alt='open tree node'/>

  const toggleIcon = isOpen ? minusIcon : plusIcon

  return (
    <div className={classNames}>
      <div onClick={handleToggle}> {/* this is the node itself*/}
        <Row classNames={hasChildren && toggleIcon ? '' : 'ml-1' }>
          {hasChildren && toggleIcon } {icon} {<Link className='scroll-smooth' onClick={callback} href={`/${linkName}`}>{label}</Link>}
        </Row>
      </div>
      {isOpen && children?.map((section, index) => (
        <div className={`ml-4`} key={index}>
            <Tree key={index} {...section}/>
        </div>
      ))}
    </div>
  );
};