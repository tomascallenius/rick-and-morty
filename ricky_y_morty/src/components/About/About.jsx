import React from "react";
import style from "./About.module.css";

export default function About(){

    return(
        <div className={style.divContenedor}>
            <h1 className={style.title}>Hola! Soy Tomás.</h1>
            <h2 className={style.subTitle}>
                Este es mi primer sitio web, espero haya sido de tu agrado tu pasaje por la misma,
                <br/>
                desde ya, muchas gracias.
            </h2>
        </div>
    );
}