import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductForm from "./pages/ProductForm";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/cartpage" element ={<CartPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
