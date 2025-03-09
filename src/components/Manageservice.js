import React from 'react'
import "../components/Manage.css"
import mobile from "../assests/Managebackpng.png"

export default function Manageservice() {
  return (
    <section className='Manage p-5'>
        <div className='row'>
            <div className='col-12  col-sm-6 col-md-6 '>
                <h1 className='manage-head'>Manage Your Service by Your Mobile Phone</h1>
                <p className='manage-text'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.</p>
                <div>
                    <h2 className='manage-get mt-5'>Get the App</h2>
                    <div className='d-flex   me-4'>
                        <div className='d-flex justify-content-center mac'>
                            <div><i class="fa-solid fa-apple-whole me-3 mt-3"></i></div>
                            <div className='manage-down'>
                                <p className='manage-down'>Get it on</p>
                                <p className='manage-down'>App Store</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center play mx-3 '>
                            <div><i class="fa-solid fa-play mx-3 mt-3"></i></div>
                            <div className='manage-down'>
                                <p className='manage-down'>Get it on</p>
                                <p className='manage-down'>App Store</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* <div className='col-12  col-sm-6 col-md-6 d-flex justify-content-end '>
            <img className='mobile-manage' src={mobile} alt=""/>
            </div> */}
        </div>
    </section>
  )
}
