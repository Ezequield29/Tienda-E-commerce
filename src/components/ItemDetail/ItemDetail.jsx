import React from 'react';
import ItemsCount from '../ItemsCount';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
      <ItemsCount/>
    </div>
  );
}

export default ItemDetail;
