import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.navDiv2}>
         
         <input 
         onChange={handleChange} 
         type='search' placeholder="busque aquí" 
         className={style.searchBar}
         style={{ padding: '2px 0px 0px 8px' }}
         />
         <button onClick={() => onSearch(id)}
         className={style.buttonAdd}
         style={{ padding: '2px 5px 0px 5px' }}>Agregar</button>
         
      </div>
   
     
   )
}
