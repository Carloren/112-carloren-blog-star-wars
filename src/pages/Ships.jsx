import { useState } from "react";
import { PeopleCard } from "../components/PeopleCard";

export const Ships = () => {

    const [people, setPeople] = useState(JSON.parse(localStorage.getItem("people")))
    console.log(people);


    return (
        <div className="container d-flex flex-column text-center">
            <h2 className="text-info" id="longTimeAgo">Personajes de la saga</h2>
            <div className="row justify-content-center gx-3">
                {people.map((person) => (
                    <PeopleCard key={person.uid} uid={person.uid} />
                ))}
            </div>
            <a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a>
        </div>
    )
}