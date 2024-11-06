import { Box, Button } from '@mui/material'
import isEqual from 'react-fast-compare'
import { useAddEvent } from '../data-provider';
import { defaultEventData } from '../literals';

export const PageActions = () => {
  const { data, saveEvent, cancelEvent } = useAddEvent();

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={cancelEvent}
      >
        {'Cancel'}
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={saveEvent}
        disabled={[
          isEqual(defaultEventData, data),
          data.location?.length === 0,
          data.name?.length === 0,
        ].every(Boolean)}
      >
        {'Save'}
      </Button>
    </Box>
  )
}
