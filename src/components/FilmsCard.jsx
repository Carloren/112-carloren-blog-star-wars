import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getFilmsImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const FilmsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [film, setPerson] = useState(store.swFilms[index])

    function addFavorite(name, id) {
        dispatch({ type: "get_favorites", payload: { group: "films", name: name, url: "/films/" + id, id: id } })
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getFilmsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Text className='my-0'>Episodio {film.episode_id}</Card.Text>
                    <Card.Text className='my-0'>Director: {film.director}</Card.Text>
                    <Card.Text>Estreno: {film.release_date}</Card.Text>
                    <div className="d-flex">
                        <Link to={"/films/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        <button className="btn btn-danger" onClick={() => addFavorite(film.title, uid)}><i className="fa-solid fa-heart"></i></button> {/* fa-regular */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}