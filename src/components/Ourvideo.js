import React from 'react'
import "../components/Ourvideo.css"
import ourone from "../assests/DisplayIconone.png"
import ourtwo from "../assests/DisplayIcontwo.png"

export default function Ourvideo() {
  return (
    <section className='Our-video p-5'>
        <div className='row'>
            <div className='col-12 col-sm-6 col-md-6'>
                <div>
                    <h1>Our Video Introduction</h1>
                    <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                </div>
                <div>
                    <div className='d-flex'>
                        <div className='p-3'>
                        <img src={ourone} alt="Girl in a jacket"/>
                        </div>
                        <div>
                        <h3>Explore ideas together</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                        </div>
                        
                    </div>
                    <div className='d-flex'>
                        <div className='p-3'>
                        <img src={ourtwo} alt="Girl in a jacket"/>
                        </div>
                        <div>
                        <h3>Bring those idea to life</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6'>
                    <div className='d-flex justify-content-end'>
                    <iframe width="560" height="360" src="https://www.youtube.com/embed/FPhg_ZjrPtU?si=BEFO9nRA6tsE4avz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
            </div>
        </div>
    </section>
  )
}
