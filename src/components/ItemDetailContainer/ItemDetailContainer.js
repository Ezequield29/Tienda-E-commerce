import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    // Aquí deberías implementar la lógica para cargar los detalles del producto
    // basándote en el ID proporcionado en la URL.

    // Ejemplo: Simular la carga de detalles de un producto desde una API
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`URL_DE_TU_API/items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error al cargar detalles del producto', error);
      }
    };

    fetchItemDetails();
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Stock: {item.stock}</p>
          {/* Agrego cualquier otra información específica del producto */}
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
