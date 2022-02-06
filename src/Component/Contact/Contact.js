import React, { useState } from 'react';
import Footer from '../CommonComponent/Footer/Footer';
import NavBar from '../CommonComponent/NavBar/NavBar';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [userEmail, setUserEmail] = useState([])
  const handleBlur = (e) => {
    const userInfo = { ...userEmail }
    userInfo[e.target.name] = e.target.value
    setUserEmail(userInfo)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8etd7ko', 'template_4rwqal9', e.target, 'user_TyfP9QUqN9rvsiBReNVKp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  // console.log(userEmail)
  return (
    <div>
      <NavBar />
      <div className="">

        <div className="d-flex justify-content-center p-5  ">
          <div className="container row shadow-lg p-5">
            <div className="">
            <h2 className="text-center">🤝 Connect with me.</h2>
            <br />
            <br />
            </div>
            <div className="col-md-6 col-sm-6 col-xl-6 col-12">
              <Fade bottom cascade>
                <div className="">
                  <br />
                  <h2 className="text-center">Anything about Front End web development help<br />you can personally Email me.</h2>
                  <p className="text-center">You can tell me what you want and needed from me. <br /> Anythings needed you can Email me with your requirements.</p>
                  <br /><br />
                </div>
              </Fade>
            </div>
            <div className="col-md-6 col-sm-6 col-xl-6 col-12">
              <form onSubmit={handleSubmit} className="row">
                <input type="email" onBlur={handleBlur} className="form-control mb-2" name="email" id="exampleFormControlInput1" placeholder="name@example.com" required />
                <input className="form-control mb-2" onBlur={handleBlur} type="text" placeholder="Subject" name="subject" aria-label="default input example" required />
                <textarea onBlur={handleBlur} className="form-control mb-3" name="massage" placeholder="Your message" id="exampleFormControlTextarea1" rows="5" required></textarea>
                <div className="text-center"><button type="submit" className="btn btn-outline-dark"><FontAwesomeIcon icon={faPaperPlane}/> SEND MAIL</button></div>
              </form>
            </div>


            {/* Find me */}

            <div className="google-map">
              <br />
              <br />
              <Flip bottom cascade>
                <h2 className="text-center">Find me in Google map.</h2>
              </Flip>
              <br />
              <iframe title="My Location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12276.705814500476!2d90.42005809310845!3d23.822635599431567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1643907059433!5m2!1sen!2sbd" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;