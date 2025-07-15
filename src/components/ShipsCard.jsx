import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { getShipsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const ShipsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const ship = store.swShips[index]

    const button = (store.favorites.ships.find((item) => item.url === "/ships/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(ship.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(ship.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.ships.find((item) => item.url === "/ships/" + id) != null) {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, ships: store.favorites.ships.filter((favitem) => favitem.url != "/ships/" + id) } })
        } else {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, ships: store.favorites.ships.concat({ name: name, url: "/ships/" + id, id: id }) } })
        }
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
                    <Card.Text className='my-0 inline-limit'>Fabricante: <i>{ship.manufacturer}</i></Card.Text>
                    <Card.Text className='my-0'>Longitud: <i>{ship.length + " m"}</i></Card.Text>
                    <Card.Text>Coste: <i>{ship.cost_in_credits === "unknown" ? "desconocido" : ship.cost_in_credits + " créditos"}</i></Card.Text>
                    <div className="d-flex">
                        <Link to={"/ships/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}