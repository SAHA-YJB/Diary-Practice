import { createStore } from "redux";
import { combineReducers } from "redux";
import diary from "../modules/diary";

const rootReducer = combineReducers({
  diary,
});
const store = createStore(rootReducer);

export default store;
