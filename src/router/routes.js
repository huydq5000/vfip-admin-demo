import HomePage from '../page/HomePage';
import Login from '../page/Login';
import Register from '../page/Register';
import Users from '../page/Users';

export const RouteNames = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  USERS: 'users',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/login',
    component: Login,
    name: RouteNames.LOGIN,
  },
  {
    path: '/register',
    component: Register,
    name: RouteNames.REGISTER,
  },
  {
    path: '/users',
    component: Users,
    name: RouteNames.USERS,
  },
];
