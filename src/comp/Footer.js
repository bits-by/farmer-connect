import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="col-12 col-lg-12">
                <p>
                  The main objective of this initiative is to connect FPOs and
                  Exporters on a single 24x7 digital platform & help FPOs and
                  Exporters create their detailed profiles. It would streamline
                  the transparent process of posting and viewing the Sell offers
                  between FPOs and Exporters.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6  mx-auto">
              <div className="row row-cols-1">
                <div className="col-12 col-sm-4">
                  <h2>Quick Link</h2>

                  <a href="/About">About Us</a>
                  <br />
                  <a href="#">Browser Sell Offers</a>
                  <br />
                  <a href="#">Browser Buyer's Enquiry</a>
                  <br />
                  <a href="#">Brower Exporter Directory</a>
                </div>
                <div className="col-12 col-sm-4">
                  <h2>Helpdesk</h2>

                  <a href="#">9999988888</a>
                  <br/>
                  <a href="https://www.gmail.com">Fconnect@gmail.com</a>
                  <a href="#"></a>
                </div>

                <div className="col-12 col-lg-4">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="https://www.instagram.com">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.facebook.com">
                        <i class="fab fa-facebook fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.youtube.com">
                        <i class="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.twitter.com">
                        <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mx-3 d-flex justify-content-between">
            <div>
              <p className="">
                Copyright @ 2022 Farmer Connect. All rights reserved.
              </p>
            </div>
            <div>
              <a href="#" className="me-3">
                Privacy Policy
              </a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
