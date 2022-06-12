import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./comp/Home";
import {Route,Routes,Router} from 'react-router-dom';
import './comp/style.css';
import LoginPage from "./comp/pages/LoginPage";
import Register from "./comp/pages/Register";
import About from "./comp/About";
import Login from "./comp/pages/Login";
import Registration from "./comp/pages/Registration";
import Add from "./comp/farmerdashboard/Add";
import View from "./comp/farmerdashboard/View";
import Edit from "./comp/farmerdashboard/Edit";
import Enter from  "./comp/pages/Enter";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Sell from './comp/Sell';

import Dashboard from './comp/farmerdashboard/Dashboard';
import Sidemenu from './comp/farmerdashboard/Sidemenu';

import Udashboard from './comp/userdashboard/Udashboard';
import Usidemenu from './comp/userdashboard/Usidemenu';
import Addrequirement from './comp/userdashboard/Addrequriment';

import Adashboard from './comp/admindashboard/Adashboard';
import Asidemenu from './comp/admindashboard/Asidemenu';
import Addbidding from './comp/admindashboard/Addbidding';
import Viewuser from './comp/admindashboard/Viewuser';
import Viewfarmer from './comp/admindashboard/Viewfarmer';
import Userbidding from './comp/userdashboard/Userbidding';
import Helpdesk from './comp/Helpdesk';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
    };
    const logOut = () => {
    setisLoggedIn(false);
    };
  return (
        <div>
        
        {/* {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
        ) : (
        <button onClick={logIn}>Login</button>
        )} */}
            <Routes>
              
              <Route path="/" element={<Home/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/registration' element={<Registration/>} />
              <Route path='/loginpage' element={<LoginPage/>} />
              <Route path='/register' element={<Register/>} />                         
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
                  
              </Route>

              <Route path="/admindashboard" element={<Adashboard/>}>
                <Route path="/admindashboard/asidemenu" element={<Asidemenu/>}/>
                <Route path="/admindashboard/addbidding" element={<Addbidding/>}/>
                <Route path="/admindashboard/viewuser" element={<Viewuser/>}/>
                <Route path="/admindashboard/viewfarmer" element={<Viewfarmer/>}/>
              </Route>

              <Route path="/enter" element={<Enter/>}/>
              <Route path="/sell" element={<Sell/>}/>

              <Route path="/helpdesk" element={<Helpdesk/>}/>

              </Routes>
            
         
        
        </div>
  );
}

export default App;
