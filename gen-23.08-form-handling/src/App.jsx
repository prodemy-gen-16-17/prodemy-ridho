import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
// import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        {/* <Route path="/product" component={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;

