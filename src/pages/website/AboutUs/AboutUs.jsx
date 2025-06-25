import React from 'react'
import './AboutUs.css'
import Header from '../../../components/website/Header/Header'
import about_img from "../../../assets/images/about.png"
import Footer from '../../../components/website/Footer/Footer'
const AboutUs = () => {
  return (
    <>
        <Header fixed={false} />

        <div className="about-us">

            <div className="container flex-c">

                    <div className="image">
                        <img src={about_img} alt="about-img" />
                    </div>

                    <div className="info">
                        <h3>ABOUT UNIVERSITY</h3>
                        <h1>Nurturing Tomorrow's Leaders Today</h1>
                        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
                    </div>

            </div>

        </div>

        <Footer />
    </>
  )
}

export default AboutUs