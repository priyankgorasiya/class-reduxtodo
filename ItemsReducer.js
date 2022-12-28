import * as Actions from "../actions/Types";

let initstate = {
  users: [],
};

const ItemsReducer = (state = initstate, action) => {
  switch (action.type) {
    case Actions.ADD_ITEMS:
      const data = JSON.parse(JSON.stringify(state.users));
      data?.push(action.payload);
      return {
        ...state,
        users: data,
      };

    case Actions.UPDATE_ITEMS:
      return {};

    case Actions.REMOVE_ITEMS:
      return {};

    default:
      return state;
  }
};

export default ItemsReducer;
