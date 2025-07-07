import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { useState } from "react"
import { getPeopleImages, getPerson } from "../services/StarWarsServices.jsx";
import { Link } from "react-router-dom";

export const PeopleCard = ({ uid }) => {

    const { store, dispatch } = useGlobalReducer()


    const [person, setPerson] = useState("")

    useEffect(() => {
        if (localStorage.getItem("peopleDetails") != null) {
            dispatch({ type: "get_people_details", payload: (JSON.parse(localStorage.getItem("peopleDetails")))["person" + uid] })
            setPerson((JSON.parse(localStorage.getItem("peopleDetails")))["person" + uid].properties);


        } else {
            getPerson(uid).then((data) => { dispatch({ type: "get_people_details", payload: data }) })
            getPerson(uid).then((data) => setPerson(data.properties))
        }

    }, [])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getPeopleImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: {person.birth_year}</Card.Text>
                    <Card.Text className='my-0'>Altura: {person.height}cm</Card.Text>
                    <Card.Text>Peso: {person.mass}kg</Card.Text>
                    <Link to={"/people/" + uid} className="btn btn-info">Ficha completa</Link>
                </Card.Body>
            </Card>
        </div>
    )
}