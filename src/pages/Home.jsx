import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import MainCarousel from "../components/MainCarousel.jsx";
import { Link } from "react-router-dom";
import { getPeople, getPlanets } from "../services/StarWarsServices.jsx";
import { PlanetsCard } from "../components/PlanetsCard.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		//------------------------CARGAR PERSONAS----------------------
		if (localStorage.getItem("people") != null) {
			dispatch({ type: 'get_people', payload: (JSON.parse(localStorage.getItem("people")).results) })

		} else {

			getPeople().then((data) => dispatch({ type: "get_people", payload: data.results }))

		}
		//------------------------CARGAR PLANETAS----------------------
		if (localStorage.getItem("planets") != null) {
			dispatch({ type: 'get_planets', payload: JSON.parse(localStorage.getItem("planets")) })

		} else {

			getPlanets().then((data) => dispatch({ type: "get_planets", payload: data }))

		}
	}, [])

	return (
		<div className="container text-center mt-5">
			<h2 className="text-info mb-5 longTimeAgo">Hace mucho tiempo, en una galaxia muy muy lejana...</h2>
			<MainCarousel />
			<Link to="/people" className="d-flex text-warning longTimeAgo">
				<h2 className="mt-4 text-start">Personajes</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPeople.map((person) => (
						<PeopleCard key={person.uid} uid={person.uid} />
					))}
				</div>
			</div>
			<Link to="/planets" className="d-flex text-warning longTimeAgo">
				<h2 className="mt-4 text-start">Planetas</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPlanets.map((planet) => (
						<PlanetsCard key={planet.uid} uid={planet.uid} />
					))}
				</div>
			</div>

		</div>
	);
}; 