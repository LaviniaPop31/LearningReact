import { createStore, compose } from "redux";
// import {counterReducer} from "./reducers/index";
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers()
);
export default store;