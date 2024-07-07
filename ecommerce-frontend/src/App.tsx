import {lazy as Lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import MainLayout from './components/Layouts/MainLayout';
import SimpleLayout from './components/Layouts/SimpleLayout';
import LoginPage from './pages/Login/LoginPage';

/**
 * lazy is used for loading the pages only when they are visited. without using lazy when the home page is visited or any page is visited at that time all the other pages respectives to the others routes are fetched and loaded which not required as these pages are not visited yet so why fetch them. For this purpose the lazy is loaded.
 */
const HomePage = Lazy(() => import("./pages/Home/HomePage"));
const CartPage = Lazy(() => import("./pages/Cart/CartPage"));

const App = () => {
  return (
    <Router>
      {/* Here suspense is used in support for the lazy loading. Till the pages are fetched the suspense provides a component till time being like a spinner or a loader. */}
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* All routes matching the path "/" below will be rendered on main layout */}
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>

          {/* All routes matching the path "/" below will be rendered on simple layout */}
          <Route path='/' element={<SimpleLayout />}>
            <Route path='/login' element={<LoginPage />} />
          </Route>

          {/* For Not logged in user */}

          {/* For logged in user */}

          {/* For Admin only */}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App