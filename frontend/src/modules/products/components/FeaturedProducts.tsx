
import React from 'react';
import ProductCard, { Product } from './ProductCard';
import styles from '../styles/FeaturedProducts.module.css';

const featured: Product[] = [
  {
    id: 1,
    name: 'Masaje de Espalda',
    description: 'Alivia el estrés y relaja la espalda con un masaje profesional de prueba.',
    price: 35,
  image: 'https://img.freepik.com/foto-gratis/mujer-recibiendo-masaje-espalda-masajista_23-2150461408.jpg?w=600&q=80',
  },
  {
    id: 2,
    name: 'Limpieza Facial',
    description: 'Luce una piel fresca y renovada con una limpieza facial de muestra.',
    price: 40,
  image: 'https://img.freepik.com/foto-gratis/mujer-primer-plano-crema-facial_23-2148709302.jpg?semt=ais_hybrid&w=600&q=80',
  },
  {
    id: 3,
    name: 'Terapia de Relajación',
    description: 'Disfruta de una sesión de relajación integral para cuerpo y mente.',
    price: 50,
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?fm=jpg&q=60&w=600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVsYWphY2klQzMlQjNufGVufDB8fDB8fHww',
  },
];

const FeaturedProducts: React.FC = () => (
  <section className={styles.featuredSection}>
    <h2 className={styles.featuredTitle}>Servicios Destacados</h2>
    <div className={styles.featuredList}>
      {featured.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
