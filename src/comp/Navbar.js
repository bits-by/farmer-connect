import React from 'react';


const Navbar = () => {
    return(

      <>
       
        <ul className="nav justify-content-end ">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/Addcrop">Dashboard</a>
        </li>


        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/LoginPage">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/LoginPage">User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/LoginPage">Farmer</a>
        </li>   
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/About">About</a>
        </li>
      </ul>       
      </>
    )
}

export default Navbar;