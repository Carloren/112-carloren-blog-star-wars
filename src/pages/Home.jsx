import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import MainCarousel from "../components/MainCarousel.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function getPeople() {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				dispatch({ type: 'get_people', payload: data.results })
				localStorage.setItem("people", JSON.stringify(data.results))
			})
			.catch(err => console.error(err))

	}

	useEffect(() => {
		if (localStorage.getItem("people") != null) {
			dispatch({ type: 'get_people', payload: JSON.parse(localStorage.getItem("people")) })
		} else {
			getPeople()
		}
	}, [])

	return (
		<div className="container text-center mt-5">
			<h2 className="text-info mb-5" id="longTimeAgo">Hace mucho tiempo, en una galaxia muy muy lejana...</h2>
			<MainCarousel />
			<h2 className="mt-5 text-start">Personajes:</h2>
			<div className="container-fluid d-flex mt-2">
				<div className="row p-0 gx-3 flex-nowrap hide-scroll">
					{store.swPeople.map((person) => (
						<PeopleCard key={person.uid} uid={person.uid} />
					))}
				</div>
			</div>

		</div>
	);
}; 