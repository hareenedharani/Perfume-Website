// import React, { useState, useContext } from 'react';
// import './Navbard.css';
// import blend_logo from '../Assets/Logo-the blend.png';
// import { FaRegUser, FaRegStar, FaBars } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const Navbard = () => {
//     const [menu, setMenu] = useState("home");
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
//     const { isLoggedIn, username, setIsLoggedIn, setUsername } = useContext(AuthContext);

//     const toggleProfileDropdown = () => {
//         setProfileDropdownOpen(!profileDropdownOpen);
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         setUsername('');
//     };

//     return (
//         <div className='navbar'>
//             <div className="nav-left">
//                 <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     <FaBars className="menu-icon" />
//                 </div>
//                 <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//                     <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>
//                         <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
//                         {menu === "home" ? <hr /> : null}
//                     </li>
//                     <li onClick={() => { setMenu("customised perfume"); setIsMenuOpen(false); }}>
//                         <Link style={{ textDecoration: 'none' }} to='/customised-perfume'>Customised Perfume</Link>
//                         {menu === "customised perfume" ? <hr /> : null}
//                     </li>
//                     <li onClick={() => { setMenu("premium scents"); setIsMenuOpen(false); }}>
//                         <Link style={{ textDecoration: 'none' }} to='/premium-scents'>Premium Scents</Link>
//                         {menu === "premium scents" ? <hr /> : null}
//                     </li>
//                     <li onClick={() => { setMenu("recent orders"); setIsMenuOpen(false); }}>
//                         <Link style={{ textDecoration: 'none' }} to='/recent-orders'>Recent Orders</Link>
//                         {menu === "recent orders" ? <hr /> : null}
//                     </li>
//                 </ul>
//             </div>
//             <div className="nav-center">
//                 <div className="nav-logo">
//                     <img src={blend_logo} alt="Logo" />
//                 </div>
//             </div>
//             <div className="nav-right">
//                 <ul className="nav-icons">
//                     <li>
//                         <div className="profile-dropdown" onClick={toggleProfileDropdown}>
//                             <FaRegUser className="profile-icon1 black-border" />
//                             {profileDropdownOpen && (
//                                 <ul className="profile-dropdown-menu open">
//                                     {isLoggedIn ? (
//                                         <>
//                                             <li><span>Hello, {username}</span></li>
//                                             <li><Link to="/profile">Edit Profile</Link></li>
//                                             <li><button onClick={handleLogout}>Logout</button></li>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <li><Link to="/login">Login</Link></li>
//                                             <li><Link to="/createaccount">Sign Up</Link></li>
//                                         </>
//                                     )}
//                                 </ul>
//                             )}
//                         </div>
//                     </li>
//                     <li>
//                         <Link style={{ textDecoration: 'none' }} to='/wishlist'>
//                             <FaRegStar className="star-icon black-border" />
//                         </Link>
//                     </li>
//                     <li>
//                         <Link style={{ textDecoration: 'none' }} to='/bag'>
//                             <FontAwesomeIcon className='fa-shopping-bag' icon={faShoppingBag} />
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbard;

import React, { useState, useContext } from 'react';
import './Navbard.css';
import blend_logo from '../Assets/Logo-the blend.png';
import { FaRegUser, FaRegStar, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbard = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const { isLoggedIn, email, setIsLoggedIn, setEmail } = useContext(AuthContext);

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        localStorage.removeItem('token'); // Delete the token from localStorage
    };

    return (
        <div className='navbar'>
            <div className="nav-left">
                <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FaBars className="menu-icon" />
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>
                        <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                        {menu === "home" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("customised perfume"); setIsMenuOpen(false); }}>
                        <Link style={{ textDecoration: 'none' }} to='/customised-perfume'>Customised Perfume</Link>
                        {menu === "customised perfume" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("premium scents"); setIsMenuOpen(false); }}>
                        <Link style={{ textDecoration: 'none' }} to='/premium-scents'>Premium Scents</Link>
                        {menu === "premium scents" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("recent orders"); setIsMenuOpen(false); }}>
                        <Link style={{ textDecoration: 'none' }} to='/recent-orders'>Recent Orders</Link>
                        {menu === "recent orders" ? <hr /> : null}
                    </li>
                </ul>
            </div>
            <div className="nav-center">
                <div className="nav-logo">
                    <img src={blend_logo} alt="Logo" />
                </div>
            </div>
            <div className="nav-right">
                <ul className="nav-icons">
                    <li>
                        <div className="profile-dropdown" onClick={toggleProfileDropdown}>
                            <FaRegUser className="profile-icon1 black-border" />
                            {profileDropdownOpen && (
                                <ul className="profile-dropdown-menu open">
                                    {isLoggedIn ? (
                                        <>
                                            <li><span>Hello, {email}</span></li>
                                            <li><Link to="/profile">Edit Profile</Link></li>
                                            <li><button onClick={handleLogout}>Logout</button></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/createaccount">Sign Up</Link></li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/wishlist'>
                            <FaRegStar className="star-icon black-border" />
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/bag'>
                            <FontAwesomeIcon className='fa-shopping-bag' icon={faShoppingBag} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbard;