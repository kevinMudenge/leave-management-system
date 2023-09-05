import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/global/Header";


import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    aliasNumber: "",
    department: "",
    email: "",
  });
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server
    console.log(formData);
  };
  const handlePasswordChangeClick = () => {
    setShowPasswordChange(!showPasswordChange);
  };

  return (
    <Box
      m={{ xs: 0, sm: 4 }}
      display="flex"
      width={{ xs: "100%", sm: "70%" }}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      alignSelf="center"
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
        <Box display="flex" justifyContent="center" alignItems="center">
        <Header
          title="Leave Application Form"
          subtitle="Input your details below to begin your leave application process." sx={{alignItems: "center"}}
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Alias Number"
              variant="outlined"
              name="aliasNumber"
              value={formData.aliasNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Department</InputLabel>
              <Select
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                {/* Add more department options when needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button
        variant="outlined"
        color="primary"
        onClick={handlePasswordChangeClick}
        style={{ marginTop: "16px" }}
      >
        Change Password
      </Button>
      {showPasswordChange && (
        // Password change section
        <div style={{ marginTop: "16px" }}>
          <h2>Change Password</h2>
          {/* Add your password change fields here */}
          <TextField
            fullWidth
            label="Current Password"
            variant="outlined"
            type="password"
            name="currentPassword"
            // Add onChange handler
            required
          />
          <TextField
            fullWidth
            label="New Password"
            variant="outlined"
            type="password"
            name="newPassword"
            style={{ marginTop: "16px" }}
            // Add onChange handler
            required
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
            // Add onClick handler to handle password change
            fullWidth
          >
            Change Password
          </Button>
        </div>
      )}
    </Box>
  );
};

export default RegistrationForm;
