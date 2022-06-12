import React from 'react'
import { Outlet } from 'react-router'
import Usidemenu from './Usidemenu'

const Udashboard = () => {
  return (
    <div className="fluid-container m-3">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2">
            <div className="col col-12 col-md-4 col-lg-3">
                <Usidemenu/>
            </div>
            <div className="col col-12 col-md-8 col-lg-9 mx-auto mt-3">
                <div className="container mx-auto">
                <Outlet/>
                </div> 
            </div>
            
        </div>

    </div>
  )
}

export default Udashboard