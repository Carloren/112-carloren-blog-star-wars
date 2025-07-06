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
				<Navbar.Brand href="/">Inicio</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
						<Nav.Link href="/people">Personajes</Nav.Link>
						<Nav.Link href="/movies">Películas</Nav.Link>
						<Nav.Link href="/ships">Naves</Nav.Link>
						<Nav.Link href="/vehicles">Vehículos</Nav.Link>
						<Nav.Link href="/species">Especies</Nav.Link>
						<Nav.Link href="/planets">Planetas</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
						<Button variant="outline-info">Buscar</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
