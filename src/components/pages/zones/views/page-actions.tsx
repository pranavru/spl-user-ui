import { Box, Button } from '@mui/material'
import React from 'react'
import { ZoneContext } from '../data-provider';

export const PageActions = () => {
  const { inEditMode, setZonesEditable, resetZones, saveZones, data, addZone } = React.useContext(ZoneContext);

  console.log('zones', data);
  const isSaveEnabled = [
    data.current.length > 0,
    data.current !== data.saved,
    data.current.every(zone => zone.name && zone.region)
  ].every(Boolean);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: '20px' }}>
      {!inEditMode ? (
        <Button 
          variant="contained"
          color="primary" 
          onClick={() => setZonesEditable(true)}
        >
          {'Edit'}
        </Button>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Button 
            variant="text"
            color="primary"
            onClick={addZone}
          >
            {'Add New Zone'}
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={resetZones}
          >
            {'Cancel'}
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            disabled={!isSaveEnabled} 
            onClick={saveZones}
          >
            {'Save'}
          </Button>
        </Box>
      )}
    </Box>
  )
}
