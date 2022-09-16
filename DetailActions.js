import { ActionTypes } from "../constant/action-type"


export const setDetails = (details) =>{
return {
    type:ActionTypes.SET_DETAILS,
    payload:details,
};
};

export const selectedDetails =(details)=>{
    return{
        type:ActionTypes.SELECTED_DETAIL,
        payload:details
    }
};

export const removSelectedDetails =()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_DETAIL,
        
    };
};