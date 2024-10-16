import { Container } from '@mui/material'
import { PageHeader } from '../common/components/page-header'
import { ZonesList } from './views/zones-list'
import DataProvider from './data-provider'
import { PageActions } from './views/page-actions'

export const Zones = () => {
  return (
    <DataProvider>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <PageHeader 
          title="Zones"
          isBreadcrumbVisible={true}
        >
          <PageActions/>
        </PageHeader>
        <ZonesList/>
      </Container>
    </DataProvider>
  )
}
