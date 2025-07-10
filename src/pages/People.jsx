import { useEffect, useState } from "react";
import { PeopleCard } from "../components/PeopleCard";
import { useParams } from "react-router-dom";
import { getPeopleImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const People = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        let person = store.swPeople.find((item) => item.uid === useParams().id)
        let homeworld = ""

        // JSON.parse(localStorage.getItem("planets")).map((planet) => { (Object.values(planet)[2] === person.properties.homeworld) ? homeworld = (Object.values(planet)[1]) : "" })

        console.log(person.name);

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-2 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" src={getPeopleImages(useParams().id)} />
                    <h1 className="detail-title position-absolute bottom-0">{person.name}</h1>
                </div>
                <div className="container row row-cols2">
                    <p className="col-6 fs-2 ps-4">Nacimiento: {person.birth_year}</p>
                    <p className="col-6 fs-2 ps-4">Planeta de origen: {homeworld}</p>
                    <p className="col-6 fs-2 ps-4">Género: {person.gender}</p>
                    <p className="col-6 fs-2 ps-4">Piel: {person.skin_color}</p>
                    <p className="col-6 fs-2 ps-4">Altura: {person.height}cm</p>
                    <p className="col-6 fs-2 ps-4">Peso: {person.mass}kg</p>
                    <p className="col-6 fs-2 ps-4">Pelo: {person.hair_color}</p>
                    <p className="col-6 fs-2 ps-4">Ojos: {person.eye_color}</p>
                </div>
                <div className="divider m-2"></div>
                <button className="btn btn-danger fs-3 mx-auto m-3">Leer luego</button>
            </div>
        )
    } else {

        // let people = (JSON.parse(localStorage.getItem("people"))).results

        return (
            <div className="container d-flex flex-column text-center">
                <h2 className="text-info long-time-ago">Personajes de la saga</h2>
                <div className="row justify-content-center gx-3">
                    {store.swPeople.map((person, index) => (
                        <PeopleCard key={index} uid={person.url.match(/(\d+)/)[0]} index={index} />
                    ))}
                </div>
                <a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a>
            </div>
        )
    }
}