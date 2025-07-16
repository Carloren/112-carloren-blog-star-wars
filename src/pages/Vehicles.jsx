import { useEffect, useState } from "react";
import { VehiclesCard } from "../components/VehiclesCard";
import { Link, useParams } from "react-router-dom";
import { getVehiclesImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName } from "../services/StarWarsServices";

export const Vehicles = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        if (useParams().id === "all") {
            return (
                <div className="container d-flex flex-column text-center mt-5">
                    <h2 className="text-info long-time-ago">Vehículos terrestres y cazas</h2>
                    <div className="row justify-content-center gx-3">
                        {store.swVehicles.map((vehicle, i) => (<VehiclesCard key={i} uid={vehicle.url.match(/(\d+)/)[0]} index={i} />))}
                    </div>
                    <Link className="btn btn-outline-info mx-auto mt-3" to="/vehicles">Vista de páginas</Link>
                    <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
                </div>
            )
        }

        const vehicle = store.swVehicles.find((item) => item.uid === useParams().id)

        const button = (store.favorites.vehicles.find((item) => item.url === "/vehicles/" + vehicle.uid) != null) ?
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(vehicle.name, vehicle.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(vehicle.name, vehicle.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)

        function addFavorite(name, id) {
            if (store.favorites.vehicles.find((item) => item.url === "/vehicles/" + id) != null) {
                dispatch({ type: "get_favorites", payload: { ...store.favorites, vehicles: store.favorites.vehicles.filter((favitem) => favitem.url != "/vehicles/" + id) } })
            } else {
                dispatch({ type: "get_favorites", payload: { ...store.favorites, vehicles: store.favorites.vehicles.concat({ name: name, url: "/vehicles/" + id, id: id }) } })
            }
        }

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" src={getVehiclesImages(vehicle.uid)} />
                    <div className="detail-title mx-2 mx-md-3 px-2 px-md-3 position-absolute bottom-0">
                        <h1>{vehicle.name}</h1>
                        <h5 className="text-warning">Modelo {vehicle.model}, clase {vehicle.vehicle_class}</h5>
                    </div>
                </div>
                <div className="container px-2 px-md-3 ms-0 row row-cols2">
                    <p className="col-12 fs-5 text-justify px-2 px-md-3 my-0">Fabricante: <i>{vehicle.manufacturer === "unknown" ? "desconocido" : vehicle.manufacturer}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Coste: <i>{vehicle.cost_in_credits === "unknown" ? "desconocido" : vehicle.cost_in_credits + " créditos"}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Longitud: <i>{vehicle.length === "unknown" ? "desconocida" : vehicle.length + "m"}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Velocidad máxima: <i>{vehicle.max_atmosphering_speed === "unknown" ? "desconocida" : vehicle.max_atmosphering_speed + "km/h"}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Carga máxima: <i>{vehicle.cargo_capacity === "unknown" ? "desconocida" : vehicle.cargo_capacity + "kg"}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Tripulación: <i>{vehicle.crew === "unknown" ? "desconocida" : vehicle.crew}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Pasajeros: <i>{vehicle.passengers === "unknown" ? "desconocidos" : vehicle.passengers}</i></p>
                    <p className="col-12 col-md-6 fs-5 text-justify px-2 px-md-3 my-0">Provisiones: <i>{vehicle.consumables === "unknown" ? "desconocido" : "para " + vehicle.consumables}</i></p>
                    <p className="fs-5 text-justify px-2 px-md-3 my-0 ">Pilotos: {vehicle.pilots.length === 0 ?
                        <i>desconocido</i>
                        :
                        vehicle.pilots.map((url, index) => index != (vehicle.pilots.length - 1) ?
                            <i key={index}>{getName(url, store.swPeople)}, </i>
                            :
                            <i key={index}>{getName(url, store.swPeople)}.</i>)}
                    </p>
                    <p className="fs-5 text-justify px-2 px-md-3 my-0 ">Peículas: {vehicle.films.length === 0 ?
                        <i>No aparece en ninguna</i>
                        :
                        vehicle.films.map((url, index) => index != (vehicle.films.length - 1) ?
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
            for (let index = 0; index < (store.swVehicles.length) / 9; index++) {
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
                            {store.swVehicles.map((vehicle, i) => {
                                if (i >= 9 * (index) && i < 9 * (index + 1)) {
                                    return (<VehiclesCard key={i} uid={vehicle.url.match(/(\d+)/)[0]} index={i} />)
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
                <h2 className="text-info long-time-ago">Vehículos terrestres y cazas</h2>
                <div className="tab-content" id="pills-tabContent">
                    {pages}
                </div>
                <ul className="nav nav-pills mt-3 mx-auto" id="pills-tab" role="tablist">
                    {pageNumber}
                </ul>
                <Link className="btn btn-outline-info mx-auto mt-3" to="/vehicles/all">Vista completa</Link>
                <a className="btn btn-outline-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}