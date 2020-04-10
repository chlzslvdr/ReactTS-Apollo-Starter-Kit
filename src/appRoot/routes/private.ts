import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const Home = lazy(() => import('../../modules/Home'));

const privateRoutes: RouteProps[] = [
  {
    component: Home,
    path: '/home',
    exact: true,
  },
];

export default privateRoutes;
