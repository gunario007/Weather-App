import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Farmers from './Farmers';
import EventPlanners from './EventPlanners';
import Travellers from './Travellers';
import Bfarmers from './Bfarmers';
import BeventPlanners from './BeventPlanners';
import Btravellers from './Btravellers';


const App = () => {
  return (
    <div>
       <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/farmers" element={<Farmers />} />
          <Route exact path="/bfarmers" element={<Bfarmers />} />


          <Route exact path="/event" element={<EventPlanners />} />
          <Route exact path="/bevent" element={<BeventPlanners />} />


          <Route exact path="/travellers" element={<Travellers />} />
          <Route exact path="/btravellers" element={<Btravellers />} />

         


         
        </Routes>
      </Router>
    </div>
  )
}

export default App
