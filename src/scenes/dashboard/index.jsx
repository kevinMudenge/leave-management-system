import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Box, Button, Typography} from "@mui/material";
import {Checkbox} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import img from './no_data.png';
import { useState } from "react"
import Header from '../../components/Header.jsx';

const Dashboard=() =>{
    //definitions and functionalities all follow the same order
    
    const[individual, setIndividual] = useState(true);//for radio button
    const[isChecked, setIsChecked] = useState(false);//for the name checkbox
    const[country, setCountry] = useState('');//for the select box ukiclick name

    const countries = [
        { code: 'KE', name: 'Kenya' },
        { code: 'UG', name: 'Uganda' },
        { code: 'RW', name: 'Rwanda' },
        { code: 'SO', name: 'Somalia' },
        { code: 'BI', name: 'Burundi' },
        { code: 'TZ', name: 'Tanzania' },
        { code: 'ZA', name: 'South Africa' },

        //for the select option menu //you can append here
        //for api intergration country.code is the key
    ];

    const handleRadioChange = (event) => {
        setIndividual(! individual);
    };
    
    const handleCheckboxChange = (event) => {
        setIsChecked(! isChecked);
    };
    
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    return <Box m= {{xs: 0, sm: 20}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="KWEST" subtitle="Have you screened yet!?"/>
        </Box>
    <Box display="flex" flexDirection={{xs: "column", sm: "row"}} p={3}>
        <Box width={{xs:"100%", sm: 'auto'}} 
        p={2}
        mb={{xs: 2, sm: 0}}>
        <Box width="100%" mb={1}>
            <Typography variant="h5" color="#212b36" sx={{fontFamily: "Open Sans", fontWeight: "700"}}>
                Screening
            </Typography>
        </Box>

        <Box>
            <FormControl>
                <FormLabel>
                    <Typography variant="h5" color="#637381" sx={{fontFamily: "Open Sans", fontWeight: "400"}}>
                        Screening Option
                    </Typography>
                </FormLabel>
                <RadioGroup
                row
                defaultValue="individual"
                >
                    <FormControlLabel value="individual" 
                    control={<Radio color= "info"/>} label="Individual"
                    onChange={handleRadioChange} />
                    <FormControlLabel value="false" 
                    control={<Radio color= "info"/>} label="Entity"
                    onChange={handleRadioChange} />
                </RadioGroup>
            </FormControl>
        </Box>

        <FormLabel>
            <Typography variant="h5" color="#637381" 
            sx={{fontFamily: "Open Sans", fontWeight: "400"}}>
                Search By
            </Typography>
        </FormLabel>

        <Box minWidth={{sm: 340}} sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}} >
            <FormControlLabel
            label="Name"
            checked={isChecked}
            onChange={handleCheckboxChange}
            control={<Checkbox color= "info"/>}
            />
            
            {individual ? (
            <FormControlLabel
            label="ID/Passport"
            control={<Checkbox color= "info"/>}
            />
            ):(
            <FormControlLabel
            label="Registration Number"
            control={<Checkbox color= "info"/>}
            />
            )}

            <FormControlLabel
            label="Telephone"
            control={<Checkbox color= "info"/>}
            />
        </Box>

        {isChecked && (
             <FormControl sx={{ m: 1, minWidth: 180 }}>
             <InputLabel>Choose a country</InputLabel>
             <Select
               value={country}
               autoWidth
               onChange={handleCountryChange}
               label="Choose a country"
             >   
            {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                    {country.name}
                </MenuItem>
            ))}
             </Select>
           </FormControl>
        )}

        <Button variant="outlined"
        sx={{width: "100%", borderRadius: "8px", minWidth: "64px", textTransform: "revert", mt: 2}}
        color="info" href='https://portal.kwestaml.com/#/register'>
            <Typography variant="h6" color="#00B8D9" sx={{fontFamily: "Open Sans", fontWeight: "700"}}>Start Screening</Typography>
        </Button>
        </Box>

        <Box borderLeft={1} 
        borderColor="#00B8D9"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width="100%"
        pl={{xs: 0, sm:3}}
        mt={{xs: 3, sm: 0}}>
            <img src={img} alt=""
            style={{height: "auto", width: "100%", maxWidth:"260px", marginBottom: "1rem"}}
            />
            <Typography mt={1} variant="h2" sx={{fontFamily: "Open Sans", fontWeight: "700"}}>Start Screening!</Typography>
            <Typography mt={1} mb={1} variant="h5" color="#637381" sx={{fontFamily: "Open Sans", fontWeight: "400"}}>You have not scanned any entity or individual</Typography>
        </Box>
        </Box>
    </Box>
}

export default Dashboard;