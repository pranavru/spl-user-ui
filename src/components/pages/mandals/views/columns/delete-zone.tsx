import { Box, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Mandal } from '../../types';
import { useContext } from 'react';
import { MandalsContext } from '../../data-provider';

export const DeleteMandal = (params: GridRenderCellParams<Mandal, any, any, GridTreeNodeWithRender>) => {
  const { deleteMandal } = useContext(MandalsContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <Tooltip title="Delete Mandal" placement="bottom">
        <IconButton aria-label="delete" onClick={() => deleteMandal(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
