import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getPeopleImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PeopleCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [person, setPerson] = useState(store.swPeople[index])

    const button = (store.favorites.find((item) => item.url === "/people/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(person.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(person.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.find((item) => item.url === "/people/" + id) != null) {
            dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/people/" + id) })

        } else {
            dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "people", name: name, url: "/people/" + id, id: id }) })
        }
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
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}