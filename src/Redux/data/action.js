import axios from "axios"





export const GET_DATA_REQUIEST = "GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"


const getDataRequiest=()=>{
   return{
    type:GET_DATA_REQUIEST
   }
}
const getDataSucess=(data)=>{
    return{
     type:GET_DATA_SUCCESS,
     payload:data
    }
 }
 const getDataFailure=(data)=>{
    return{
     type:GET_DATA_FAILURE,
     error:data
     
    }
 }


 export const getData=()=>(dispatch)=>{
    dispatch (getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSucess(res.data))
    })
    .catch((error)=>{
        dispatch(getDataFailure())
        
    })

 }