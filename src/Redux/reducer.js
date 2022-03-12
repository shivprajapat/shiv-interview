import { actionType } from "./actionType";

const initialState={
    users:[],
    user:{}
}

const usersReducer=(state=initialState,action)=>{
switch (action.type) {
    case actionType.GET_USERS:
        return{
            ...state,
            users: action.payload,
        }
       
    default:
        return state;
}
}

export default usersReducer;