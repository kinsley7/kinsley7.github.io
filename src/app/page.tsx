import Image from "next/image";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import ChevronUp from "../../public/chevron-up.svg";
import ChevronDown from "../../public/chevron-down.svg";
import logo from "../../public/logo.png"


export default function Home() {
  return (
    <main>
      <Image src={logo} width={528} alt="kinsley" />
      <Button label='Testing'/>
      <Accordion title="test" children="testing open" openIcon={<Image src={ChevronDown} alt='chevron down' className="w-5"/>} closeIcon={<Image src={ChevronUp} alt='Chevron up' className="w-5" />}/>
    </main>
  );
}
