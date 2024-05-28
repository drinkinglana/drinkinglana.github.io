// También podemos usarlo para escuchar eventos cuando montamos el componente y desvincular el controlador de eventos cuando lo desmontamos.
// Por ejemplo, podemos escribir:
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function App()
{
    const [width, setWidth] = useState(0);

    function onResize()
    {
        console.log("Resize event triggered");
        setWidth(window.innerWidth);
    }

    useEffect(() => 
    { 
        window.addEventListener("resize", onResize);
        console.log("Event listener added");
        return () =>
        {
            window.removeEventListener("resize", onResize);
            console.log("Event listener removed");
        }  
    }, []);

    return <div>Window width: {width}</div>;
}

if (typeof window !== "undefined")
{
    document.addEventListener("DOMContentLoaded", function() {
        render(<App/>, document.getElementById("root"));
    });
}