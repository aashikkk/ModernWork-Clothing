import Card from "react-bootstrap/Card";
import "../styling/card-prod-style.css";

function ProdCardMenHD() {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Header
				style={{ height: "5em", overflow: "hidden", textOverflow: "ellipsis" }}>
				Mens Cotton Jacket
			</Card.Header>
			<Card.Img
				variant="top"
				src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
				height={260}
			/>
			<Card.Body className="prod-men">
				<Card.Text>
					great outerwear jackets for Spring/Autumn/Winter, suitable for many
					occasions, such as working, hiking, ..
				</Card.Text>
				<Card.Title>Rs 55.99</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default ProdCardMenHD;
