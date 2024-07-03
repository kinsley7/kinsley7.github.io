'use client';
import { useRef} from "react";
import Image from "next/image";
import { MainWindowCard } from "@/components/compound/MainWindowCard";
import { Spacer } from "@/components/foundation/Spacer";
import { NavigationCard } from "@/components/compound/NavigationCard";
import { CardWithTab } from "@/components/compound/CardWithTab";
import { Row } from "@/components/foundation/Row";
import { Column } from "@/components/foundation/Column";
import { Icons } from "@/components/foundation/Icons";
import { Card } from "@/components/foundation/Card";
import ReactPlayer from "react-player";

//homepage
export default function Home() { 
  const sectionIds = ['home', 'about me', 'contact','flag'];
  const scrollContainerRef = useRef(null);
    return (
    <main id="home">
          <NavigationCard/>

          <MainWindowCard scrollContainerRef = {scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
            <section id='about me'>
              <h1>About Me</h1>
              mission/vision statement here
              career goals here
              <section id='resume'>
                resume
              </section>
              <section id='contact'>
                Contact Me
              </section>
            </section>

            <section id='internship'>
              <h1>Internship</h1>
              <section id='reflection'>
                video reflection goes here
              </section>
              <section id='first rotation'>
              <h2>First Rotation</h2>
              <Column classNames="grid grid-cols-2 grid-rows-2 gap-2">
                    <CardWithTab classNames='flex' title='api development'>
                      <Row classNames="justify-center">
                        <Image className='w-[96px] rounded-full' src={Icons.Postman} alt="Postman's Icon"/>
                        <Image className='w-[96px] rounded-full' src={Icons.JavaScript} alt="Javascript's Icon"/>
                      </Row>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardWithTab>
                    <CardWithTab title='hi'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardWithTab>
                  <ReactPlayer url='/prototyping.mp4' playing loop muted/>
                  <CardWithTab classNames='flex' title='web development'>
                    <Row classNames="justify-center">
                      <Image className='w-[96px] rounded-full' src={Icons.React} alt="React's Icon"/>
                      <Image className='w-[96px] rounded-full' src={Icons.TypeScript} alt="Typescript's Icon"/>
                    </Row>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </CardWithTab>
              </Column>
              </section>
              <section id="second rotation">
                <h2>Second Rotation</h2>
              </section>
              <section id="third rotation">
                <h2>Third Rotation</h2>
              </section>
            </section>

          </MainWindowCard>

    </main>
  );
}
