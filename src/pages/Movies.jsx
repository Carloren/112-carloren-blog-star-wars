import { useEffect, useState } from "react";
import { PeopleCard } from "../components/PeopleCard";

export const Movies = () => {

    // const [people, setPeople] = useState(JSON.parse(localStorage.getItem("people")))
    // console.log(people);

    async function get() {
        try {
            let response = await fetch('https://www.swapi.tech/api/people')
            let data = await response.json()
            if (response.ok) {
                console.log(data.total_records);
                                                                                        // ME HE QUEDADO AQUÍ HABÍA QUE PROBAR CON UN BUCLE A TRAER TOOOODOS LOS PERSONAJES
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get()
    }, [])


    return (
        <div className="container d-flex flex-column text-center">
            {/* <h2 className="text-info" id="longTimeAgo">Personajes de la saga</h2>
            <div className="row justify-content-center gx-3">
                {people.map((person) => (
                    <PeopleCard key={person.uid} uid={person.uid} />
                ))}
            </div>
            <a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a> */}
            <p>Hola</p>
        </div>
    )
}