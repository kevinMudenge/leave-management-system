import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header =({ title, subtitle, ...props}) =>{
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);

    return <Box display="flex" flexDirection="column" width="100%" {...props}>
        <Typography variant="title" color={colors.grey[100]} fontWeight="Bold"
        sx={{mb : "5px"}}>
            {title}
        </Typography>
        <Typography variant="subtitle" color={colors.blueAccent[400]}sx={{mb : "1px"}}>
            {subtitle}
        </Typography>
    </Box>
}

export default Header;