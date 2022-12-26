import { useRef } from "react";

function UseRef() 
{
    const ref = useRef(null);
    function handleRef()
    {
        ref.current.focus();
    }
    return ( 
        <div>
            <input type="text" ref={ref}/>
            <button onClick={handleRef}>Focus</button>
        </div>
     );
}

export default UseRef;