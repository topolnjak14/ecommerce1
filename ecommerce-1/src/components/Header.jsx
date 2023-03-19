import React from 'react';
import "../styles/header.css";

const Header = () => {
    return (
        <div className='header mx-auto'>
            <div className='icono text-center'>
                <i class="bi bi-chevron-left fs-1"></i>
            </div>
            <div>
                <p className='fw-bold fs-2 pt-3'>SALE</p>
            </div>
            <div className='icono text-center'>
                <i class="bi bi-person-fill fs-1"></i>
            </div>

        </div>
    );
}

export default Header;
