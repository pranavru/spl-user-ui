import { Box, AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant='outlined'>
        <Toolbar disableGutters variant='dense'>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {'Samanvay Users'}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
