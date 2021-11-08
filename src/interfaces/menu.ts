export interface MenuState{
    menuItem:string;
    title: string;
}

export enum MenuActionTypes{
    SHOW_ABOUT_PAGE = 'SHOW_ABOUT_PAGE',
    SHOW_MAIN_ADMIN_PAGE = 'SHOW_MAIN_ADMIN_PAGE',
    SHOW_MAIN_USER_PAGE = 'SHOW_MAIN_USER_PAGE',
    SHOW_WORK_1_PAGE = 'SHOW_WORK_1_PAGE',
    SHOW_WORK_2_PAGE = 'SHOW_WORK_2_PAGE',
}

export enum PageTypes{
    ABOUT_PAGE = 'ABOUT_PAGE',
    MAIN_ADMIN_PAGE = 'MAIN_ADMIN_PAGE',
    MAIN_USER_PAGE = 'MAIN_USER_PAGE',
    WORK_1_PAGE = 'WORK_1_PAGE',
    WORK_2_PAGE = 'WORK_2_PAGE',
}

interface AboutMenuAction{
    type: MenuActionTypes.SHOW_ABOUT_PAGE;
}

interface MainAdminMenuAction{
    type: MenuActionTypes.SHOW_MAIN_ADMIN_PAGE;
}

interface MainUserMenuAction{
    type: MenuActionTypes.SHOW_MAIN_USER_PAGE;
}

interface Work1MenuAction{
    type: MenuActionTypes.SHOW_WORK_1_PAGE;
}

interface Work2MenuAction{
    type: MenuActionTypes.SHOW_WORK_2_PAGE;
}

export type MenuAction = AboutMenuAction | MainAdminMenuAction | MainUserMenuAction | Work1MenuAction | Work2MenuAction