import { useState, forwardRef, useEffect } from 'react';
import { Button, Avatar, Box, TextField, Modal, Typography, Snackbar } from '@mui/material';

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

import Copyright from '../../components/global/Copyright';

const ForgotPassword = forwardRef(({ open, onClose }, ref) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('success');

  useEffect(() => {
    if (open) {
      setEmail('');
      setEmailError('');
    }
  }, [open]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleModalClose = () => {
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleResetPassword = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError('Email is required.');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    try {
      // Mock API call
      const response = { success: true };

      if (response.success) {
        setSnackbarMessage('Password reset successful! Your reset password has been sent to your Email.');
        setSnackbarColor('success');
        setSnackbarOpen(true);

        setTimeout(() => {
          handleModalClose();
        }, 4200);
      } else {
        setSnackbarMessage('Error sending reset link.');
        setSnackbarColor('error');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setSnackbarMessage('An error occurred while resetting your password. Please try again or contact the HR desk for assistance.');
      setSnackbarColor('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '47%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fcfcfc',
            width: '400px',
            p: 3,
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          <Avatar sx={{ m: 'auto', backgroundColor: '#f8dcdb' }}>
            <ContactSupportOutlinedIcon color="error" />
          </Avatar>
          <Typography component="h1" variant="h5" mt={2} mb={5}>Forgot Password?</Typography>
          <Typography variant='body2'>Enter the email address associated with your account and we will send you your reset password shortly.</Typography>

          <TextField
            label="Email"
            type="email"
            fullWidth
            autoFocus
            value={email}
            onChange={handleEmailChange}
            margin='normal'
            helperText={emailError}
            error={!!emailError}
          />
          <Button variant="contained" color="info" fullWidth sx={{ my: 3 }} onClick={handleResetPassword}>
            Reset Password
          </Button>
          <Copyright sx={{ mt: 5, mb: 4 }} />
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4200}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        ContentProps={{
          style: {
            backgroundColor: snackbarColor === 'success' ? 'green' : 'red',
            color: 'white',
          },
        }}
        message={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {snackbarColor === 'success' ? (
              <TaskAltOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
            ) : (
              <ErrorOutlineOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
            )}
            {snackbarMessage}
          </span>
        }
      />
    </>
  );
});

export default ForgotPassword;
