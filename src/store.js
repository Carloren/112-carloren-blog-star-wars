export const initialStore = () => {
  return {
    message: null,
    swPeople: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':

      return {
        ...store,
        swPeople: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
