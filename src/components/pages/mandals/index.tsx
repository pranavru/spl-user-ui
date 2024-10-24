import { Box } from '@mui/material'
import { PageHeader } from '../common/components/page-header'
import { MandalsList } from './views/mandals-list'
import DataProvider from './data-provider'
import { PageActions } from './views/page-actions'

export const Mandals = () => {
  return (
    <DataProvider>
      <Box sx={{ m: 2 }}>
        <PageHeader 
          title="Mandals"
          isBreadcrumbVisible={true} 
        >
          <PageActions/>
        </PageHeader>
        <MandalsList/>
      </Box>
    </DataProvider>
  )
}
