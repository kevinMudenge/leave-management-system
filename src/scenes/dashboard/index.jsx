import { Box, Button, Typography, Grid, useTheme } from "@mui/material";

import { mockTransactions } from "../../data/mockData";

import { tokens } from "../../theme";
import Header from "../../components/global/Header";
import Copyright from '../../components/global/copyright';
import StatBox from "../../components/sections/StatBox";
import Sidebar from "../../components/global/Sidebar";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt={2} mx={3}>
      <Box display="flex" mt={2} mx={3}>
        <Header title="Hey You," />
      </Box>
      
      <Grid container spacing={2} mt={1} mb={2} mx={1}>
        <Grid item xs={12} md={3}>
          <Button variant="contained" sx={{ borderRadius: "32px", textTransform: "revert" }}>
            <Typography>Request for a Leave</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <StatBox
            title="On Leave"
            progress=".5"
            />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatBox
            title="Available"
            progress="0.50"
            />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatBox
            title="New Requests"
            progress="0.30"
          />
        </Grid>
      </Grid>
        
      <Grid container spacing={2} mt={1} mb={2} mx={1}>
        <Grid item xs={12}>
          <Box>
            <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            >
              Leave requests
            </Typography>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
           {/*datagrid goes here*/}
          </Box>
        </Grid>
      </Grid>

        {/* ROW 3 */}
      <Grid container spacing={2} mt={1} mb={2} mx={1}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight="600">
            Department Data
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/*pie data will go here */}
            
            
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Leave Calendar
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
            >
              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Grid mb={3}>
        <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
        >
          Projected Availability
        </Typography>
        <Box height="250px" mt="-20px">
          {/*//avatars and what nots go here */}
        </Box>
      </Grid>

      <Copyright sx={{ mt: 8, mb: 4 }} />

    </Box>
      
  );
};

export default Dashboard;