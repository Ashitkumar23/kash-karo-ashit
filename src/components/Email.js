import React from 'react'
import "../components/Email.css"

export default function Email() {
  return (
    <section className='Email p-5'>
        <div className='d-flex justify-content-center'>
            <p>1% of the Industry</p>
        </div>
        <div className='d-flex justify-content-center'>
            <h1>Welcome to your new digital relaity. Now</h1>
        </div>
        <div className='d-flex justify-content-center mt-4'>
            <form >
            <input type="text" name="name" className='enter-email' placeholder='Enter Your Email'/>
            <button type="submit" class="btn btn-email">Submit</button>
            </form>
        </div>
        <div className='d-flex justify-content-center mt-4'>
            <div className='mx-3 ema-text'> <i class="fa-solid fa-circle-check mx-2"></i>Instant result</div>
            <div className='mx-3 ema-text'> <i class="fa-solid fa-circle-check mx-2"></i>User-friendly interface</div>
            <div className='mx-3 ema-text'> <i class="fa-solid fa-circle-check mx-2"></i>Personalized Customization</div> 
        </div>
    </section>
  )
}
