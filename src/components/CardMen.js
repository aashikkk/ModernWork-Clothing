import Card from "react-bootstrap/Card";
import "../styling/card-prod-style.css";

function ProdCardMen({ title, description, image, price }) {
	const maxLines = 4;

	const getDescriptionLines = () => {
		if (description && typeof description === "string") {
			const lines = description.split("\n");
			return lines.slice(0, maxLines).join("\n");
		}
		return "";
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Header
				style={{ height: "5em", overflow: "hidden", textOverflow: "ellipsis" }}>
				{title}
			</Card.Header>
			<Card.Img
				variant="top"
				src={image}
				height={260}
			/>
			<Card.Body className="prod-men">
				<Card.Text
					style={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						maxHeight: "6em",
					}}>
					{getDescriptionLines()}
				</Card.Text>
				<Card.Title>{`Rs ${price}`}</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default ProdCardMen;
