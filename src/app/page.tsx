'use client';
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import { MainWindowCard } from "@/components/compound/MainWindowCard";
import { Spacer } from "@/components/foundation/Spacer";

import Draggable from 'react-draggable';
import { DragHandlers } from "@/utils/DragHandlers";

//homepage
export default function Home() { 
  const dragHandlers = DragHandlers();
  const sectionIds = ['testing','home', 'about me', 'contact','flag'];
  return (
    <main>
          {/* has to be wrapped in div */}
          <Draggable handle="div" {...dragHandlers}>
            <div>
              this will be the navigation card where the tree would go
            </div>
          </Draggable>

          <MainWindowCard classNames="m-2 !justify-center !items-center w-[75vw]" sectionIds={sectionIds}>
            
            <section id='testing' className="mb-10">
              <Button label='Testing'/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
            </section>
            <Spacer direction="vertical" size={10}/>
            <section id='home' className="mb-700">
                Reached homepage section
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <Button label='Home'/>
                <Spacer direction='vertical' size={35}/>
                <section id='about me'>
                  Reached about section
                  <h1>About ME</h1>
                  <Spacer direction='vertical' size={30}/>
                  <section id='contact'>
                    <h2>Contact</h2>
                    <h2>this is the contact section inside of the about section</h2>
                  </section>
                  <Spacer direction='vertical' size={30}/>
                <Button label='about'/>
            </section>
            </section>
            <Spacer direction="vertical" size={700}/>
            <section id='flag'>
              This is another section
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Button label='flag'/>
            </section>
          </MainWindowCard>
    </main>
  );
}
