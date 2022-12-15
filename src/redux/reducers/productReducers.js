import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectProducttReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const addProductToStoreReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_STORE:
      return { ...state, products: payload };

    default:
      return state;
  }
};
