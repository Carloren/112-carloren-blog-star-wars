import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getPlanetsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [planet, setPlanet] = useState(store.swPlanets[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "planets", name: name, url: "/planets/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getPlanetsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: {planet.birth_year}</Card.Text>
                    <Card.Text className='my-0'>Altura: {planet.height}cm</Card.Text>
                    <Card.Text>Peso: {planet.mass}kg</Card.Text>
                    <div className="d-flex">
                        <Link to={"/planets/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(planet.name, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}