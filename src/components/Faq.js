import React from 'react'
import "../components/Faq.css"

export default function Faq() {
  return (
   <section className='faq p-5'>
        <div className='d-flex justify-content-center'><p>FAQ</p></div>
        <div className='d-flex justify-content-center'><h1>Frequent Ask Questions</h1></div>
  <div className="accordion mt-5">
        <div className="accordion-item">
            <input type="checkbox" id="accordion1"/>
            <label for="accordion1" className="accordion-title">Can i recover my files from this software?</label>
            <div className="accordion-content">
                An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal more information.
            </div>
        </div>
    </div>
    <div className="accordion mt-3">
        <div className="accordion-item">
            <input type="checkbox" id="accordion2"/>
            <label for="accordion2" className="accordion-title">Can i recover my files from this software?</label>
            <div className="accordion-content">
                An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal more information.
            </div>
        </div>
    </div>
    <div className="accordion mt-3">
        <div className="accordion-item">
            <input type="checkbox" id="accordion3"/>
            <label for="accordion3" className="accordion-title">Can i recover my files from this software?</label>
            <div className="accordion-content">
                An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal more information.
            </div>
        </div>
    </div>
    <div className="accordion mt-3">
        <div className="accordion-item">
            <input type="checkbox" id="accordion4"/>
            <label for="accordion4" className="accordion-title">Can i recover my files from this software?</label>
            <div className="accordion-content">
                An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal more information.
            </div>
        </div>
    </div>
    <div className="accordion mt-3">
        <div className="accordion-item">
            <input type="checkbox" id="accordion5"/>
            <label for="accordion5" className="accordion-title">Can i recover my files from this software?</label>
            <div className="accordion-content">
                An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal more information.
            </div>
        </div>
    </div>
    <div className='d-flex justify-content-center pt-5'>
    <button type="button" class="btn Faq-bttn">Show More <i class="fa-solid fa-arrow-right ms-2"></i></button>
    </div>
   </section>
  )
}
