import { useEffect, useState } from "react";
import { FilmsCard } from "../components/FilmsCard";
import { useParams } from "react-router-dom";
import { getFilmsImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Films = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        let films = store.swFilms.find((item) => item.uid === useParams().id)
        let homeworld = ""

        // JSON.parse(localStorage.getItem("planets")).map((planet) => { (Object.values(planet)[2] === films.properties.homeworld) ? homeworld = (Object.values(planet)[1]) : "" })

        console.log(films.name);

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-2 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" src={getFilmsImages(useParams().id)} />
                    <h1 className="detail-title position-absolute bottom-0">{films.name}</h1>
                </div>
                <div className="container row row-cols2">
                    <p className="col-6 fs-2 ps-4">Nacimiento: {films.birth_year}</p>
                    <p className="col-6 fs-2 ps-4">Planeta de origen: {homeworld}</p>
                    <p className="col-6 fs-2 ps-4">Género: {films.gender}</p>
                    <p className="col-6 fs-2 ps-4">Piel: {films.skin_color}</p>
                    <p className="col-6 fs-2 ps-4">Altura: {films.height}cm</p>
                    <p className="col-6 fs-2 ps-4">Peso: {films.mass}kg</p>
                    <p className="col-6 fs-2 ps-4">Pelo: {films.hair_color}</p>
                    <p className="col-6 fs-2 ps-4">Ojos: {films.eye_color}</p>
                </div>
                <div className="divider m-2"></div>
                <button className="btn btn-danger fs-3 mx-auto m-3">Leer luego</button>
            </div>
        )
    } else {

        // let films = (JSON.parse(localStorage.getItem("films"))).results

        return (
            <div className="container d-flex flex-column text-center">
                <h2 className="text-info long-time-ago">Saga de películas</h2>
                <div className="row justify-content-center gx-3">
                    {store.swFilms.map((films, index) => (
                        <FilmsCard key={index} uid={films.url.match(/(\d+)/)[0]} index={index} />
                    ))}
                </div>
                <a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a>
            </div>
        )
    }
}