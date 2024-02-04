import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    { id: '1', name: 'Producto 1', description: 'Descripción del Producto 1', price: 19.99 },
    { id: '2', name: 'Producto 2', description: 'Descripción del Producto 2', price: 29.99 },
  ];

  // Busca el producto por ID
  const product = products.find(product => product.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
