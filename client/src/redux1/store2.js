import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../Redux/reducer2";

const composeDevExtension =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store2 = createStore(
  reducer,
  composeDevExtension(applyMiddleware(thunk))
);

export default store2;
