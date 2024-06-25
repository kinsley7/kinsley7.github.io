import { useState, ReactNode } from 'react';
import plusBox from '../../../public/plus-box.svg'
import minusBox from '../../../public/minus-box.svg'
import Image from 'next/image';
import { Row } from './Row';
import { IComponent } from '../IComponent';

export interface TreeProps extends IComponent {
  label: string;
  icon ?: ReactNode; //if x then icon needs to be folder, if y then icon needs to be file etc (logic implemented in nav card)
  link ?: boolean;
  children?: TreeProps[];
  activeSection ?: string;
  expandedSections ?: string[];
  //sectionIds ?: string[];
}


export const Tree = ({ classNames, label, children, icon, link = false, activeSection, expandedSections }:TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const hasChildren = children && children.length > 0
  const minusIcon = <Image className='w-[20px] h-auto cursor-pointer' src={minusBox} alt='close tree node'/>
  const plusIcon = <Image className='w-[20px] h-auto cursor-pointer' src={plusBox} alt='open tree node'/>

  const toggleIcon = isOpen ? minusIcon : plusIcon


  return (
    <div className={classNames}>
      <div onClick={handleToggle}> {/* this is the node itself*/}
        <Row classNames={hasChildren && toggleIcon ? '' : 'ml-1' }>
          {hasChildren && toggleIcon } {icon} {link ? <a href={`#${label}`}>{label}</a> : label }
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