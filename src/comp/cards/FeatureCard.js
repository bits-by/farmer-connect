import { minWidth } from "@mui/system";
import React from "react";

const FeatureCard = ({ cardFeature }) => {
  return (
    <>
      {/* <img src={img5} style={{ height: 90,maxWidth:1380}} alt="grass pic" /> */}

      <div className="fluid-container  py-3 justify-content-around">
        <div className="container">
          <h3>Features</h3>
          <div className=" mx-auto row row-cols-1 row-cols-sm-2 mb-1 g-3">
            <div className="col col-12 col-sm-2">
              <div className="fluid-container">
                <button className="btn btn-link text-decoration-none text-white bg-dark w-100">
                  FPOs
                </button>
              </div>
              <div className="exporter">
                <button className="btn btn-link text-decoration-none text-white bg-dark w-100">
                  Exporter
                </button>
              </div>
            </div>
            <div className="col col-12 col-sm-10 mb-2">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-2">
                {cardFeature.map((element) => (
                  <div className="col col-12 col-md-4 mb-2">
                    <div
                      className="card rounded text-center"
                      style={{ height: 300 }}
                    >
                      <img
                        src={element.image}
                        className="mx-auto mt-4"
                        style={{ height: 100, width: 100 }}
                        alt={element.city}
                      />
                      <div className="card-body feature-font-size">
                        <p>{element.desc}</p>
                        <p>{element.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
