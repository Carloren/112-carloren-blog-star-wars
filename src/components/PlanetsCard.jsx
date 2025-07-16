import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { getPlanetsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const planet = store.swPlanets[index]

    const button = (store.favorites.planets.find((item) => item.url === "/planets/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(planet.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(planet.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.planets.find((item) => item.url === "/planets/" + id) != null) {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, planets: store.favorites.planets.filter((favitem) => favitem.url != "/planets/" + id) } })
        } else {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, planets: store.favorites.planets.concat({ name: name, url: "/planets/" + id, id: id }) } })
        }
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-md-4 col-12">
            <Card>
                <Card.Img variant="top" src={getPlanetsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text className='my-0'>Día: <i>{planet.rotation_period === "unknown" ? "desconocido" : planet.rotation_period + " horas"}</i></Card.Text>
                    <Card.Text className='my-0'>Clima: <i>{planet.climate === "unknown" ? "desconocido" : planet.climate}</i></Card.Text>
                    <Card.Text>Población: <i>{planet.population === "unknown" ? "desconocido" : planet.population}</i></Card.Text>
                    <div className="d-flex">
                        <Link to={"/planets/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}