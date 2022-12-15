import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (id) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: id,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addProductToStoreAction = (product) => {
   return {
     type: ActionTypes.ADD_PRODUCT_TO_STORE,
     payload:product
   };
 };