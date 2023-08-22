import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {useContext, useState} from "react";
import {ColorModeContext, tokens} from "../../theme";
import {InputBase, Tooltip, Popover, Avatar} from "@mui/material";
import {Menu, Button, MenuItem} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Logo from '../../assets/logo.svg';

function MouseOverPopover() {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <MenuItem onMouseEnter={handlePopoverOpen}>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        Settings
      </MenuItem>
      
      <Popover
        id="mouse-over-popover"
        open={open}
        onClick={handlePopoverClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <MenuItem>
        <IconButton>
          <RoomPreferencesOutlinedIcon />
        </IconButton>
        Leave Configurations
        </MenuItem>
        <MenuItem>
        <IconButton>
          <ManageAccountsOutlinedIcon />
        </IconButton>
        Company Staff
        </MenuItem>
      </Popover>
    </Box>
  );
}

const Topbar=() =>{
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);
  
    const colorMode = useContext(ColorModeContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return <Box display="flex" justifyContent="space-between" p={2}>
     <Box display="flex" alignItems="center">
      <img src={Logo} height="43px" alt="SasaPay Leave" />
    <Box display="flex" gap={1} pl={3} maxHeight="32px" >
        <Button variant="contained" sx={{borderRadius:"32px", textTransform: "revert"}}>
        <Typography>Overview</Typography>
        </Button>
        <Button variant="text" sx={{borderRadius:"32px", textTransform: "revert"}}>
        <Typography color={colors.grey[100]}>Leave Application</Typography>
        </Button>
        <Button variant="text" sx={{borderRadius:"32px", textTransform: "revert"}}>
        <Typography color={colors.grey[100]}>Leave Tracker</Typography>
        </Button>
        <Button variant="text" sx={{borderRadius:"32px", textTransform: "revert"}}>
        <Typography color={colors.grey[100]}>Leave Policy</Typography>
        </Button>
      </Box></Box>
      <Box display="flex"
      alignItems="center">
      <Box display="flex" maxHeight="2.7em">
        <Box 
        display="flex" 
        justifyContent="space-between" 
        backgroundColor={colors.primary[400]} borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"/>
          <IconButton type="button" sx={{p: 1}}>
            <SearchOutlinedIcon/>
          </IconButton>
        </Box>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? 
          (<DarkModeOutlinedIcon/> ): 
          (<LightModeOutlinedIcon/>)}
        </IconButton>
        
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        </Box>
        <Tooltip title="Open settings">
          <IconButton onClick={handleClick}>
            <Avatar>
              <PersonOutlinedIcon/>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          elevation: 1,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton>
            <PersonOutlinedIcon/>
          </IconButton>
          My Account
        </MenuItem>
        <MouseOverPopover />
        <MenuItem onClick={handleClose}>
          <IconButton>
            <LogoutOutlinedIcon />
          </IconButton>
          Logout
        </MenuItem>
      </Menu>
    </Box>
    
}

export default Topbar;