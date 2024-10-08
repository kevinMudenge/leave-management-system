import {useContext, useState} from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {Box, FormControl, IconButton, InputLabel, Typography, useTheme, Hidden, Select, Tooltip, Chip, Menu, Button, MenuItem } from "@mui/material";

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import {ColorModeContext, tokens} from "../../theme";
import Logo from '../../assets/logo.svg';



const TopBar=() =>{
  const theme = useTheme();
  const colors= tokens(theme.palette.mode);
  const location = useLocation();
  
  //for the iconbuttons functionality.
  const [search, setSearch]= useState(false);//search
  const colorMode = useContext(ColorModeContext);//dark and lightmode
  
  //handles avatar dropdown and states
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //for the select menu
  const selectItems = [
    {label: 'Apply for a Leave', to: '/dashboard/leaveapplication' },
    {label: 'Read About Leaves', to: '/dashboard/leavepolicy' },
  ];
    

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchSee= () => {
    setSearch(true);
  };

  const handleSearchUnsee = () => {
    setSearch(false);
  };
  
  
    return <Box display="flex" justifyContent="space-between" px={{sm:2, xs: 1}} py={1} minWidth="100%">
      <Box display="flex" alignItems="center">
        <img src={Logo} style={{height: "auto", width: "120px"}} alt="SasaPay|LMS" />
        <Hidden lgDown>
          <Box display='flex' gap={4} pl={7}>
            <Button
              variant={location.pathname === '/dashboard/app' ? 'contained' : 'text'}
              color={location.pathname === '/dashboard/app' ? 'error' : 'info'}
              component={RouterLink}
              size="small"
              to="/dashboard"
              activeclassname="active-button"
              sx={{ borderRadius: '32px', textTransform: 'revert', minWidth: "auto"}}
            >
              <GridViewOutlinedIcon />
              <Typography ml={1}  
              color={location.pathname === '/dashboard/app' ? undefined : colors.blueAccent[400]}>
                Dashboard
              </Typography>
            </Button>
            <Button
              variant={location.pathname === '/dashboard/leaveapplication' ? 'contained' : 'text'}
              color={location.pathname === '/dashboard/leaveapplication' ? 'error' : 'info'}
              component={RouterLink}
              to="/dashboard/leaveapplication"
              size="small"
              activeclassname="active-button"
              sx={{ borderRadius: '32px', textTransform: 'revert', minWidth: "auto"}}
            >
              <FeedOutlinedIcon />
              <Typography ml={1} 
              color={location.pathname === '/dashboard/leaveapplication' ? undefined : colors.blueAccent[400]}>
                Leave Application
              </Typography>
            </Button>
            <Button
              variant={location.pathname === '/dashboard/leavetracker' ? 'contained' : 'text'}
              color={location.pathname === '/dashboard/leavetracker' ? 'error' : 'info'}
              component={RouterLink}
              size="small"
              to="/dashboard/leavetracker"
              activeclassname="active-button"
              sx={{ borderRadius: '32px', textTransform: 'revert', minWidth: "auto" }}
            >
              <HistoryToggleOffOutlinedIcon />
              <Typography ml={1} 
              color={location.pathname === '/dashboard/leavetracker' ? undefined : colors.blueAccent[400]}>
                Leave Tracker
              </Typography>
            </Button>
            <Button
              variant={location.pathname === '/dashboard/leavepolicy' ? 'contained' : 'text'}
              color={location.pathname === '/dashboard/leavepolicy' ? 'error' : 'info'}
              component={RouterLink}
              to="/dashboard/leavepolicy"
              size="small"
              activeclassname="active-button"
              sx={{ borderRadius: '32px', textTransform: 'revert', minWidth: "auto" }}
            >
              <PolicyOutlinedIcon />
              <Typography ml={1} 
              color={location.pathname === '/dashboard/leavepolicy' ? undefined : colors.blueAccent[400]}>
                Leave Policy
              </Typography>
            </Button>
          </Box>
        </Hidden>
      </Box>

      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" mr={{xs:0, sm: 1}}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'light' ? 
            (<DarkModeOutlinedIcon color="primary"/>)
            :
            (<LightModeOutlinedIcon />)}
          </IconButton>
      
          {search && (
            <FormControl size="small">
              <InputLabel>I would like to:</InputLabel>
              <Select
              style={{minWidth: '140px'}}
              label="I would like to:"
              autoFocus
              onBlur={handleSearchUnsee}
              >
                {selectItems.map((selectItem) => (
                <MenuItem
                key={selectItem.label}
                component={RouterLink}
                to={selectItem.to}
                >
                <Typography color={colors.blueAccent[400]}>{selectItem.label}</Typography>
                </MenuItem>
                ))}
              </Select>
            </FormControl>)
          }
          {! search && (
          
            <Box display={{sm: "flex",xs: "none"}}>
            <IconButton type="button" onClick={handleSearchSee}>
              <SearchOutlinedIcon color={theme.palette.mode === 'light' ? "primary": undefined}/>
            </IconButton>
            </Box>
          )
          }
          
          
        </Box>
      
        <Chip color="info" icon={<AccountCircleOutlinedIcon />} sx={{cursor: "default"}} label="profile settings" variant="filled" onDelete={handleClick} deleteIcon={<Tooltip title="Open settings" arrow placement="bottom-end"><ArrowDropDownIcon/></Tooltip>}/>

      </Box>

      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      sx= {{
        p: 0,
        mt: 1.5,
        ml: 0.75,
        '& .MuiMenuItem-root': {
          borderRadius: 1,
          marginX: 1,
        }
      }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton>
            <ManageAccountsOutlinedIcon color='info'/>
          </IconButton>
          <Typography ml={1} color={colors.blueAccent[400]}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/">
          <IconButton>
            <LogoutOutlinedIcon color='error'/>
          </IconButton>
          <Typography ml={1} color={colors.redAccent[400]}>
            Logout
          </Typography>
            
        </MenuItem>
      </Menu>
    </Box>
  }

export default TopBar;
