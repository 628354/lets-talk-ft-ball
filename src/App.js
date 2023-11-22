/** @format */

// import "./css/arstyle.css";
import "./css/enstyle.css";
import "./responsive/arstyle.css";
import "./responsive/enstyle.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import About from "./page/About";
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
import PremierLeague from "./Leagues-page/PremierLeague";
import Laliga from "./Leagues-page/Laliga";
import SerieA from "./Leagues-page/SerieA";
import Bundesliga from "./Leagues-page/Bundesliga";
import Ligue1 from "./Leagues-page/Ligue1";
import NetherlandEredivisie from "./Leagues-page/NetherlandEredivisie";
import LigaPortugal from "./Leagues-page/LigaPortugal";
import SaudiPro from "./Leagues-page/SaudiPro";
import EgyptPL from "./Leagues-page/EgyptPL";
import BotolaPro from "./Leagues-page/BotolaPro";
import BrazilSerieA from "./Leagues-page/BrazilSerieA";
import Season from "./page-dashboard/Season";
import Menubar from "./dashboard/Menubar";
import Dashboard from "./dashboard/Menubar"
import Addseason from "./page-dashboard/Addseason";
import LeaguesBluk from "./page-dashboard/LeaguesBluk";
import Editseason from "./page-dashboard/Editseason";
import Leagues from "./page-dashboard/Leagues";
import Addleagues from "./page-dashboard/Addleagues";
import Editleagues from "./page-dashboard/Editleagues";
import Edithome from "./Dashboard-edit-page/Edithome";
import Editabout from "./Dashboard-edit-page/Editabout";
import Privacypolicy from "./page/Privacypolicy";
import Editprivacypolicy from "./Dashboard-edit-page/Editprivacypolicy";
import Editdefinition from "./Dashboard-edit-page/Editdefinition";
import Editcontact from "./Dashboard-edit-page/Editcontact";
import Addcafe from "./page-dashboard/Addcafe";

import Cafeview from "./page-dashboard/Cafeview";
import Dataapi from "./Dashboard-edit-page/Dataapi";
import Premierchart from "./Leagues-components/Premierchart";



function App() {
  const navigate = useNavigate(); 
  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header />
      {/* <Headerar/> */}

        <Routes>
          
        <Route path="/login" element={<Login onSuccessfulLogin={handleSuccessfulLogin} />} />
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
          <Route path="/Dashboard" element={<Dashboard/>}>
            {" "}
          </Route>
          <Route path="/Season" element={<Season/>}>
            {" "}
          </Route>
          <Route path="/Menubar" element={<Menubar/>}>
            {" "}
          </Route>
          <Route path="/Addseason" element={<Addseason/>}>
            {" "}
          </Route>

          <Route path="/Editseason" element={<Editseason/>}>
</Route>
          <Route path="/Editseason/:id" element={<Editseason/>}>

            {" "}
          </Route>

          <Route path="/Bulk-Leagues" element={<LeaguesBluk/>}>
            {" "}
          </Route>

          <Route path="/Leagues" element={<Leagues/>}>
            {" "}
          </Route>
          <Route path="/Addleagues" element={<Addleagues/>}>
            {" "}
          </Route>

          <Route path="/Editleagues" element={<Editleagues/>}>
</Route>
          <Route path="/Editleagues/:id" element={<Editleagues/>}>

            {" "}
          </Route>
          <Route path="/Edithome" element={<Edithome/>}>
            {" "}
          </Route>
          <Route path="/Editabout" element={<Editabout/>}>
            {" "}
          </Route>
          <Route path="/Privacypolicy" element={<Privacypolicy/>}>
            {" "}
          </Route>
          <Route path="/Editprivacypolicy" element={<Editprivacypolicy/>}>
            {" "}
          </Route>
          <Route path="/Editdefinition" element={<Editdefinition/>}>
            {" "}
          </Route>
          <Route path="/Editcontact" element={<Editcontact/>}>
            {" "}
          </Route>
          <Route path="/Addcafe" element={<Addcafe/>}>
            {" "}
          </Route>

          <Route path="/Cafeview" element={<Cafeview/>}>
            {" "}
          </Route>
          <Route path="/Dataapi" element={<Dataapi/>}>
            {" "}
          </Route>
          <Route path="/Premierchart" element={<Premierchart/>}>
            {" "}
          </Route>


        </Routes>
      <Footer />
      {/* <Footerar/> */}
    </div>
  );
}


export default App;