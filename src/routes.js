import { Navigate, useRoutes } from 'react-router-dom';

import Login from "./scenes/auth/Login";
import DashboardLayout from './dashboardlayout';
import Dashboard from "./scenes/dashboard";
import LeaveAppplication from "./scenes/leaveapplication";
import LeaveTracker from './scenes/leavetracker';
import LeavePolicy from './scenes/leavepolicy';

import LeaveConfiguration from "./scenes/leaveconfiguration";
import Staff from './scenes/companystaff';



export default function Router() {
  const routes=  useRoutes([
    {
      path: "/dashboard", 
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to= "/dashboard/app" />, index: true },
        { path: 'app', element: <Dashboard /> },
        { path: 'leaveapplication', element: <LeaveAppplication /> },
        { path: 'leavetracker', element: <LeaveTracker/> },
        { path: 'leavepolicy', element: <LeavePolicy /> },
        { path: 'leaveconfiguration', element: <LeaveConfiguration /> },
        { path: 'report', element: <Staff />},
        { path: 'companystaff', element: <Staff /> },

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