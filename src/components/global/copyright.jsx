import Link from '@mui/material/Link';
import {Typography, useTheme} from "@mui/material";

import {tokens} from "../../theme";

export default function Copyright(props) {
    const theme = useTheme();    
    const colors= tokens(theme.palette.mode);
  
    return (
      <Typography variant="h6" color={colors.blueAccent[400]} align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" target="blank" href="https//:sasapay.co.ke">
          SasaPay
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }