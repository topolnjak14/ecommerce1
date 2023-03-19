import React from 'react';
import "../styles/banner.css";

const Banner = () => {
    return (
        <div className="container pt-3">
            <div className="banner d-flex justify-content-center align-items-end">
                <div className='content'>
                    <h1 className='display-1 fw-bold text-white'>BLACK</h1>
                    <h2 className='display-2 fw-bold text-white'>FRIDAY</h2>
                    <p className='text-center fs-1 fw-bold'>#sale</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;

