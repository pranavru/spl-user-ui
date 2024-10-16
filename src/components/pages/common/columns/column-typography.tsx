import { Typography } from '@mui/material'
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';

export const ColumnTypography = (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
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
      {params.value}
    </Typography>
  )
};
