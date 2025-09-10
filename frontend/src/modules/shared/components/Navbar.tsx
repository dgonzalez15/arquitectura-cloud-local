import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => (
  <FiShoppingCart size={28} color="#ad1457" style={{ verticalAlign: 'middle' }} />
);

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo-generic.svg" alt="Logo" width={40} height={40} style={{ borderRadius: '50%', background: '#fff0', boxShadow: '0 2px 8px #f0629240' }} />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#ad1457', marginLeft: 8 }}>Spa Demo</span>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.cartButton}>
          <Link href="/cart" aria-label="Carrito">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
