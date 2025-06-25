import React from 'react'
import './program.css'
import program_1 from '../../../assets/images/program-1.png'
import program_2 from '../../../assets/images/program-2.png'
import program_3 from '../../../assets/images/program-3.png'
import program_icon_1 from '../../../assets/images/program-icon-1.png'
import program_icon_2 from '../../../assets/images/program-icon-2.png'
import program_icon_3 from '../../../assets/images/program-icon-3.png'
import SectionTitle from '../../../components/website/SectionTitle/SectionTitle'
import Header from '../../../components/website/Header/Header'
import Footer from '../../../components/website/Footer/Footer'

const Program = () => {
  return (
    <>
    <Header fixed={false} />
    
    <div className='programs'>

        <SectionTitle para="Our PROGRAM" title="What We Offer"/>

        <div className="box container flex-sb">

            <div className="card">
                <img src={program_1} alt="" />
                <div className="info flex-c">
                    <img src={program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>

            <div className="card">
                <img src={program_2} alt="" />
                <div className="info flex-c">
                    <img src={program_icon_2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>

            <div className="card">
                <img src={program_3} alt="" />
                <div className="info flex-c">
                    <img src={program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
            <div className="card">
                <img src={program_3} alt="" />
                <div className="info flex-c">
                    <img src={program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>

        </div>

    </div>

    <Footer />
    </>
  )
}

export default Program