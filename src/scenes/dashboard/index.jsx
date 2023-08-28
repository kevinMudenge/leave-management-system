import { Box, Button, Typography, useTheme } from "@mui/material";

import { mockTransactions } from "../../data/mockData";

import { tokens } from "../../theme";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Topbar from "./../../components/global/Topbar"
import Header from "../../components/global/Header";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Topbar />
    <Box m={4}>
      <Box display="flex" justifyContent="space-between">
        <Header title="Hello" />

        <Box>
        <Button variant="contained" sx={{borderRadius:"32px", textTransform: "revert"}}>
        <Typography>Request for a Leave</Typography>
        </Button>
        </Box>
      </Box>
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt={2}
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="On Leave"
            subtitle="data"
            progress=".5"
            icon=""
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="16px"
        >
          <StatBox
            title="Available"
            subtitle=""
            progress="0.50"
            icon=""
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="16px"
        >
          <StatBox
            title="New Requests"
            subtitle=""
            progress="0.30"
            icon={
              <PersonAddIcon
                sx={{ color: "black", fontSize: "32px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="16px"
        >
          <StatBox
            title="Total Leave Traffic"
            subtitle=""
            progress="0.80"
            icon=""
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Leave requests
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/*datagrid goes here*/}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
          overflow="auto"
        >
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
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
          p="30px"
        >
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
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
        >
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
        </Box>
        </Box>
      </Box>
  </>
  );
};

export default Dashboard;