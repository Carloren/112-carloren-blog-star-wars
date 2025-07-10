import { useState } from "react";
import { PlanetsCard } from "../components/PlanetsCard";

export const Planets = () => {

    const [planets, setPlanets] = useState(JSON.parse(localStorage.getItem("planets")))

    return (
        <div className="container d-flex flex-column text-center">
            <h2 className="text-info" id="long-time-ago">Planetas de la galaxia</h2>
            <div className="row justify-content-center gx-3">
                {planets.map((planet) => (
                    <PlanetsCard key={planet.uid} uid={planet.uid} />
                ))}
            </div>
            <a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a>
        </div>
    )
}