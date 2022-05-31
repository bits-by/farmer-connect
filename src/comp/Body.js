import React, { useState } from "react";
import img4 from "./img/veg.png";
import img5 from "./img/grass.png";
import img6 from "./img/mobile_app.png";
import Card from "./cards/Card";
import {Menu,fpo} from "./cards/Cardapi";

import "./style.css";
import FeatureCard from "./cards/FeatureCard";

const Body = () => {
  const [cardData, setCardData] = useState(Menu);
  // console.log(cardData);
  const [cardFeature,setCardFeature] = useState(fpo);

  return (
    <>
    <div className="fluid-container">
      <div className="fluid-container body-sec1">
        <div className="row row-cols-1 row-cols-2 align-items-center  mx-5">
          <div className="col col-12 col-sm-6">
            <img
              src={img4}
             
              className="rounded float-start img-fluid"
              alt="veg pic"
            />
          </div>
          <div className="col col-12 col-sm-6">
            <br />

            <h3>Welcome to Farmer Connect</h3>
            <br />
            <p>
              APEDA has undertaken a Programme for Agro food cluster for export
              promotion and had identified potential clusters and products based
              on the export potential. APEDA is planning to carry out a number
              of Farmer Connect initiatives in these clusters partnering State
              Governments, Exporters, Experts, etc., as well through a number of
              direct interventions.
              <br />
              <br />
              Farmer connect is an initiative undertaken by APEDA to provide a
              24X7 Online visibility digital platform in the form of a portal
              and mobile application. It will help to bridge the gap between
              FPO/FPC/Cooperatives and exporters. FPO/FPC/Cooperatives can make
              their profiles and post sell offers. Exporters can post enquiries
              and view Matching Sell offers.
            </p>
            <br />
          </div>
        </div>
      </div>

      {/* <img src={img5} style={ {height:90 , width:1350} } alt="grass pic"/> */}

      

      <Card cardData={cardData} />
      <FeatureCard cardFeature={cardFeature} />
 
      {/* <Features/> */}
      <div>
        <img src={img6} className="img-fluid" alt="mobile_app" />
      </div>
    </div>

       
      </>
  );
};

export default Body;
