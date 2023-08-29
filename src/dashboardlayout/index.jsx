//import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Box from "@mui/material/Box"

import Topbar from "../components/global/Topbar";
import Prosidebar from "./../components/global/Sidebar"




const Dashboardlayout = () => {
    //const [open, setOpen] = useState(false);
    //const [access, setAccess]= useState();

  return <Box>
    <Topbar />
    <Box display="flex">
    {<Prosidebar />}
        <Outlet />
    </Box>
    </Box>
}

export default Dashboardlayout;