import { Outlet } from 'react-router-dom';

import Box from "@mui/material/Box"

import TopBar from "../components/global/TopBar";
import SideBar from "../components/global/SideBar"



const DashboardLayout = () => {

  return  (
  <Box display="flex" flexDirection="column" justifyContent='center'>
    <TopBar />
    <SideBar />
    <Outlet />
  </Box>
  )
}

export default DashboardLayout;