import { useEffect } from "react"
import { useState } from "react"

export const Card = ({ uid }) => {

    const [person, setPerson] = useState("")

    function getPerson(id) {
        fetch("https://www.swapi.tech/api/people/" + id)
            .then(res => res.json())
            .then(data => setPerson(data.result.properties))
            .catch(err => console.error(err))

    }

    useEffect(() => {
        getPerson(uid)

    }, [])

    return (
        <p key={uid}>{person.name}</p>
    )
}