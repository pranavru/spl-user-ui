import { Typography } from '@mui/material'
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';

interface ColumnTypographyProps {
  value?: string;
  params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
}

export const ColumnTypography = (props: ColumnTypographyProps) => {
  return (
    <Typography 
      variant="body1"
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%'
      }}
    >
      {props.value || props.params.value}
    </Typography>
  )
};
