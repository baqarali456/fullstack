import React from "react";

export default function Navbar({product,filterproduct,uniqueCategory}) {
  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }
  return (
    <section>
      <nav className="bg-sky-500/100 h-14 flex">
        <ul className="flex items-center text-white font-mono font-semibold list-none no-underline">
        {uniqueCategory.map((element,i)=>{
          return <li key={i} onClick={()=>filterproduct(element)} className="mx-6 cursor-pointer">{capitalize(element)}</li>
          
        })}
        <i class="fa-solid text-2xl cursor-pointer fa-cart-shopping"></i>
        
         
         
        </ul>
      </nav>
    </section>
  );
}
