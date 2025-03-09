import React from 'react'
import "../components/Topnav.css"

export default function Topnav() {
  return (
    <>
    <div className='Contact-Bar'>
        <ul className='d-flex one justify-content-end top-ul'>
            <li className='mx-1'><i className="fa-solid fa-envelope mx-2"> </i>www.registerkaro.in</li>
            <li  className='mx-1'>| <i className="fa-solid fa-phone mx-2"></i>+91 1235948256</li>
            <li>|<i className="fa-brands fa-instagram mx-1"></i></li>
            <li><i className="fa-brands fa-facebook mx-1"></i></li>
            <li><i className="fa-brands fa-twitter mx-1"></i></li>
            <li><i className="fa-brands fa-pinterest mx-2 me-5"></i></li>
        </ul>
    </div>
    </>
  )
}
