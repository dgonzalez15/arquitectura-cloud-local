import React from 'react';
import { useCart } from '../../shared/context/CartContext';
import styles from '../styles/ProductCard.module.css';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            },
        });
    };

    return (
        <div className={styles.card}>
            <img src={product.image || 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'} alt={product.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{product.name}</h2>
                <p className={styles.cardDesc}>{product.description}</p>
                <p className={styles.cardPrice}>${product.price}</p>
                <button className={styles.cardButton} onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductCard;
