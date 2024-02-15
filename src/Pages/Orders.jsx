import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { useState } from 'react';

const Orders = () => {

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
        <h1>This is the orders page</h1>

      </div>
    </>
  )
}

export default Orders
