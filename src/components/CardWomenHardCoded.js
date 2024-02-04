import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProdCardWomenHD() {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Header
				style={{ height: "5em", overflow: "hidden", textOverflow: "ellipsis" }}>
				Women's Short Sleeve
			</Card.Header>
			<Card.Img
				variant="top"
				src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
				height={260}
			/>
			<Card.Body className="prod-women">
				<Card.Text>
					100% Polyester, Machine wash, 100% cationic polyester interlock,
					Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy..
				</Card.Text>
				<Card.Title>Rs 7.95</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default ProdCardWomenHD;
