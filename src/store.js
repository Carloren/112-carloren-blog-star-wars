export const initialStore = () => {
  return {
    message: null,
    swPeople: [],
    swPeopleDetails: {}
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

    default:
      throw Error('Unknown action.');
  }
}
