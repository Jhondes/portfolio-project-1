import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "../photo-camera.png";



const Services = () => {
  return (
   <div className="services">
     <div className="py-5">
         <div className="container">
             <div className="row">
                 <div className="col-md-2 col-sm-6">
                     <div className="box">
                     
                         <h3 className="servicestexts">Photography</h3>
                     </div>
                 </div>
                 {/* - */}
                 <div className="col-md-2 col-sm-6">
                 
                     <div className="box">
                         <h3 className="servicestexts">Videography</h3>
                     </div>
                 </div>
                  {/* - */}
                  <div className="col-md-2 col-sm-6">
                  
                     <div className="box">
                         <h3 className="servicestexts">Recording Studio</h3>
                     </div>
                 </div>
                 {/* - */}
                 <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Marketing Communication</h3>
                  </div>
              </div>
              {/* - */}
              <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Creative Design</h3>
                  </div>
              </div>
              {/* - */}
              <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Advert Placement</h3>
                  </div>
              </div>
             </div>
         </div>
     </div>
   </div>
  );
}

export default Services;
