import React from 'react'
import homebg from '../assets/Images/home-bg-1.avif'
const Home = () => {
    return (
        <div classNameName='hero'>
            <div className="card bg-dark text-white border-0">
                <img src={homebg} className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
