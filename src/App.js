/** @format */

import "./App.css";
import "./css/arstyle.css";
import "./css/enstyle.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Leagues from "./page/Leagues";
import Cafe from "./page/Cafe";
import Definition from "./page/Definition";
import Contact from "./page/Contact";

function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/About" element={<About />}>
            {" "}
          </Route>
          <Route path="/Leagues" element={<Leagues />}>
            {" "}
          </Route>
          <Route path="/Cafe" element={<Cafe />}>
            {" "}
          </Route>
          <Route path="/Definition" element={<Definition />}>
            {" "}
          </Route>
          <Route path="/Contact" element={<Contact />}>
            {" "}
          </Route>
        </Routes>
    

      <Footer />
    </div>
  );
}

export default App;
