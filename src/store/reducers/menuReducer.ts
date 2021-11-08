import {MenuAction, MenuActionTypes, MenuState, PageTypes} from "../../interfaces/menu"

const initialState: MenuState = {
    menuItem: PageTypes.ABOUT_PAGE,
    title: 'About',
}

export const menuReducer =  (state = initialState, action: MenuAction): MenuState => {
    switch (action.type){
        case MenuActionTypes.SHOW_ABOUT_PAGE:
            return {menuItem: PageTypes.ABOUT_PAGE, title: 'About'}
        case MenuActionTypes.SHOW_MAIN_ADMIN_PAGE:
            return {menuItem: PageTypes.MAIN_ADMIN_PAGE, title: 'Main Admin'}
        case MenuActionTypes.SHOW_MAIN_USER_PAGE:
            return {menuItem: PageTypes.MAIN_ADMIN_PAGE, title: 'Main User'}
        case MenuActionTypes.SHOW_WORK_1_PAGE:
            return {menuItem: PageTypes.WORK_1_PAGE, title: 'Work 1'}
        case MenuActionTypes.SHOW_WORK_2_PAGE:
            return {menuItem: PageTypes.WORK_2_PAGE, title: 'Work 1'}            

            
        default:
                return state                             
    }
}            