import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./dialogsReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

let store = legacy_createStore(reducers);
export default store