import { useEffect, useState } from "react";
import { FilmsCard } from "../components/FilmsCard";
import { Link, useParams } from "react-router-dom";
import { getFilmsImages } from "../services/StarWarsImages";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getName, tradEpisode } from "../services/StarWarsServices";

export const Films = () => {

    const { store, dispatch } = useGlobalReducer()

    if (useParams().id != null) {

        const film = store.swFilms.find((item) => item.uid === useParams().id)

        const button = (store.favorites.find((item) => item.url === "/films/" + film.uid) != null) ?
            (<button className="btn btn-danger my-3 mx-auto" onClick={() => addFavorite(film.name, film.uid)}>Quitar de favoritos <i className="fa-solid fa-heart"></i></button>)
            :
            (<button className="btn btn-outline-danger my-3 mx-auto" onClick={() => addFavorite(film.name, film.uid)}>Añadir a favoritos <i className="fa-regular fa-heart"></i></button>)



        function addFavorite(name, id) {
            if (store.favorites.find((item) => item.url === "/films/" + id) != null) {
                dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != "/films/" + id) })

            } else {
                dispatch({ type: "get_favorites", payload: store.favorites.concat({ group: "films", name: name, url: "/films/" + id, id: id }) })
            }
        }

        return (
            <div className="detail-box container d-flex flex-column border border-white mt-5 rounded bg-black p-0">
                <div className="position-relative">
                    <img className="rounded-top w-100 detail-image" src={getFilmsImages(film.uid)} />
                    <div className="detail-title ps-4 position-absolute bottom-0">
                        <h1>{film.title}</h1>
                        <h5 className="">Episodio {tradEpisode(film.episode_id)}</h5>
                    </div>
                </div>
                <div className="container ms-0 row row-cols2">
                    <p className="fs-5 ps-4 text-warning fw-bold my-0 text-justify">{film.opening_crawl}</p>
                    <p className="fs-5 ps-4 my-0">Director: <i>{film.director}</i></p>
                    <p className="fs-5 ps-4 my-0">Productores: <i>{film.producer}</i></p>
                    <p className="fs-5 ps-4 my-0 text-justify">Personajes: {film.characters.map((url, index) => index != (film.characters.length - 1) ? <i key={index}>{getName(url, store.swPeople)}, </i> : <i key={index}>{getName(url, store.swPeople)}.</i>)}</p>
                    {/* <p className="fs-5 ps-4 my-0 text-justify">Planetas: {film.characters.map((url, index) => index != (film.characters.length - 1) ? <i>{getName(url, store.swPlanets)}, </i> : <i>{getName(url, store.swPlanets)}.</i>)}</p> */}
                </div>
                <div className="divider mx-5"></div>
                {button}
            </div>
        )
    } else {

        return (
            <div className="container d-flex flex-column text-center mt-5">
                <h2 className="text-info long-time-ago">Filmajes de la saga</h2>
                <div className="row justify-content-center gx-3">
                    {store.swFilms.map((film, i) => (<FilmsCard key={i} uid={film.url.match(/(\d+)/)[0]} index={i} />))}
                </div>
                <a className="btn btn-warning mx-auto mt-3" href="#">Volver arriba</a>
            </div>
        )
    }
}