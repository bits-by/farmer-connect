import React from "react";
// import img5 from "./img/grass.png";

const Card = ({ cardData }) => {
  return (
    <>
      
      {/* <img src={img5} style={{ height: 90,maxWidth:1380}} alt="grass pic" /> */}
      
      <div className="body-sec2 py-3">
        <h3>Popular Product</h3>
        <div className="fluid-container   justify-content-around">
          <div className="container mx-auto row row-cols-1 row-cols-sm-3 row-cols-md-5 mb-1 g-3">
            {cardData.map((element) => (
              <div className="col">
                <div className="card rounded">
                  <img
                    src={element.image}
                    style={{ height: 150}}
                    alt={element.name}
                  />
                  <div className="card-footer">
                    <p>{element.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
