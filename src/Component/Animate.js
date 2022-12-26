import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Animate() 
{
  const [parent, enable] = useAutoAnimate({ duration: 500 });
  const [items, setItems] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  function toggleEnabled() {
    enable(!isEnabled);
    setIsEnabled(!isEnabled);
  }

  function handleSubmit(event) 
  {
    event.preventDefault();
    const name = event.target.elements.name.value;
    if (name) {
      setItems((prev) => [{ name }, ...prev]);
      event.target.elements.name.value = "";
    }
  }

  return (
    <div className="p-8 space-y-4">
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          id="name"
          className="border-2 border-blue-500 rounded-lg mr-2 p-1"
          placeholder="Add new event"
        />
        <button className="bg-blue-500 text-white rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
      <h1 className="flex justify-center w-full">Upcoming Events</h1>
      <div ref={parent} className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div className="font-bold">{item.name}</div>
        ))}
      </div>
      <div className="flex items-center space-x-1">
        <input
          onChange={toggleEnabled}
          type="checkbox"
          id="enabled"
          checked={isEnabled}
        />
        <label htmlFor="enabled">Animations Enabled</label>
      </div>
    </div>
  );
}























// import { useState, useRef, useEffect } from "react";
// import autoAnimate from "@formkit/auto-animate";

// export default function Animate() 
// {
//   const [open, setOpen] = useState(false);
//   const parentRef = useRef();

//   useEffect(() => {
   
//       autoAnimate(parentRef.current);
//     });

//   const showMore = () => setOpen(!open);

//   return (
//     <div className="flex justify-center items-center flex-col space-y-5 p-5">
//       <h1 className="font-bold text-xl text-blue-600">
//         Frequently Asked Questions
//       </h1>
//       <div
//         className="px-2 cursor-pointer py-1 border-2 border-gray-200 w-[400px] rounded-lg"
//         ref={parentRef}
//       >
//         <div
//           onClick={showMore}
//           className="select-none font-bold w-full flex justify-between items-center"
//         >
//           <span style={{cursor:"pointer"}}>Show More</span>
          
//         </div>
//         {open && (
//           <p className="p-2 italic">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
//             libero! Excepturi voluptatum temporibus repellendus rem iure, aut
//             voluptate nisi enim vitae facere minima aliquid natus odio sequi est
//             dolores provident.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


