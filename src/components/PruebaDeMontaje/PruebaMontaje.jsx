
import { useEffect } from "react";
import "./PruebaMontaje.css"
const PruebaMontaje =()=>{
    useEffect(()=>{
        console.log('Montaje de componente')
    },[])
    return(
        <div className="PruebaMontaje">
            <h1>Prueba de montaje</h1>
        </div>
    )
}
export default PruebaMontaje