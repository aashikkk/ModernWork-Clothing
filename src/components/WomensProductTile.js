import { Card, Col, Row } from "react-bootstrap";
import ProdCardWomen from "./CardWomen";
import { useEffect, useState } from "react";

function WomensProductTile() {
	const [womenProducts, setWomenProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();

				// Filter products with category 'men's clothing'
				const womenClothingProducts = data.filter(
					(product) => product.category === "women's clothing"
				);

				setWomenProducts(womenClothingProducts);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Row
			xs={1}
			md={2}
			lg={3}
			xl={4}
			className="g-4">
			{womenProducts.map((product) => (
				<Col key={product.id}>
					<ProdCardWomen
						title={product.title}
						description={product.description}
						image={product.image}
						price={product.price}
					/>
				</Col>
			))}
		</Row>
	);
}

export default WomensProductTile;
