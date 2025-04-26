import { useEffect, useState } from "react";

function Counter() {
    const [counter, setCounter] = useState<number>(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    } ; 
    const  handleDecrement  = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            console.log('No puede ser menor a 0');
        }
    };

    /**
     * Ciclo de vida [Montaje - Actualización - Desmontaje]
     */
    useEffect(() => {
        console.log('El contador ha cargado')
    }, []);
    useEffect(() => {
        console.log('El contador ha cambiado')
        return () => {
            console.log('El contador ha sido destruido')
        };
    }, [counter]);

    return (
        <div>
            <p>El contador es: { counter }</p>
            <button onClick={ handleIncrement }>Incrementar</button>
            <button onClick={ handleDecrement }>Disminuir</button>
        </div>
    );
}
export default Counter;