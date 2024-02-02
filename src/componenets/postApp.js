
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { postApiStarted, postDataSuccess, postDataFailure } from "../redux/actions/postActions";
import {postRequest} from "../redux/actions/postActions";
import axios from "axios";


const PostApp = () =>{
    
    const {loading, data, error} =  useSelector(state => state)
 
    console.log(loading, data, error );
   // loading: false, data =[] , error = ""      // when request start
    // loading: true, data =[] , error = ""     // when request hit but response not come
    // loading: false, data =[{},{}] , error = ""     // in request success case give a data as output
    // loading: false, data =[] , error = "some error"   // in request failed case  give error as output

    const dispatch = useDispatch();

    // useEffect(()=>{
    //          dispatch(postApiStarted());
    //          axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    //          .then(response => dispatch(postDataSuccess(response.data)))
    //          .catch(err => dispatch(postDataFailure(err.message)))
    // },[])


    useEffect(()=>{
        dispatch(postRequest());
  },[])
    return(
        <h1>
            <h1>Post App</h1>
            {
                data.length>0 && (
                    data.map(post =>(
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <h6>{post.body}</h6>
                            <hr></hr>
                        </div>
                    ))
                )
            }
        </h1>
    )
   
}

export default PostApp