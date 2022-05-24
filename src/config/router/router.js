import React from "react"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "../../pages/about"
import Home from "../../pages/home"
import Services from "../../pages/service"


export default function AppRouter (){
    return <Router>
      <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/Services" element={<Services />}/>
              <Route path="/About" element={<About />}/>
      </Routes>
    </Router>
}