import axios from "axios"





export const GET_DATA_REQUIEST = "GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"

export const POST_CART_REQUIEST = "POST_CART_REQUIEST"
export const POST_CART_SUCCESS = "POST_CART_SUCCESS"
export const POST_CART_FAILURE = "POST_CART_FAILURE"

export const GET_CART_REQUIEST = "GET_CART_REQUIEST"
export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_FAILURE = "GET_CART_FAILURE"

export const PATCH_CART_REQUIEST = "PATCH_CART_REQUIEST"
export const PATCH_CART_SUCCESS = "PATCH_CART_SUCCESS"
export const PATCH_CART_FAILURE = "PATCH_CART_FAILURE"

export const DELETE_CART_REQUIEST = "DELETE_CART_REQUIEST"
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS"
export const DELETE_CART_FAILURE = "DELETE_CART_FAILURE"


export const POST_PAYMENT_REQUIEST = "POST_PAYMENT_REQUIEST"
export const POST_PAYMENT_SUCCESS = "POST_PAYMENT_SUCCESS"
export const POST_PAYMENT_FAILURE = "POST_PAYMENT_FAILURE"


export const GET_PAYMENT_REQUIEST = "GET_PAYMENT_REQUIEST"
export const GET_PAYMENT_SUCCESS = "GET_PAYMENT_SUCCESS"
export const GET_PAYMENT_FAILURE = "GET_PAYMENT_FAILURE"




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

 const postCartRequiest=()=>{
    return{
     type:POST_CART_REQUIEST
    }
 }
 const postCartSucess=(data)=>{
     return{
      type:POST_CART_SUCCESS,
      payload:data
     }
  }
  const postCartFailure=(data)=>{
     return{
      type:POST_CART_FAILURE,
      error:data
      
     }
  }


  const getCartRequiest=()=>{
    return{
     type:GET_CART_REQUIEST
    }
 }
 const getCartSucess=(data)=>{
     return{
      type:GET_CART_SUCCESS,
      payload:data
     }
  }
  const getCartFailure=(data)=>{
     return{
      type:GET_CART_FAILURE,
      error:data
      
     }
  }

  const patchCartRequiest=()=>{
    return{
     type:PATCH_CART_REQUIEST
    }
 }
 const patchCartSucess=(data)=>{
     return{
      type:PATCH_CART_SUCCESS,
      payload:data
     }
  }
  const patchCartFailure=(data)=>{
     return{
      type:PATCH_CART_FAILURE,
      error:data
      
     }
  }

  const deleteCartRequiest=()=>{
    return{
     type:DELETE_CART_REQUIEST
    }
 }
 const deleteCartSucess=(data)=>{
     return{
      type:DELETE_CART_SUCCESS,
      payload:data
     }
  }
  const deleteCartFailure=(data)=>{
     return{
      type:DELETE_CART_FAILURE,
      error:data
      
     }
  }

  const postPaymentRequiest=()=>{
    return{
     type:POST_PAYMENT_REQUIEST
    }
 }
 const postPaymentSucess=(data)=>{
     return{
      type:POST_PAYMENT_SUCCESS,
      payload:data
     }
  }
  const postPaymentFailure=(data)=>{
     return{
      type:POST_PAYMENT_FAILURE,
      error:data
      
     }
  }

  const getPaymentRequiest=()=>{
    return{
     type:GET_PAYMENT_REQUIEST
    }
 }
 const getPaymentSucess=(data)=>{
     return{
      type:GET_PAYMENT_SUCCESS,
      payload:data
     }
  }
  const getPaymentFailure=(data)=>{
     return{
      type:GET_PAYMENT_FAILURE,
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


 export const postCart=(data)=>(dispatch)=>{
    dispatch (postCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postCartSucess(res.data))
        console.log("postCart",res.data)
    })
    .catch((error)=>{
        dispatch(postCartFailure())
        
    })

 }

 export const getCart=()=>(dispatch)=>{
    dispatch (getCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getCartSucess(res.data))
    })
    .catch((error)=>{
        dispatch(getCartFailure())
        
    })

 }


 export const patchCart=(data,id)=>(dispatch)=>{
    dispatch (patchCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchCartSucess(res.data))
    })
    .catch((error)=>{
        dispatch(patchCartFailure())
        
    })

 }

 export const deleteCart=(id)=>(dispatch)=>{
    dispatch (deleteCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"DELETE"
    })
    .then((res)=>{
        dispatch(deleteCartSucess(res.data))
    })
    .catch((error)=>{
        dispatch(deleteCartFailure())
        
    })

 }

 export const postPayment=(data)=>(dispatch)=>{
    dispatch (postPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postPaymentSucess(res.data))
        console.log("postPymt",res.data)
    })
    .catch((error)=>{
        dispatch(postPaymentFailure())
        
    })

 }

 export const getPayment=()=>(dispatch)=>{
    dispatch (getPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getPaymentSucess(res.data))
        console.log("getPyy",res.data)
    })
    .catch((error)=>{
        dispatch(getPaymentFailure())
        
    })

 }