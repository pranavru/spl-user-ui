import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import { useAuth } from '../../auth/auth-provider';
import { Logout } from '@mui/icons-material';
import { adminNavigationRoutes, samparkNavigationRoutes } from './routes';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  if (!user) return null;

  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"Samanvay Admin"}
        </Typography>
        
        {user.role === 'admin' && (
          <Box>
            {adminNavigationRoutes.map((route) => (
              <Button key={route.path} color="inherit" onClick={() => navigate(route.path)}>
                {route.name}
              </Button>
            ))}
          </Box>
        )}

        {user.role === 'sampark' && (
          <Box>
            {samparkNavigationRoutes.map((route) => (
              <Button key={route.path} color="inherit" onClick={() => navigate(route.path)}>
                {route.name}
              </Button>
            ))}
          </Box>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Button
            onClick={handleMenu}
            color="inherit"
            endIcon={
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt={user.name}
                src="/static/images/avatar/1.jpg"
              >
                {user.name}
              </Avatar>
            }
          >
            {user.role.toUpperCase()}
          </Button>
        </Box>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} component="span">{'Name: '}</Typography>
              {user.name}
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} component="span">{'Email: '}</Typography>
              {user.email}
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Logout sx={{ fontSize: '1.5rem' }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold' }} component="span">{'Logout'}</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
