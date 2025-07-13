import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getShipsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const ShipsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [ship, setShip] = useState(store.swShips[index])

    const button = (store.favorites.find((item) => item.url === "/ships/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(ship.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(ship.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.find((item) => item.url === "/ships/" + id) != null) {
            dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/ships/" + id) })

        } else {
            dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "ships", name: name, url: "/ships/" + id, id: id }) })
        }
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" style={{ height: "10.5em", objectFit: "cover" }} src={getShipsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{ship.name}</Card.Title>
                    <Card.Text className='my-0 inline-limit'>Fabricante: {ship.manufacturer}</Card.Text>
                    <Card.Text className='my-0'>Longitud: {ship.length}m</Card.Text>
                    <Card.Text>Coste: {ship.cost_in_credits == "unknown" ? "desconocido" : ship.cost_in_credits + " créditos"}</Card.Text>
                    <div className="d-flex">
                        <Link to={"/ships/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}