import { useState } from "react";
import "./Time.css";

function Time() {
    const[Lab,setLab]=  useState([
        {
            id: "1",
            country: "Pakistan",
            time: "1:00",

        },
        {
            id: "2",
            country: "Turkey",
            time: "10:00",

        },
        {
            id: "3",
            country: "London",
            time: "6:00",

        },
        {
            id: "4",
            country: "Italy",
            time: "7:00",

        }
    ]);
    function handleDelete(id)
    {
        const Delete = Lab.filter((cardDelete)=>cardDelete.id !== id);
        setLab(Delete);

    }
       
    
    return ( 
        <div>
            {Lab.map((labData) => (
        <div>
          <div class="wrapper">
            <div class="grid grid--4">
              <div class="grid__item" key={labData.id}>
                <article>
                  <h5>{labData.country}</h5>
                </article>
                <article>
                  <h6>{labData.time}</h6>
                  <button className="time-btn" onClick={()=>handleDelete(labData.id)}>Delete</button>
                </article>
                
              </div>
            </div>
          </div>
        </div>
      ))}

        </div>
        
     );
}

export default Time;
