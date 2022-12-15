import { combineReducers } from "redux";

import { productReducers } from "./productReducers";
import { selectProducttReducers ,addProductToStoreReducer} from "./productReducers";

const reducers = combineReducers({
  allProduct: productReducers,
   selectProduct:selectProducttReducers,
   addProduct:addProductToStoreReducer
});

export default reducers;
