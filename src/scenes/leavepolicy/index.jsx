import { Box, useTheme } from "@mui/material";
import Header from "../../components/global/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Button } from "@mui/material";
import Copyright from "../../components/global/copyright";

const Leavepolicy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DocumentLinkButton = () => {
    const documentUrl =
      "https://docs.google.com/document/d/1hrX-PEKmBhSv5o8WKESdG3ssOIir0qHi/edit?usp=sharing&ouid=106342101822357898565&rtpof=true&sd=trueF";
    return (
      <a href={documentUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant="contained"
          color="primary"
          sx={{ whiteSpace: "nowrap" }}
        >
          Read the Policy
        </Button>
      </a>
    );
  };
  return (
    <Box
      m={{ xs: 0, sm: 4 }}
      display="flex"
      width={{ xs: "100%", sm: "98%" }}
      justifyContent="center"
      flexDirection="column"
      alignSelf="center"
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Leave Policy"
          subtitle="Dear Gentle Reader, Get Answers to Your Leave issues and Your Frequently Asked Issues Here"
        />
        <DocumentLinkButton />
      </Box>

      <Box mt={4}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultCollapsed>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              Another Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultCollapsed>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              Your Favorite Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultCollapsed>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              Some Random Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultCollapsed>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              The Father of All Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultCollapsed>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              The Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  );
};

export default Leavepolicy;
// import React, { useState } from "react";
// import { Box,  } from "@mui/material";

// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
// } from "@mui/material";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     aliasNumber: "",
//     department: "",
//     email: "",
//   });
//   const [showPasswordChange, setShowPasswordChange] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send the data to a server
//     console.log(formData);
//   };
//   const handlePasswordChangeClick = () => {
//     setShowPasswordChange(!showPasswordChange);
//   };

//   return (
//     <Box
//       m={{ xs: 0, sm: 4 }}
//       display="flex"
//       width={{ xs: "100%", sm: "70%" }}
//       justifyContent="center"
//       flexDirection="column"
//       alignItems="center"
//       alignSelf="center"
//       sx={{
//         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
//         borderRadius: "8px",
//         padding: "16px",
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="First Name"
//               variant="outlined"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Last Name"
//               variant="outlined"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Alias Number"
//               variant="outlined"
//               name="aliasNumber"
//               value={formData.aliasNumber}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth variant="outlined">
//               <InputLabel>Department</InputLabel>
//               <Select
//                 label="Department"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//               >
//                 <MenuItem value="HR">HR</MenuItem>
//                 <MenuItem value="IT">IT</MenuItem>
//                 <MenuItem value="Finance">Finance</MenuItem>
//                 {/* Add more department options as needed */}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit" fullWidth>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <Button
//         variant="outlined"
//         color="primary"
//         onClick={handlePasswordChangeClick}
//         style={{ marginTop: "16px" }}
//       >
//         Change Password
//       </Button>
//       {showPasswordChange && (
//         // Password change section
//         <div style={{ marginTop: "16px" }}>
//           <h2>Change Password</h2>
//           {/* Add your password change fields here */}
//           <TextField
//             fullWidth
//             label="Current Password"
//             variant="outlined"
//             type="password"
//             name="currentPassword"
//             // Add onChange handler
//             required
//           />
//           <TextField
//             fullWidth
//             label="New Password"
//             variant="outlined"
//             type="password"
//             name="newPassword"
//             style={{ marginTop: "16px" }}

//             // Add onChange handler
//             required
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginTop: "16px" }}
//             // Add onClick handler to handle password change
//             fullWidth
//           >
//             Change Password
//           </Button>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default RegistrationForm;
