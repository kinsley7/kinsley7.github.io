import { CardWithTab } from "./CardWithTab"
import { Link } from "../foundation/Link"
import { IComponent } from "../IComponent"

interface SchoolArtifactsProps extends IComponent{

}

export const SchoolArtifacts = ({} : SchoolArtifactsProps) => {
	return (
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
	)
}