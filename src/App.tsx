import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import ModalProvider from "./providers/ModalProvider";
import ToastProvider from "./providers/ToastProvider";

const App = () => {
  return (
    <Container>
      <Navbar />
      <ModalProvider />
      <ToastProvider />
      <Routes>
        <Route path="/:success=1?" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
