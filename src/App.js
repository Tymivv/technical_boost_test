import { lazy, Suspense } from "react";
import {Route, Routes} from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage.jsx'
// import UsersPage from './pages/UsersPage/UsersPage.jsx'
// import HomePage from './pages/HomePage/HomePage.jsx'
// import Navigation from './components/Navigation/Navigation.jsx'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
const Loadind = lazy(() => import('./components/Loading/Loadind.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Navigation = lazy(() => import('./components/Navigation/Navigation.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
  return (
    <>
    <Suspense fallback={<Loadind />}>
      <Navigation />
      <Routes>
        <Route path="/technical_boost_test" element={ <HomePage /> } />
        <Route path="/technical_boost_test/tweets" element={ <UsersPage /> } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App;