import { act } from "react-dom/test-utils"
import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS } from "./action"






const initState={
    isError:false,
    isLoading:false,
    data:[],
    error:[]


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



                    default:
                        return({
                            ...state
                        })
    }
}