import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  // Define the CSS styles for the cart icon and the number badge
  const cartIconStyles = {
    fontSize: '24px',
    color: '#333',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
  };

  const badgeStyles = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '12px',
  };

  return (
    <div>
      <Link className="fas fa-shopping-cart" to="/carrito" style={cartIconStyles}>
        <span className="numerito" style={badgeStyles}>
          {cantidadEnCarrito()}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
  
