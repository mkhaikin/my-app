import { combineReducers } from "redux";
import {menuReducer} from "./menuReducer";
import { accessReducer } from "./accessReducer";

export const rootReducer = combineReducers( {
    menu: menuReducer,
    access: accessReducer,
})

export type RootState = ReturnType <typeof rootReducer>