import React from "react";
import style from "./Card.module.css";
import icon from "./iconoguardar.png";
import { Link } from "react-router-dom";
export default function Card({id, onClose, name, species, gender, image}) {

   return (
      <div className={style.divCard}>
         <img src={icon} alt="" className={style.iconGuardar}/>
         <img className= {style.imgChar} src={image} alt="" />
         <button onClick={()=>onClose(id)} className={style.closeButton}>x</button>
         <div className={style.description}>
            <Link to={`/cardDetail/${id}`} >
            <h2 className={style.linkDetail}>{name}</h2>
            </Link>
            <h2 >Specie: {species}</h2>
            <h2 >Gender: {gender}</h2>
         </div>
      </div>
   );
}
