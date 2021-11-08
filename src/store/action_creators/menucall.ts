import { Dispatch } from "redux"
import {MenuAction, MenuActionTypes} from "../../interfaces/menu"

export const showAboutPage = () => {
    return (dispatch: Dispatch<MenuAction>) => {
        dispatch( {type: MenuActionTypes.SHOW_ABOUT_PAGE})
    }
}

export const showMainAdmPage = () => {
    return (dispatch: Dispatch<MenuAction>) => {
        dispatch( {type: MenuActionTypes.SHOW_MAIN_ADMIN_PAGE})
    }
}

export const showMainUserPage = () => {
    return (dispatch: Dispatch<MenuAction>) => {
        dispatch( {type: MenuActionTypes.SHOW_MAIN_USER_PAGE})
    }
}

export const showWork1Page = () => {
    return (dispatch: Dispatch<MenuAction>) => {
        dispatch( {type: MenuActionTypes.SHOW_WORK_1_PAGE})
    }
}

export const showWork2Page = () => {
    return (dispatch: Dispatch<MenuAction>) => {
        dispatch( {type: MenuActionTypes.SHOW_WORK_2_PAGE})
    }
}

