import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/global/Header";
import { useTheme } from "@mui/material";
import Copyright from "../../components/global/copyright"

const Leavetracker = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Leave ID", flex: 0.5 },
    { field: "registrarId", headerName: "Alias Number" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Number of Days",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Dept ID",
      flex: 1,
    },
  ];

  return (
    <Box m={{ xs: 0, sm: 4 }} display="flex" width={{xs:'100%', sm:'98%'}} justifyContent="center" flexDirection="column" alignItems="center" alignSelf="center"
    sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
    }}>
      <Header
        title="Leave Tracker"
        subtitle="Track your requested leaves here"
      />
      <Box
        mt={4}
<<<<<<< HEAD
        height="75vh"
        width="80%"
=======
        minWidth="100%"
>>>>>>> 80b1fd1c78bd02e6f2fb129828561335ea70bc15
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[700],
            borderBottom: "none",
            mt: 2, mb: 1
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            mt: 2,
            
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[300]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Copyright sx={{ mt: 2, mb: 4 }} />
    </Box>
  );
};

export default Leavetracker;