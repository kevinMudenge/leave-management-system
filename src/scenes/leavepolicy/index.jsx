import { Box, useTheme } from "@mui/material";
import Header from "../../components/global/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Button } from "@mui/material";
import Copyright from "../../components/global/Copyright"

const Leavepolicy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DocumentLinkButton = () => {
    const documentUrl =
      "https://docs.google.com/document/d/1hrX-PEKmBhSv5o8WKESdG3ssOIir0qHi/edit?usp=sharing&ouid=106342101822357898565&rtpof=true&sd=trueF";
    return (
      <a href={documentUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="primary" sx={{whiteSpace: 'nowrap', borderRadius: "32px", textTransform: "revert"}}>
          <Typography>Read the Policy</Typography>
        </Button>
      </a>
    );
  };
  return (
    <Box m={{ xs: 3, sm: 4 }} display="flex" width={{xs:'99%', sm:'98%', md: '96%'}} justifyContent="center" flexDirection="column" alignSelf="center"
    sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
    }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="Leave Policy" subtitle="Dear Gentle Reader, Get Answers to Your Leave issues and Your Frequently Asked Issues Here" />
        <DocumentLinkButton />
      </Box>

      <Box mt={4}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            The Father of All Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultCollapsed>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  );
};

export default Leavepolicy;