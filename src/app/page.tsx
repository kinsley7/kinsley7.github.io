'use client';
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import { MainWindowCard } from "@/components/compound/MainWindowCard";

import Draggable from 'react-draggable';
import { DragHandlers } from "@/utils/DragHandlers";

//homepage
export default function Home() { 
  const dragHandlers = DragHandlers();
  return (
    <main>
          {/* has to be wrapped in div */}
          <Draggable handle="div" {...dragHandlers}>
            <div>
            <MainWindowCard title='Navigation' classNames="absolute cursor-move">
              this will be the navigation card where the tree would go
            </MainWindowCard>
            </div>
          </Draggable>

          <MainWindowCard classNames="m-2" title='hi'>
            <section id='testing'>
              <Button label='Testing'/>
              <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
            </section>
          </MainWindowCard>
    </main>
  );
}
