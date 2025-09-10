import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
