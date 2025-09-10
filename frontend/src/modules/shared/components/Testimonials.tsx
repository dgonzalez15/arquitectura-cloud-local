import React from 'react';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    name: 'Ana P.',
    text: '¡Excelente servicio! Me sentí renovada después de la sesión. 100% recomendado.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Carlos G.',
    text: 'El personal es muy profesional y el ambiente súper relajante. Volveré pronto.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Lucía M.',
    text: 'Me encantó la atención y los resultados. ¡Gracias por todo!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonialsSection}>
    <h2 className={styles.title}>Testimonios</h2>
    <div className={styles.list}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={i}>
          <img src={t.image} alt={t.name} className={styles.avatar} />
          <p className={styles.text}>&quot;{t.text}&quot;</p>
          <span className={styles.name}>{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
