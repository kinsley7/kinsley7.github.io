'use client';
import { useRef} from "react";
import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import { MainWindowCard } from "@/components/compound/MainWindowCard";
import { Spacer } from "@/components/foundation/Spacer";
import { NavigationCard } from "@/components/compound/NavigationCard";

//homepage
export default function Home() { 
  const sectionIds = ['home', 'about me', 'contact','flag'];
  const scrollContainerRef = useRef(null);
    return (
    <main id="home">
          <NavigationCard/>

          <MainWindowCard scrollContainerRef = {scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
            <section id='testing' className="mb-10">
              <Button label='Testing'/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
            </section>
            <Spacer direction="vertical" size={10}/>
            <section id='home' className="mb-700">
                Reached homepage section
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className="font-bold">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
