import React from "react";
import NavBarHome from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import WomensProductTile from "../components/WomensProductTile";

function WomenPage() {
	return (
		<Container style={{ marginBottom: 50 }}>
			<NavBarHome />
			<h4>Womens's Clothing</h4>
			<WomensProductTile />
		</Container>
	);
}

export default WomenPage;
