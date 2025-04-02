import { Box, Typography } from '@mui/material'
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';

interface ComponentProps {
  params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>;
}

export const ReferenceContactsColumn = (props: ComponentProps) => {
  return props.params.row.referenceContacts !== null ? (
    <Box sx={{ display: 'flex', height: '100%', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}} >
      {props.params.row.referenceContacts.primary !== null ? (
        <Typography variant="body2" color="primary" fontSize={'large'}>
          {props.params.row.referenceContacts.primary.name}
        </Typography>
      ) : <Box/>}
      {props.params.row.referenceContacts.secondary !== null ? (
        <Typography variant="caption" color="secondary">
          {props.params.row.referenceContacts.secondary.name}
        </Typography>
      ) : <Box/>}
    </Box>
  ) : <Box />;
}
