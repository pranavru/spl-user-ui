import { Box, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Zone } from '../../types';
import { useContext } from 'react';
import { ZoneContext } from '../../data-provider';

export const DeleteZone = (params: GridRenderCellParams<Zone, any, any, GridTreeNodeWithRender>) => {
  const { deleteZone } = useContext(ZoneContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <Tooltip title="Delete Zone" placement="bottom">
        <IconButton aria-label="delete" onClick={() => deleteZone(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
