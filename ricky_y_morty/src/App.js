import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => { 
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "a9159342b340.0eec454c33d2c02ca52f";
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldState) => [...oldState, data]);
          //setCharacters([...characters, data])
        } else { 
          alert("No hay personajes con ese ID");
        }
      });      
  };   

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Login loin={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cardDetail/:detailId" element={<CardDetail />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
      </Routes>

      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
export default App;
