import { Route, Routes } from 'react-router-dom'
import { NotFound } from './not-found'
import { Users } from '../../pages/users'
import { LandingPage } from '../../pages/landing-page'
import { Zones } from '../../pages/zones'
import { Mandals } from '../../pages/mandals'

export const pageRoutes = [{
  name: 'Zones',
  path: '/zones',
  element: <Zones />
}, {
  name: 'Mandals',
  path: '/mandals',
  element: <Mandals />
}, {
  name: 'Users',
  path: '/users',
  element: <Users />
}]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {pageRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} /> )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
