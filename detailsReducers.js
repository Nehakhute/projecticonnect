import { ActionTypes } from "../constant/action-type";
const initialState = {
    details:[],
};


export const detailsReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_DETAILS:
            return{...state, details:payload};
            default:
                return state;
    }
};


export const selectedDetailsReducer =(state={},{type,payload})=>{
    console.log(type);
    switch(type){
        case ActionTypes.SELECTED_DETAIL:
        return {...state,...payload};
       case ActionTypes.REMOVE_SELECTED_DETAIL:
        return {};
        default:
            return state;
    }
};