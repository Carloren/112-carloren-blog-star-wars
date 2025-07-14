import { useEffect, useState } from "react";
import { PlanetsCard } from "../components/PlanetsCard";
import { Link, useParams } from "react-router-dom";
import { getPlanetsImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName } from "../services/StarWarsServices";

export const Planets = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        if (useParams().id === "all") {
            return (
                <div className="container d-flex flex-column text-center mt-5">
                    <h2 className="text-info long-time-ago">Naves y Estaciones espaciales</h2>
                    <div className="row justify-content-center gx-3">
                        {store.swPlanets.map((planet, i) => {
                            if (planet.name != "unknown") {
                                return (<PlanetsCard key={i} uid={planet.url.match(/(\d+)/)[0]} index={i} />)
                            }
                        })}
                    </div>
                    <Link className="btn btn-outline-info mx-auto mt-3" to="/planets">Vista de páginas</Link>
                    <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
                </div>
            )
        }

        const planet = store.swPlanets.find((item) => item.uid === useParams().id)

        const button = (store.favorites.find((item) => item.url === "/planets/" + planet.uid) != null) ?
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(planet.name, planet.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(planet.name, planet.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)

        function addFavorite(name, id) {
            if (store.favorites.find((item) => item.url === "/planets/" + id) != null) {
                dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/planets/" + id) })

            } else {
                dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "planets", name: name, url: "/planets/" + id, id: id }) })
            }
        }

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" style={{ height: "34em", objectFit: "cover" }} src={getPlanetsImages(planet.uid)} />
                    <div className="detail-title position-absolute bottom-0">
                        <h1>{planet.name}</h1>
                    </div>
                </div>
                <div className="container ms-0 row row-cols2">
                    <p className="col-6 fs-5 ps-4 my-0">Horas en un día: <i>{planet.rotation_period === "unknown" ? "desconocido" : planet.rotation_period}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Días en un año: <i>{planet.orbital_period === "unknown" ? "desconocido" : planet.orbital_period}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Diámetro: <i>{planet.diameter === "unknown" ? "desconocido" : planet.diameter + " km"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Gravedad: <i>{planet.gravity === "unknown" ? "desconocida" : planet.gravity}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Clima: <i>{planet.climate === "unknown" ? "desconocido" : planet.climate}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Tipo de terreno: <i>{planet.terrain === "unknown" ? "desconocida" : planet.terrain}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Agua en la superficie: <i>{planet.surface_water === "unknown" ? "desconocidos" : planet.surface_water + "%"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Población: <i>{planet.population === "unknown" ? "desconocido" : planet.population}</i></p>
                    <p className="fs-5 ps-4 my-0 text-justify">Planeta natal de: {planet.residents.length === 0 ?
                        <i>desconocido</i>
                        :
                        planet.residents.map((url, index) => index != (planet.residents.length - 1) ?
                            <i key={index}>{getName(url, store.swPeople)}, </i>
                            :
                            <i key={index}>{getName(url, store.swPeople)}.</i>)}
                    </p>
                    <p className="fs-5 ps-4 my-0 text-justify">Peículas: {planet.films.length === 0 ?
                        <i>No aparece en ninguna</i>
                        :
                        planet.films.map((url, index) => index != (planet.films.length - 1) ?
                            <i key={index}>{getName(url, store.swFilms)}, </i>
                            :
                            <i key={index}>{getName(url, store.swFilms)}.</i>)}
                    </p>
                </div>
                <div className="divider mx-5"></div>
                {button}
            </div>
        )
    } else {

        const [pageNumber, setPageNumber] = useState([])
        const [pages, setPages] = useState([])

        function getPages() {
            let tempPageNumber = []
            let tempPages = []
            for (let index = 0; index < (store.swPlanets.length) / 9; index++) {
                tempPageNumber = (tempPageNumber.concat(
                    <li key={"number" + index} className="nav-item" role="presentation">
                        <button className={(index === 0) ? "mx-1 nav-link nav-page active" : "mx-1 nav-link nav-page"} id={"page-" + (index + 1) + "-tab"} data-bs-toggle="pill" data-bs-target={"#page-" + (index + 1)}
                            type="button" role="tab" aria-controls={"page-" + (index + 1)} aria-selected="true">
                            {index + 1}
                        </button>
                    </li >
                )
                )
                tempPages = (tempPages.concat(
                    <div key={"page" + index} className={(index === 0) ? "tab-pane fade show active" : "tab-pane fade"} id={"page-" + (index + 1)} role="tabpanel"
                        aria-labelledby={"page-" + (index + 1) + "-tab"} tabIndex={index}>
                        <div className="row justify-content-center gx-3">
                            {store.swPlanets.map((planet, i) => {
                                if (planet.name != "unknown") {

                                    if (i >= 9 * (index) && i < 9 * (index + 1)) {
                                        return (<PlanetsCard key={i} uid={planet.url.match(/(\d+)/)[0]} index={i} />)
                                    }
                                }
                            })}
                        </div>
                    </div>
                )
                )
            }
            setPageNumber(tempPageNumber)
            setPages(tempPages)
        }

        useEffect(() => {
            getPages()
        }, [])

        return (
            <div className="container d-flex flex-column text-center mt-5">
                <h2 className="text-info long-time-ago">Naves y Estaciones espaciales</h2>
                <div className="tab-content" id="pills-tabContent">
                    {pages}
                </div>
                <ul className="nav nav-pills mt-3 mx-auto" id="pills-tab" role="tablist">
                    {pageNumber}
                </ul>
                <Link className="btn btn-outline-info mx-auto mt-3" to="/planets/all">Vista completa</Link>
                <a className="btn btn-outline-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}