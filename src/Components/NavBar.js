import { NavLink } from 'react-router-dom';
import React from 'react';

import "./NavBar.css"

import Logo from './Logo';
import Hamburger from './Hamburger';

const NavBar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };

 return (<nav className="navbar">
 <div className="container">
   <div className="logo">
     <Logo />
   </div>
   <div className="menu-icon" onClick={handleShowNavbar}>
     <Hamburger />
   </div>
   <div className={`nav-elements  ${showNavbar && "active"}`}>
     <ul>
       <li>
         <NavLink to="/">Home</NavLink>
       </li>
       <li>
         <NavLink to="/projects">Projects</NavLink>
       </li>
       <li>
         <NavLink to="/about">About</NavLink>
       </li>
     </ul>
   </div>
 </div>
</nav>
//     <header>
//         <h3>Tristan</h3>
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/about">About Me</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/projects">Projects</NavLink>
//                 </li>
//             </ul>
//         </nav>
//  </header>
 );
};

export default NavBar;