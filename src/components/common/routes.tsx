import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/auth/login';
import { ProtectedRoute } from './protected-route';
import { Zones } from '../pages/zones';
import { Users } from '../pages/users';
import { Events } from '../pages/events';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route
        path="/zones"
        element={
          <ProtectedRoute>
            <Zones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />

      {/* Redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export const adminNavigationRoutes = [{
  path: '/zones',
  name: 'Zones',
}, {
  path: '/users',
  name: 'Users',
}, {
  path: '/events',
  name: 'Events',
}]

export const samparkNavigationRoutes = [{
  path: '/events',
  name: 'Events',
}]