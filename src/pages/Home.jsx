import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

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
			<h1>Personajes de Star Wars:</h1>
			{store.swPeople.map((person) => (
				<Card key={person.uid} uid={person.uid} />
			))}

		</div>
	);
}; 