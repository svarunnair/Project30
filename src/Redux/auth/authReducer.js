import { POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"



const initState={
    isError:false,
    isLoading:false,
    postSignup:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    postSignup:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })



                    default:
                        return({
                        ...state
                        })
    }
}