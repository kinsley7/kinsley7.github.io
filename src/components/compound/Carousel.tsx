import { useState, useEffect, act } from 'react';
import { ReactNode } from "react";
import { IComponent } from "../IComponent";
import { Card } from "../foundation/Card";
import { Row } from "../foundation/Row";
import { Column } from "../foundation/Column";

interface CarouselProps extends IComponent{
	items : Content[],
	direction ?: 'vertical' | 'horizontal'
}

interface Content {
	content : ReactNode,
	title ?: string,
	caption ?: string
}


export const Carousel = ({classNames, items, direction = 'vertical'} : CarouselProps ) => {
	  // Initialize activeIndex to 0
	  const [activeIndex, setActiveIndex] = useState(0);
	  const [intervalId, setIntervalId] = useState(0);

	  useEffect(() => {
		// Set up a timer to update activeIndex every few seconds
		const timer = window.setInterval(() => {
		  setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % items.length);
		}, 8000); // Change active item every 8 seconds
		
		setIntervalId(timer)
		// Clean up the timer when the component unmounts
		return () => window.clearInterval(timer);
	  }, [items]);
	
	if (direction == 'vertical'){
		{ /*  card for the title and caption & card for the content*/}
		{/* if screen is med. size then the caption and title go under the content and the circles are displayed on the side*/}
		return <Row classNames={classNames?.trim()}>
        <Column classNames='my-auto'>
          {items.map((item, index) => 
            <Card key={index} onClick={() =>
				{ 
				setActiveIndex(index); 
				window.clearInterval(intervalId);
				}} 
				classNames={`bg-[var(--dark-card-color)]/2 rounded-[13px] p-2 my-2 shadow-lg max-w-sm transition-all scale-90 ease-in-out hover:-translate-y-1 hover:scale-100 ${index === activeIndex ? '': 'w-[150px]'}`}>
            	<Column>
					<Row classNames='items-center'>
						<div className={`w-4 h-4 rounded-full ${index === activeIndex ? 'bg-[var(--primary-accent)]' : 'bg-[var(--secondary-accent)]'}`}></div>
						<h3 className={`p-2 transition-all ease-in-out ${index === activeIndex ? 'text-base': 'text-sm'}`}>{item.title}</h3>
				  </Row>
                {/* if item is active show caption else only title*/}
                <p className={`text-center text-sm transition-opacity ease-in-out italic ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>{index === activeIndex && item.caption}</p>
              	</Column>
            </Card>
          )}
        </Column>
        <Card classNames={`transition-all ease-in-out opacity-100 max-width-md m-auto`}>
          {items[activeIndex].content}
        </Card>
      </Row>
	}
	else{
		return <></>
	}
}
