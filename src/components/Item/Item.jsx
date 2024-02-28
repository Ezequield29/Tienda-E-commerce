import React from 'react';
import "./Item.css"
const Item = ({ id, title, description, price, }) => {
    const imagePath = '../../assets/images/AMD-Ryzen-9-5900X-12-Core-3-7-GHz-Socket-AM4-105W-Desktop-Processor-100-100000061WOF_e5a9b41f-22d6-4b0e-a2d4-2cf5304b3039.4f65bbdd8455b353b790fde63b9dd309';
return (
    <div className="item">
        <img src="https://picsum.photos/200/300" alt={title} />
            <div className="item-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Precio: ${price}</p>
            </div>
    </div>
);
};

export default Item;
/* {pictureUrl} */