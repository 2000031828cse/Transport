import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from './content/overview/Login';
import Signup from './content/overview/Signup';
// src/router/routes.tsx
// src/router/routes.tsx

import PrivateRoute from 'src/content/overview/PrivateRoute'; // Assuming correct path
import LoginPage from 'src/content/overview/Login'; // Rename local Login to LoginPage

const Overview = lazy(() => import('src/content/overview'));
const Admin = lazy(() => import('src/content/dashboards/Admin'));
// const Signup = lazy(() => import('src/content/overview/Signup'));
const Messenger = lazy(() => import('src/content/applications/Messenger'));
const Transactions = lazy(() => import('src/content/applications/Transactions'));
const UserProfile = lazy(() => import('src/content/applications/Users/profile'));
const UserSettings = lazy(() => import('src/content/applications/Users/settings'));
const Buttons = lazy(() => import('src/content/pages/Components/Buttons'));
const Modals = lazy(() => import('src/content/pages/Components/Modals'));
const Accordions = lazy(() => import('src/content/pages/Components/Accordions'));
const Tabs = lazy(() => import('src/content/pages/Components/Tabs'));
const Badges = lazy(() => import('src/content/pages/Components/Badges'));
const Tooltips = lazy(() => import('src/content/pages/Components/Tooltips'));
const Avatars = lazy(() => import('src/content/pages/Components/Avatars'));
const Cards = lazy(() => import('src/content/pages/Components/Cards'));
const Forms = lazy(() => import('src/content/pages/Components/Forms'));
const Status404 = lazy(() => import('src/content/pages/Status/Status404'));
const Status500 = lazy(() => import('src/content/pages/Status/Status500'));
const StatusComingSoon = lazy(() => import('src/content/pages/Status/ComingSoon'));
const StatusMaintenance = lazy(() => import('src/content/pages/Status/Maintenance'));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: 'login',
        element: <LoginPage />, // Use renamed LoginPage component
      },
      {
        path: 'Signup',
        element: <Signup />, // Use renamed LoginPage component
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />,
          },
          {
            path: '404',
            element: <Status404 />,
          },
          {
            path: '500',
            element: <Status500 />,
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />,
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="Admin" replace />,
      },
      {
        path: 'Admin',
        element: <Admin />,
      },
      {
        path: 'messenger',
        element: <Messenger />,
      },
    ],
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />,
          },
          {
            path: 'details',
            element: <UserProfile />,
          },
          {
            path: 'settings',
            element: <UserSettings />,
          },
        ],
      },
    ],
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />,
      },
      {
        path: 'buttons',
        element: <Buttons />,
      },
      {
        path: 'modals',
        element: <Modals />,
      },
      {
        path: 'accordions',
        element: <Accordions />,
      },
      {
        path: 'tabs',
        element: <Tabs />,
      },
      {
        path: 'badges',
        element: <Badges />,
      },
      {
        path: 'tooltips',
        element: <Tooltips />,
      },
      {
        path: 'avatars',
        element: <Avatars />,
      },
      {
        path: 'cards',
        element: <Cards />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
    ],
  },
  // Protected routes using PrivateRoute
  {
    path: 'admin-dashboard',
    element: (
      <PrivateRoute
        element={<Admin />}
        isAuthenticated={true} // Replace with actual authentication state check
        redirectTo="/login" // Redirect to login if not authenticated
      />
    ),
  },
  // Add more protected routes as needed
];

export default routes;
