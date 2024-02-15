// import React from 'react'
import '../assets/css/Sidebar.css';
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../ContextAPI/AuthContext';


// eslint-disable-next-line react/prop-types
const Sidebar = ({ showText }) => {

  const { logout } = useAuth();

  
  return (
    <>
      <aside>
        <div className="sidebar">
          <ul className="sidebar">
            <li className='sidebar'>
              <NavLink exact="true" to="/dashboard" activeclassname="active">
                <i className="bi bi-speedometer2"></i>
                {showText && <p>Dashboard</p>}
              </NavLink>
            </li>

            <li className='sidebar'>
              <NavLink to="/customers" activeclassname="active">
                <i className="bi bi-people"></i>
                {showText && <p>Customers</p>}
              </NavLink>
            </li>

            <li className='sidebar'>
              <NavLink to="/orders" activeclassname="active">
                <i className="bi bi-list-ul"> </i>
                {showText && <p>Orders</p>}
              </NavLink>
            </li>

            <li className='sidebar'>
              <NavLink to="/products" activeclassname="active">
                <i className="bi bi-bag"></i>
                {showText && <p>Products</p>}
              </NavLink>
            </li>
            <li className='sidebar'>
              <Link to="/admin/login" onClick={logout}>
                <i className="bi bi-box-arrow-right"></i>
                {showText && <p>Logout</p>}
              </Link>
            </li>
          </ul>
        </div>
      </aside >
    </>
  )
}

export default Sidebar
