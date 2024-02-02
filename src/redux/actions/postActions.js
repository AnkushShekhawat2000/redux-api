
import { POST_API_STARTED, POST_DATA_FAILURE, POST_DATA_SUCCESS } from "./actionTypes";
import axios from 'axios';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();    //because dispatch is the hook this is only call in componenet

 
export const postApiStarted = () =>{
    return {
        type: POST_API_STARTED
    }
}

export const postDataSuccess = (data) =>{
    return {
        type: POST_DATA_SUCCESS,
        payload:data
    }
}

export const postDataFailure = (error) => {
    return {

        type: POST_DATA_FAILURE,
        payload: error
    }   
}


export  function postRequest(){
    return (dispatch)=>{
        dispatch(postApiStarted());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response => dispatch(postDataSuccess(response.data)))
        .catch(err => dispatch(postDataFailure(err.message)))
    }
} 
    