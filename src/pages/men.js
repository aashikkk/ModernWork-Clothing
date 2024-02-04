import React from "react";
import NavBarHome from "../components/navbar";
import MensProductTile from "../components/MensProductTile";
import { Container, Row, Col } from "react-bootstrap";

function MenPage() {
	return (
		<Container style={{ marginBottom: 50 }}>
			<NavBarHome />
			<h4>Mens's Clothing</h4>
			<MensProductTile />
		</Container>
	);
}

export default MenPage;
