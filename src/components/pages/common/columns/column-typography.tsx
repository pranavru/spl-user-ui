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
        py: 1,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start' 
      }}
    >
      {props.value || props.params.value}
    </Typography>
  )
};
