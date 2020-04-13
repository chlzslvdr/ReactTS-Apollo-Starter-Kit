import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const Test = lazy(() => import('../../modules/Test'));
const Company = lazy(() => import('../../modules/Company'));
const Employee = lazy(() => import('../../modules/Employee'));
const Resident = lazy(() => import('../../modules/Resident'));

const publicRoutes: RouteProps[] = [
  {
    component: Test,
    path: '/test',
    exact: true,
  },
  {
    component: Company,
    path: '/company',
    exact: true,
  },
  {
    component: Employee,
    path: '/employee',
    exact: true,
  },
  {
    component: Resident,
    path: '/resident',
    exact: true,
  },
];

export default publicRoutes;
