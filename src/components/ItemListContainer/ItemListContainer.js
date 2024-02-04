import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id: categoryId } = useParams();

  useEffect(() => {
    // Aca puedo cargar los productos según la categoría (categoryId)
    // utilizando mis async-mocks o cualquier lógica de preferencia
    console.log(`Cargar productos de la categoría: ${categoryId}`);
  }, [categoryId]);

  return (
    <div>
      <h1>Bienvenidos</h1>
      {/* Aca muestro la lista de productos según la categoría */}
      
    </div>
  );
};

export default ItemListContainer;
