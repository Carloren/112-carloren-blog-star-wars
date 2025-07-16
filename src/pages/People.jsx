import { useEffect, useState } from "react";
import { PeopleCard } from "../components/PeopleCard";
import { Link, useParams } from "react-router-dom";
import { getPeopleImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName } from "../services/StarWarsServices";

export const People = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {           // Controla si hay algo más en la url además del nombre del grupo

        if (useParams().id === "all") {     // Si la extensión de url es /all, muestra absolutamente todos los elementos del grupo
            return (
                <div className="container d-flex flex-column text-center mt-5">
                    <h2 className="text-info long-time-ago">Personajes de la saga</h2>
                    <div className="row justify-content-center gx-3">                   {/* Una tarjeta por cada elemento */}
                        {store.swPeople.map((person, i) => (<PeopleCard key={i} uid={person.uid} index={i} />))}
                    </div>
                    <Link className="btn btn-outline-info mx-auto mt-3" to="/people">Vista de páginas</Link>
                    <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
                </div>
            )
        }
                                    // Si la extensión es un número, guardamos el elemento con dicha uid
        const person = store.swPeople.find((item) => item.uid === useParams().id)

        const button = (store.favorites.people.find((item) => item.url === "/people/" + person.uid) != null) ? //Botón de favorito igual que en las Card
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(person.name, person.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :                               
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(person.name, person.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)

        function addFavorite(name, id) {                                //función de favorito igual que en las Card
            if (store.favorites.people.find((item) => item.url === "/people/" + id) != null) {
                dispatch({ type: "get_favorites", payload: { ...store.favorites, people: store.favorites.people.filter((favitem) => favitem.url != "/people/" + id) } })
            } else {
                dispatch({ type: "get_favorites", payload: { ...store.favorites, people: store.favorites.people.concat({ name: name, url: "/people/" + id, id: id }) } })
            }
        }
                                                                        //Vista detallada del elemento concreto
        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" src={getPeopleImages(person.uid)} />
                    <h1 className="detail-title px-2 px-md-3 ps-3 position-absolute bottom-0">{person.name}</h1>
                </div>
                <div className="container px-2 px-md-3 ms-0 row row-cols2">
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Nacimiento: <i>{person.birth_year === "unknown" ? "desconocido" : person.birth_year}</i></p>
                    <p className="col- col-md-4 fs-5 text-justify px-2 px-md-3">Planeta natal: <i>{person.homeworld === "unknown" ? "desconocido" : getName(person.homeworld, store.swPlanets)}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Género: <i>{person.gender === "unknown" ? "desconocido" : person.gender}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Piel: <i>{person.skin_color === "unknown" ? "desconocido" : person.skin_color}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Altura: <i>{person.height === "unknown" ? "desconocido" : person.height + "cm"}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Peso: <i>{person.mass === "unknown" ? "desconocido" : person.mass + "kg"}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Pelo: <i>{person.hair_color === "unknown" ? "desconocido" : person.hair_color}</i></p>
                    <p className="col-12 col-md-4 fs-5 text-justify px-2 px-md-3">Ojos: <i>{person.eye_color === "unknown" ? "desconocido" : person.eye_color}</i></p>
                    <p className="col-12 fs-5 text-justify px-2 px-md-3">Películas: <i>{person.films.length != 0 ?
                        person.films.map((item, index) => index != (person.films.length - 1) ?
                            <span key={index}>{getName(item, store.swFilms)}, </span>        //Estos mapeos traen formateada la info para poder acceder a ella fácilmente
                            :
                            <span key={index}>{getName(item, store.swFilms)}.</span>)
                        :
                        "No aparece en ninguna"}
                    </i>
                    </p>
                    <p className="col-12 fs-5 text-justify px-2 px-md-3">Naves: <i>{person.starships.length != 0 ?
                        person.starships.map((item, index) => index != (person.starships.length - 1) ?
                            <span key={index}>{getName(item, store.swShips)}, </span>
                            :
                            <span key={index}>{getName(item, store.swShips)}.</span>)
                        :
                        "No tiene"}
                    </i>
                    </p>
                    <p className="col-12 fs-5 text-justify px-2 px-md-3">Vehículos: <i>{person.vehicles.length != 0 ?
                        person.vehicles.map((item, index) => index != (person.vehicles.length - 1) ?
                            <span key={index}>{getName(item, store.swVehicles)}, </span>
                            :
                            <span key={index}>{getName(item, store.swVehicles)}.</span>)
                        :
                        "No tiene"}
                    </i>
                    </p>
                    <p className="col-12 fs-5 text-justify px-2 px-md-3">Especie: <i>{person.species.length != 0 ?
                        person.species.map((item, index) => index != (person.species.length - 1) ?
                            <span key={index}>{getName(item, store.swSpecies)}, </span>
                            :
                            <span key={index}>{getName(item, store.swSpecies)}.</span>)
                        :
                        <span><Link className="detail-link" to="/species/1" >Human</Link>.</span>}  {/*En la especie humana no están todos y todos los que no están son humanos */}
                    </i>                                                                            {/*Así que en este caso la excepción siempre es un enlace a la raza humana */}
                    </p>
                </div>
                <div className="divider mx-5"></div>
                {button}
            </div>
        )
    } else {
                                                            // Aunque útil, una vista completa puede abrumar, así que por defecto la he dividido en páginas 
        const [pageNumber, setPageNumber] = useState([])
        const [pages, setPages] = useState([])

        function getPages() {              //--------------Con esta función vamos a hacer una página por cada 9 elementos --------------
            let tempPageNumber = []
            let tempPages = []                              // ↓↓ En este bucle creamos tantos botones de página como sean necesarios
            for (let index = 0; index < (store.swPeople.length) / 9; index++) {
                tempPageNumber = (tempPageNumber.concat(
                    <li key={"number" + index} className="nav-item" role="presentation">
                        <button className={(index === 0) ? "mx-1 nav-link nav-page active" : "mx-1 nav-link nav-page"} id={"page-" + (index + 1) + "-tab"} data-bs-toggle="pill" data-bs-target={"#page-" + (index + 1)}
                            type="button" role="tab" aria-controls={"page-" + (index + 1)} aria-selected="true">
                            {index + 1}
                        </button>
                    </li >
                )
                )                                           // ↓↓ En este otro creamos cada página asociada
                tempPages = (tempPages.concat(
                    <div key={"page" + index} className={(index === 0) ? "tab-pane fade show active" : "tab-pane fade"} id={"page-" + (index + 1)} role="tabpanel"
                        aria-labelledby={"page-" + (index + 1) + "-tab"} tabIndex={index}>
                        <div className="row justify-content-center gx-3">
                            {store.swPeople.map((person, i) => {
                                if (i >= 9 * (index) && i < 9 * (index + 1)) {  // Con las 9 tarjetas correspondientes para cada página
                                    return (<PeopleCard key={i} uid={person.uid} index={i} />)
                                }
                            })}
                        </div>
                    </div>
                )
                )
            }
            setPageNumber(tempPageNumber)
            setPages(tempPages)             //Guardamos la construcción en los estados correspondientes para llamarlos más adelante
        }

        useEffect(() => {
            getPages()
        }, [])

        return (                            // Finalmente, el envoltorio de la página
            <div className="container d-flex flex-column text-center mt-5">
                <h2 className="text-info long-time-ago">Personajes de la saga</h2>
                <div className="tab-content" id="pills-tabContent">
                    {pages}
                </div>
                <ul className="nav nav-pills mt-3 mx-auto" id="pills-tab" role="tablist">
                    {pageNumber}
                </ul>
                <Link className="btn btn-outline-info mx-auto mt-3" to="/people/all">Vista completa</Link>
                <a className="btn btn-outline-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}