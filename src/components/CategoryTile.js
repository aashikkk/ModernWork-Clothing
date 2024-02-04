import { Card, Col, Row } from "react-bootstrap/";
import "../styling/card-prod-style.css";
import { Link } from "react-router-dom";

function CategoryTile() {
	return (
		<div>
			<h4> Categories</h4>
			<Row
				xs={1}
				md={2}
				className="g-2">
				<Col>
					<Link
						to="/men-clothing"
						className="text-decoration-none">
						<Card className="categ-card-m">
							<Card.Body className="text-center">
								<Card.Title>Men's Clothing</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				</Col>
				<Col>
					<Link
						to="/women-clothing"
						className="text-decoration-none">
						<Card className="categ-card-w">
							<Card.Body className="text-center">
								<Card.Title>Women's Clothing</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				</Col>
			</Row>
		</div>
	);
}

export default CategoryTile;
