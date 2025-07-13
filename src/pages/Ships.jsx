import { useEffect, useState } from "react";
import { ShipsCard } from "../components/ShipsCard";
import { Link, useParams } from "react-router-dom";
import { getShipsImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName } from "../services/StarWarsServices";

export const Ships = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        if (useParams().id === "all") {
            return (
                <div className="container d-flex flex-column text-center mt-5">
                    <h2 className="text-info long-time-ago">Naves y Estaciones espaciales</h2>
                    <div className="row justify-content-center gx-3">
                        {store.swShips.map((ship, i) => (<ShipsCard key={i} uid={ship.url.match(/(\d+)/)[0]} index={i} />))}
                    </div>
                    <Link className="btn btn-outline-info mx-auto mt-3" to="/ships">Vista de páginas</Link>
                    <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
                </div>
            )
        }

        const ship = store.swShips.find((item) => item.uid === useParams().id)

        const button = (store.favorites.find((item) => item.url === "/ships/" + ship.uid) != null) ?
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(ship.name, ship.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(ship.name, ship.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)

        function addFavorite(name, id) {
            if (store.favorites.find((item) => item.url === "/ships/" + id) != null) {
                dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/ships/" + id) })

            } else {
                dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "ships", name: name, url: "/ships/" + id, id: id }) })
            }
        }

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" style={{ height: "34em", objectFit: "cover" }} src={getShipsImages(ship.uid)} />
                    <div className="detail-title position-absolute bottom-0">
                        <h1>{ship.name}</h1>
                        <h5 className="">Modelo {ship.model}, clase {ship.starship_class}</h5>
                    </div>
                </div>
                <div className="container ms-0 row row-cols2">
                    <p className="col-12 fs-5 ps-4 my-0">Fabricante: <i>{ship.manufacturer === "unknown" ? "desconocido" : ship.manufacturer}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Coste: <i>{ship.cost_in_credits === "unknown" ? "desconocido" : ship.cost_in_credits + " créditos"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Longitud: <i>{ship.length === "unknown" ? "desconocida" : ship.length + "m"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Velocidad atmosférica máxima: <i>{ship.max_atmosphering_speed === "unknown" ? "desconocida" : ship.max_atmosphering_speed + "km/h"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Velocidad máxima en vacío: <i>{ship.MGLT === "unknown" ? "desconocido" : ship.MGLT + " MGLT"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Tripulación: <i>{ship.crew === "unknown" ? "desconocida" : ship.crew + " personas"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Pasajeros: <i>{ship.passengers === "unknown" ? "desconocidos" : ship.passengers + " personas"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Provisiones: <i>{ship.consumables === "unknown" ? "desconocido" : "para " + ship.consumables}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Carga máxima: <i>{ship.cargo_capacity === "unknown" ? "desconocida" : ship.cargo_capacity + "kg"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Velocidad luz clase <i>{ship.hyperdrive_rating === "unknown" ? "desconocido" : ship.hyperdrive_rating}</i></p>
                    <p className="fs-5 ps-4 my-0 text-justify">Pilotos: {ship.pilots.length === 0 ?
                        <i>desconocido</i>
                        :
                        ship.pilots.map((url, index) => index != (ship.pilots.length - 1) ?
                            <i key={index}>{getName(url, store.swPeople)}, </i>
                            :
                            <i key={index}>{getName(url, store.swPeople)}.</i>)}
                    </p>
                    <p className="fs-5 ps-4 my-0 text-justify">Peículas: {ship.films.length === 0 ?
                        <i>No aparece en ninguna</i>
                        :
                        ship.films.map((url, index) => index != (ship.films.length - 1) ?
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
            for (let index = 0; index < (store.swShips.length) / 9; index++) {
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
                            {store.swShips.map((ship, i) => {
                                if (i >= 9 * (index) && i < 9 * (index + 1)) {
                                    return (<ShipsCard key={i} uid={ship.url.match(/(\d+)/)[0]} index={i} />)
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
                <Link className="btn btn-outline-info mx-auto mt-3" to="/ships/all">Vista completa</Link>
                <a className="btn btn-outline-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}