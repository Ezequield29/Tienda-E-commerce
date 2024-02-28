 import React, {useState} from "react";

/* const Counter = () => { 
    const [contador, setContador] = useState(0);



    const sumar = () => {
        setContador(contador +1 );
    }

    return (
        <>
            <div>
                <button onClick={sumar}>sumar uno</button>
                <h1 className="Cartel" > {contador} </h1>
            </div>
        </>
    );
}

export default Counter; */ 
/* import React, { useState } from "react";

const Counter = () => {
    //declaracion de una variable de estado llamaremos
    const [ Count, setCount] = useState(0);
    const sumar = () => {
        setCount=(20);
    }
    return (
        <>
        <div>
            <p>Haz echo click {Count} veces </p>
            <button onClick={sumar}>
                Hazme click 
            </button>
        </div>
        </>
    );
}

export default Counter; */
const ItemsCount = (props) =>{

    const producto= {
        nombre:"Producto",
        stock: "10"
};
const [contador, setContador]=useState(0);

const suma =() => {
    if (contador<producto.stock){
        setContador(contador + 1);
    }else{
        alert ("error");
    }
}
const resta =() => {
    if (contador!=0){
        setContador(contador-1);
    };
}

return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1> {producto.nombre} </h1>
                <h2>Stock:{producto.stock} </h2>
                <h3>Contador:{contador} </h3>
                <button onClick={suma}>+</button>
                <button onClick={resta}>-</button>
            </div>
        </div>
    </div>
)
}

export default ItemsCount;
 
/* const ItemsCount = (props) => {
    const {product,handlerQuantity}= props;
    product.quantity = typeof(product.quantity) !== 'undefined'? product.quantity : 1;

    return (
        <div className="ItemsCount">
            <span className="less" onClick={()=>{props.handlerQuantity(product.quantity -1,product)}}>-</span>
            <div className={input input_ItemsCount}>
                <input 
                type="text" 
                value={
                    product.quantity
                }readOnly
                />
            </div>
            <span className="plus" onClick={()=>{handlerQuantity(product.quantity +1,product)}}>+</span>
        </div> 
    )
} 
export default ItemsCount; */