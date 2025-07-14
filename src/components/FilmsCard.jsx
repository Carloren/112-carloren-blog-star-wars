import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"
import { getFilmsImages } from "../services/StarWarsImages.jsx";
import { tradEpisode } from "../services/StarWarsServices.jsx";
import { Link } from "react-router-dom";

export const FilmsCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const [film, setFilm] = useState(store.swFilms[index])

    const button = (store.favorites.find((item) => item.url === "/films/" + uid) != null) ?
        (<button className="btn btn-danger" onClick={() => addFavorite(film.title, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(film.title, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {
        if (store.favorites.find((item) => item.url === "/films/" + id) != null) {
            dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/films/" + id) })

        } else {
            dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "films", name: name, url: "/films/" + id, id: id }) })
        }
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
                    <Card.Text className='my-0'>Episodio {tradEpisode(film.episode_id)}</Card.Text>
                    <Card.Text className='my-0'>Director: <i>{film.director}</i></Card.Text>
                    <Card.Text>Estreno: <i>{film.release_date}</i></Card.Text>
                    <div className="d-flex">
                        <Link to={"/films/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}