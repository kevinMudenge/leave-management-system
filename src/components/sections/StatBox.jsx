import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, icon, progress}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing={2} mt={1} mb={2} mx={1}>
      <Box alignItems="center">
        <Box display="flex" alignItems="center" gap={2}>
        {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box mt={2}>
          <ProgressCircle progress={progress} />
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
      </Box>
      
    </Grid>
  );
};

export default StatBox;
