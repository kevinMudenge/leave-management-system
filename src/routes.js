import { Navigate, useRoutes } from 'react-router-dom';

import Login from "./scenes/auth/Login";
import Dashboard from "./scenes/dashboard";
import Leaveappplication from "./scenes/leaveapplication"
import Leavepolicy from './scenes/leavepolicy';
import Leaveconfiguration from "./scenes/leaveconfigurations";
import Leavetracker from './scenes/leavetracker';
import Report from './scenes/reports';
import Staff from './scenes/companystaff';


export default function Router() {
  const routes=  useRoutes([
    {
      path: "/dashboard", 
      element: <Dashboard />,
      children: [
        { element: <Navigate to= "/dashboard" />, index: true },
        
        
      ],
    },
    {path: "/", element: <Login/>},
    {
      path: '*',
      element: <Login/>,
    },
    { path: '/leaveapplication', element: <Leaveappplication /> },
    { path: '/leaveconfiguration', element: <Leaveconfiguration /> },
    { path: '/leavepolicy', element: <Leavepolicy /> },
    { path: '/leavetracker', element: <Leavetracker /> },
    { path: '/reports', element: <Report /> },
    { path: '/companystaff', element: <Staff /> },
    
   
  ]);

  return routes;}