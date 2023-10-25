import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import FormCheckout from './pages/FormCheckout';
import LoginForm from './pages/LoginForm';
import PrivateRoutes from "./components/route/PrivateRoutes";
import GuestRoutes from "./components/route/GuestRoutes";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path='/checkout' element={<FormCheckout />} />
          <Route path='/login' element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

