import React from 'react'
import "../components/Ourblog.css"
import one from "../assests/blogone.jpeg"
import two from "../assests/blogtwo.jpeg"
import three from "../assests/blogthree.jpeg"
import four from "../assests/blogfour.jpeg"
import five from "../assests/blogfive.jpeg"

export default function Ourblog() {
  return (
  <section className='p-5'>
    <div className='d-flex justify-content-center'><p className='Explore-top'>EXPLORE OUR BLOGS</p></div>
    <div className='d-flex justify-content-center EXp-alig'><h2>Accelerate Digital Transformation</h2></div> 
    <div className='container mt-5'>
    <div className='row'>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={one} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Prabhash Mishra • 1 Jan 2023 • Today</p>
                <div className='d-flex'>
                <h5 className=''>Small business & Startup<span className='blog-icon'><i class="fa-solid fa-up-right-from-square"></i></span></h5>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <p className="blogcard-text-sec">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                </div>
                <div>
                  <span className='voilet'>Tax & Audit</span>
                  <span className='purple mx-1'> Management</span>
                </div>
            </div>
        </div>
      </div>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={two} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Mahesh Kumar • 1 Jan 2023</p>
                <h5 className=''>Scale-Up Companay Offer <span className='blog-icon'><i class="fa-solid fa-up-right-from-square"></i></span></h5>
                <div className='mt-3'>
                    <p className="blogcard-text-sec">Mental models are simple expressions of complex processes or relationships.</p>
                </div>
                <div>
                  <span className='green'>Tax</span>
                  <span className='purple mx-1'>Research</span>
                  <span className='orange'>Compilance</span>
                </div>
            </div>
        </div>
      </div>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={one} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Rakhi Verma • 1 Jan 2023</p>
                <h5 className=''>Growing Business Package <span className='blog-icon'><i class="fa-solid fa-up-right-from-square"></i></span></h5>
                <div className='mt-3'>
                    <p className="blogcard-text-sec">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                </div>
                <div>
                  <span className='voilet'>Audit</span>
                  <span className='purple mx-1'>Money Back</span>
                </div>
            </div>
        </div>
      </div>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={three} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Karan Kumar • 1 Jan 2023</p>
                <h5 className=''>Scale-Up Company Offer <span className='blog-icon'> <i class="fa-solid fa-up-right-from-square"></i></span></h5>
                <div className='mt-3'>
                    <p className="blogcard-text-sec">Collaboration can make our teams stronger, and our individual designs better.</p>
                </div>
                <div>
                  <span className='voilet'>Money</span>
                  <span className='purple mx-1'>Management</span>
                </div>
            </div>
        </div>
      </div>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={four} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Richa Singh • 1 Jan 2023</p>
                <h5 className=''>Scale-Up Company Offer <span className='blog-icon'><i class="fa-solid fa-up-right-from-square"></i></span></h5>
                <div className='mt-3'>
                    <p className="blogcard-text-sec">Starting a community doesn’t need to be complicated, but how do you get started?</p>
                </div>
                <div>
                  <span className='green'>Tax Return</span>
                  <span className='red mx-1'>News</span>
                  <span className='orange'>Audit</span>
                </div>
            </div>
        </div>
      </div>
      <div className='col-12  col-sm-6 col-md-4 d-flex justify-content-center'>
      <div className="card blog-car m-2">
                <div className='d-flex justify-content-center mt-3'>
                <img src={five} className="card-img-top blog-img" alt="Sunset Over the Sea"/>
                </div>
                <div class="card-body mt-2">
                <p className="blogcard-text">Miss Nora • 1 Jan 2023</p>
                <h5 className=''>Scale-Up Company Offer <span className='blog-icon'><i class="fa-solid fa-up-right-from-square"></i></span></h5>
                <div className='mt-3'>
                    <p className="blogcard-text-sec">JavaScript frameworks make development easy with extensive features and functionalities.</p>
                </div>
                <div>
                  <span className='voilet mx-1'>Private Limited Comapany</span>
                  <span className='purple'>Customer Success</span>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className='d-flex justify-content-center pt-4'>
    <button type="button" class="btn btn-blog">Show More Blogs<i class="fa-solid fa-arrow-right ms-2"></i></button>
    </div>
  </section>
  )
}
