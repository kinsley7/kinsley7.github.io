import { ReactNode } from "react";
import { Card } from "../foundation/Card"
import { Column } from "../foundation/Column"
import { Link } from "../foundation/Link"
import { IComponent } from "../IComponent";
import { Row } from "../foundation/Row";
import { Icons } from "../foundation/Icons";
import Image from "next/image";

interface AboutMeProps extends IComponent{ 
	togglePopup: (name: string) => void; 
}

export const AboutMe = ({togglePopup} : AboutMeProps) => {

	return(
		<section id='about me' className="">
			<Row classNames="items-center">
				<Column>
				<Image className="object-contain rounded-[1rem] card elevated hover:scale-105 ease-in-out" alt="Picture of Kinsley" src={Icons.pictureOfMe}/>
				</Column>
			<Card classNames="p-2 mb-[20px]">
			<Column classNames="items-center text-center gap-2 mb-[12px]">             
			<div className="w-[60%]">
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
			<section id='contact'>
			<h2>Contact Me!</h2>
			You can reach out to me at: <span className="font-bold">crowdis@etsu.edu</span>
			<a target="_blank" href="https://github.com/kinsley7"><Image className={'m-auto w-10 hover:scale-105'} src={Icons.Github} alt="Github"/></a>
			</section>
			</div>
			</Column>
			</Card>
			</Row>
		</section>
	)
}