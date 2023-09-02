import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import { Fab, Popover, MenuItem, Box, Typography, useTheme } from '@mui/material';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

import { tokens } from '../../theme';


const Item = ({title, path, icon}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem
        component={RouterLink}
        to={path}
        style={{color: colors.grey[100]}} 
        >
        {icon}
        <Typography m={2}>{title}</Typography>
        </MenuItem>
    )
}

const Sidebar = () => {
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

  return (
    <>
      <Fab color={!open ? 'info' : 'error'} size="small" onClick={handleClick} style={{marginLeft: '24px'}}>
        {!open ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
      </Fab>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        backgroundColor= {colors.primary[400]}
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
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            borderRadius: 1,
            marginX: 1,
          }}}
      >
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
        path="/dashboard/leaveconfiguraton"
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

export default Sidebar;
