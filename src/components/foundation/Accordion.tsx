'use client';
import { ReactNode, useState } from 'react';
import { IComponent } from '../IComponent';

interface AccordionProps extends IComponent{
  title: string;
  children: ReactNode;
  openIcon ?: ReactNode;
  closeIcon ?: ReactNode;
}

export const Accordion = ({ title, children, openIcon, closeIcon, classNames }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return <div className={classNames}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen == false ? openIcon : closeIcon}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
};




