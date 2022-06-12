import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar'
import "./style.css";

const About = () => {
  return (
    <>      
        <Navbar/>  
       <div className="container border border-secondary">
                <div className="title">
                    <h2>Farmer's Connect</h2>
                </div>
                
                <div className="content">
                    <div className="data"> 
                        <h4>Establishment of Apeda</h4>
                        <p>The Agricultural and Processed Food Products Export
                             Development Authority (APEDA) was established by the Government
                              of India under the Agricultural and Processed Food Products
                               Export Development Authority Act passed by the Parliament
                             in December, 1985. The Act (2 of 1986) came into effect from
                              13th February, 1986 by a notification issued in the Gazette
                               of India: Extraordinary: Part-II [Sec. 3(ii): 13.2.1986).
                                The Authority replaced the Processed Food Export Promotion 
                                Council (PFEPC).                        
                        </p>
                    </div>
                    <div className="data">
                        <h4>Apeda Organisation Set Up</h4>
                        <p> The Agricultural and Processed Food Products Development Authority (APEDA)
                             has its headquarters at New Delhi and is headed by Chairman, APEDA.<br/>
                             APEDA has set up Regional Offices at Mumbai, Hyderabad, Kolkata, Bengaluru,
                              Guwahati, Ahmedabad, P.O. Varanasi, Chandigarh, Extension Office (EO) Bhopal, 
                              Chennai, Kochi and Jammu and Kashmir.
                         </p>
                    </div>
                    <div className="data">
                        <h4>Apeda's Presence</h4>
                        <p>APEDA has marked its presence in almost all agro potential states of India and 
                            has been providing services to agri-export community through its head office and 
                            Regional offices.
                        </p>
                        <ul>
                            <h6>Head Office</h6>
                            <li>New Delhi</li>
                        </ul>
                        <ul>
                            <h6>Regional Office</h6>
                            <li>Mumbai</li>
                            <li>Hyderabad</li>
                            <li>Kolkata</li>
                            <li>Bengaluru</li>
                            <li>Guwahati</li>
                            <li>Chandigarh</li>
                            <li>Parbhani</li>
                            <li>Solapur</li>
                            <li>Latur</li>
                            <li>Dhule</li>
                            <li>Nagpur</li>
                        </ul>
                    </div>
                    
                    
                </div>
        </div>  
        <br/>
        <Footer/>
    </>
  )
}

export default About