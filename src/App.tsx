import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Product from "./pages/product/Product";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;
