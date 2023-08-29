import {useState} from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {Sidebar, Menu, MenuItem} from "react-pro-sidebar";

import {Box, IconButton, Typography, useTheme} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem active={selected === title} 
        style={{color: colors.grey[100]}} 
        onClick={()=> setSelected(title)}
        icon= {icon}>
        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    )
}

const ProSidebar=() =>{
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const[selected, setSelected] = useState("Dashboard");

    return(
        <Box>
            <Sidebar collapsed={isCollapsed} backgroundColor= {colors.primary[400]}>
                <Menu collapsed={isCollapsed} backgroundColor= {colors.primary[400]}>
                    <MenuItem onClick={()=> setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed? <MenuOutlinedIcon /> : undefined}>
                        {!isCollapsed &&(
                            <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                    )}
                    </MenuItem>
                        
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item 
                        title="Dashboard"
                        to="/dashboard/app"
                        icon= {<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px"}}>
                                Settings
                            </Typography>
                        <Item 
                        title="Manage Teams"
                        to="/dashboard/companystaff"
                        icon= {<PeopleOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Leave Configurations"
                        to="/dashboard/leaveconfiguraton"
                        icon= {<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px"}}>
                                Pages
                            </Typography>
                        <Item 
                        title="Leave Calendar"
                        to="/dashboard/leavetracker"
                        icon= {<CalendarTodayOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Leave Policy"
                        to="/dashboard/leavepolicy"
                        icon= {<HelpOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px"}}>
                                Reports
                            </Typography>
                        <Item 
                        title="Pie Charts"
                        to="/dashboard/report"
                        icon= {<TimelineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default ProSidebar;