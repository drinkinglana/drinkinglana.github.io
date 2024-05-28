// useEffect
// Usamos el gancho useEffect para cometer efectos secundarios.
// Por ejemplo, podemos escribir:

import { render } from "preact";
import { useEffect } from "preact/hooks";

function PageTitle({ title }) {
    useEffect(() => { document.title = title; }, [title]);
    return <h1>{title}</h1>
}

export default function App(){
    return (<div><PageTitle title="Hello World"/></div>);
}

// Este if asegura de que este código solo se ejecute en el navegador
if (typeof window !== "undefined") {
    // Renderiza el componente App dentro del elemento con id 'root'
    render(<App/>, document.getElementById("root"));
}

// Tenemos el componente PageTitle que toma el título.
// Luego podemos observar el valor de eso con el segundo argumento del gancho useEffect.
// Y configuramos document.title al valor del accesorio del título.