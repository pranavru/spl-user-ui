import { Box } from "@mui/material"
import { PageHeader } from "../common/components/page-header";
import { UsersList } from "./views/users-list";
import DataProvider from "./data-provider";
import { PageActions } from "./views/page-actions";

export const Users = () => (
  <DataProvider>
    <Box sx={{ m: 2 }}>
      <PageHeader 
        title="Users"
        isBreadcrumbVisible={true} 
      >
        <PageActions/>
      </PageHeader>
      <UsersList/>
    </Box>
  </DataProvider>
);