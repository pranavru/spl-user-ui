import { Route, Routes } from 'react-router-dom'
import { NotFound } from './not-found'
import { Users } from '../../pages/users'
import { LandingPage } from '../../pages/landing-page'
import { Zones } from '../../pages/zones'
import { Mandals } from '../../pages/mandals'
import { EditUser } from '../../pages/edit-user'
import { Events } from '../../pages/events'
import { EditEvent } from '../../pages/events/views/edit-event'
import { AddEvent } from '../../pages/events/views/add-event'

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
}, {
  name: 'Events',
  path: '/events',
  element: <Events />
}];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {pageRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} /> )}
      <Route path='/edit-user/:id' element={<EditUser />} />
      <Route path='/edit-event/:id' element={<EditEvent />} />
      <Route path='/add-event' element={<AddEvent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
