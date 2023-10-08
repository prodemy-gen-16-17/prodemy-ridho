import React from 'react';
import Home from './pages/home';
import Header from './components/Header';
import Headline from './components/Headline';
import Product from './components/Product';
import Footer from './components/Footer';
import { formFooter, linkFooter } from './components/DataFooter';


function App() {
  return (
    <>
      <Header titleHeader="Selamat Berbelanja" />
      <Home />
      <Headline
        feature1="Håndlavet i Danmark"
        feature2="Naturlige ingredienser"
        feature3="Produceret på solenergi"
      />
      <hr class="my-16" />
      <Product />
      <div class="mb-96"></div>
      <Footer formFooter={formFooter} linkFooter={linkFooter} />
    </>
  );
}

export default App;
