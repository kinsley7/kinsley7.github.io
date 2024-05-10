import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";

//homepage
export default function Home() {
  return (
    <main>
      <Button label='Testing'/>
      <Accordion title="test" body="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
      <p> Normal text </p>
      <p className="font-bold"> Bold Text Test </p>
    </main>
  );
}
