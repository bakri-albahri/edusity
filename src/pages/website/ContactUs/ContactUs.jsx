import React from 'react'
import './ContactUs.css'
import Header from '../../../components/website/Header/Header'
import SectionTitle from '../../../components/website/SectionTitle/SectionTitle'
import msg_img from '../../../assets/images/msg-icon.png';
import Footer from '../../../components/website/Footer/Footer';
const ContactUs = () => {
  return (
    <>
        <Header fixed={false} />

        <SectionTitle para="Get in Touch" title="Contact Us" />

        <div className="contact-us container">

            <div className="content">

                <h3>Send us a message <img src={msg_img} alt="msg-img" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <div className="info"><i className="fa-solid fa-envelope"></i> Contact@GreatStack.dev</div>
                <div className="info"><i className="fa-solid fa-phone-volume"></i> +1 123-456-7890</div>
                <div className="info"><i className="fa-solid fa-location-dot"></i> 77 Massachusetts Ave, Cambridge</div>

            </div>

            <div className="form">

                <form action="">

                    <div>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Your Name' />
                    </div>

                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder='Phone Number' />
                    </div>

                    <div>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Your Email' />
                    </div>

                    <div>
                        <label htmlFor="">Write your messages here</label>
                        <textarea placeholder='Write your messages here'></textarea>
                    </div>

                    <button type='submit' className='btn'>Send Now <i className="fa-solid fa-arrow-right"></i></button>
               
               </form>
            </div>
        </div>


        <Footer />
    </>
  )
}

export default ContactUs