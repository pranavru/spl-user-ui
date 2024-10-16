import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface ComponentProps {
  title: string;
  subTitle?: string;
  isBreadcrumbVisible: boolean;
  children?: React.ReactNode;
}

export const PageHeader = (props: ComponentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {props.isBreadcrumbVisible && (
          <Link to="/" color="secondary">
            {'Home'}
          </Link>
        )}
        <Typography variant={'h4'}>
          {props.title}
        </Typography>
        {props.subTitle && (
          <Typography variant={'caption'}>
          {props.subTitle}
        </Typography>
        )}
      </Box>
      {props.children}
    </Box>
  );
};
