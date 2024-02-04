import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id: categoryId } = useParams();

  useEffect(() => {
    // Aquí puedes cargar los productos según la categoría (categoryId)
    // utilizando tus async-mocks o cualquier lógica que prefieras
    console.log(`Cargar productos de la categoría: ${categoryId}`);
  }, [categoryId]);

  return (
    <div>
      <h1>Bienvenidos</h1>
      {/* Aquí mostrar la lista de productos según la categoría */}
      
    </div>
  );
};

export default ItemListContainer;
