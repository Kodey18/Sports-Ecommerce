import {lazy as Lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

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
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />

          {/* For Not logged in user */}

          {/* For logged in user */}

          {/* For Admin only */}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App