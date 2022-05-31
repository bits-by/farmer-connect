import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./comp/Home";
import {Route,Routes,Router} from 'react-router-dom';
import './comp/style.css';
import LoginPage from "./comp/pages/LoginPage";
import Register from "./comp/pages/Register";
import About from "./comp/About";
import Login from "./comp/pages/Login";
import Registration from "./comp/pages/Registration";
import Addcrop from "./comp/farmerdashboard/Addcrop";
import Add from "./comp/farmerdashboard/Add";
import View from "./comp/farmerdashboard/View";
import Edit from "./comp/farmerdashboard/Edit";
import Enter from  "./comp/pages/Enter";



function App() {
  return (
        <div>
        
            
            <Routes>
              
              <Route path="/" element={<Home/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/registration' element={<Registration/>} />
              <Route path='/loginpage' element={<LoginPage/>} />
              <Route path='/register' element={<Register/>} />                         
              <Route path='/about' element={<About/>} />  

              <Route path="/addcrop"    element={<Addcrop/>} />
              <Route path="/add" element={<Add/>}/>   
              <Route path="/view" element={<View/>}/>   

              <Route path="/edit" element={<Edit/>}/>  
              <Route path="enter" element={<Enter/>}/>
              </Routes>
            
         
        
        </div>
  );
}

export default App;
