import * as Actions from "./Types";

export const addItems = (payload) => {
  return {
    type: Actions.ADD_ITEMS,
    payload,
  };
};

export const updateItem = (payload) => {
  return {
    type: Actions.UPDATE_ITEMS,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: Actions.REMOVE_ITEMS,
    payload,
  };
};
