export const initialStore = () => {
  return {
    message: null,
    swPeople: (localStorage.getItem("people") != null) ? JSON.parse(localStorage.getItem("people")) : [],
    swFilms: (localStorage.getItem("films") != null) ? JSON.parse(localStorage.getItem("films")) : [],
    swShips: (localStorage.getItem("ships") != null) ? JSON.parse(localStorage.getItem("ships")) : [],
    swVehicles: (localStorage.getItem("vehicles") != null) ? JSON.parse(localStorage.getItem("vehicles")) : [],
    swSpecies: (localStorage.getItem("species") != null) ? JSON.parse(localStorage.getItem("species")) : [],
    swPlanets: (localStorage.getItem("planets") != null) ? JSON.parse(localStorage.getItem("planets")) : [],
    favorites: (localStorage.getItem("favorites") != null) ? JSON.parse(localStorage.getItem("favorites")) : []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':

      return {
        ...store,
        swPeople: action.payload
      };

    case 'get_films':

      return {
        ...store,
        swFilms: action.payload
      };


    case 'get_ships':

      return {
        ...store,
        swShips: action.payload
      };

    case 'get_vehicles':

      return {
        ...store,
        swVehicles: action.payload
      };

    case 'get_species':

      return {
        ...store,
        swSpecies: action.payload
      };

    case 'get_planets':

      return {
        ...store,
        swPlanets: action.payload
      };
    case 'get_favorites':

      return {
        ...store,
        favorites: action.payload
      };

    default:
      throw Error('Unknown action.');
  }
}
