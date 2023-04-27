import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import iconHome from "./iconHomeFill.png";
import logo from "./rick_y_morty_logo_nav.png";

export default function Nav(props) {
  return (
    <nav className={style.nav}>
      <div className={style.navDiv1}>
        <img src={logo} alt="" className={style.logo} />

        <NavLink to="/home" activeClassName="LinkHome">
          <img src={iconHome} alt="" className={style.iconHome} />
        </NavLink>
      </div>

      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}
