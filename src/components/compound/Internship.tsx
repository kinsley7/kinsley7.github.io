import { CardWithTab } from "./CardWithTab"
import { Link } from "../foundation/Link"
import { Card } from "../foundation/Card"
import { Column } from "../foundation/Column"
import { Icons } from "../foundation/Icons"
import { Row } from "../foundation/Row"
import { AccordionInfo } from "./AccordionInfo"
import { CaptionedImage } from "./CaptionedImage"
import { Carousel } from "./Carousel"
import { PillBox } from "./PillBox"
import Image from "next/image";
import { IComponent } from "../IComponent"

interface InternshipProps extends IComponent { 
	togglePopup: (name: string) => void; 
}

export const Internship = ({togglePopup} : InternshipProps) => {
	return (
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
	)
}