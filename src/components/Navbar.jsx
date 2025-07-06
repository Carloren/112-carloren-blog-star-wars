import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const MyNavbar = () => {

	return (
		<Navbar expand="lg" className="bg-body-dark">
			<Container fluid>
				<Link to="/" className="navbar-brand">Inicio</Link>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
						<Link to="/people" className="nav-link">Personajes</Link>
						<Link to="/movies" className="nav-link">Películas</Link>
						<Link to="/ships" className="nav-link">Naves</Link>
						<Link to="/vehicles" className="nav-link">Vehículos</Link>
						<Link to="/species" className="nav-link">Especies</Link>
						<Link to="/planets" className="nav-link">Planetas</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
						<Button variant="outline-info">Buscar</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar >
	);
}
