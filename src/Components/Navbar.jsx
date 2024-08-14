import Logo from '../assets/images/logo.png';
import '../assets/css/Navbar.css'
import { useAuth } from '../ContextAPI/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleText }) => {

    const { setAdmin, admin, setAuth, auth } = useAuth();

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken && localToken.length > 0) {
            setAuth(true);
            let admin = JSON.parse(localStorage.getItem("admin"));
            setAdmin(admin);
        } else {
            setAuth(false);
        }
    }  , [setAdmin, setAuth]);

    
    return (
        <>
            <header>
                <ul className='image'>
                    <li className='icons'>
                        <i className="bi bi-list" onClick={toggleText}></i>
                    </li>
                    <li>
                        <img src={Logo} alt="logo" />
                    </li>
                </ul>
                {
                    auth ? (
                        <ul className='user-details'>
                            <li>
                                <img
                                    src={admin.picture}
                                    alt="logo"
                                />
                                <p>
                                {admin.name}
                                </p>
                            </li>
                            {/* <li className='name'>
                            </li> */}
                        </ul>
                    ) : (
                        <ul>
                            <Link to="/login">
                                <li>
                                    <i className="bi bi-box-arrow-in-right"></i>
                                </li>
                            </Link>
                        </ul>
                    )
                }

            </header>
        </>
    )
}

export default Navbar
