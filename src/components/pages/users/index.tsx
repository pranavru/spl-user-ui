import { Box, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';

export const Users = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Link to="/" color="secondary">
        {'Home'}
      </Link>
      <Typography variant={'h4'}>
        {'Users'}
      </Typography>

      <Box sx={{ height: 400, width: '100%', mt: 2, mb: 2 }}>
        <DataGrid 
          columns={columns} 
          rows={rows}
          localeText={{
            toolbarColumns: "Display Columns",
            toolbarExport: "Export Users List"
          }}
          slots={{
            toolbar: () => (
              <GridToolbarContainer sx={{ display: 'flex', alignItems: "flex-end", width: "100%"}}>
                <GridToolbar />
              </GridToolbarContainer>
            )
          }}
          getRowHeight={() => 'auto'}
        />
      </Box>
    </Container>
  );
};
