import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import FormCheckout from './pages/FormCheckout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path='/form' element={<FormCheckout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

