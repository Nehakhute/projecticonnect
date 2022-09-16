import { combineReducers } from "redux";

import { detailsReducer,selectedDetailsReducer } from './detailsReducers'

const  redusers = combineReducers({
    allDetails:detailsReducer,
    detail:selectedDetailsReducer,
});

export default redusers;