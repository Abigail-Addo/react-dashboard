// import React from 'react'
import Logo from '../assets/images/logo.png';
import '../assets/css/Navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleText }) => {
    return (
        <>
            <header>
                <div className='image'>
                    <i className="bi bi-list" onClick={toggleText}></i>
                    <img src={Logo} alt="logo" />
                </div>
            </header>
        </>
    )
}

export default Navbar
