import React from 'react'
import './sectiontitle.css'
const SectionTitle = (props) => {
  return (
    <div className='section-title'>
        <div className="container">
            <p>{props.title}</p>
            <h1>{props.para}</h1>  
        </div>
    </div>
  )
}

export default SectionTitle