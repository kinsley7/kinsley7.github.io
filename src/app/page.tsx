'use client';
import { useRef, useState, useEffect} from "react";
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
import  { PDFViewer }  from "@/components/compound/PDFViewer";
import { WindowPopUp } from "@/components/compound/WindowPopUp";

import {SchoolArtifacts} from '@/components/compound/SchoolArtifacts'
import { Route, Router, Switch, useLocation, Link } from "wouter";
import { AboutMe } from "@/components/compound/AboutMe";
import { Internship } from "@/components/compound/Internship";
import { useHashLocation } from "wouter/use-hash-location";
import { useBrowserLocation } from "wouter/use-browser-location";

//homepage
export default function Home() { 

  const sectionIds = ['about me', 'contact', 'school artifacts', 'internship', 'first rotation', 'second rotation', 'third rotation'];
  const scrollContainerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [popups, setPopups] = useState<{ [key: string]: boolean }>({});

const togglePopup = (name : string) => {
  setPopups({
    ...popups,
    [name]: !popups[name]
  });
}
const [location] = useLocation();
useEffect(() => { if (location.includes('#')) { const elementId = location.split('#')[1]; const element = document.getElementById(elementId); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } } }, [location]);

const [isClient, setIsClient] = useState(false);

// This ensures that the routing logic is only enabled in the browser
useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  // If it's not a client-side environment, return null or some placeholder
  return null;
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
                          <WindowPopUp isOpen={popups['second artifact']} togglePopup={() => togglePopup('second artifact')} title="Rotation 2 Artifact">
                            <object className="px-2"
                            data="https://drive.google.com/file/d/1HVvMMK9in5IvNHh8A4yNyZZcHOjqmmEB/preview?pli=1"
                            width='500'
                            height="600"/>
                          </WindowPopUp>
                          <WindowPopUp isOpen={popups['third artifact']} togglePopup={() => togglePopup('third artifact')} title="Rotation 3 Artifact">
                            <object className="px-2"
                            data="https://drive.google.com/file/d/12Gu7kTqIoBpIM6lGL9K9FQmkGDfNtj5V/preview?pli=1"
                            width='500'
                            height="600"/>
                          </WindowPopUp>
          
          
          <MainWindowCard scrollContainerRef = {scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
           
            <Route path={'/'}>{<AboutMe classNames="justify-center" togglePopup={togglePopup}/>}</Route>
            {/*
           <section id='about me'>
              <Card classNames="p-2 mb-[20px]">
              <Column classNames="items-center text-center gap-2 mb-[12px]">             
              <h1>About Me</h1>
              Hi, my name is Kinsley Crowdis and I am a student at East Tennessee State University. This year I began my internship with Blue Cross Blue Shield Tennessee. This website documents what I did during my time there.
              <br/>
              <h2>Vision Statement</h2>
              I want to contribute to the world positively
              <br/>
              <h2>Career Goals</h2>
              In my career I want to be apart of something
              <br/>
              <Link type="internal" callback={() => togglePopup('resume')}>Click here to view my resume.</Link>
              </Column>
              <section id='contact'>
              <Column classNames="text-center">
              <h2>Contact Me!</h2>
              You can reach out to me at: <span className="font-bold">crowdis@etsu.edu</span>
              </Column>
              </section>
              </Card>
              </section>
              */}

            <Route path="/school-artifacts">{<SchoolArtifacts/>}</Route>
          {/*
            <section id="school artifacts">
            Here is work I did during my time in class at ETSU.
            <CardWithTab title="Discord Bot Project">
            One of the coolest projects I did was in my ___ class. We were tasked to create a bot on Discord, a social media platform. With the bot I created commands that would be catered towards a gaming community. This included a party finder, giveaways, and multiple news and game update commands. 
            This was a four person group project and we used Python.
            <Link type="external" url="https://github.com/kinsley7/discordbotprj">Feel free to check it out!</Link>
            </CardWithTab>
            <CardWithTab title="League of Legends Console Tracker">
            Another assignment for this same class required we use an API an create a console app with it. I created an intuitive menu using the arrow keys to navigate and allowed the user to check stats, achievements, and see real-time match stats.
            <Link type="external" url="https://github.com/kinsley7/lab5">Feel free to check this one out too!</Link>
            </CardWithTab>
            </section>
            */}
            <Route path={"/internship"}>{<Internship togglePopup={togglePopup}/>}</Route>
            
            {/* <section id='internship'>
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
              <Column classNames="items-center mt-[12px]">
                    <CardWithTab classNames='flex w-[50%]' title='API Testing' type="elevated">
                      <Row classNames="justify-center gap-4 p-2">
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.Postman} alt="Postman"/>} caption='Postman'/>
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.JavaScript} alt="Javascript"/>} caption='Javascript'/>
                      </Row>
                      In the first half of this rotation, I wrote tests for endpoints and called on the API endpoints in my own Next.JS app. 
                      I used Postman and Javascript to write the tests and create the Next.JS app.
                      <br/>
                      Other developers later used my code for the Next.JS app for another project.
                      My experience with testing these would prove helpful in my second rotation, where I am with the quality assurance team.
                      <br/>
                      While testing, I made sure that the response matched the expected results. Some endpoints were designed to return specific types of values, and I verified that they did. I also tested response times and handled errors and edge cases.
                    </CardWithTab>
                  </Column>
              <Column classNames="grid grid-cols-2 gap-4 py-4 items-center">
                    <Card classNames="p-4 self-center">
                      <h3 className="text-center !font-bold">Examples of Components Created</h3>
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
                     I actively collaborated with the designers, fellow developers, and product owners to ensure my code aligned with their vision and requirements. I also participated in code peer-reviewing.
                  </CardWithTab>
              </Column>
                <Column classNames=" mt-[12px] mb-[20px] items-center">
                <h3 className="!bold">Artifact</h3>
                <Link type="internal" callback={() => togglePopup('first artifact')}>Click here to read about my experience!</Link>
                </Column>
              </section>
              <section id="second rotation">
              <Column classNames="text-center p-2">
                <h2>Second Rotation</h2>
                <h3>Software Quality Assurance</h3>
                <h3>SQA Analyst I</h3>
                <h4>June 10th - August 16th</h4>
                <Column classNames="grid grid-cols-2 gap-4 py-4 items-center">
                      <CardWithTab classNames='flex' title='Manual Testing' type="elevated">
                        During my rotation in this area, I began with manual testing. This type of testing involves manually creating test cases and steps, and then executing them manually.
                        <br/>
                        Most of my time in the manual testing area was spent understanding basic concepts and setting the foundation for automation.
                      </CardWithTab>
                      <CardWithTab classNames='flex' title='Automated Testing' type="elevated">
                      <Row classNames="justify-center items-center gap-4 p-2">
                        <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Java} alt="Java"/>} caption='Java'/>
                        <CaptionedImage image={<Image className='w-[90px] rounded-full' src={Icons.Selinum} alt="Selenium"/>} caption='Selenium'/>
                      </Row>
                        The majority of my time was spent creating automated web test scripts using Java and Selenium. 
                        <br/>
                        I met with senior developers on a daily basis, and I successfully completed various tasks and challenges.
                      </CardWithTab>
                  </Column>
                  <Column classNames=" mt-[12px] mb-[20px] items-center"> 
                  <h3 className="!bold">Artifact</h3>
                  <Link type="internal" callback={() => togglePopup('second artifact')}>Click here to read about my experience!</Link>
                  </Column>
              </Column>
              </section>
              <section id="third rotation">
              <Column classNames="text-center p-2">
                <h2>Third Rotation</h2>
                <h3>ITS</h3>
                <h3>Junior Dev</h3>
                <h4>August 21st - December 14th</h4>
                <CardWithTab classNames='flex' title='Colbol Conversion' type="elevated">
                      hi
                </CardWithTab>
              </Column>
              </section>
            </section>
            {*/}
          </MainWindowCard>
    </main>
  );
}
