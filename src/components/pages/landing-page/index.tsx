import { Box } from '@mui/material';
import { PageHeader } from '../common/components/page-header';

export const LandingPage = () => {
  return (
    <Box m={2}>
      <PageHeader title="Landing Page" isBreadcrumbVisible={false}/>
    </Box>
  );
};
