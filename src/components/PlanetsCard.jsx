import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { useState } from "react"
import { getPlanet, getPlanetsImages } from "../services/StarWarsServices.jsx";

export const PlanetsCard = ({ uid }) => {

    const { store, dispatch } = useGlobalReducer()


    const [planet, setPlanet] = useState("")

    useEffect(() => {
        if (localStorage.getItem("planetsDetails") != null) {
            dispatch({ type: "get_planets_details", payload: (JSON.parse(localStorage.getItem("planetsDetails")))["planet" + uid] })
            setPlanet((JSON.parse(localStorage.getItem("planetsDetails")))["planet" + uid].properties);


        } else {
            getPlanet(uid).then((data) => { dispatch({ type: "get_planets_details", payload: data }) })
            getPlanet(uid).then((data) => setPlanet(data.properties))
        }

    }, [])

    return (
        <div className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={getPlanetsImages(uid)} />
                <Card.Body className='text-start'>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text className='my-0'>Diámetro: {planet.diameter}km</Card.Text>
                    <Card.Text>Población: {planet.population} personas</Card.Text>
                    <Button variant="info">Ficha completa</Button>
                </Card.Body>
            </Card>
        </div>
    )
}