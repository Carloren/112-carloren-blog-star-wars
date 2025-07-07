export const initialStore = () => {
  return {
    message: null,
    swPeople: [],
    swPeopleDetails: {},
    swPlanets: [],
    swPlanetsDetails: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':

      return {
        ...store,
        swPeople: action.payload
      };

    case 'get_people_details':

      return {
        ...store,
        swPeopleDetails: { ...store.swPeopleDetails, ["person" + action.payload.uid]: action.payload.properties }
      };

    case 'get_planets':

      return {
        ...store,
        swPlanets: action.payload
      };

    case 'get_planets_details':

      return {
        ...store,
        swPlanetsDetails: { ...store.swPlanetsDetails, ["planet" + action.payload.uid]: action.payload.properties }
      };

    default:
      throw Error('Unknown action.');
  }
}
