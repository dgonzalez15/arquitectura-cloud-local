import React from 'react';
import { useCart } from '../../shared/context/CartContext';
import styles from '../styles/CartPage.module.css';

const CartPage: React.FC = () => {
  const { cart, dispatch } = useCart();
  const total = cart.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Carrito de compras</h2>
      <ul className={styles.cartList}>
        {cart.items.map((item: any) => (
          <li key={item.id} className={styles.cartItem}>
            <span>{item.name} x{item.quantity} <span className={styles.cartPrice}>${item.price} c/u</span></span>
            <button className={styles.removeButton} onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.cartTotal}>Total: ${total.toFixed(2)}</div>
      <button className={styles.clearButton} onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default CartPage;
