import React from 'react';
import { FaTrashAlt,  FaTimes  } from 'react-icons/fa';
import { useCart } from '../../utils/services/cartItems.js'; 
import './Cart.css'; 

function Cart({ onClose }) { // Accept onClose as a prop
  const { cartItems, removeItem } = useCart(); 

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontWeight: '300', fontSize: '17px' }}>My Cart ({cartItems.length})</h2>
        {/* Close button */}
        <FaTimes 
          className="close-cart" 
          onClick={onClose} // Call onClose when clicked
          
        />
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p style={{ fontSize: '17px', fontWeight: '400' }}>{item.name}</p>
                <p style={{ fontSize: '10px' }}>Quantity: {item.quantity}</p>
                <p style={{ color: 'brown', fontWeight: '500' }}>{item.price} EGP</p>
              </div>
              <FaTrashAlt 
                className="remove-item" 
                onClick={() => removeItem(item.id)} 
              />
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '16px', fontWeight: '400', color: 'gray' }}>Subtotal:</p>  
        <p style={{ fontSize: '16px', fontWeight: '400', color: 'brown' }}>{subtotal.toFixed(2)} EGP</p> 
      </div>
      <button className="go-to-cart-btn">Go to Cart</button>
    </div>
  );
}

export default Cart;