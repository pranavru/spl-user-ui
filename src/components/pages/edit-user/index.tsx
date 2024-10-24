import { Container } from "@mui/material"
import { DataProvider } from "./data-provider"
import { PageHeader } from "../common/components/page-header"
import { UserDetails } from "./views/user-details"
import { PageActions } from "./views/page-actions"

export const EditUser = () => {
  return (
    <DataProvider>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <PageHeader
          title="Edit User"
          isBreadcrumbVisible={false} 
        >
          <PageActions/>
        </PageHeader>
        <UserDetails/>
      </Container>
    </DataProvider>
  )
}
