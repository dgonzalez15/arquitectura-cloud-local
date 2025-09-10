import React, { useState, useEffect } from 'react';
import Navbar from '../../shared/components/Navbar';
import Banner from '../../shared/components/Banner';
import PromoBanner from '../../shared/components/PromoBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Footer from '../../shared/components/Footer';
import Testimonials from '../../shared/components/Testimonials';
import ContactForm from '../../shared/components/ContactForm';

const HomePage: React.FC = () => {

  // Productos mock de ejemplo
  const mockProducts = [
    {
      id: 101,
      name: 'Aceite Esencial Relajante',
      description: 'Aceite para masajes y aromaterapia de prueba.',
      price: 19.99,
      image: 'https://www.shutterstock.com/image-photo/preparing-massage-oil-dropping-essential-600nw-2465757151.jpg',
    },
    {
      id: 102,
      name: 'Vela Aromática',
      description: 'Vela de soja con fragancia floral, ideal para relajación.',
      price: 14.99,
      image: 'https://img.freepik.com/foto-gratis/angulo-alto-velas-encendidas-cuerda-conos-pino_23-2148720016.jpg',
    },
    {
      id: 103,
      name: 'Set de Piedras Calientes',
      description: 'Piedras volcánicas para terapia de calor en casa.',
      price: 29.99,
      image: 'https://plus.unsplash.com/premium_photo-1661306458301-79601a9d2696?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzYWplJTIwY29uJTIwcGllZHJhcyUyMGNhbGllbnRlc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 104,
      name: 'Mascarilla Facial Hidratante',
      description: 'Mascarilla de prueba para piel suave y luminosa.',
      price: 9.99,
      image: 'https://www.shutterstock.com/image-vector/realistic-facial-sheet-masks-set-260nw-2229340805.jpg',
    },
    {
      id: 105,
      name: 'Kit de Spa en Casa',
      description: 'Incluye sales de baño, esponja y crema corporal.',
      price: 39.99,
      image: 'https://media.istockphoto.com/id/584574708/es/foto/barra-de-jab%C3%B3n-y-l%C3%ADquido-champ%C3%BA-gel-de-ducha-toallas-kit-de-spa.jpg?s=612x612&w=0&k=20&c=yvJP5jkL5Hp9rYpp0o_HzLe3DA3_fR9sbsP2cgfPHI0=',
    },
  ];

  const [products, setProducts] = useState<any[]>(mockProducts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {
        // Si falla, se quedan los mock
      });
  }, []);

  const filtered = products.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        <Banner />
        <PromoBanner />
        <FeaturedProducts />
        <h2 id="productos" style={{ color: '#6a4ea3', margin: '2rem 0 1rem 0' }}>Productos</h2>
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filtered} />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
