import { Container } from '@mui/material'
import { PageHeader } from '../common/components/page-header'
import { MandalsList } from './views/mandals-list'
import DataProvider from './data-provider'

export const Mandals = () => {
  return (
    <DataProvider>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <PageHeader 
          title="Mandals"
          isBreadcrumbVisible={true} 
        />
        <MandalsList/>
      </Container>
    </DataProvider>
  )
}
