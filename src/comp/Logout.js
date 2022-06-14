import React from 'react';


const Logout = () => {
    return(

      <>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/" className="navbar-brand ">
          {/* <img src="./comp/img/fclogo.png" alt="fc-logo"width="40" height="40"
          className="d-inline-block align-top" /> */}
          Farmer Connect</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-lable="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
          <div className="collapse navbar-collapse" id="toggleMobileMenu">

            <ul className="navbar-nav ms-auto ">            
            {/* <li class="nav-item">
              <a class="nav-link active"  href="http://localhost:3000/">Home</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link active"  href="http://localhost:3000/">Logout</a>
            </li>
            
          </ul> 
        </div>
      </nav>
      </div>
      </>
    )
}

export default Logout;