import React from 'react'
import "../components/Make.css"

export default function Make() {
  return (
    <section className='p-4 make'>
        <div className='d-flex justify-content-center Make-res pt-2'>
            <div className='d-flex px-2'>
                <div className='list'><i class="fa-solid fa-list-check p-2"></i></div>
                <div><p>Fill up Application Form</p></div>
            </div>
            <div className='d-flex px-2'>
                <div><i class="fa-solid fa-credit-card p-2"></i></div>
                <div><p>Make Online Payment</p></div>
                
            </div>
            <div className='d-flex px-2'>
                <div><i class="fa-solid fa-headset p-2"></i></div>
                <div><p>Executive will Process Application </p></div>
            </div>
            <div className='d-flex px-2'>
                <div><i class="fa-solid fa-envelope p-2"></i></div>
                <div><p className=''>Get Confirm Mail</p></div>
            </div>
        </div>
    </section>
  )
}
