import {useContext, useState} from "react";
import { Link as RouterLink } from 'react-router-dom';

import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Select, Tooltip, Chip} from "@mui/material";
import {Menu, Button, MenuItem} from "@mui/material";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import {ColorModeContext, tokens} from "../../theme";
import Logo from '../../assets/logo.svg';



const Topbar=() =>{
  const theme = useTheme();
  const colors= tokens(theme.palette.mode);
  
  //for the iconbuttons functionality.
  const [search, setSearch]= useState(false);//search functionality

  const colorMode = useContext(ColorModeContext);//dark and lightmode

  //handles avatar dropdown and states
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const selectItems = [
    { value: 'applyLeave', label: 'Apply for a Leave', to: '/leaveapplication' },
    { value: 'readAboutLeaves', label: 'Read About Leaves', to: '/leavepolicy' },
  ];
  
  const handleSelectChange = (event) => {
  const selectedValue = event.target.value;
  };
    
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

    const handleSearch = () => {
      setSearch(! search);
    };


    return <Box display="flex" justifyContent="space-between" px={{sm:2, xs:0}} py={1} >
      <Box display="flex" alignItems="center">
        <Box minWidth="48px" maxWidth="100px">
        <img src={Logo} style={{height: "auto", width: "100%"}} alt="SasaPay Leave" />
        </Box>
        <Box display="flex" gap={1} pl={{sm:7, xs:1}}>
          <Button
            variant="contained"
            color="info"
            component={RouterLink}
            size="small"
            to="/"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <GridViewOutlinedIcon />
            <Typography ml={1}>Dashboard</Typography>
          </Button>
          <Button
            variant="text"
            component={RouterLink}
            to="/leaveapplication"
            size="small"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <FeedOutlinedIcon color="info"/>
            <Typography ml={1} color={colors.blueAccent[400]}>Leave Application</Typography>
          </Button>
          <Button
            variant="text"
            component={RouterLink}
            size="small"
            to="/leavetracker"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <WorkHistoryOutlinedIcon color="info"/>
            <Typography ml={2} color={colors.blueAccent[400]}>Leave Tracker</Typography>
          </Button>
          <Button
            variant="text"
            component={RouterLink}
            to="/leavepolicy"
            size="small"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <PolicyOutlinedIcon color="info"/>
            <Typography ml={1} color={colors.blueAccent[400]}>Leave Policy</Typography>
          </Button>
        </Box>
    </Box>
    <Box display="flex"
    alignItems="center">
      <Box display="flex" gap={1} maxHeight="2.7em">
        <Box 
        display="flex" 
        justifyContent="space-between" 
        backgroundColor={colors.primary[400]} borderRadius="3px"
        >
          {search && (
          <Select
           value=""
           onChange={handleSelectChange}
           label="Navigation"
           minWidth="180px"
           style={{ marginLeft: 'auto' }}
           >
            <MenuItem value="" disabled>
              I would like to...
            </MenuItem>
            {selectItems.map((selectItem) => (
            <MenuItem
            key={selectItem.value}
            value={selectItem.value}
            component={RouterLink}
            to={selectItem.to}
            >
            {selectItem.label}
            </MenuItem>
          ))}
        </Select>)}

          <IconButton type="button" sx={{p: 1}} onClick={handleSearch}>
            <SearchOutlinedIcon color="info"/>
          </IconButton>
        </Box>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? 
          (<Tooltip title="Dark Mode?">
            <DarkModeOutlinedIcon color="info"/>
          </Tooltip>): 
          (<Tooltip title="Light Mode?">
            <LightModeOutlinedIcon color="info"/>
           </Tooltip>)}
        </IconButton>
        
        <IconButton>
          <NotificationsOutlinedIcon color="info"/>
        </IconButton>
        </Box>
        
        <Tooltip title="Open settings">
          <Chip color="info" icon={<AccountCircleOutlinedIcon />}onClick={handleClick}
           label="anti" variant="filled" onDelete={handleClick} deleteIcon={<ArrowDropDownCircleIcon/>}/>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton>
            <PersonOutlinedIcon color='info'/>
          </IconButton>
          <Typography ml={1} color={colors.blueAccent[400]}>
            My Account
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton>
            <LogoutOutlinedIcon color='info'/>
          </IconButton>
          <Typography ml={1} color={colors.blueAccent[400]}>
            Logout
          </Typography>
          
        </MenuItem>
      </Menu>
    </Box>
    
}

export default Topbar;