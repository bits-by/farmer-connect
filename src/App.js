import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {Route,Routes} from 'react-router-dom';
import './comp/style.css';


import Home from "./comp/Home";
import About from "./comp/About";
import Login from "./comp/pages/Login";
import Registration from "./comp/pages/Registration";

import Sell from './comp/Sell';
import Helpdesk from './comp/Helpdesk';


import Add from "./comp/farmerdashboard/Add";
import View from "./comp/farmerdashboard/View";
import Edit from "./comp/farmerdashboard/Edit";
import Dashboard from './comp/farmerdashboard/Dashboard';
import Sidemenu from './comp/farmerdashboard/Sidemenu';

import Udashboard from './comp/userdashboard/Udashboard';
import Usidemenu from './comp/userdashboard/Usidemenu';
import Addrequirement from './comp/userdashboard/Addrequriment';
import Userbidding from './comp/userdashboard/Userbidding';

import Adashboard from './comp/admindashboard/Adashboard';
import Asidemenu from './comp/admindashboard/Asidemenu';
import Addbidding from './comp/admindashboard/Addbidding';
import Viewuserrequest from './comp/admindashboard/Viewuserrequest';
import Viewfarmerstock from './comp/admindashboard/Viewfarmerstock';
import Viewuserinfo from './comp/admindashboard/Viewuserinfo';
import Viewfarmerinfo from './comp/admindashboard/Viewfarmerinfo';
import Viewquery from './comp/admindashboard/Viewquery';
import Viewcrop from './comp/userdashboard/Viewcrop';
import Logout from './comp/Logout';


function App() {
 
  return (
        <div>
        
            <Routes>
              
              <Route path="/" element={<Home/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/registration' element={<Registration/>} />                       
              <Route path='/about' element={<About/>} />  

              <Route path="/farmerdashboard"    element={<Dashboard/>} >
                  <Route path="/farmerdashboard/sidemenu" element={<Sidemenu/>}/>
                  <Route path="/farmerdashboard/add" element={<Add/>}/>   
                  <Route path="/farmerdashboard/view" element={<View/>}/>   
                  <Route path="/farmerdashboard/edit" element={<Edit/>}/> 
              </Route>

              <Route path="/userdashboard" element={<Udashboard/>}>
                  <Route path="/userdashboard/sidemenu" element={<Usidemenu/>}/>
                  <Route path="/userdashboard/addrequirement" element={<Addrequirement/>}/>
                  <Route path="/userdashboard/userbidding" element={<Userbidding/>}/>
                  <Route path="/userdashboard/viewcrop" element={<Viewcrop/>}/>
                  
              </Route>

              <Route path="/admindashboard" element={<Adashboard/>}>
                <Route path="/admindashboard/asidemenu" element={<Asidemenu/>}/>
                <Route path="/admindashboard/addbidding" element={<Addbidding/>}/>
                <Route path="/admindashboard/viewuserrequest" element={<Viewuserrequest/>}/>
                <Route path="/admindashboard/viewfarmerstock" element={<Viewfarmerstock/>}/>
                <Route path="/admindashboard/viewuserinfo" element={<Viewuserinfo/>}/>
                <Route path="/admindashboard/viewfarmerinfo" element={<Viewfarmerinfo/>}/>
                <Route path="/admindashboard/viewquery" element={<Viewquery/>}/>
              </Route>
           
              <Route path="/sell" element={<Sell/>}/>
              <Route path="/helpdesk" element={<Helpdesk/>}/>
              <Route path="/logout" element={<Logout/>}/>

              </Routes>
            
         
        
        </div>
  );
}

export default App;
