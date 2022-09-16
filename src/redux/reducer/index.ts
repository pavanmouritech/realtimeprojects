import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../Productlist/slice";



const rootReducer = combineReducers({
  products:productReducer
});
//const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
//export default persistedReducer;
