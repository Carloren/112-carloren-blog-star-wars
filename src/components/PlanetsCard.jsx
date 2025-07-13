import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getPlanetsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [planet, setPlanet] = useState(store.swPlanets[index])

    const button = (store.favorites.find((item) => item.url === "/planets/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(planet.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(planet.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.find((item) => item.url === "/planets/" + id) != null) {
            dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/planets/" + id) })

        } else {
            dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "planets", name: name, url: "/planets/" + id, id: id }) })
        }
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" style={{height: "10.5em", objectFit: "cover"}} src={getPlanetsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: {planet.birth_year}</Card.Text>
                    <Card.Text className='my-0'>Altura: {planet.height}cm</Card.Text>
                    <Card.Text>Peso: {planet.mass}kg</Card.Text>
                    <div className="d-flex">
                        <Link to={"/planets/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}