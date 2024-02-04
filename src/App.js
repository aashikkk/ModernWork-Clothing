import { Suspense } from "react";
import "./App.css";
import Home from "./pages/homepage";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/men-clothing"
						element={<MenPage />}
					/>
					<Route
						path="/women-clothing"
						element={<WomenPage />}
					/>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;

// <div className="App">
// 	{/* <MenPage /> */}
// 	<WomenPage />
// </div>
