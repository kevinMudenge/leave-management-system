import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {Typography, Avatar, Modal} from "@mui/material";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

import ForgotPassword from "./ForgotPassword";
import Copyright from '../../components/global/copyright';


export default function Login() {
  const navigate = useNavigate();
  const [showPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get('email');
  const password = data.get('password');
  
  if (!email) {
    setEmailError('Email is required.');
  } else {
    setEmailError('');
  }

  if (!password) {
    setPasswordError('Password is required.');
  } else {
    setPasswordError('');
  }

  if (email && password) {
    console.log({
      email: email,
      password: password,
    });
    
    navigate('/dashboard', { replace: true });
  }
};
  
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1}}>
            <LockOutlinedIcon color="info"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={emailError}
              error={!!emailError}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              helperText={passwordError}
              error={!!passwordError}
            />

            <Box width="100%" 
            display="flex" 
            mb={1}
            justifyContent="space-around">
              <Link onClick={handleForgotPasswordOpen} variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#b71c1c' } }} underline='hover'>
                Forgot password?
              </Link>
              <Modal open={forgotPasswordOpen} onClose={handleForgotPasswordClose}>
                <ForgotPassword open={forgotPasswordOpen} onClose={handleForgotPasswordClose} />
              </Modal>
            </Box>
            
            <FormControlLabel
              control={<Checkbox value="true" color="error" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              color="info"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography mb={1}>Need an Account? Visit the HR office Desk for Account Creation</Typography>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}