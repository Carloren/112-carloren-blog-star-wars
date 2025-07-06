import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import MainCarousel from "../components/MainCarousel.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function getPeople() {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => dispatch({ type: 'get_people', payload: data.results }))
			.catch(err => console.error(err))

	}

	useEffect(() => {
		getPeople()
	}, [])

	return (
		<div className="text-center mt-5">
			<h2 className="text-info mb-5" id="longTimeAgo">Hace mucho tiempo. En una galaxia muy muy lejana...</h2>
			<MainCarousel />
			{store.swPeople.map((person) => (
				<Card key={person.uid} uid={person.uid} />
			))}

		</div>
	);
}; 