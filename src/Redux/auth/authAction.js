import axios from "axios"



export const POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"


const postSignupRequiest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
    })
}

export const postSignup=()=>(dispatch)=>{
    dispatch(postSignupRequiest())
    return axios({
        url:"https://reqres.in/api/register",
        method:"POST"
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(postSignupFailure())
    })
}