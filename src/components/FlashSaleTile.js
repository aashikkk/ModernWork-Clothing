import { Col, Row } from "react-bootstrap";
import ProdCardMenHD from "./CardMenHardCoded";
import ProdCardWomenHD from "./CardWomenHardCoded";

function FlashSaleProductsTile() {
	const numCards = 4; // Number of cards you want to display

	// Create an array of alternating card components
	const cardComponents = Array.from({ length: numCards }, (_, idx) => (
		<Col key={idx}>
			{idx % 2 === 0 ? <ProdCardMenHD /> : <ProdCardWomenHD />}
		</Col>
	));

	return (
		<div>
			<h4> Flash Sale</h4>
			<Row
				xs={1}
				md={2}
				lg={3}
				xl={4}
				className="g-2">
				{cardComponents}
			</Row>
		</div>
	);
}

export default FlashSaleProductsTile;
