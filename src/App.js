import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Product from './pages/Product';
import Loading from './components/Loading/Loading'; 
import { useState, useEffect } from 'react';
import CartPage from './pages/Cart';
import { useCart, CartProvider } from './utils/services/cartItems'; 

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { cartItems } = useCart(); 

  const formatPath = (pathname) => {
    const pathParts = pathname.split('/').filter(Boolean);
    return pathParts.map((part, index) => (
      <span key={index} className="breadcrumb-part">
        {part.charAt(0).toUpperCase() + part.slice(1)}
        {index < pathParts.length - 1.2 ? ' / ' : ''}
      </span>
    ));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading /> 
      ) : (
        <>
        
        <CartProvider>
          <Navbar 
            cartItems={cartItems} 
          />
          <div className="black-path-bar">
            <div className="path-container">
              {formatPath(location.pathname)}
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/Home/Products/POS/Product1" />} />
            <Route path="/Home/Products/POS/:productName" element={<Product />} />
            {/* <Route 
              path="/Cart" 
              element={<CartPage />} 
            /> */}
          </Routes>
          </CartProvider>
        </>
      )}
    </div>
  );
}

export default App;
