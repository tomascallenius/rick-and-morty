import React from "react";
import { useState } from "react";
import style from "./Login.module.css";
import bGmp4 from "./video/hyperspace-jump-corto.mp4";
import imageLogin from "./rickSolo.png";
import tituloLogin from "./fondoTituloLogin.png";

const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "Email vacio" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email inválido" });
  }
};

export default function Login(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("login exitoso");
  };

  const handlerSubmit = (userData) => login();

  return (
    <div className={style.divContenedor}>
      <div>
        <img src={tituloLogin} alt="" className={style.tituloLogin} />
      </div>

      <img src={imageLogin} alt="" className={style.imageLogin} />

      <video
        src={bGmp4}
        muted
        autoPlay
        loop
        type="video/mp4"
        className={style.video}
      ></video>
      <div>
        <form action="" className={style.loginForm} onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>

            <input
              type="text"
              placeholder="escribe aqui"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={
                errors.email ? style.inPutEmailError : style.inPutEmailSuccess
              }
            />
            <span>{errors.email}</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="escribe aqui"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={style.inPutpassWord}
            />
          </div>
          <div>
            <button type="submit" submitHandler={submitHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
      <p className={style.textoSubTitulo}>jkfdjfkj</p>
    </div>
  );
}
