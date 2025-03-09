import React from 'react'
import "../components/Aboutregister.css"
import group from "../assests/Group.png"

export default function Aboutregister() {
  return (
    <section className='About-register'>
        <div className='p-5'>
            <div className='row'>
                <div className='col-12  col-sm-6 col-md-6'>
                    <p className='aboutreg-sm-head'>WELCOME TO REGISTERKARO.IN</p>
                    <h1 className='about-reg-head'><span className='abreg-span'>About</span> Register Karo</h1>
                    <p className='mt-3 reg-tex'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. </p>
                    <p className='reg-tex'>I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                    <div>
                        <button type="button" class="btn mt-3 btn-col">Learn More<i class="fa-solid fa-circle-right ms-2"></i></button>
                    </div>
                </div>
                <div className='col-12  col-sm-6 col-md-6 d-flex justify-content-end px-2'>
                <img className='About-img' src={group} alt="Girl in a jacket"/>
                </div>
            </div>
        </div>
        
    </section>
  )
}
