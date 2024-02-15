// import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { useState } from 'react';


const Customers = () => {

  const [showText, setShowText] = useState(true)

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <Navbar toggleText={toggleText}>
      </Navbar>


      <div className={`container ${showText ? 'show' : 'hide'}`}>
        <Sidebar showText={showText}>
        </Sidebar>
        <h1>This is the customers page</h1>

      </div>
    </>
  )
}

export default Customers
