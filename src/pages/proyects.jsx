import { DivCenter } from "../components/containers/containers";


export function Proyecst() {
    return (
        <>
            <DivCenter>
                <h1>Proyectos OpenSource</h1>

                <p>
                    Los siguientes proyectos tiene la licencia GNU
                </p>
            </DivCenter>

            <h1>HttpClient</h1>

            <p>
                Un cliente ligero para probar apis, que no requiere nada mas que la
                pila de tecnologias de node que ya se suele usar para desarrollar en
                frame works como nest, express, react, vue o angular
            </p>

            <h1>CronosJs</h1>

            <p>
                Libreria simple para trabajar con fechas en js, aunque no usa
                tantas opciones como otras librerias tiene una buena base para
                manipular fechas en js
            </p>

            <h1>NeoFetch</h1>

            <p>
                wraper interesante para manejar las peticiones enm fetch de una manera simple
            </p>
        </>
    )
}