import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer(){

    return(
        <div className={style.footer}>
         
            <hr className={style.divisor}/>
            <NavLink to="/about" >
                <span className={style.text}>About the creator.</span>
            </NavLink>
        </div>
    )
}