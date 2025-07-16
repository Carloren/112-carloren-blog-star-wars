import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const MyNavbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const getGroupName = (group) => {
		switch (group) {												//Para mostrar las categorías en la favList
			case "people": return "Personajes"
			case "films": return "Películas"
			case "ships": return "Naves"
			case "vehicles": return "Vehículos"
			case "species": return "Especies"
			case "planets": return "Planetas"

			default: return group
		}
	}

	const favorites = (													//↓↓ ¿Hay algo en favoritos?
		(Object.values(store.favorites).filter((i) => i.length != 0).length != 0) ? 		
			(<ul className="dropdown-menu dropdown-menu-end text-start bg-black border-warning hide-scroll hide-y" >
				{Object.keys(store.favorites).map((group) => store.favorites[group].length === 0 ? ""
					:													//↑↑ Recorremos cada grupo y, si están vacíos, no muestra nada...
					<div key={group} >									{/*...si hay algo, muestra el nombre del grupo y su contenido ↓↓↓ */}
						<li className="dropdown-item disabled my-0 py-0 fst-italic">{getGroupName(group)}</li>
						{store.favorites[group].map((favItem) =>
							< li key={favItem.url} className="dropdown-item d-flex position-relative" >
								<Link className="dropdown-item" to={favItem.url}>{favItem.name}</Link>
								<button className="crossButton btn rounded-circle hide position-absolute end-0 top-0" onClick={(e) => { e.stopPropagation(); deleteFav(group, favItem.url) }}>×</button>
							</li>)}
					</div>
				)}
			</ul >)
			:															//↓↓ Si no había nada en favoritos, muestra este mensaje
			(<ul className="dropdown-menu dropdown-menu-end text-start bg-black border-warning" >
				<p className="dropdown-item disabled my-0 text-center fst-italic">No hay ninguno</p>
			</ul>)
	)

	const searchList = (												//La lista que mostrará el autocompletar: Todos los nombres y su categoría
		store.swPeople.map((person) => <option key={"person" + person.uid} value={person.name}>Personaje</option>)
			.concat(store.swFilms.map((film) => <option key={"film" + film.uid} value={film.title}>Película</option>))
			.concat(store.swShips.map((ship) => <option key={"ship" + ship.uid} value={ship.name}>Nave</option>))
			.concat(store.swVehicles.map((vehicle) => <option key={"vehicle" + vehicle.uid} value={vehicle.name}>Vehículo</option>))
			.concat(store.swSpecies.map((specie) => <option key={"specie" + specie.uid} value={specie.name}>Especie</option>))
			.concat(store.swPlanets.map((planet) => <option key={"planet" + planet.uid} value={planet.name}>Planeta</option>))
	)

	const [searchButton, setSearching] = useState(<Link type="button" className="btn btn-outline-info">Buscar</Link>)

	function searchPage(event) {										//Trae el objeto cuyo nombre sea el del input
		let searchItem = ((store.swPeople
			.concat(store.swFilms)
			.concat(store.swShips)
			.concat(store.swVehicles)
			.concat(store.swSpecies)
			.concat(store.swPlanets)
			.find((item) => item.name === event.target.value || item.title === event.target.value)))

		if (searchItem != null) {										//Si coincide, el botón llevará hasta el detalle del elemento
			setSearching(<Link type="button" className="btn btn-outline-info" to={searchItem.page}>Buscar</Link>)
		}
		else {															//Si no hay coincidencia, mostrará un mensaje modal
			setSearching(<Link type="button" data-bs-toggle="modal" data-bs-target="#searchModal" className="btn btn-outline-info">Buscar</Link>)
		}
	}

	function deleteFav(group, url) {									//Función que elimina el elemento cuya X haya sido pulsada
		dispatch({ type: "get_favorites", payload: { ...store.favorites, [group]: store.favorites[group].filter((favItem) => favItem.url != url) } })
	}

	return (
		<div className="pt-5 h-100">									{/*↓↓ Área transparente que ocupa toda la pantalla para poder cerrar el navbar clickando fuera */}
			<a className="close-navbar-toggler collapsed " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
																		{/*Navbar preparada para pantallas estrechas y anchas */}
			<nav className="navbar navbar-expand-lg fixed-top p-0" aria-label="Offcanvas navbar large">
				<div className="container-fluid">							
					<Link to="/" className="navbar-brand" style={{ width: "100px" }}><img className="w-100 " src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" /></Link>

					<button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="d-flex w-100">
							<ul className="navbar-nav me-auto align-self-start mb-lg-0">
								<li className="nav-link px-0"><Link to="/people" className="nav-link">Personajes</Link></li>
								<li className="nav-link px-0"><Link to="/films" className="nav-link">Películas</Link></li>
								<li className="nav-link px-0"><Link to="/ships" className="nav-link">Naves</Link></li>
								<li className="nav-link px-0"><Link to="/vehicles" className="nav-link">Vehículos</Link></li>
								<li className="nav-link px-0"><Link to="/species" className="nav-link">Especies</Link></li>
								<li className="nav-link px-0"><Link to="/planets" className="nav-link">Planetas</Link></li>
							</ul>
							<ul className="navbar-nav align-self-start">
								<form className="d-flex my-2" role="search">
									<input id="search" className="form-control me-2" list="datalistOptions" type="search" placeholder="Buscar" aria-label="Search" onChange={searchPage} />
									{searchButton}
									<datalist id="datalistOptions" className="text-center">
										{searchList}
									</datalist>
								</form>
								<li className="nav-link dropdown text-end pe-0">
									<button className="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
										Favoritos
									</button>
									{favorites}
								</li>
							</ul>
						</div >
					</div>
				</div >
			</nav >														{/*Mensaje modal que se muestra si la búsqueda sale mal */}
			<div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content bg-black border-info">
						<div className="modal-header">
							<h1 className="modal-title fs-5 text-warning" id="searchModalLabel">Error de búsqueda</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Tu búsqueda no ha dado resultado, vuelve a intentarlo escribiendo el nombre correctamente.<br />
							Puedes ayudarte del autocompletar
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">OK</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
