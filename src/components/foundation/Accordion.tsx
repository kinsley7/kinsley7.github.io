'use client';
import { ReactNode, useState } from 'react';
import { IComponent } from '../IComponent';

export interface AccordionProps extends IComponent{
  title: string;
  body: ReactNode;
  openIcon ?: ReactNode;
  closeIcon ?: ReactNode;
}

export const Accordion = ({ title, body, openIcon, closeIcon, classNames }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return <div className={`${classNames}`}>
      <button className='pb-2' onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen == false ? openIcon : closeIcon}
      </button>
      {isOpen && <div>{body}</div>}
    </div>
};




