
import {AccessState, AccessActionTypes, AccessAction} from "../../interfaces/access"


const initialState: AccessState = {
    access: null,
    loading: false,
    error: null,
    isAuthenticated: false,
}

export const accessReducer = (state = initialState, action: AccessAction): AccessState =>{
    switch (action.type){
        case AccessActionTypes.FETCH_ACCESS:
            return {...state, loading: true}
        case AccessActionTypes.FETCH_ACCESS_SUCCESS:
            return {...state, loading: false, access: action.payload, isAuthenticated: true}
        case AccessActionTypes.FETCH_ACCESS_ERROR:
            return {...state, loading: false, error: action.payload, isAuthenticated: false}  

        case AccessActionTypes.LOG_OUT:
            return {...state, loading: true}
        case AccessActionTypes.LOG_OUT_SUCCESS:
            return {...state, loading: false, access: null, isAuthenticated: false}
        case AccessActionTypes.LOG_OUT_ERROR:
            return {...state, loading: false, error: action.payload, isAuthenticated: false}           
                   
        default:
            return state
    }
} 