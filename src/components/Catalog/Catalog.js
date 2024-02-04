import React from 'react';

const Catalog = () => {
  // Ejemplo de conjunto de datos de productos
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 19.99 },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 29.99 },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;