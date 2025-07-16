import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { getPeopleImages } from "../services/StarWarsImages.jsx";
import { Link } from "react-router-dom";

export const PeopleCard = ({ uid, index }) => {

    const { store, dispatch } = useGlobalReducer()

    const person = store.swPeople[index]        // ← Guardamos el objeto individual para su tratamiento
                                                                        // ↓↓ El botón de like contempla si el objeto está ya en favoritos o no
    const button = (store.favorites.people.find((item) => item.url === "/people/" + uid) != null) ?     
        (<button className="btn btn-danger" onClick={() => addFavorite(person.name, uid)}><i className="fa-solid fa-heart"></i></button>)
        :
        (<button className="btn btn-outline-danger" onClick={() => addFavorite(person.name, uid)}><i className="fa-regular fa-heart"></i></button>)

    function addFavorite(name, id) {                                    // ------ FUNCIÓN PARA AGREGAR O QUITAR ELEMENTO A FAVORITOS ------
        if (store.favorites.people.find((item) => item.url === "/people/" + id) != null) {
            dispatch({ type: "get_favorites", payload: { ...store.favorites, people: store.favorites.people.filter((favitem) => favitem.url != "/people/" + id) } })
        } else {                                                        // Si lo encuentra, lo quita ↑↑, si no, lo agrega ↓↓
            dispatch({ type: "get_favorites", payload: { ...store.favorites, people: store.favorites.people.concat({ name: name, url: "/people/" + id, id: id }) } })
        }
    }

    useEffect(() => {                                      // Mantiene actualizado el localStorage de favoritos al cambiar el estado global
        localStorage.setItem("favorites", JSON.stringify(store.favorites))
    }, [store.favorites])

    return (
        <div className="my-2 col-md-4 col-12">
            <Card>                                         {/* Elemento de react-bootsrap, hace la construcción de la Card más sencilla */}
                <Card.Img variant="top" src={getPeopleImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: <i>{person.birth_year === "unknown" ? "desconocido" : person.birth_year}</i></Card.Text>
                    <Card.Text className='my-0'>Altura: <i>{person.height === "unknown" ? "desconocida" : person.height + " cm"}</i></Card.Text>
                    <Card.Text>Peso: <i>{person.mass === "unknown" ? "desconocido" : person.mass + " kg"}</i></Card.Text>
                    <div className="d-flex">
                        <Link to={"/people/" + uid} className="btn btn-info me-auto">Ficha completa</Link>
                        {button}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}