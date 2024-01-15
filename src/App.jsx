import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Navbar from "./components/navbar";
import CartProvider from "./cartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
