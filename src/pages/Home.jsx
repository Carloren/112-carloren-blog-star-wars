import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import MainCarousel from "../components/MainCarousel.jsx";
import { Link } from "react-router-dom";
import { getPeople, getPlanets, getFilms, getVehicles, getShips, getSpecies } from "../services/StarWarsServices.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import { FilmsCard } from "../components/FilmsCard.jsx";
import { ShipsCard } from "../components/ShipsCard.jsx";
import { VehiclesCard } from "../components/VehiclesCard.jsx";
import { SpeciesCard } from "../components/SpeciesCard.jsx";
import { PlanetsCard } from "../components/PlanetsCard.jsx";

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
		//------------------------CARGAR NAVES----------------------
		if (localStorage.getItem("ships") == null) {

			getShips().then((data) => dispatch({ type: "get_ships", payload: data }))

		}
		//------------------------CARGAR VEHÍCULOS----------------------
		if (localStorage.getItem("vehicles") == null) {

			getVehicles().then((data) => dispatch({ type: "get_vehicles", payload: data }))

		}
		//------------------------CARGAR ESPECIES----------------------
		if (localStorage.getItem("species") == null) {

			getSpecies().then((data) => dispatch({ type: "get_species", payload: data }))

		}
		//------------------------CARGAR PLANETAS----------------------
		if (localStorage.getItem("planets") == null) {

			getPlanets().then((data) => dispatch({ type: "get_planets", payload: data }))

		}
		// let print = ""
		// for (let index = 0; index < JSON.parse(localStorage.getItem("ships")).length; index++) {
		// 	print += `
				
        // case ${JSON.parse(localStorage.getItem("ships"))[index].uid}:
        //     return ""`
		// console.log(print);
		
		// }

	}, [])

	return (
		<div className="container text-center mt-5">
			<h2 className="text-info mb-5 long-time-ago">Hace mucho tiempo, en una galaxia muy muy lejana...</h2>
			<MainCarousel />														{/*-------PERSONAS------- */}
			<Link to="/people/" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Personajes</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPeople.map((person, index) => {
						if (index < 10) {
							return (
								<PeopleCard key={index} uid={person.uid} index={index} />
							)
						}
					})}
					<Link to="/people" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>																	{/*-------PELÍCULAS------- */}
			<Link to="/films" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Películas</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swFilms.map((film, index) => {
						if (index < 10) {
							return (
								<FilmsCard key={index} uid={film.uid} index={index} />
							)
						}
					})}
					<Link to="/films" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>																	{/*-------NAVES------- */}
			<Link to="/ships" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Naves</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swShips.map((film, index) => {
						if (index < 10) {
							return (
								<ShipsCard key={index} uid={film.uid} index={index} />
							)
						}
					})}
					<Link to="/ships" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>																	{/*-------VEHÍCULOS------- */}
			<Link to="/vehicles" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Vehículos</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swVehicles.map((film, index) => {
						if (index < 10) {
							return (
								<VehiclesCard key={index} uid={film.uid} index={index} />
							)
						}
					})}
					<Link to="/vehicles" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>																	{/*-------ESPECIES------- */}
			<Link to="/species" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Especies</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swSpecies.map((film, index) => {
						if (index < 10) {
							return (
								<SpeciesCard key={index} uid={film.uid} index={index} />
							)
						}
					})}
					<Link to="/species" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>																	{/*-------PLANETAS------- */}
			<Link to="/planets" className="d-flex text-warning long-time-ago">
				<h2 className="mt-4 text-start">Planetas</h2>
				<div className="mt-5 mx-3 divider"></div>
			</Link>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPlanets.map((planet, index) => {
						if (index < 10) {
							return (
								<PlanetsCard key={index} uid={planet.uid} index={index} />
							)
						}
					})}
					<Link to="/planets" className="btn btn-outline-info my-2 col-1 btn-more">Ver más</Link>
				</div>
			</div>
			<a className="btn btn-warning mx-auto mt-5" href="#">Volver arriba</a>
		</div>
	);
}; 