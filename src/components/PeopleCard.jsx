import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getPeopleImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PeopleCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [person, setPerson] = useState(store.swPeople[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "people", name: name, url: "/people/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getPeopleImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: {person.birth_year}</Card.Text>
                    <Card.Text className='my-0'>Altura: {person.height}cm</Card.Text>
                    <Card.Text>Peso: {person.mass}kg</Card.Text>
                    <div className="d-flex">
                        <Link to={"/people/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(person.name, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}