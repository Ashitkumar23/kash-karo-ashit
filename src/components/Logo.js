import React from 'react'
import "../components/Logo.css"
import one from "../assests/logoone.png"
import two from "../assests/logotwo.png"
import three from "../assests/logothree.png"
import four from "../assests/logofour.png"
import five from "../assests/Logofive.png"

export default function Logo() {
  return (
   <section className='logo p-5'>
        <div className='d-flex logo-res justify-content-center'>
             <div className='mx-5 py-2'><img src={one} alt="" /></div>
             <div className='mx-5 py-2'><img src={two} alt="" /></div>
             <div className='mx-5 py-2'><img src={three} alt="" /></div>
             <div className='mx-5 py-2'><img src={four} alt="" /></div>
             <div className='mx-5 py-2'><img src={five} alt="" /></div>
        </div>
   </section>
  )
}
