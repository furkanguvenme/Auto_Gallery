import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/reducers";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

export const myStore = createStore(reducer, applyMiddleware(thunk));
