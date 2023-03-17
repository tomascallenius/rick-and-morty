import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import style from "./CardDetail.module.css";
import naveEspacial from "./naveEspacial.png";


function CardDetail () {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "a9159342b340.0eec454c33d2c02ca52f";

        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setCharacter(data)
        })            
    }, []);

    return(
        <>
            {character.name ? (   
                
                <div className={style.divContenedor}>
                    <div className={style.divCardDetail}>
                        <h2 >{character.name}</h2>
                        <h3>Status: {character.status}</h3>
                        <h3>Specie: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                    </div>
                    <img src={character.image} alt="Ricky-and-Morty-Char" className={style.imageDetail}/>
                </div>

                ) : (
                    <img src={naveEspacial} alt="" className={style.naveEspacial}/>
                )
            }
        </>
    )
};

export default CardDetail