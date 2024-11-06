import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { StatusColumn } from "../../status-column";
import { formatDate } from "../../../../users/helpers";
import { useEditEvent } from "../data-provider";
import isEqual from "react-fast-compare";
import { isSaveEnabled } from "../helpers";

export const PageActions = () => {
  const { isLoading, data: { current: currentData, saved: savedData }, resetEvent, saveEvent } = useEditEvent();

  return !isLoading && currentData ? (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', alignItems: 'center' }}>
      <StatusColumn status={currentData.status} />
      <Typography variant="body2" >
        {`Updated At: ${formatDate(currentData.createdDate)}`}
      </Typography>
      <Button 
        variant="contained" 
        color="secondary"
        disabled={isLoading || isEqual(currentData, savedData)}
        onClick={resetEvent}
      >
        {'Cancel'}
      </Button>
      <Button
        variant="contained" 
        color="primary"
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
        disabled={!isSaveEnabled(currentData, savedData) || isLoading}
        onClick={() => saveEvent(currentData)}
      >
        {'Save'}
      </Button>
    </Box>
  ) : null;
};