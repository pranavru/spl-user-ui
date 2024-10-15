import { Container } from "@mui/material"
import { PageHeader } from "../common/components/page-header";
import { UsersList } from "./views/users-list";
import DataProvider from "./data-provider";

export const Users = () => (
  <DataProvider>
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <PageHeader 
        title="Users"
        isBreadcrumbVisible={true} 
      />
      <UsersList/>
    </Container>
  </DataProvider>
);