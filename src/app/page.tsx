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
import { CaptionedImage } from "@/components/compound/CaptionedImage";
import { ChildProcess } from "child_process";
import { Carousel } from "@/components/compound/Carousel";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import { PillBox } from "@/components/compound/PillBox";
import { Label } from "@headlessui/react";
//homepage
export default function Home() { 
  const sectionIds = ['about me', 'contact','flag'];
  const scrollContainerRef = useRef(null);
    return (
    <main>
          <NavigationCard/>

          <MainWindowCard scrollContainerRef = {scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
            <section id='about me'>
              <h1>About Me</h1>
              Hi, my name is Kinsley Crowdis and I am a student at East Tennessee State University! This year I began my internship with Blue Cross Blue Shield Tennessee. This website documents everything I did during my time there.
              <br/>
              mission/vision statement here
              <br/>
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
              <Column classNames="text-center p-2">
              <h2>First Rotation</h2>
              <h3>Consumer Portals</h3>
              <h3>Junior Dev</h3>
              <h4>January 22nd - June 7th</h4>
              </Column>
              <Column classNames="grid grid-cols-2 grid-rows-2 gap-4">
                    <CardWithTab classNames='flex' title='API Testing' type="elevated">
                      <Row classNames="justify-center gap-4">
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.Postman} alt="Postman"/>} caption='Postman'/>
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.JavaScript} alt="Javascript"/>} caption='Javascript'/>
                      </Row>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardWithTab>
                    <CardWithTab classNames='my-auto' title='About API Testing'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardWithTab>
                    <Card classNames="p-4 self-center">
                      <Carousel classNames='p-2' direction="vertical" items={[
                        {
                          content : <PillBox classNames="p-2" pills={[
                            {
                            label : 'buttons to'
                            },
                            {
                              label : 'navigate'
                            },
                            {
                              label : 'the user'
                            },
                            {
                              label : 'to different'
                            },
                            {
                              label : 'pages!'
                            }  
                          ]}/>,
                          title: 'Pill box',
                          caption : 'Multiple buttons'
                        },
                        {
                          content :  <Accordion title="test" body="testing open" openIcon={<Image src={Icons.ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={Icons.ChevronUp} alt='Chevron up' className="w-5" />}/>,
                          title : 'Accordion',
                          caption : 'Allows users to view information'
                        }
                      ]}/>
                    </Card>
                  <CardWithTab classNames='flex whitespace-normal' title='Web Development' type="elevated">
                    <Row classNames="justify-center gap-4 p-2">
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.React} alt="React"/>} caption='React'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.TypeScript} alt="Typescript"/>} caption='Typescript'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Git} alt="Typescript"/>} caption='Git'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Talwind} alt="Typescript"/>} caption='Tailwind CSS'/>
                    </Row>
                     During the latter half of this rotation, I had the opportunity to assist in building their new website. This exciting experience allowed me to learn new tools and languages such as React, TypeScript, and Tailwind. I utilized my knowledge from this experience to create everything you see here.
                     <br/>I constructed components based on a prototype. 
                     I was an active part of the team, collaborating closely with the designers, fellow developers, and product owners to ensure my code aligned with their vision and requirements.
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
