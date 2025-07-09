import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import MainCarousel from "../components/MainCarousel.jsx";
import { Link } from "react-router-dom";
import { getPeople, getPlanets, getFilms } from "../services/StarWarsServices.jsx";
import { PlanetsCard } from "../components/PlanetsCard.jsx";
import { FilmsCard } from "../components/FilmsCard.jsx";

//console.log(("https://swapi.info/api/people/13456").match(/(\d+)/)[0]); //esto sirve para quedarse solo con los numeros de un string

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		//------------------------CARGAR PERSONAS----------------------
		if (localStorage.getItem("people") == null) {

			getPeople().then((data) => dispatch({ type: "get_people", payload: data }))

		}
		//------------------------CARGAR PELÍCULAS----------------------
		if (localStorage.getItem("films") == null) {

			getFilms().then((data) => dispatch({ type: "get_films", payload: data }))

		}
		//------------------------CARGAR PLANETAS----------------------
		if (localStorage.getItem("planets") == null) {

			getPlanets().then((data) => dispatch({ type: "get_planets", payload: data }))

		}
	}, [])

	return (
		<div className="container text-center mt-5">
			<h2 className="text-info mb-5 longTimeAgo">Hace mucho tiempo, en una galaxia muy muy lejana...</h2>
			<MainCarousel />
			<Link to="/people/" className="d-flex text-warning longTimeAgo">
				<h2 className="mt-4 text-start">Personajes</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPeople.map((person, index) => {
						if (index < 10) {
							return (
								<PeopleCard key={index} uid={person.url.match(/(\d+)/)[0]} index={index} />
							)
						}
					})}
					<Link to="/people" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>
			<Link to="/films" className="d-flex text-warning longTimeAgo">
				<h2 className="mt-4 text-start">Películas</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swFilms.map((film, index) => {
						if (index < 10) {
							return (
								<FilmsCard key={index} uid={film.url.match(/(\d+)/)[0]} index={index} />
							)
						}
					})}
				</div>
			</div>
			<Link to="/planets" className="d-flex text-warning longTimeAgo">
				<h2 className="mt-4 text-start">Planetas</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPlanets.map((planet, index) => {
						if (index < 10) {
							return (
								<PlanetsCard key={index} uid={planet.url.match(/(\d+)/)[0]} index={index} />
							)
						}
					})}
				</div>
			</div>
		</div>
	);
}; 