
import {Typography, useTheme} from "@mui/material";

import {tokens} from "../../theme";

export default function Copyright(props) {
    const theme = useTheme();    
    const colors= tokens(theme.palette.mode);
    const sasapayurl= "https//:sasapay.co.ke"
  
    return (
      <Typography variant="h6" color={colors.blueAccent[400]} align="center" {...props}>
        {'Copyright © '}
        <a color="inherit" target="_blank" rel="noopener noreferrer" href={sasapayurl}>
          SasaPay
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }