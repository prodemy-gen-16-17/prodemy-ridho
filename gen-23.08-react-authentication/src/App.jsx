import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import FormCheckout from './pages/FormCheckout';
import LoginForm from './pages/LoginForm';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path='/checkout' element={<FormCheckout />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

