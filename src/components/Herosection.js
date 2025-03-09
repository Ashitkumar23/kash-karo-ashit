import React from 'react'
import "../components/Herosection.css"

export default function Herosection(props) {
  return (
    <section className='hero-sec'>
      <div className=''>
        <div className='hero-text col-6'>
          <div className='d-flex'>
            <span class="fa fa-star checked"></span>
            <h5 className='rating'>Google Rating</h5>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <div>
            <h1 className='Hero-main-head'>Your trusted partner</h1>
            <h1 className='Hero-main-head'>for Compliance bussiness needs</h1>
            <hr className='hero-hr'/>
            <p className='hero-main-text'>An online bussiness Comlpiance platform that helps
              entrepreneurs and <br/> other individuals with various, <strong>registrations,
                tax fillings,</strong> and other <strong>legal <br/> matters.</strong> 
            </p>
          </div>
          <div className='Window'>
              <div className='Window-sec'>
                <div><span class="material-symbols-outlined ">grid_view</span></div>
                <div className='hero-text-sec'>
                <h3 className='hero-rat-text '>4.5+</h3>
                <p className='her-res' >Customer Rating</p>
                </div>
              </div>
              <div className='Window-sec'>
                <div className='hero-icon'><i class="fa-solid fa-user-group  hero-icon fa-2xl"></i></div>
                  <div className='hero-text-sec'><h3 className='hero-rat-text'>20,000+</h3>
                  <p className='her-res'>Clients</p></div>
              </div>
              <div className='Window-sec'>
                  <div className='hero-icon'><i class="fa-solid fa-user-group hero-icon fa-2xl"></i></div>
                  <div className='hero-text-sec'><h3 className='hero-rat-text'>99.8%</h3>
                  <p className='her-res'>Financial Stablity</p></div>
              </div>
            </div>
            <div className='d-flex mt-4'>
              <div><button type="button" className="btn btn-danger">Talk An Expert</button></div>
              <div className='ms-3'>
              <button type="button" class="btn how "><i className="fa-solid fa-circle-play me-2"></i><strong> See How it works</strong></button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className=''>
              <div className='hero-buttons'>
              <button type="button" class="btn her-btn my-3">Annual Compliance</button>
              <button type="button" class="btn her-btn my-3">Payroll Services</button>
              <button type="button" class="btn her-btn my-3">Company Formation</button>
              <button type="button" class="btn her-btn my-3">Annual Compliance</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
