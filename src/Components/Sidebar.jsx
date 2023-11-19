// import React from 'react'
import '../assets/css/Sidebar.css';
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Sidebar = ({ showText }) => {
  return (
    <>
      <aside>
        <div className="sidebar">
          <ul>
            <li>
              <NavLink exact="true" to="/dashboard" activeclassname="active">
                <i className="bi bi-speedometer2"></i>
                {showText && <p>Dashboard</p>}
              </NavLink>
            </li>

            <li>
              <NavLink to="/customers" activeclassname="active">
                <i className="bi bi-people"></i>
                {showText && <p>Customers</p>}
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders" activeclassname="active">
                <i className="bi bi-list-ul"> </i>
                {showText && <p>Orders</p>}
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" activeclassname="active">
                <i className="bi bi-bag"></i>
                {showText && <p>Products</p>}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside >
    </>
  )
}

export default Sidebar
