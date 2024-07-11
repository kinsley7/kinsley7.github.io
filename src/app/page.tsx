'use client';
import { useRef, useState} from "react";
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
import { AccordionInfo } from "@/components/compound/AccordionInfo";
import { Link } from "@/components/foundation/Link";
import  { PDFViewer }  from "@/components/compound/PDFViewer";
import { WindowPopUp } from "@/components/compound/WindowPopUp";


//homepage
export default function Home() { 
  const sectionIds = ['about me', 'resume', 'contact', 'internship', 'first rotation', 'second rotation', 'third rotation'];
  const scrollContainerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [popups, setPopups] = useState<{ [key: string]: boolean }>({});

const togglePopup = (name : string) => {
  setPopups({
    ...popups,
    [name]: !popups[name]
  });
}
    return (
    <main>
          <NavigationCard togglePopupResume={() => togglePopup('resume')}/>
          <WindowPopUp isOpen={popups['resume']} togglePopup={() => togglePopup('resume')} title="Resume">
                            <object className="px-2"
                              data="https://drive.google.com/file/d/1NIuchUPLTfy76YfNXG387MDS2m6p6pNU/preview?pli=1"
                              width='500'
                              height="600"/>
                          </WindowPopUp>

                          <WindowPopUp isOpen={popups['first artifact']} togglePopup={() => togglePopup('first artifact')} title="Rotation 1 Artifact">
                            <object className="px-2"
                              data="https://drive.google.com/file/d/1FLrt7WGrXK4VMq-X2F9KDyDQompA1lWP/preview?pli=1"
                              width='500'
                              height="600"/>
                          </WindowPopUp>
          
          
          <MainWindowCard scrollContainerRef = {scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
            <section id='about me'>
              <Card classNames="p-2">
              <h1>About Me</h1>
              Hi, my name is Kinsley Crowdis and I am a student at East Tennessee State University. This year I began my internship with Blue Cross Blue Shield Tennessee. This website documents what I did during my time there.
              <br/>
              mission/vision statement here
              <br/>
              career goals here
              <br/>
              <Link type="internal" callback={() => togglePopup('resume')}>Click here to view my resume.</Link>
              <section id='contact'>
              <Column classNames="text-center">
                <h2>Contact Me!</h2>
                You can reach out to me at: <span className="font-bold">crowdis@etsu.edu</span>
              </Column>
              </section>
              </Card>
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
              <Column classNames="grid grid-cols-2 grid-rows-2 gap-4 py-4">
                    <CardWithTab classNames='flex' title='API Testing' type="elevated">
                      <Row classNames="justify-center gap-4">
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.Postman} alt="Postman"/>} caption='Postman'/>
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.JavaScript} alt="Javascript"/>} caption='Javascript'/>
                      </Row>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardWithTab>
                    <Card classNames='my-auto'>
                      <h3 className="text-center p-2">About API Testing</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card>
                    <Card classNames="p-4 self-center">
                      <h3 className="text-center">Examples of Components Created</h3>
                      <Carousel classNames='p-2 pt-4' direction="vertical" items={[
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
                          content : <AccordionInfo title="Dropdown Information" items={[
                            {
                              title: 'Dropdown Accordions..',
                              body : 'Help the user gain knowledge at a glance!'
                            },
                            {
                              title: 'There can be..',
                              body : <span>More than one! This component is made using the {<Link type="external" url="https://react.dev/reference/react/useState">useState React Hook</Link>}</span>
                            }
                          ]}/>,
                          title : 'Accordion',
                          caption : 'Allows users to view information'
                        }
                      ]}/>
                    </Card>
                  <CardWithTab classNames='flex whitespace-normal' title='Web Development' type="elevated">
                    <Row classNames="justify-center gap-4 p-2">
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.React} alt="React"/>} caption='React'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.TypeScript} alt="Typescript"/>} caption='Typescript'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Git} alt="Git"/>} caption='Git'/>
                      <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Tailwind} alt="Tailwind"/>} caption='Tailwind CSS'/>
                    </Row>
                     During the latter half of this rotation, I had the opportunity to assist in building their new website. This exciting experience allowed me to learn new tools and languages such as React, TypeScript, and Tailwind. I utilized my knowledge from this experience to create everything you see here.
                     <br/>
                     <br/>
                     I constructed components based on a prototype. 
                     I was an active part of the team, collaborating closely with the designers, fellow developers, and product owners to ensure my code aligned with their vision and requirements.
                  </CardWithTab>
              </Column>
                <Column classNames="items-center">
                <h3 className="!bold">Artifact</h3>
                <Link type="internal" callback={() => togglePopup('first artifact')}>Click here to read about my experience!</Link>
                </Column>
              </section>
              <section id="second rotation">
                <h2>Second Rotation</h2>
                <h3>Software Quality Assurance</h3>
              </section>
              <section id="third rotation">
                <h2>Third Rotation</h2>
              </section>
            </section>
          </MainWindowCard>
    </main>
  );
}
