import React from 'react'
import "../components/Explore.css"
import Explorecard from './card/Explorecard'
import Formation from "../assests/comapny.png"
import BookKeeping from "../assests/bookeeping.png"
import annual from "../assests/annual.png"
import companyservice from "../assests/companyservice.png"
import Payroll from "../assests/Payroll.png"
import virtualoffice from "../assests/virtualoffice.png"


export default function Explore() {
  return (
  <section className='Explore p-5'>
    <div>
        <div className='d-flex justify-content-center explore-color'><p>Welcome to Registerkaro.in</p></div>
        <div className='d-flex justify-content-center'><h2>Explore Our Services</h2></div>       
    </div>
    <div className='container '>
    <div className='row'>
      <div className='col-12  col-sm-6 col-md-4 mt-5 d-flex justify-content-center'>
      <Explorecard img={Formation} Name={"Company Formation"} content={"Build web-based solution that enhance customer experience."} />
      </div>
      <div className='col-12  col-sm-6 col-md-4 mt-5'>
      <Explorecard img={companyservice} Name={"Company Secretarial Services"} content={"Make data-driven decisions ad utilize technology to reach business goals"}/>
      </div>
      <div className='col-12  col-sm-6 col-md-4 mt-5'>
      <Explorecard img={virtualoffice} Name={"virtual Office Address"} content={"Foster customer relationships by effectively serving your market."}/>
      </div>
      <div className='col-12  col-sm-6 col-md-4 mt-5'>
      <Explorecard img={annual} Name={"Annual Compliance Services"} content={"Turn your ideas into modern products with our design experts."} />
      </div>
      <div className='col-12  col-sm-6 col-md-4 mt-5'>
      <Explorecard img={Payroll} Name={"Payroll service"} content={"Expand your busoness across the globe with minimal effort."} />
      </div>
      <div className='col-12  col-sm-6 col-md-4 mt-5'>
      <Explorecard img={BookKeeping} Name={"BookKeeping Services"} content={"Streeing user behaviour with creative design, data insights & technology."} />
      </div>
    </div>
    </div>
    <div className='d-flex justify-content-center mt-5'>
    <button type="button" class="btn btn-primary">See All Services</button>
    </div>
  </section>
  )
}
