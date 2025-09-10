import dynamic from 'next/dynamic';

const HomePage = dynamic(
  () => import('../modules/products/pages/HomePage'),
  { ssr: false }
);

export default HomePage;
