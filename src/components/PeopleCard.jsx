import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import { useState } from "react"
import { getPerson } from "../services/StarWarsServices.jsx";

export const PeopleCard = ({ uid }) => {

    const { store, dispatch } = useGlobalReducer()


    const [person, setPerson] = useState("")
    const [imageUrl, setImageUrl] = useState(() => {
        switch (parseInt(uid)) {
            case 1:
                return "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796";

            case 2:
                return "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536"

            case 3:
                return "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536"

            case 4:
                return "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"

            case 5:
                return "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786"

            case 6:
                return "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593"

            case 7:
                return "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527"

            case 8:
                return "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666"

            case 9:
                return "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878"

            case 10:
                return "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"

            default:
                return "https://lumiere-a.akamaihd.net/v1/images/swcj-hero-container-mobile_c3fdce51.jpeg?region=0%2C0%2C1600%2C900";
        }
    })

    useEffect(() => {
        // if (localStorage.getItem("person" + uid) != null) {
        //     setPerson(JSON.parse(localStorage.getItem("person" + uid)))

        // } else {
            getPerson(uid).then((data) => setPerson(data.properties))
            getPerson(uid).then((data) => dispatch({ type: "get_people_details", payload: data }))

        // }

        console.log("Gente: ", store.swPeopleDetails);         // NO GUARDA BIEN EL ESTADO GLOBAL, AQUÍ ME QUEDÉ

    }, [])

    return (
        <div key={uid} className="my-2 col-4">
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body className='text-start'>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text className='my-0'>Nacimiento: {person.birth_year}</Card.Text>
                    <Card.Text className='my-0'>Altura: {person.height}cm</Card.Text>
                    <Card.Text>Peso: {person.mass}kg</Card.Text>
                    <Button variant="info">Ficha completa</Button>
                </Card.Body>
            </Card>
        </div>
    )
}