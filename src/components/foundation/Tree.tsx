import React, { useState } from 'react';

export interface TreeProps {
  label?: string;
  children?: TreeProps[];
  sectionIds ?: string[];
}
// this needs to stay open when moved/dragged but that should be implemented in navigationcard
// need to find way to make sectionids and title change work with this.

export const Tree = ({ label, children, sectionIds }:TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {label}
      </div>
      {isOpen && children?.map((section, index) => (
        <div className='ml-4' key={index}>
          <Tree key={index} {...section}/>
        </div>
      ))}
    </div>
  );
};

