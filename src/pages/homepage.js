import React from "react";
import NavBarHome from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import FlashSaleProductsTile from "../components/FlashSaleTile";
import CategoryTile from "../components/CategoryTile";

function Home() {
	return (
		<Container>
			<NavBarHome />
			<FlashSaleProductsTile />
			<CategoryTile />
		</Container>
	);
}

export default Home;
