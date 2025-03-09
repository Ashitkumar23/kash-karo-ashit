import React from 'react'
import "../components/Trust.css"
import Samsung from "../assests/Samsungpng.png"
import oracle from "../assests/oracle.png"
import segment from "../assests/segment.png"
import Morphues from "../assests/Morphues.png"
import monday from "../assests/monday.png"

export default function Trust() {
  return (
    <section className='Trust p-5'>
        <div className='Trust-head'>
            <h4 className='trust-res'>Trusted By Ober 100+ Startup and freelance business</h4>
        </div>
        <div className='trust-img'>
            <div className='mx-3 tu d-flex justify-content-center'><img src={oracle} alt="Girl in a jacket"/></div>
            <div className='mx-3 tu d-flex justify-content-center'><img src={Morphues} alt="Girl in a jacket"/></div>
            <div className='mx-3 tu d-flex justify-content-center'><img src={Morphues} alt="Girl in a jacket"/></div>
            <div className='mx-3 tu d-flex justify-content-center'><img src={Samsung} alt="Girl in a jacket"/></div>
            <div className='mx-3 tu d-flex justify-content-center'><img src={monday} alt="Girl in a jacket"/></div>
            <div className='mx-3 tu d-flex justify-content-center'><img src={segment} alt="Girl in a jacket"/></div>
        </div>
    </section>

  )
}
