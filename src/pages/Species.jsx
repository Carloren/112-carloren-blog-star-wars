import { useEffect, useState } from "react";
import { SpeciesCard } from "../components/SpeciesCard";
import { Link, useParams } from "react-router-dom";
import { getSpeciesImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName } from "../services/StarWarsServices";

export const Species = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        if (useParams().id === "all") {
            return (
                <div className="container d-flex flex-column text-center mt-5">
                    <h2 className="text-info long-time-ago">Naves y Estaciones espaciales</h2>
                    <div className="row justify-content-center gx-3">
                        {store.swSpecies.map((specie, i) => (<SpeciesCard key={i} uid={specie.url.match(/(\d+)/)[0]} index={i} />))}
                    </div>
                    <Link className="btn btn-outline-info mx-auto mt-3" to="/species">Vista de páginas</Link>
                    <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
                </div>
            )
        }

        const specie = store.swSpecies.find((item) => item.uid === useParams().id)

        const speciesPeople = (specie.name === "Human" ?
            store.swPeople.map(
                (person) => ((store.swSpecies.filter(                                                  //con esta función agrego todas la url que faltan a la especie humana...
                    (specie) => specie.people.find(                                                    //...ya que todos los que no están son humanos
                        (url) => url === person.url))).length === 0 ? person.url : null)).filter(
                            (item) => item != null).concat(specie.people)

            :
            specie.people
        )

        const button = (store.favorites.find((item) => item.url === "/species/" + specie.uid) != null) ?
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(specie.name, specie.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(specie.name, specie.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)

        function addFavorite(name, id) {
            if (store.favorites.find((item) => item.url === "/species/" + id) != null) {
                dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/species/" + id) })

            } else {
                dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "species", name: name, url: "/species/" + id, id: id }) })
            }
        }




        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" style={{ height: "34em", objectFit: "cover" }} src={getSpeciesImages(specie.uid)} />
                    <div className="detail-title position-absolute bottom-0">
                        <h1>{specie.name}</h1>
                        <h5 className="text-warning">Ser {specie.designation} del grupo de los {specie.classification}</h5>
                    </div>
                </div>
                <div className="container ms-0 row row-cols2">
                    <p className="col-6 fs-5 ps-4 my-0">Altura media: <i>{specie.average_height === "n/a" ? "indefinida" : specie.average_height + " cm"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Vida media: <i>{specie.average_lifespan === "unknown" ? "desconocida" : specie.average_lifespan === "indefinite" ? "indefinida" : specie.average_lifespan + " años"}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Colores de piel: <i>{specie.skin_colors === "n/a" ? "indefinidos" : specie.skin_colors}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Colores de pelo: <i>{specie.hair_colors === "n/a" ? "indefinidos" : specie.hair_colors}</i></p>
                    <p className="col-12 fs-5 ps-4 my-0">Colores de ojos: <i>{specie.eye_colors === "n/a" ? "indefinidos" : specie.eye_colors}</i></p>
                    <p className="col-6 fs-5 ps-4">Planeta de origen: <i>{specie.homeworld === null ? "ninguno" : specie.homeworld === "unknown" ? "desconocido" : getName(specie.homeworld, store.swPlanets)}</i></p>
                    <p className="col-6 fs-5 ps-4 my-0">Idioma: <i>{specie.language === "unknown" ? "desconocida" : specie.language === "n/a" ? "indefinido" : specie.language}</i></p>
                    <p className="fs-5 ps-4 my-0 text-justify">Personajes: {speciesPeople.length === 0 ?
                        <i>desconocidos</i>
                        :
                        speciesPeople.map((url, index) => index != (speciesPeople.length - 1) ?
                            <i key={index}>{getName(url, store.swPeople)}, </i>
                            :
                            <i key={index}>{getName(url, store.swPeople)}.</i>)}
                    </p>
                    <p className="fs-5 ps-4 my-0 text-justify">Peículas: {specie.films.length === 0 ?
                        <i>No aparece en ninguna</i>
                        :
                        specie.films.map((url, index) => index != (specie.films.length - 1) ?
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
            for (let index = 0; index < (store.swSpecies.length) / 9; index++) {
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
                            {store.swSpecies.map((specie, i) => {
                                if (i >= 9 * (index) && i < 9 * (index + 1)) {
                                    return (<SpeciesCard key={i} uid={specie.url.match(/(\d+)/)[0]} index={i} />)
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
                <Link className="btn btn-outline-info mx-auto mt-3" to="/species/all">Vista completa</Link>
                <a className="btn btn-outline-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}