
import '../globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../modules/shared/context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
