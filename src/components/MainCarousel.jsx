import Carousel from 'react-bootstrap/Carousel';
import Characters from '../assets/img/characters.jpg'
import Movies from '../assets/img/movies.jpg'
import Ships from '../assets/img/ships.jpg'
import Vehicles from '../assets/img/vehicles.jpg'
import Species from '../assets/img/species.jpg'
import Planets from '../assets/img/planets.jpg'
import { Link } from 'react-router-dom';

function MainCarousel() {
    return (
        <div className='container border border-0'>
            <Carousel>
                <Carousel.Item >
                    <img src={Characters} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Personajes</h1></Link>
                        <p>Explora tus personajes favoritos de Star Wars</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={Movies} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Películas</h1></Link>
                        <p>Todas las películas de la saga</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={Ships} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Naves</h1></Link>
                        <p>Aquí podrás ver todas las naves y estaciones espaciales, desde el veloz Ala-X hasta la imponente Estrella de la Muerte</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={Vehicles} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Vehículos</h1></Link>
                        <p>Hay toda clase de vehículos terrestres, ¿cuál es tu favorito?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={Species} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Especies</h1></Link>
                        <p>La galaxia es enorme y la variedad de especies es vastísima</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={Planets} className="d-block w-100 rounded" />
                    <Carousel.Caption className='d-flex flex-column'>
                        <Link to="/" className='mx-auto'><h1>Planetas</h1></Link>
                        <p>Visita tu planeta favorito de la galaxia</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainCarousel;