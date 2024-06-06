import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/global/Header";
import { useTheme } from "@mui/material";
import Copyright from "../../components/global/Copyright"

export const LeaveTrackerTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Leave ID", flex: 0.5 },
    { field: "registrarId", headerName: "Alias Number", flex: 1},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Leave Days",
      flex: 1,
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
      field: "zipCode",
      headerName: "Dept ID",
      flex: 1,
    },
  ];


  return (
    <Box
    mt={4}
      minWidth="100%"
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
          backgroundColor: colors.blueAccent[900],
          borderBottom: "none",
          mt: 2, mb: 1,
          color: "#000",
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
        checkboxSelection
        rows={mockDataContacts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },}}}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};


const LeaveTracker = () => {
 
  return (
    <Box my={{xs: 2, sm: 4}} mx={{ xs: 0, sm: 4 }} display="flex" width={{xs:'99%', sm:'98%', md: '96%'}} justifyContent="center" flexDirection="column" alignItems="center" alignSelf="center"
    sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "16px",
    }}>
      <Header
        title="Leave Tracker"
        subtitle="Track your requested leaves here"
      />
      <Box width="100%">
      <LeaveTrackerTable />
      </Box>
      <Copyright sx={{ mt: 2, mb: 4 }} />
    </Box>
  );
};

export default LeaveTracker;