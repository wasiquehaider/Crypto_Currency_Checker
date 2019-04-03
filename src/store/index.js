import { createStore, applyMiddleware } from "redux";
// import devToolsEnhancer from "remote-redux-devtools-sp";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "../reducers";

const middleware = [thunk];

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
