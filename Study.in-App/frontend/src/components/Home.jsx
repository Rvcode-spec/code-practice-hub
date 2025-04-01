import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        {/* <!-- ? Preloader Start --> */}
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                  <Link to="assets/img/logo/loder.png" alt=""></Link>
                </div>
            </div>    
        </div>
    </div>
    {/* <!-- Preloader Start --> */}
    </div>
  )
}

export default Home
