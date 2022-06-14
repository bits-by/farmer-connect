import React from "react";
import {Link } from "react-router-dom";

const Sidemenu = () => {
  
  return (
    <div>
      <div className="fluid-container border-1 solid fdashboard">

          {/* navigation */}
              <a class="navbar-brand " href="#">
                  Farmer Dashboard
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
                      <Link className="nav-link " aria-current="page" to="/farmerdashboard/add">
                        Add Crop
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/farmerdashboard/view">
                        View user Request
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/farmerdashboard/edit">
                        View Bidding Info
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

export default Sidemenu;
