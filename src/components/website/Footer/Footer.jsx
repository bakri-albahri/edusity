import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <hr />
            <div className="content">
                <p> &copy; 2024 Edusity. All rights reserved.</p>
                <div className="links flex-sb">
                    <span>Terms of Services</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer