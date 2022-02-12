import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import movielistReducer from "./reducers/movieListReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const reducer = combineReducers({
  movies: movielistReducer,
  users: userReducer,
});

const initialState = {
  movies: { name: "TERMINATOR 2" },
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
