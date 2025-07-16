import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const MyNavbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const getGroupName = (group) => {
		switch (group) {
			case "people": return "Personajes"
			case "films": return "Películas"
			case "ships": return "Naves"
			case "vehicles": return "Vehículos"
			case "species": return "Especies"
			case "planets": return "Planetas"

			default: return group
		}
	}

	const favorites =
		(Object.values(store.favorites).filter((i) => i.length != 0).length != 0) ?
			(<ul className="dropdown-menu dropdown-menu-end text-start bg-black border-warning hide-scroll hide-y" >
				{Object.keys(store.favorites).map((group) => store.favorites[group].length === 0 ? ""
					:
					<div key={group} >
						<li className="dropdown-item disabled my-0 py-0 fst-italic">{getGroupName(group)}</li>
						{store.favorites[group].map((favItem) =>
							< li key={favItem.url} className="dropdown-item d-flex position-relative" >
								<Link className="dropdown-item" to={favItem.url}>{favItem.name}</Link>
								<button className="crossButton btn rounded-circle hide position-absolute end-0 top-0" onClick={(e) => { e.stopPropagation(); deleteFav(group, favItem.url) }}>×</button>
							</li>)}
					</div>
				)}
			</ul >)
			:
			(<ul className="dropdown-menu dropdown-menu-end text-start bg-black border-warning" >
				<p className="dropdown-item disabled my-0 text-center fst-italic">No hay ninguno</p>
			</ul>)

	function deleteFav(group, url) {
		dispatch({ type: "get_favorites", payload: { ...store.favorites, [group]: store.favorites[group].filter((favItem) => favItem.url != url) } })
	}

	return (
		<div className="pt-5">
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
									<input id="search" className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
									<button className="btn btn-outline-info" type="submit">Buscar</button>
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
			</nav >
		</div>
	);
}
