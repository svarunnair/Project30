import { act } from "react-dom/test-utils"
import { DELETE_CART_FAILURE, DELETE_CART_REQUIEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_PAYMENT_FAILURE, GET_PAYMENT_REQUIEST, GET_PAYMENT_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS, POST_PAYMENT_FAILURE, POST_PAYMENT_REQUIEST, POST_PAYMENT_SUCCESS } from "./action"






const initState={
    isError:false,
    isLoading:false,
    data:[],
    error:[],
    postCart:[],
    getCart:[],
    patchCart:[],
    deleteCart:[],
    postPayment:[],
    getPayment:[]


}


export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return{
                ...state,
                isError:false,
                isLoading:true
            }
            case GET_DATA_SUCCESS:
                return{
                    ...state,
                    isError:false,
                    isLoading:false,
                    data:action.payload
        
                }
                case GET_DATA_FAILURE:
                    return{
                        ...state,
                        isError:true,
                        isLoading:false,
                        
                    }


                    case POST_CART_REQUIEST:
            return{
                ...state,
                isError:false,
                isLoading:true
            }
            case POST_CART_SUCCESS:
                return{
                    ...state,
                    isError:false,
                    isLoading:false,
                    postCart:action.payload
        
                }
                case POST_CART_FAILURE:
                    return{
                        ...state,
                        isError:true,
                        isLoading:false,
                        
                    }

                    case GET_CART_REQUIEST:
            return{
                ...state,
                isError:false,
                isLoading:true
            }
            case GET_CART_SUCCESS:
                return{
                    ...state,
                    isError:false,
                    isLoading:false,
                    getCart:action.payload
        
                }
                case GET_CART_FAILURE:
                    return{
                        ...state,
                        isError:true,
                        isLoading:false,
                        
                    }


                    case PATCH_CART_REQUIEST:
            return{
                ...state,
                isError:false,
                isLoading:true
            }
            case PATCH_CART_SUCCESS:
                return{
                    ...state,
                    isError:false,
                    isLoading:false,
                    patchCart:action.payload
        
                }
                case PATCH_CART_FAILURE:
                    return{
                        ...state,
                        isError:true,
                        isLoading:false,
                        
                    }


                    case DELETE_CART_REQUIEST:
            return{
                ...state,
                isError:false,
                isLoading:true
            }
            case DELETE_CART_SUCCESS:
                return{
                    ...state,
                    isError:false,
                    isLoading:false,
                    deleteCart:action.payload
        
                }
                case DELETE_CART_FAILURE:
                    return{
                        ...state,
                        isError:true,
                        isLoading:false,
                        
                    }


                    case POST_PAYMENT_REQUIEST:
                        return{
                            ...state,
                            isError:false,
                            isLoading:true
                        }
                        case POST_PAYMENT_SUCCESS:
                            return{
                                ...state,
                                isError:false,
                                isLoading:false,
                                postPayment:action.payload
                    
                            }
                            case POST_PAYMENT_FAILURE:
                                return{
                                    ...state,
                                    isError:true,
                                    isLoading:false,
                                    
                                }

                                case GET_PAYMENT_REQUIEST:
                        return{
                            ...state,
                            isError:false,
                            isLoading:true
                        }
                        case GET_PAYMENT_SUCCESS:
                            return{
                                ...state,
                                isError:false,
                                isLoading:false,
                                getPayment:action.payload
                    
                            }
                            case GET_PAYMENT_FAILURE:
                                return{
                                    ...state,
                                    isError:true,
                                    isLoading:false,
                                    
                                }

                                



                    default:
                        return({
                            ...state
                        })
    }
}