import { Box, Typography } from '@mui/material'
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';

interface ComponentProps {
  params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>;
}

export const ReferenceContactsColumn = (props: ComponentProps) => {
  return props.params.row.referenceContacts !== null ? (
    <Box>
      {props.params.row.referenceContacts.primaryContact !== null ? (
        <Typography variant="body2" color="primary">
          {props.params.row.referenceContacts.primaryContact.name}
        </Typography>
      ) : <Box/>}
      {props.params.row.referenceContacts.secondaryContact !== null ? (
        <Typography variant="body2" color="secondary">
          {props.params.row.referenceContacts.secondaryContact.name}
        </Typography>
      ) : <Box/>}
    </Box>
  ) : <Box />;
}
