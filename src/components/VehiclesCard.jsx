import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getVehiclesImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const VehiclesCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [vehicle, setVehicle] = useState(store.swVehicles[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "vehicles", name: name, url: "/vehicles/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getVehiclesImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{vehicle.name}</Card.Title>
                    <Card.Text className='my-0'>Fabricante: {vehicle.manufacturer}</Card.Text>
                    <Card.Text className='my-0'>Longitud: {vehicle.length}m</Card.Text>
                    <Card.Text>Coste: {vehicle.cost_in_credits} créditos</Card.Text>
                    <div className="d-flex">
                        <Link to={"/vehicles/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(vehicle.name, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}