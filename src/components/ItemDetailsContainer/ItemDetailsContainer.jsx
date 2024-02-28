import React, { useState, useEffect } from 'react';

const getItem = () => {
  // Simulando una petición asincrónica con un tiempo de espera de 2 segundos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 100,
        pictureUrl: 'https://ejemplo.com/imagen1.jpg'
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((itemData) => {
      setItem(itemData);
    });
  }, []);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <img src={item.pictureUrl} alt={item.title} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;