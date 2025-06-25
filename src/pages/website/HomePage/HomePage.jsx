import React from 'react'
import './homepage.css'
import Header from '../../../components/website/Header/Header'
const HomePage = () => {
  return (
    <>
      <Header fixed={true}/>
      <div className='hero flex-c'>
          <div className="hero-text container">
              <h1>We Ensure better education for a better world</h1>
              <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
              <button className='btn'>Explore More <i className="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>
    </>
  )
}

export default HomePage