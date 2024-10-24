import { Box } from '@mui/material'
import { PageHeader } from '../common/components/page-header'
import { ZonesList } from './views/zones-list'
import DataProvider from './data-provider'
import { PageActions } from './views/page-actions'

export const Zones = () => {
  return (
    <DataProvider>
      <Box sx={{ m: 2 }}>
        <PageHeader 
          title="Zones"
          isBreadcrumbVisible={true}
        >
          <PageActions/>
        </PageHeader>
        <ZonesList/>
      </Box>
    </DataProvider>
  )
}
