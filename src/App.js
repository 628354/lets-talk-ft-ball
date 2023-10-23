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
        </Routes>
       
    

      <Footer />
      {/* <Footerar/> */}
    </div>
  );
}

export default App;
