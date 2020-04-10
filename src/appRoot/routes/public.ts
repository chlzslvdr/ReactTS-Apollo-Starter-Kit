import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const Test = lazy(() => import('../../modules/Test'));

const publicRoutes: RouteProps[] = [
  {
    component: Test,
    path: '/test',
    exact: true,
  },
];

export default publicRoutes;
