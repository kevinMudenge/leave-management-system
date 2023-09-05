import { Navigate, useRoutes } from 'react-router-dom';

import Login from "./scenes/auth/Login";
import Dashboardlayout from './dashboardlayout';
import Dashboard from "./scenes/dashboard";
import Leaveappplication from "./scenes/leaveapplication";
import Leavetracker from './scenes/leavetracker';
import Leavepolicy from './scenes/leavepolicy';
import Profile from './scenes/profile';

import Leaveconfiguration from "./scenes/leaveconfiguration";
import Report from './scenes/reports';
import Staff from './scenes/companystaff';



export default function Router() {
  const routes=  useRoutes([
    {
      path: "/dashboard", 
      element: <Dashboardlayout />,
      children: [
        { element: <Navigate to= "/dashboard/app" />, index: true },
        { path: 'app', element: <Dashboard /> },
        { path: 'leaveapplication', element: <Leaveappplication /> },
        { path: 'leavetracker', element: <Leavetracker/> },
        { path: 'leavepolicy', element: <Leavepolicy /> },
        { path: 'leaveconfiguration', element: <Leaveconfiguration /> },
        { path: 'report', element: <Report /> },
        { path: 'companystaff', element: <Staff /> },
        { path: 'profile', element: <Profile /> },



      ],
    },

    {
      path: "/", element: <Login/>
    },
    {
      path: '*', element: <Login/>,
    },
    
   
  ]);

  return routes;}