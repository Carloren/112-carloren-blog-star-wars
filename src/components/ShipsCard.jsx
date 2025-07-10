import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getShipsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const ShipsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [ship, setShip] = useState(store.swShips[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "ships", name: name, url: "/ships/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getShipsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{ship.name}</Card.Title>
                    <Card.Text className='my-0'>Fabricante: {ship.manufacturer}</Card.Text>
                    <Card.Text className='my-0'>Longitud: {ship.length}m</Card.Text>
                    <Card.Text>Coste: {ship.cost_in_credits} créditos</Card.Text>
                    <div className="d-flex">
                        <Link to={"/ships/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(ship.name, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}