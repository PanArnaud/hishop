import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import Footer from "./components/Footer";
import Container from "./components/Container";
import CategoryPage from "./pages/categoryPage/CategoryPage";

const App = () => {
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;
