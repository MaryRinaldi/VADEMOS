import React, {useState, useEffect} from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import '../../App.css'
import Modal from '../pages/Modal.jsx'
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import CCLogo from '../../assets/CClogo.png'


function HomePage() {

  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const switchModal = (content) => {
    closeModal();
    openModal(content);
    console.log(content)
  }
  

return (
<>
<div className="Frontpage">
<div className="title">
        <h2>VADEMOS</h2>
        <h3>Vaccine Demand Estimation Model - FMD</h3>
      </div>
      {!token && (
      <div className='register_form'>
      <h4> Sign Up for access.</h4>  
      <ul> 
          <li><button className='home-button' onClick={() => openModal(<Register closeModal={closeModal} goToLogin={()=>switchModal(<Login/>)} />)}>Register</button></li>
          <li><button className='home-button' onClick={() => openModal(<Login closeModal={closeModal} goToRegister={()=>switchModal(<Register/>)} />)}>Login</button></li>
          </ul>
      </div>
      )}
      <div className="information_p">
        <p>
          VADEMOS is a decision-support tool intended to be used to estimate current and future vaccine dose demand for Foot-and-Mouth disease (FMD) at a national and regional level.  It aims to bridge the gap between FMD vaccine demand and vaccine production/supply in endemic countries. It is a stochastic quantitative model which uses predictors of vaccine dose demand such as livestock population forecast, disease control policy related to projected FMD Progressive Control Pathway (PCP) stage, vaccination schedule and outbreak forecasting. Summary details of the inputs of VADEMOS are discussed below.
          <br></br>
          <br></br>
          <br></br>
          <b>Prophylactic vaccination nº</b> are the vaccine doses needed to cover the livestock population as part of a country’s routine vaccine policy I.e., number of livestock which will be vaccinated prophylactically per annum. The inputs for this are:
          <br></br>
          <br></br>
          * Livestock population forecast, divided into large ruminants, small ruminants, and pigs;
* Sector proportion for large ruminants (dairy, beef, and smallholder);
* Vaccination schedule for youngstock and adult stock, this considers the need for primary courses and boosters;
* Proportion of total livestock covered with routine vaccination based on the predicted PCP stage*. 
<br></br>
 <br></br>
 <br></br>
 <b>Emergency vaccination nº</b> are the number of vaccine doses required to carry out vaccination surrounding outbreaks. The inputs for this are:
 <br></br>
          <br></br>
          * Livestock population forecast, divided into large ruminants, small ruminants, and pigs;
* Livestock population density, divided into large ruminants, small ruminants, and pigs;
* Reactive vaccination area, the area surrounding the outbreak in which all animals are vaccinated which is assumed to be a 10km2 based on the EU directive 2003/85/EC recommendations;
* Outbreak number forecast;
* Proportion of outbreaks targeted for vaccination based on PCP stage.
<br></br>
          <br></br>
          <br></br>
        <b>Total vaccination dose nº</b> is the addition of emergency vaccine doses and prophylactic vaccine doses. This is available in livestock category format. 
        <br></br>
          <br></br>
          *PCP stages are used as a proxy for FMD control policy. Inputs relating to the PCP stages are the result of an expert elicitation study conducted by the EuFMD in 2020/21. In this study experts in the field of FMD control were asked to assign a range to each PCP stage and livestock category relating to:
          <br></br>
          <br></br>
* Proportion of animals routinely vaccinated;
* Proportion of outbreaks targeted with emergency vaccination per PCP stage;
<br></br>
          <br></br>
Based on the expert elicitation, preselected values for the above parameters were assigned to a country based on their projected PCP stage for each year. The PCP projections are from the roadmap meetings held with EUFMD and in-country representatives, typically occurring every 5 years.
<br></br>
          <br></br>
Data on population and outbreak values are collated from FAOSTAT and the WOAH WAHIS databases. Values relating to quantity of animal products, such as milk and meat, were used as a proxy for sector proportions and were also collated from FAOSTAT. If available, country data from national statistical institutes was used over the above.
<br></br>
          <br></br>
The tool is intended to be flexible to country requirements, and therefore the input values can be adjusted to allow for variation with in-country data.
<br></br>
          <br></br>
Full details on the model, including distributions used for each parameter, will be available to download from this site within the near future. Meanwhile for more detail information please get in touch via the email address as follows: eufmd@fao.org
<br></br>
<br></br>
          <br></br></p>
<p><i>This tool is a simulation model that has been developed by the EuFMD under its 2019-2021 workplan as part of Pillar III, Component 3.4. </i> 
           <br></br>
           <a href="https://www.fao.org/Contact-us/terms/db-terms-of-use/en">Statistical Database Terms of Use</a><br></br>
           <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/igo/">Creative Commons License</a><img src={CCLogo} alt="Creative Commons logo" className="cc_logo" /><br></br>
        <i>This work is made available under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO license (CC BY-NC-SA 3.0 IGO; <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/igo/">CC BY-NC-SA 3.0 IGO</a>). In addition to this license, some database specific terms of use are listed: <a href="https://www.fao.org/Contact-us/terms/db-terms-of-use/en">Terms of Use of Datasets</a>.</i></p>
      </div>  
      <div>
  {showModal && <Modal showModal={showModal} closeModal={closeModal} modalContent={modalContent} />}
</div>
      <Outlet />      
    </div>
    </>
  );
}
export default HomePage