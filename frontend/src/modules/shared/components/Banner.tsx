import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner: React.FC = () => (
  <div className={styles.banner}>
    <div className={styles.bannerTitle}>Bienvenido a Spa</div>
    <div className={styles.bannerSubtitle}>Belleza, Salud y Bienestar en un solo lugar</div>
    <div className={styles.bannerText}>
      Disfruta de los mejores productos y servicios para tu cuidado personal. Vive la experiencia Spa con atención personalizada y calidad premium.
    </div>
    <a href="#productos" className={styles.ctaLink}>
      <button className={styles.ctaButton}>
        Ver productos
      </button>
    </a>
  </div>
);

export default Banner;
