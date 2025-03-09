import React from 'react'
import "../components/Clients.css"
import clients from "../assests/Clients.png"

export default function Clients() {
  return (
    <section className='Clients py-5'>
        <div className='d-flex justify-content-center'>
            <h1>Our Happy Clients</h1>
        </div>
        <div className='d-flex justify-content-center px-5 mt-3'>
            <p className='Client-text'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-<br/> leveling customer service for state of the art customer service.</p>
        </div>
        <div>
        <img className='Clint-img' src={clients} alt="Girl in a jacket"/>
        </div>
        <div className='d-flex justify-content-center'>
            <button type="button" className='Client-btn'>Show more<i class="fa-solid fa-arrow-right ms-2"></i></button>
        </div>
    </section>
  )
}
