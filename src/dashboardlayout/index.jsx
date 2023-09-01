//import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Box from "@mui/material/Box"

import Topbar from "../components/global/Topbar";
import Sidebar from "../components/global/Sidebar"



const Dashboardlayout = () => {
    //const [open, setOpen] = useState(false);
    //const [access, setAccess]= useState();

  return  (
  <Box display="flex" flexDirection="column" justifyContent='center'>
    <Topbar />
    <Sidebar />
    <Outlet />
    </Box>
    )
}

export default Dashboardlayout;