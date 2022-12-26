import { useContext } from "react";
import { Title , Description } from "./MyContext";
function UseContext() 
{
    const ptitle = useContext(Title);
    const pdescription = useContext(Description);
    return (
    <div>
    {ptitle.title}
    <br/>
    {pdescription.description} 
    </div>
    );
}
export default UseContext;    



