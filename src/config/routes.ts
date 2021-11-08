import IRoute from '../interfaces/route'
import AboutPage from '../pages/about'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import DashboardPage from '../pages/dashboard'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact:true
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact:true
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage,
        exact:true
    },
    {
        path: '/dashboard',
        name: 'Dashboard Page',
        component: DashboardPage,
        exact:true
    }
]

export default routes;