import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getSpeciesImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const SpeciesCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [specie, setSpecie] = useState(store.swSpecies[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "species", name: name, url: "/species/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getSpeciesImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{specie.name}</Card.Title>
                    <Card.Text className='my-0'>Grupo: {specie.classification}</Card.Text>
                    <Card.Text className='my-0'>Altura media: {specie.average_height}cm</Card.Text>
                    <Card.Text>Vida media: {specie.average_lifespan} años</Card.Text>
                    <div className="d-flex">
                        <Link to={"/species/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(specie.name, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}