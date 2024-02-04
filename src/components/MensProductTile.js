import { Card, Col, Row } from "react-bootstrap";
import ProdCardMen from "./CardMen";
import { useEffect, useState } from "react";

function FlashSaleProducts() {
	const [menProducts, setMenProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();

				// Filter products with category 'men's clothing'
				const menClothingProducts = data.filter(
					(product) => product.category === "men's clothing"
				);

				setMenProducts(menClothingProducts);
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
			{menProducts.map((product) => (
				<Col key={product.id}>
					<ProdCardMen
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

export default FlashSaleProducts;
