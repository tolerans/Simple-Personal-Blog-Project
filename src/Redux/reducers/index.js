import {combineReducers} from "redux";
import inputReducer from "./inputReducer";
import showInfoReducer from "./showInfoReducer";



const rootReducer=combineReducers({
    inputReducer,
    showInfoReducer
});

export default rootReducer;
