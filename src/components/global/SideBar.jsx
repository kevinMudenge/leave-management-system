import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Fab, Popover, MenuItem, Box, Typography, useTheme, IconButton } from '@mui/material';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

import { tokens } from '../../theme';



const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
    const colors= tokens(theme.palette.mode);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'navigation-popover' : undefined;

  const Item = ({title, path, icon}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const location = useLocation();
    return(
        <MenuItem
        component={RouterLink}
        to={path}
        onClick={handleClose}
        >
        <IconButton sx={{color: location.pathname === path ? colors.blueAccent[400]: colors.grey[100]}}>
        {icon }
        </IconButton>
        <Typography m={2} sx={{color: location.pathname === path ? colors.blueAccent[400]: colors.grey[100]}}>{title}</Typography>
        </MenuItem>
    )
}

  return (
    <>
      <Fab color={!open ? 'info' : 'error'} size='small' onClick={handleClick} style={{marginLeft: '24px'}}>
        {!open ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
      </Fab>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx= {{
          p: 0,
          [theme.breakpoints.up('xs')]: {
            mt: 6,
            ml: 0,
          },
          [theme.breakpoints.up('md')]: {
            mt: 2,
          },
          [theme.breakpoints.up('lg')]: {
            mt: 1.5,
          },
          ml: 0.75,
          '& .MuiMenuItem-root': {
            borderRadius: 1,
            marginX: 1,
          }}}
      >
        <Box display={{lg: 'none', md: 'flex'}}>
          <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px"}}>
            Menu Options
          </Typography>
        </Box>
        <Box display={{lg: 'none', md: 'flex'}}>
          <Item
          title="Dashboard"
          path="/dashboard/app"
          icon={<GridViewOutlinedIcon />}
          />
          <Item
            icon={<FeedOutlinedIcon />}
            title="Leave Application"
            path="/dashboard/leaveapplication"
          />
          <Item
            icon={<HistoryToggleOffOutlinedIcon />}
            title="Leave Tracker"
            path="/dashboard/leavetracker"
          />
          <Item
            icon={<PolicyOutlinedIcon />}
            title="Leave Policy"
            path="/dashboard/leavepolicy"
          />
        </Box>
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}>
          System Settings
        </Typography>
        <Item 
        title="People Excellence"
        path="/dashboard/companystaff"
        icon= {<PeopleOutlinedIcon/>}
        />
        <Item 
        title="Leave Configurations"
        path="/dashboard/leaveconfiguration"
        icon= {<EngineeringOutlinedIcon/>}
        />
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}>
          Pages
        </Typography>
        <Item 
        title="Leave Calendar"
        path="/dashboard/leavetracker"
        icon= {<CalendarTodayOutlinedIcon/>}
        />
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}>
          Reports
        </Typography>
        <Box mb={1}>
        <Item 
        title="Company Charts"
        path="/dashboard/report"
        icon= {<InsightsOutlinedIcon/>}
        />
        </Box>
        
      </Popover>
    </>
  );
};

export default SideBar;
