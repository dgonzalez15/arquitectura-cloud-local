import React from 'react';
import styles from '../styles/PromoBanner.module.css';

const PromoBanner: React.FC = () => (
  <section className={styles.promoBanner}>
    <div className={styles.content}>
      <h3 className={styles.title}>¡Oferta especial de temporada!</h3>
      <p className={styles.text}>Aprovecha un <span className={styles.highlight}>20% de descuento</span> en todos los servicios de prueba. Solo por tiempo limitado.</p>
      <a href="#productos" className={styles.cta}>Ver servicios</a>
    </div>
  </section>
);

export default PromoBanner;
