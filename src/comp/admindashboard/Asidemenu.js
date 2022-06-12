import React from "react";
import {Link } from "react-router-dom";

const Asidemenu = () => {
  
  return (
    <div>
      <div className="fluid-container border-1 solid fdashboard">

          {/* navigation */}
              <a class="navbar-brand " href="#">
                  Admin Dashboard
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

            <nav className="navbar navbar-expand-md ">

              <div className="container-fluid card shadow d-block sidebar ">
                
                <div className="collapse navbar-collapse sidebar-menu " id="navbarNav">
                  <ul className="navbar-nav d-block w-100 sidebar-menu-item ">
                    <li className="nav-item ">
                      <Link className="nav-link " aria-current="page" to="/admindashboard/addbidding">
                        Add Bidding Info
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/admindashboard/viewuser">
                        View User
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/admindashboard/viewfarmer">
                        View Farmer
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>          
          </div>
        </div>
     
  );
};

export default Asidemenu;
