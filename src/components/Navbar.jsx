import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const MyNavbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const favorites = store.favorites.length != 0 ?
		((store.favorites).map((item) => {
			return (<li key={item.url} className="dropdown-item d-flex position-relative"  >
				<Link className="dropdown-item" to={item.url}>{item.name}</Link>
				<button className="crossButton btn rounded-circle hide position-absolute end-0 top-0" onClick={(e) => { e.stopPropagation(); deleteFav(item.url) }}>×</button>
			</li>)
		}))
		:
		(<p className="dropdown-item disabled my-0 text-center fst-italic">No hay ninguno</p>)

	function deleteFav(url) {
		dispatch({ type: "get_favorites", payload: store.favorites.filter((favitem) => favitem.url != url) })
	}

	return (
		<nav className="navbar navbar-expand-lg fixed-top p-0" aria-label="Offcanvas navbar large">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand" style={{ width: "100px" }}><img className="w-100 " src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" /></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-end bg-black" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbar2Label"><img className="w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" /></h5>
						<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body d-flex">
						<ul className="navbar-nav justify-content-start flex-grow-1">
							<li className="nav-link px-0"><Link to="/people" className="nav-link">Personajes</Link></li>
							<li className="nav-link px-0"><Link to="/movies" className="nav-link">Películas</Link></li>
							<li className="nav-link px-0"><Link to="/ships" className="nav-link">Naves</Link></li>
							<li className="nav-link px-0"><Link to="/vehicles" className="nav-link">Vehículos</Link></li>
							<li className="nav-link px-0"><Link to="/species" className="nav-link">Especies</Link></li>
							<li className="nav-link px-0"><Link to="/planets" className="nav-link">Planetas</Link></li>
						</ul >
						<ul className="navbar-nav algin-delf-end justify-content-end">
							<li className="nav-link px-0">
								<form className="d-flex mt-0" role="search">
									<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
									<button className="btn btn-outline-info" type="submit">Buscar</button>
								</form>
							</li>
							<li className="nav-link px-0 ms-2 dropdown text-end">
								<button className="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
									Favoritos
								</button>
								<ul className="dropdown-menu dropdown-menu-end text-start bg-black border-warning" >
									{favorites}
								</ul>
							</li>
						</ul>
					</div >
				</div >
			</div >
		</nav >
	);
}
