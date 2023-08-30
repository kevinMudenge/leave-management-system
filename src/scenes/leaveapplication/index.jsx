import { Box, Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Header from "../../components/global/Header";

const LeaveApplicationForm = () => {
  const leaveTypes = [
    { id: 1, name: "Annual Leave" },
    { id: 2, name: "Sick Leave" },
    { id: 3, name: "Maternity Leave" },
    { id: 4, name: "Paternal Leave" },
    { id: 5, name: "Compasionate Leave" },
    { id: 6, name: "Persoal Leave" },
    { id: 6, name: "Exam Leave" },

    //add api calls or more leave data
  ];

  const [userName, setUserName] = useState("");
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aliasNumber, setAliasNumber] = useState("");
  const [email, setEmail] = useState("");
  const [jobPosition, setJobPosition] = useState("");

  const fetchUserDetails = () => {
    const userDetails = {
      name: "John Terrni",
      // Other user details from session data
    };
    setUserName(userDetails.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be replaced with actual form submission logic
    console.log("Form submitted:", {
      userName,
      leaveType: selectedLeaveType,
      startDate,
      endDate,
    });
  };

  const [comments, setComments] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleFileChange = (e) => {
    setAttachments([...attachments, ...e.target.files]);
  };

  const removeAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };

  return (
    <Box m={{ xs: 0, sm: 7 }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Header
          title="Leave Application Form"
          subtitle="Input your details below to begin your leave application process."
        />
      </Box>
      <Box
        borderLeft={1}
        borderColor="#00B8D9"
        display="flex"
        flexDirection="column"
        width="80%"
        pl={{ xs: 0, sm: 3 }}
        mt={4}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            color="#212b36"
            sx={{ fontFamily: "Open Sans", fontWeight: "700" }}
          >
            Personal Details
          </Typography>

          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onClick={fetchUserDetails}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Alias Number"
                variant="outlined"
                fullWidth
                value={aliasNumber}
                onChange={(e) => setAliasNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Position"
                variant="outlined"
                fullWidth
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ minWidth: 280 }}>
                <InputLabel>Leave Type</InputLabel>
                <Select
                  label="Select Leave Type"
                  variant="outlined"
                  fullWidth
                  value={selectedLeaveType}
                  onChange={(e) => setSelectedLeaveType(e.target.value)}
                  required
                >
                  {leaveTypes.map((leaveType) => (
                    <MenuItem key={leaveType.id} value={leaveType.id}>
                      {leaveType.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              Start Date
              <TextField
                type="date"
                variant="outlined"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              End Date
              <TextField
                type="date"
                variant="outlined"
                fullWidth
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comments"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={comments}
                onChange={handleCommentChange}
              />
            </Grid>
            <Grid item xs={12} mt={1}>
              <input
                accept="application/pdf, image/*"
                // Specify accepted file types
                id="attachment"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="attachment">
                <Button
                  component="span"
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{ textTransform: "revert" }}
                >
                  Attach Supporting Documents
                </Button>
              </label>

              <Box mt={1}>
                {attachments.map((file, index) => (
                  <Box
                    key={index}
                    display="flex"
                    mb={1}
                    justifyContent="space-between"
                  >
                    <Typography>{file.name}</Typography>
                    <Button
                      variant="outlined"
                      component="span"
                      color="error"
                      size="small"
                      sx={{ textTransform: "revert", fontWeight: "700" }}
                      onClick={() => removeAttachment(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Button
              variant="outlined"
              type="submit"
              size="small"
              sx={{
                width: "100%",
                borderRadius: "16px",
                minWidth: "64px",
                textTransform: "revert",
                mx: 1,
                mt: 2,
                color: "#00B8D9", // Default text color
                borderColor: "#00B8D9", // Default border color
                "&:hover": {
                  backgroundColor: "#00B8D9", // Background color on hover
                  color: "#ffffff", // Text color on hover
                  borderColor: "#00B8D9", // Border color on hover
                },
              }}
              color="info"
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                }}
              >
                Request Leave
              </Typography>
            </Button>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default LeaveApplicationForm;
