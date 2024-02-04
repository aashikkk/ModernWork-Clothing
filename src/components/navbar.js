import { Container, Navbar, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";

function NavBarHome() {
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary">
			<Container>
				<NavLink
					to="/"
					className="navbar-brand">
					Modern Walk
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-center flex-grow-1 pe-3">
						<NavLink
							to="/"
							className="nav-link"
							activeClassName="font-weight-bold"
							exact>
							Home
						</NavLink>
						<NavLink
							to="/men-clothing"
							className="nav-link"
							activeClassName="font-weight-bold">
							Men
						</NavLink>
						<NavLink
							to="/women-clothing"
							className="nav-link"
							activeClassName="font-weight-bold">
							Women
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBarHome;
