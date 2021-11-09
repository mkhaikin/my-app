import IRoute from '../interfaces/route'
import AboutPage from '../pages/about'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import DashboardPage from '../pages/AdminDashboard'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
       
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage,
        
    },
    {
        path: '/dashboard',
        name: 'Dashboard Page',
        component: DashboardPage,
        
    }
]

export default routes;