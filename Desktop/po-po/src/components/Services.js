import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faVideo, faMicrophone, faLanguage, faMagic, faAd } from "@fortawesome/free-solid-svg-icons";




const Services = () => {
  return (
   <div className="services">
     <div className="py-5">
         <div className="container">
             <div className="row">
                 <div className="col-md-2 col-sm-6">
                     <div className="box">
                     
                         <h3 className="servicestexts">Photography</h3>
                         <div className="circle"></div><FontAwesomeIcon className="icon" icon={faPhotoVideo} size="2x"></FontAwesomeIcon>
                         <div>
      
      
 	  
    </div>    
     
                     </div>
                 </div>
                 {/* - */}
                 <div className="col-md-2 col-sm-6">
                 
                     <div className="box">
                         <h3 className="servicestexts">Videography</h3>
                         <div className="circle"><FontAwesomeIcon className="icon" icon={faVideo} size="2x"></FontAwesomeIcon>
                     </div>
                 </div></div>
                  {/* - */}
                  <div className="col-md-2 col-sm-6">
                  
                     <div className="box">
                         <h3 className="servicestexts">Recording Studio</h3>
                         <div className="circle"><FontAwesomeIcon className="icon" icon={faMicrophone} size="2x"></FontAwesomeIcon>
                     </div>
                 </div></div>
                 {/* - */}
                 <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Marketing Comm.</h3>
                      <div className="circle"><FontAwesomeIcon className="icon" icon={faLanguage} size="2x"></FontAwesomeIcon>
                  </div></div>
              </div>
              {/* - */}
              <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Creative Design</h3>
                      <div className="circle"><FontAwesomeIcon className="icon" icon={faMagic} size="2x"></FontAwesomeIcon>
                  </div>
              </div></div>
              {/* - */}
              <div className="col-md-2 col-sm-6">
                  
                  <div className="box">
                      <h3 className="servicestexts">Advert Placement</h3>
                      <div className="circle"><FontAwesomeIcon className="icon" icon={faAd} size="2x"></FontAwesomeIcon>
                  </div>
              </div></div>
             </div>
         </div>
     </div>
   </div>
  );
}

export default Services;
