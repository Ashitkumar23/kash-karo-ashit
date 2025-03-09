import React from 'react'
import "../card/Explorecard.css"
export default function Explorecard(props) {
  return (
    <div>
        <div className="card excard">
                <div className='d-flex justify-content-center mt-3'>
                <img src={props.img} className="card-img-top top" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <h4 className='d-flex justify-content-center'>{props.Name}</h4>
                <div className='d-flex justify-content-center mt-3'>
                    <p className="card-text">{props.content}</p>
                </div>
                
            </div>
            <div className='d-flex justify-content-center'>
            <button type="button" className="btn card-btn">Learn more<i class="fa-solid fa-circle-right ms-2"></i></button>
            </div>
        </div>
    </div>
  )
}
