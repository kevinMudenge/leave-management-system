import {Box, Button, Typography} from '@mui/material';
import Header from '../../components/global/Header';



const LeaveConfiguration=()=>{


    return <Box m={{ xs: 3, sm: 4 }} display="flex" width={{xs:'99%', sm:'98%', md: '96%'}} justifyContent="center" flexDirection="column" alignSelf="center"
    sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
    }}>
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Leave Configurations" subtitle="Company leave configuration desk"/>
                <Button variant="contained" sx={{ borderRadius: "32px", whiteSpace: 'nowrap', textTransform: 'revert' }}>
                    <Typography>Add A New Configuration</Typography>
                </Button>
        </Box>
    </Box>
}

export default LeaveConfiguration;