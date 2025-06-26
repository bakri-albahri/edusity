import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './header.css'
import menu_icon from '../../../assets/images/menu-icon.png'
const Header = (props) => {

  const [mobMenu , setMobMenu] = useState(false)
  const handleMenu = ()=>{
    setMobMenu(prev => !prev)
  }

  return (
      <nav className={props.fixed ? "fixed" : "not-fixed"}>
        <div className="container">
                <img className="logo" src={logo} alt="logoImg" />
                <ul className={mobMenu ? "open-menu" : ""}>
                    <li><Link to="/edusity">Home</Link></li>
                    <li><Link to="/edusity/program">Program</Link></li>
                    <li><Link to="/edusity/about">About Us</Link></li>
                    <li><Link to="/edusity/campus">Campus</Link></li>
                    <li><Link to="/edusity/testimonials">Testimonials</Link></li>
                    <li><Link className='btn' to="/edusity/contactus">Contact Us</Link></li>
                    {/* <li><button className='btn' to="/contactus">Contact Us</button></li> */}
                </ul>
                <img className="icon" src={menu_icon}  alt='menu-icon' onClick={handleMenu}/>
        </div>
      </nav>
  )
}

export default Header