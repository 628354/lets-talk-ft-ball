/** @format */

import "./App.css";
// import "./css/arstyle.css";
import "./css/enstyle.css";
import "./responsive/arstyle.css";
import "./responsive/enstyle.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Leagues from "./page/Leagues";
import Cafe from "./page/Cafe";
import Definition from "./page/Definition";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Forgot from "./page/Forgot";
import Blog from "./components/Blog";
import Headerar from "./components/Headerar";
import Footerar from "./components/Footerar";
import Chart from "./components/Chart";
import PremierLeague from "./Chart-page/PremierLeague";
import Laliga from "./Chart-page/Laliga";
import SerieA from "./Chart-page/SerieA";
import Bundesliga from "./Chart-page/Bundesliga";
import Ligue1 from "./Chart-page/Ligue1";
import NetherlandEredivisie from "./Chart-page/NetherlandEredivisie";
import LigaPortugal from "./Chart-page/LigaPortugal";
import SaudiPro from "./Chart-page/SaudiPro";
import EgyptPL from "./Chart-page/EgyptPL";
import BotolaPro from "./Chart-page/BotolaPro";
import BrazilSerieA from "./Chart-page/BrazilSerieA";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Headerar/> */}
      
     
      

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
          <Route path="/Login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/Signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/Forgot" element={<Forgot />}>
            {" "}
          </Route>
          <Route path="/blog" element={<Blog />}>
            {" "}
          </Route>
          <Route path="/Chart" element={<Chart/>}>
            {" "}
          </Route>
          <Route path="/PremierLeague" element={<PremierLeague/>}>
            {" "}
          </Route>
          <Route path="/Laliga" element={<Laliga/>}>
            {" "}
          </Route>
          <Route path="/SerieA" element={<SerieA/>}>
            {" "}
          </Route>
          <Route path="/Bundesliga" element={<Bundesliga/>}>
            {" "}
          </Route>
          <Route path="/Ligue1" element={<Ligue1/>}>
            {" "}
          </Route>
          <Route path="/NetherlandEredivisie" element={<NetherlandEredivisie/>}>
            {" "}
          </Route>
          <Route path="/LigaPortugal" element={<LigaPortugal/>}>
            {" "}
          </Route>
          <Route path="/SaudiPro" element={<SaudiPro/>}>
            {" "}
          </Route>
          <Route path="/EgyptPL" element={<EgyptPL/>}>
            {" "}
          </Route>
          <Route path="/BotolaPro" element={<BotolaPro/>}>
            {" "}
          </Route>
          <Route path="/BrazilSerieA" element={<BrazilSerieA/>}>
            {" "}
          </Route>

         
        </Routes>
       
    

      <Footer />
      {/* <Footerar/> */}
    </div>
  );
}

export default App;
