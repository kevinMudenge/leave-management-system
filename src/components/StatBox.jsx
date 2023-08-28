import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" ml={2}>
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
        <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
      
    </Box>
  );
};

export default StatBox;
