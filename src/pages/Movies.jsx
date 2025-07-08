import { useEffect, useState } from "react";
import { PeopleCard } from "../components/PeopleCard";
import { getPeople } from "../services/StarWarsServices";

export const Movies = () => {

    // const [people, setPeople] = useState(JSON.parse(localStorage.getItem("people")))
    // console.log(people);
// export async function getPeople() {
//     let fullPeople = []
//     try {
//         let response = await fetch('https://www.swapi.tech/api/people')
//         let data = await response.json()
//         if (response.ok) {
//             console.log(data.total_records);
//             let id = 0
//             for (let i = 1; i <= data.total_records; i++) {
//                 try {
//                     id++
//                     let res = await fetch('https://www.swapi.tech/api/people/' + id)
//                     let dat = await res.json()
//                     if (res.ok) {
//                         fullPeople.push(dat.result)
//                         localStorage.setItem("peopleDetails", JSON.stringify(fullPeople))
//                         console.log(dat.result.uid)
//                     } else {
//                         i--
//                     }
//                 } catch (error) {
//                     console.log(error);

//                 }
//             }
//             // ME HE QUEDADO AQUÍ HABÍA QUE PROBAR CON UN BUCLE A TRAER TOOOODOS LOS PERSONAJES
//             console.log("Todo el mundo: ", fullPeople);
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
//     return fullPeople
// }

    useEffect(() => {
        getPeople()
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