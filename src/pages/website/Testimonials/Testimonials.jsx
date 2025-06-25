import React, { useRef } from 'react'
import './testimonials.css'
import Header from '../../../components/website/Header/Header'
import SectionTitle from '../../../components/website/SectionTitle/SectionTitle'

import stud_1 from "../../../assets/images/user-1.png"
import stud_2 from "../../../assets/images/user-2.png"
import stud_3 from "../../../assets/images/user-3.png"
import stud_4 from "../../../assets/images/user-4.png"
import Footer from '../../../components/website/Footer/Footer'
const Testimonials = () => {

    const box = useRef()
    let tx = 0;

    

    const slideForward = () => {
        if(tx > -75){
            tx -= 25;
        }
        box.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }    
        box.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <>
        <Header fixed={false} />
        <SectionTitle para="What Student Says" title="TESTIMONIALS" />
        <div className="testimonials container">
                <i className="fa-solid fa-arrow-right arrow right" onClick={slideForward}></i>
                <i className="fa-solid fa-arrow-left arrow left" onClick={slideBackward}></i>
                <div className="slider">
                    <div ref={box} className="box">

                        <div className="slide">
                            <div className="card">
                                <div className="stud">
                                    <img src={stud_1} alt="" />
                                    <div className="info">
                                        <h3>William Jackson 1</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </div>

                         <div className="slide">
                            <div className="card">
                                <div className="stud">
                                    <img src={stud_2} alt="" />
                                    <div className="info">
                                        <h3>Emily Williams 2</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </div>

                         <div className="slide">
                            <div className="card">
                                <div className="stud">
                                    <img src={stud_3} alt="" />
                                    <div className="info">
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </div>

                         <div className="slide">
                            <div className="card">
                                <div className="stud">
                                    <img src={stud_4} alt="" />
                                    <div className="info">
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>

        <Footer />
    </>
  )
}

export default Testimonials