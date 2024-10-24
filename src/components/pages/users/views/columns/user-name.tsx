import { NewReleases } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material"

interface ComponentProps {
  value?: string;
  params: any;
}

export const UserName = (props: ComponentProps) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
      }}
    >
      {props.params.row.isNew && (
        <Tooltip title="New User">
          <NewReleases color="secondary" sx={{ mr: 1 }} />
        </Tooltip>
      )}
      <Typography 
        variant="body1"
      >
        {props.value || props.params.value}
      </Typography>
    </Box>
  );
}
