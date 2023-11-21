// import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {

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

        <main className='wrapper'>
          <div className='welcome'>
            <div>
              <h1>Dashboard</h1>
              <p>Welcome to your dashboard</p>
            </div>
            <div><Link to="/products"><button type='button'>Add Product</button></Link></div>
          </div>
          <div className='card-container'>
            <div className="card one">
              <div>
                <div>
                  <h3>400</h3>
                  <h5>Orders Received</h5>
                </div>
                <div>
                  <i className="bi bi-list-check"></i>
                </div>
              </div>
              <p>15% <i className="bi bi-graph-up"></i></p>
            </div>

            <div className="card two">
              <div>
                <div>
                  <h3>GH&cent; 60,000</h3>
                  <h5>Average Daily Sales</h5>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                </div>
              </div>
              <p>25% <i className="bi bi-graph-up"></i></p>
            </div>
            <div className="card three">
              <div>
                <div>
                  <h3>8.9K</h3>
                  <h5>New Customers This Month</h5>
                </div>
                <div>
                  <i className="bi bi-person-plus"></i>
                </div>
              </div>
              <p>18% <i className="bi bi-graph-up"></i></p>
            </div>
            <div className="card four">
              <div>
                <div>
                  <h3>563</h3>
                  <h4>Pending Orders</h4>
                </div>
                <div>
                  <i className="bi bi-box-seam"></i>
                </div>
              </div>
              <p>10% <i className="bi bi-graph-up"></i></p>
            </div>

          </div>
        </main>
      </div>


    </>
  )
}

export default Home
