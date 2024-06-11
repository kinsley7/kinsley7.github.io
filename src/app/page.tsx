import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import { WindowCard } from "@/components/compound/WindowCard";

import {DndContext} from '@dnd-kit/core';


//homepage
export default function Home() {
  return (
    <main>
      <DndContext>
        <WindowCard title='Navigation'>
          this is the navigation card where the tree would go
        </WindowCard>
        <WindowCard classNames="m-2" title='hi'>
          <section id='testing'>
            <Button label='Testing'/>
            <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
          </section>
        </WindowCard>
      </DndContext>
    </main>
  );
}
