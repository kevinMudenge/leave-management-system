import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const StatBox = ({ title, icon}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing={2} mt={1} mb={2} mx={1}>
      <Box height="72px">
      {icon}
        <Box display="flex" alignItems="center" gap={2}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default StatBox;
