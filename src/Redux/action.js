import axios from "axios";
import { actionType } from "./actionType";

const getUsers = (users) => ({
    type: actionType.GET_USERS,
    payload: users
});

const DeleteUsers = (users) => ({
    type: actionType.DELETE_USER,
    payload: users
});

const AddUsers = (users) => ({
    type: actionType.ADD_USER,
    payload: users
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get("http://localhost:4000/users").then((resp)=>{
            console.log(resp);
            dispatch(getUsers(resp))
        }).catch((error)=>console.error(error))
    }
}

export const addUser=(user)=>{
    return function (dispatch) {
        axios.post("http://localhost:4000/users",user).then((resp)=>{
            console.log(resp);
            dispatch(AddUsers(resp))
        }).catch((error)=>console.error(error))
    }
}

export const deleteUser=(id)=>{
    return function (dispatch) {
        axios.delete(`http://localhost:4000/users/${id}`).then((resp)=>{
            console.log(resp);
            dispatch(DeleteUsers(resp));
            dispatch(loadUsers(resp));

        }).catch((error)=>console.error(error))
    }
}