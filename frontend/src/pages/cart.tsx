import dynamic from 'next/dynamic';

const CartPage = dynamic(
  () => import('../modules/cart/components/CartPage'),
  { ssr: false }
);

export default CartPage;
