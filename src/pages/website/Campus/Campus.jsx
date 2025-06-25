import React from 'react'
import './campus.css'
import Header from '../../../components/website/Header/Header'
import SectionTitle from '../../../components/website/SectionTitle/SectionTitle'

import campus_1 from "../../../assets/images/gallery-1.png"
import campus_2 from "../../../assets/images/gallery-2.png"
import campus_3 from "../../../assets/images/gallery-3.png"
import campus_4 from "../../../assets/images/gallery-4.png"
import { Link } from 'react-router-dom'
import Footer from '../../../components/website/Footer/Footer'

const Campus = () => {
  return (
    <>
        <Header fixed={false} />

        <div className="campus">

            <SectionTitle para="Gallery" title="Campus Photos" />

            <div className="container">

                <div className="box flex-c">

                    <div className="image">
                        <img src={campus_1} alt="" />
                    </div>

                    <div className="image">
                        <img src={campus_2} alt="" />
                    </div>

                    <div className="image">
                        <img src={campus_3} alt="" />
                    </div>

                    <div className="image">
                        <img src={campus_4} alt="" />
                    </div>

                </div>

                <button className='btn'><span>See More Here </span><i className="fa-solid fa-arrow-right"></i></button>
          
            </div>
     
        </div>

        <Footer />

    </>
  )
}

export default Campus