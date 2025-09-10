import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className={styles.button} type="submit">Enviar</button>
        {sent && <div className={styles.success}>¡Mensaje enviado! Nos pondremos en contacto pronto.</div>}
      </form>
    </section>
  );
};

export default ContactForm;
