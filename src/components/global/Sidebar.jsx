import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Fab, Popover, MenuItem, Typography, useTheme } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { tokens } from '../../theme';


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem active={selected === title} 
        style={{color: colors.grey[100]}} 
        onClick={()=> setSelected(title)}
        >
        {icon}
        <Typography m={2}>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
    const colors= tokens(theme.palette.mode);
    const [selected, setSelected]=useState('')

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
      >
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}>
          System Settings
        </Typography>
        <Item 
        title="People Excellence"
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
        title="Company Charts"
        to="/dashboard/report"
        icon= {<TimelineOutlinedIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
        
      </Popover>
    </>
  );
};

export default Sidebar;
