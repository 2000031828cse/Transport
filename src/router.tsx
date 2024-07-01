import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import PrivateRoute from './content/overview/PrivateRoute'; // Correct import
import LoginPage from './content/overview/Login'; // Renamed local Login to LoginPage
import Signup from './content/overview/Signup';
import UserSidebarLayout from './layouts/SidebarLayout/Sidebar/UserSidebarLayout';
import Stops from './content/applications/Stops';
import TermPage from './content/applications/term';
import AddRoute from './content/applications/Busroutes/addroutes';
import ChangePassword from './content/applications/Users/profile/ChangePassword';
import AddStop from './content/applications/Stops/AddStop';
import AdminPanel from './content/applications/adminpanel/adminpanel';

const BusPassRequest = lazy(
  () => import('src/content/applications/buspassrequest')
);
const BusPassDetails = lazy(
  () => import('src/content/applications/buspassdetails')
);
const BusStages = lazy(() => import('src/content/applications/Busroutes'));
const Overview = lazy(() => import('src/content/overview'));
const Admin = lazy(() => import('src/content/dashboards/Admin'));
const User = lazy(() => import('src/content/dashboards/User'));
const Transactions = lazy(
  () => import('src/content/applications/BusPassRequests')
);
const UserProfile = lazy(
  () => import('src/content/applications/Users/profile')
);
const UserSettings = lazy(
  () => import('src/content/applications/Users/settings')
);
const Buttons = lazy(() => import('src/content/pages/Components/Buttons'));
const Modals = lazy(() => import('src/content/pages/Components/Modals'));
const Accordions = lazy(
  () => import('src/content/pages/Components/Accordions')
);
const Tabs = lazy(() => import('src/content/pages/Components/Tabs'));
const Badges = lazy(() => import('src/content/pages/Components/Badges'));
const Tooltips = lazy(() => import('src/content/pages/Components/Tooltips'));
const Avatars = lazy(() => import('src/content/pages/Components/Avatars'));
const Cards = lazy(() => import('src/content/pages/Components/Cards'));
const Forms = lazy(() => import('src/content/pages/Components/Forms'));
const Status404 = lazy(() => import('src/content/pages/Status/Status404'));
const Status500 = lazy(() => import('src/content/pages/Status/Status500'));
const StatusComingSoon = lazy(
  () => import('src/content/pages/Status/ComingSoon')
);
const StatusMaintenance = lazy(
  () => import('src/content/pages/Status/Maintenance')
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Overview />
          </Suspense>
        )
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Status404 />
              </Suspense>
            )
          },
          {
            path: '500',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Status500 />
              </Suspense>
            )
          },
          {
            path: 'maintenance',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <StatusMaintenance />
              </Suspense>
            )
          },
          {
            path: 'coming-soon',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <StatusComingSoon />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Status404 />
          </Suspense>
        )
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout userType={'admin'} />,
    children: [
      {
        path: '',
        element: <Navigate to="Admin" replace />
      },
      {
        path: 'Admin',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <Admin />
            </Suspense>
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout userType={'user'} />,
    children: [
      {
        path: '',
        element: <Navigate to="User" replace />
      },
      {
        path: 'User',
        element: (
          <PrivateRoute requiredRole="user">
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'buspassrequest',
        element: (
          <PrivateRoute requiredRole="user">
            <Suspense fallback={<div>Loading...</div>}>
              <BusPassRequest />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'buspassdetails',
        element: (
          <PrivateRoute requiredRole="user">
            <Suspense fallback={<div>Loading...</div>}>
              <BusPassDetails />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <UserProfile />
              </Suspense>
            )
          },
          {
            path: 'change-password',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ChangePassword />
              </Suspense>
            )
          },
          {
            path: 'settings',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <UserSettings />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout userType={'admin'} />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <Transactions />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'busstages',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <BusStages />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'addroutes',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <AddRoute />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'stops',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <Stops />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'add-stop',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <AddStop />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'TermPage',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TermPage />
          </Suspense>
        )
      },
      
      {
        path: 'createuser',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPanel />
            </Suspense>
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout userType={'admin'} />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Buttons />
          </Suspense>
        )
      },
      {
        path: 'modals',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Modals />
          </Suspense>
        )
      },
      {
        path: 'accordions',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Accordions />
          </Suspense>
        )
      },
      {
        path: 'tabs',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Tabs />
          </Suspense>
        )
      },
      {
        path: 'badges',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Badges />
          </Suspense>
        )
      },
      {
        path: 'tooltips',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Tooltips />
          </Suspense>
        )
      },
      {
        path: 'avatars',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Avatars />
          </Suspense>
        )
      },
      {
        path: 'cards',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cards />
          </Suspense>
        )
      },
      {
        path: 'forms',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Forms />
          </Suspense>
        )
      }
    ]
  }
];

export default routes;
