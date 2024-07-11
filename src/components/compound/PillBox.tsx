import { Button } from "../foundation/Button";
import { Card } from "../foundation/Card";
import { IComponent } from "../IComponent";
import { Row } from "../foundation/Row";
interface PillBoxProps extends IComponent{
	title ?: string,
	pills : PillData[]
}

interface PillData{
	label: string
}

export const PillBox = ({title, pills}: PillBoxProps) => {
	return <Card classNames="">
		<p>{title}</p>
		<Row classNames="gap-2 flex-wrap align-center justify-center place-items-center">
			{pills.map((pill, index) => {
				return <Button type="secondary" key={index} label={pill.label}/>
			})}
		</Row>
	</Card>
}