import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { getVehiclesImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const VehiclesCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const vehicle = store.swVehicles[index]

    const button = (store.favorites.vehicles.find((item) => item.url === "/vehicles/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(vehicle.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(vehicle.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.vehicles.find((item) => item.url === "/vehicles/" + id) != null) {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, vehicles: store.favorites.vehicles.filter((favitem) => favitem.url != "/vehicles/" + id) } })
        } else {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, vehicles: store.favorites.vehicles.concat({ name: name, url: "/vehicles/" + id, id: id }) } })
        }
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getVehiclesImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title className='inline-limit'>{vehicle.name}</Card.Title>
                    <Card.Text className='my-0 inline-limit'>Fabricante: <i>{vehicle.manufacturer === "unknown" ? "desconocido" : vehicle.manufacturer}</i></Card.Text>
                    <Card.Text className='my-0'>Longitud: <i>{vehicle.length === "unknown" ? "desconocida" : vehicle.length + " m"}</i></Card.Text>
                    <Card.Text>Coste: <i>{vehicle.cost_in_credits === "unknown" ? "desconocido" : vehicle.cost_in_credits + " créditos"}</i></Card.Text>
                    <div className="d-flex">
                        <Link to={"/vehicles/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}