import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import { Card } from "@/components/foundation/Card";
import { Row } from "@/components/foundation/Row";
import hellokitty from "../../public/hello-kitty.svg"
import { Column } from "@/components/foundation/Column";

//homepage
export default function Home() {
  return (
    <main>

      {/* window card */}
      <Card type='elevated' classNames="border-[1px] border-black rounded-[14px]">
        <Card classNames="border-b-[1px] border-black rounded-t-[14px]">
          <Row classNames="justify-center">
            <p> Card Title test </p>
            <Image src={hellokitty} alt='' className="w-[32px] self-end"/>
          </Row>
        </Card>
        <Column classNames="p-4">
          <p>Card body testing</p>
          <h1> THIS IS THE CARD BODY </h1>
          <h2> other things can go in here!</h2>
        </Column>
      </Card>


      <Button label='Testing'/>
      <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
    </main>
  );
}
