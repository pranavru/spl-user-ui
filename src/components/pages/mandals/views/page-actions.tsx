import { Box, Button } from '@mui/material'
import React from 'react'
import { MandalsContext } from '../data-provider';

export const PageActions = () => {
  const { inEditMode, setMandalsEditable, resetMandals, saveMandals, data, addMandal } = React.useContext(MandalsContext);

  const isSaveEnabled = [
    data.current.length > 0,
    data.current !== data.saved,
    data.current.every((mandal) => mandal.name && mandal.location)
  ].every(Boolean);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: '20px' }}>
      {!inEditMode ? (
        <Button 
          variant="contained"
          color="primary" 
          onClick={() => setMandalsEditable(true)}
        >
          {'Edit'}
        </Button>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Button 
            variant="text"
            color="primary"
            onClick={addMandal}
          >
            {'Add New Mandal'}
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={resetMandals}
          >
            {'Cancel'}
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            disabled={!isSaveEnabled} 
            onClick={saveMandals}
          >
            {'Save'}
          </Button>
        </Box>
      )}
    </Box>
  )
}
