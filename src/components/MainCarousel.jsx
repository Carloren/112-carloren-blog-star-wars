import Carousel from 'react-bootstrap/Carousel';
import Characters from '../assets/img/characters.jpg'
import Movies from '../assets/img/films.jpg'
import Ships from '../assets/img/ships.jpg'
import Vehicles from '../assets/img/vehicles.jpg'
import Species from '../assets/img/species.jpg'
import Planets from '../assets/img/planets.jpg'
import { Link } from 'react-router-dom';

function MainCarousel() {
    return (                                              //Este carrusel está hecho con una librería de bootsrap específica para react
        <div className='border border-0 mb-3'>
            <Carousel>
                <Carousel.Item >
                    <Link to="/people" className='mx-auto'>
                        <img src={Characters} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'>
                            <h1>Personajes</h1>
                            <p>Explora tus personajes favoritos de Star Wars</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item >
                    <Link to="/films" className='mx-auto'>
                        <img src={Movies} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'><h1>Películas</h1>
                            <p>Todas las películas de la saga</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item >
                    <Link to="/ships" className='mx-auto'>
                        <img src={Ships} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'><h1>Naves</h1>
                            <p>Aquí podrás ver todas las naves y estaciones espaciales, desde el veloz Ala-X hasta la imponente Estrella de la Muerte</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item >
                    <Link to="/vehicles" className='mx-auto'>
                        <img src={Vehicles} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'><h1>Vehículos</h1>
                            <p>Hay toda clase de vehículos terrestres, ¿cuál es tu favorito?</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item >
                    <Link to="/species" className='mx-auto'>
                        <img src={Species} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'><h1>Especies</h1>
                            <p>La galaxia es enorme y la variedad de especies es vastísima</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item >
                    <Link to="/planets" className='mx-auto'>
                        <img src={Planets} className="d-block w-100 rounded carousel-img" />
                        <Carousel.Caption className='d-flex flex-column'><h1>Planetas</h1>
                            <p>Visita tu planeta favorito de la galaxia</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainCarousel;