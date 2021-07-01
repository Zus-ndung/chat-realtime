import rootReducer from "./reducers/index.reducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;