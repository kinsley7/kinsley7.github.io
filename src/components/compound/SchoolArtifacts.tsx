import { CardWithTab } from "./CardWithTab"
import { MyLink } from "../foundation/Link"
import { IComponent } from "../IComponent"
import { Row } from "../foundation/Row"
import { CaptionedImage } from "./CaptionedImage"
import { Icons } from "../foundation/Icons"
import Image from "next/image"
import { Carousel } from "./Carousel"
import ReactPlayer from "react-player"

interface SchoolArtifactsProps extends IComponent{

}

export const SchoolArtifacts = ({} : SchoolArtifactsProps) => {
	return (
	<section id="school artifacts" className="text-center">
    <h1>School Artifacts</h1>
              <h2>Video Reflection</h2>
              <section id='reflection' className="pb-5">
                <ReactPlayer className={'!m-auto'} url={"https://youtu.be/bhWfh1ajijs"} controls/>
              </section>
              <h3>Here are examples of work I did during my time in class at BlueSky and ETSU. There is more located on my <MyLink type="external" url="https://github.com/kinsley7">Github!</MyLink></h3>
              <Row classNames="justify-center items-center gap-4 p-2">
                <CardWithTab title="Discord Bot Project" classNames="text-center items-center">
                  <Row classNames="justify-center gap-4 p-2">
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.Python} alt="Python"/>} caption='Python'/>
                  </Row>
                  One of my coolest projects was in my server-side web programming class. We were tasked with creating a bot on Discord, a social media platform. With the bot, I created commands that would cater to a gaming community. This included a party finder, giveaways, and multiple news and game update commands. 
                  This was a four-person group project, and we used Python.
                  <MyLink type="external" url="https://github.com/kinsley7/discordbotprj">Feel free to check it out!</MyLink>
                </CardWithTab>
                <CardWithTab title="League of Legends Console Tracker" classNames="text-center items-center">
                  <Row classNames="justify-center gap-4 p-2">
                        <CaptionedImage image={<Image className='w-[96px] rounded-full' src={Icons.CSharp} alt="C#"/>} caption='C#'/>
                  </Row>
                  Another assignment for this class required us to use an API and create a C# console app with it. I created an intuitive menu using the arrow keys to navigate, allowing the user to check stats and achievements and see real-time match stats. 
                  <MyLink type="external" url="https://github.com/kinsley7/lab5">Feel free to check this one out too!</MyLink>
                </CardWithTab>
              </Row>
            </section>
	)
}