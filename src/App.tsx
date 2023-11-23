import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import ModalProvider from "./providers/ModalProvider";

const App = () => {
  return (
    <Container>
      <Navbar />
      <ModalProvider />
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
