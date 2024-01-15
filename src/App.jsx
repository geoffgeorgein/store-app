import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Navbar from "./components/navbar";
import CartProvider from "./cartProvider";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/product/:id" element={<ProductPage/>}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
