import React from 'react';
import ProductManagement from './Home.js';
import Dashboard from './Dashboard';
import OrderManagement from './About';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar1 from './Navbar1.js';


function App(){
  
  
  return(
    <div>
      <Router>
        <Routes>
           <Route  path="/" element={Navbar1} />
           <Route path="/Dashboard" element={<Dashboard/>}/>
           <Route path="/ProductManagement" element={<ProductManagement/>}/>
           <Route path="/OrderManagement" element={<OrderManagement/>}/>
        </Routes>
      </Router>
      
    </div>
    
  
  )
}

export default App;
