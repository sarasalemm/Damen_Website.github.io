import React, { useEffect, useState, lazy, Suspense} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../utils/services/cartItems'; // Import useCart
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [cartVisible, setCartVisible] = useState(false); // Manage cart dropdown visibility
    const navigate = useNavigate(); 
    const { getTotalItems } = useCart(); 
    const cartItemCount = getTotalItems(); 

    const Cart = lazy(() => import('../Cart/Cart.jsx'));

    // Toggle cart visibility
    const handleCartClick = () => {
        setCartVisible(!cartVisible);
    };

    // Close cart if clicked outside
    const handleClickOutside = (e) => {
        if (cartVisible && !e.target.closest('.cart-dropdown') && !e.target.closest('.faCartShopping')) {
            setCartVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [cartVisible]);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <FontAwesomeIcon icon={faBars} className='navlogo' />
                <img 
                    src="/images/Logo.png" 
                    alt="logo" 
                    className='logo' 
                    loading="lazy" 
                />
            </div>
            <ul className="nav-menu">
            <li 
                    className={activeMenu === "products" ? "active" : ""} 
                    onClick={() => { setActiveMenu("products"); }}
                >
                    Products {activeMenu === "products" ? <hr /> : null}
                </li>
                <li 
                    className={activeMenu === "bestSeller" ? "active" : ""} 
                    onClick={() => { setActiveMenu("bestSeller"); }}
                >
                    Best Seller {activeMenu === "bestSeller" ? <hr /> : null}
                </li>
                <li 
                    className={activeMenu === "newArrival" ? "active" : ""} 
                    onClick={() => { setActiveMenu("newArrival"); }}
                >
                    New Arrival {activeMenu === "newArrival" ? <hr /> : null}
                </li>
                <li 
                    className={activeMenu === "contactUs" ? "active" : ""} 
                    onClick={() => { setActiveMenu("contactUs"); }}
                >
                    Contact Us {activeMenu === "contactUs" ? <hr /> : null}
                </li>
                {/* Other menu items */}
            </ul>
            <div className="search-cart-profile">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    onClick={() => navigate('/search')}
                />
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    onClick={handleCartClick} // Toggle cart visibility on click
                />
                <div className="cart-count">{cartItemCount}</div> 

                <FontAwesomeIcon 
                    icon={faUser} 
                    onClick={() => navigate('/profile')}
                />
            </div>

          
            {/* Lazy load Cart component as dropdown */}
            {cartVisible && (
                <>
                <div className="cart-overlay" onClick={() => setCartVisible(false)}></div>

                <div className="cart-dropdown">
                <div className="cart-dropdown-arrow"></div>
                    <Suspense fallback={<div>Loading cart...</div>}>
                        <Cart onClose={() => setCartVisible(false)} />
                    </Suspense>
                </div>
                </>
            )}
        </div>
    );
}

export default Navbar;