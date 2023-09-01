import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const StatBox = ({ title, icon, subtitle, data, subdata}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing={2} mt={1} mb={2} mx={1}>
      <Box width="240px">
      {icon}
        <Box display="flex" alignItems="flex-start" flexDirection="column"
        sx={{
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
          padding: "16px",
      }}
      >
          <Typography mb={1}
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Avatar sx={{marginY: 2, backgroundColor: colors.blueAccent[900]}}>
            {icon}
          </Avatar>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.grey[300] }}
          >
            {subtitle}
          </Typography>
          <Box display="flex" alignItems="baseline">
          <Typography variant="h5" sx={{color: colors.redAccent[400]}} fontWeight='Bold'>{data}</Typography >
          <Typography variant="h6" fontWeight='Bold'>/{subdata}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default StatBox;
