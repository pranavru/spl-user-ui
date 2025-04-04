import { Save, UploadFile } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { useContext, useState } from "react";
import { UserContext } from "../data-provider";

export const PageActions = () => {
  const [, setOpen] = useState(false);
  const { importedUsers, saveUsersInBulk } = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const isSaveDisabled = [
    importedUsers.length === 0,
  ].some(Boolean);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 2 }}>      
      <Button 
        startIcon={<UploadFile/>} 
        variant="text"
        onClick={handleClickOpen}
      >
        {'Import'}
      </Button>

      {importedUsers.length ? (
        <Button 
          disabled={isSaveDisabled}
          startIcon={<Save/>} 
          variant="contained"
          onClick={saveUsersInBulk}
        >
          {'Save'}
        </Button>
      ): null}
      {/* <ImportUsersModal open={open} setOpen={setOpen} /> */}
    </Box>
  )
}
