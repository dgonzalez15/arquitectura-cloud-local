import React from 'react';
import styles from '../styles/Footer.module.css'; 

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.brand}>
  <img src="/logo.png" alt="Logo Demo" width={120} height={40} />
  <p>© {new Date().getFullYear()} Demo Spa. Todos los derechos reservados.</p>
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Inicio</a>
        <a href="#" className={styles.link} onClick={e => { e.preventDefault(); }}>Sobre Nosotros</a>
        <a href="#" className={styles.link} onClick={e => { e.preventDefault(); }}>Servicios</a>
        <a href="#" className={styles.link} onClick={e => { e.preventDefault(); }}>Contacto</a>
      </div>
      <div className={styles.social}>
  <a href="#" aria-label="Instagram" className={styles.icon}><img src="/icons/instagram.svg" alt="Instagram" width={28} height={28} /></a>
  <a href="#" aria-label="Facebook" className={styles.icon}><img src="/icons/facebook.svg" alt="Facebook" width={28} height={28} /></a>
  <a href="#" aria-label="WhatsApp" className={styles.icon}><img src="/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
