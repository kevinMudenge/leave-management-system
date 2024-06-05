import { useState, forwardRef } from 'react';
import { Button, Avatar, Box, TextField, Modal, Typography, Snackbar } from '@mui/material';

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

import Copyright from '../../components/global/Copyright';



const Forgotpassword = forwardRef(({ open, onClose }, ref) => {
  const [modalOpen, setModalOpen] = useState(open);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('success');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSuccessSnackbarOpen = () => {
    setTimeout(() => {
          handleModalClose();
        }, 4800);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setEmailError('Email is required.');
      return;
    } else {
      setEmailError('');
    }
    try {
      //API to check if the email exists and initiate the password reset process, say,
      // const response = await fetch('/api/forgotPassword', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      //if exists Replace with API to update the user's password in the backend and mails this to user

      // Sample wait response
      // cconst data = await response.json() 
      //if (data.success) {setSnackbarMessage('Password reset link sent to your email.');
        //setSnackbarOpen(true);} 
        //else {
        //setSnackbarMessage('Error sending reset link.');
        //setSnackbarOpen(true);}} 

      //fetch response
      // await fetch('/api/updatePassword', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, newPassword }),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      
    
      const response = { success: true };

      if (response.success) {
        setResetSuccess(true);
        setSnackbarMessage('Password reset successful! Your reset password has been sent to your Email.');
        setSnackbarOpen(true);
        setSnackbarColor('success');
        
        handleSuccessSnackbarOpen();
        
      }
      

    } catch (error) {
      console.error('Error resetting password:', error);
      setSnackbarMessage('An error occurred while resetting your password. You are open to try again or to Contact the HR Desk for further Guidance');
      setSnackbarOpen(true);
      setSnackbarColor('error');
    }
  };

  return <><Modal open={modalOpen} onClose={handleModalClose}>
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
      }}>
        <Avatar sx={{ m: 'auto', backgroundColor: '#f8dcdb'}}>
            <ContactSupportOutlinedIcon color="error"/>
          </Avatar>
        <Typography component="h1" variant="h5" mt={2} mb={5}>Forgot Password?</Typography>
        <Typography variant='body2'>Enter the Email address associated with your account and we will send you your reset password shortly.</Typography>

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
        <Button variant="contained" color="info" fullWidth sx={{ my: 3}} onClick={handleResetPassword}>
          Reset Password
        </Button>
        <Copyright sx={{ mt: 5, mb: 4}} />
       
      </Box>
    </Modal>
    <Snackbar
    open={snackbarOpen}
    autoHideDuration={4200}
    onClose={handleSnackbarClose}
    onOpen= {handleSuccessSnackbarOpen}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    ContentProps={{
      style: {
        backgroundColor: snackbarColor === 'success' ? 'green' : 'red',
        color: 'white',
      },
    }}
    message={
      <span style={{ display: 'flex', alignItems: 'center'}}>
        {snackbarColor === 'success' ? (
          <TaskAltOutlinedIcon sx={{ mr: 1 }} fontSize="small" />):(<ErrorOutlineOutlinedIcon sx={{ mr: 1 }} fontSize="small" />)
        }
        {snackbarMessage}
      </span>
    }    
  /></>
    ;
});

export default Forgotpassword;
