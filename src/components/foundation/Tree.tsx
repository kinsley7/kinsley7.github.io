import { useState, ReactNode } from 'react';
import plusBox from '../../../public/plus-box.svg'
import minusBox from '../../../public/minus-box.svg'
import Image from 'next/image';
import { Row } from './Row';

export interface TreeProps {
  label?: string;
  icon ?: ReactNode; //if x then icon needs to be folder, if y then icon needs to be file etc (logic implemented in nav card)
  link ?: boolean;
  children?: TreeProps[];
  //sectionIds ?: string[];
}


export const Tree = ({ label, children, icon, link = false }:TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const hasChildren = children && children.length > 0
  const minusIcon = <Image className='w-[20px]' src={minusBox} alt='close tree node'/>
  const plusIcon = <Image className='w-[20px]' src={plusBox} alt='open tree node'/>

  const toggleIcon = isOpen ? minusIcon : plusIcon
  return (
    <div>
      <div onClick={handleToggle}> {/* this is the node itself*/}
        <Row>
          {hasChildren && toggleIcon} {icon} {link ? <a href={`#${label}`}>{label}</a> : label }
        </Row>
      </div>
      {isOpen && children?.map((section, index) => (
        <div className='ml-4' key={index}>
            <Tree key={index} {...section}/>
        </div>
      ))}
    </div>
  );
};