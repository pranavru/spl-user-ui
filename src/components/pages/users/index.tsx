import { Box, Container } from "@mui/material"
import { localUserDB } from "./local-db";
import { CustomDataGrid } from "../common/components/data-grid";
import { columns } from "./columns";
import { PageHeader } from "../common/components/page-header";
import { DataProvider } from "./data-provider";

export const Users = () => (
  <DataProvider>
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <PageHeader 
        title="Users"
        isBreadcrumbVisible={true} 
      />
      <Box sx={{ height: 400, width: '100%', mt: 2, mb: 2 }}>
        <CustomDataGrid
          columns={columns} 
          rows={localUserDB}
        />
      </Box>
    </Container>
  </DataProvider>
);