import './ItemListContainer.css';
/* const ItemListContainer = ({greeting}) =>{
    return(
        <h1>{greeting} </h1>
    )
}
export default ItemListContainer */
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';;

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de llamado asincrónico con promesa y setTimeout
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock de datos
          const mockItems = [
            { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 10, pictureUrl: '../assets/images/AMD-Ryzen-9-5900X-12-Core-3-7-GHz-Socket-AM4-105W-Desktop-Processor-100-100000061WOF_e5a9b41f-22d6-4b0e-a2d4-2cf5304b3039.4f65bbdd8455b353b790fde63b9dd309.webp' },
            { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 20, pictureUrl: 'imagen2.jpg' },
            // Agrega más elementos de prueba si es necesario
          ];
          resolve(mockItems);
        }, 2000); // Retraso de 2 segundos
      });
    };

    // Llamado a la función fetchData y actualización del estado
    fetchData()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      });
  }, []); // La dependencia del useEffect está vacía para que se ejecute solo una vez al montar el componente

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;