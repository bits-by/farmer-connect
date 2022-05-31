import React from "react";
import { BrowserRouter as Routes, Route} from "react-router-dom";
import {Link } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import View from "./View";


const Addcrop = () => {
  
  return (
    <div>
      <div className="fluid-container border-1 solid">
        <div className="row row-cols-1 row-cols-md-2">
          {/* navigation */}
          <div className="col col-12 col-md-3  ">
            <nav class="navbar navbar-expand-lg bg-light ">
              <div class="container-fluid d-block">
                <a class="navbar-brand" href="#">
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
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav d-block">
                    <li class="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/add">
                        Add Crop
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/view">
                        View Requirement
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/edit">
                        Edit/Delete Crop
                      </Link>
                    </li>
    
                  </ul>
                  
                </div>
              </div>
            </nav>

            
          </div>

          {/* main body  */}
          <div className="col col-12 col-md-9">
        
            
          </div>


        </div>
      </div>
    </div>
  );
};

export default Addcrop;
