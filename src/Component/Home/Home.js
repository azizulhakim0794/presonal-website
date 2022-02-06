import React from 'react';
import NavBar from '../CommonComponent/NavBar/NavBar';
import Footer from './../CommonComponent/Footer/Footer';
import './Home.css'
import ProfilePhoto from '../../Image/tamzid.jpg';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
  return <div >
    <NavBar />
    <div className="container overflow-hidden">
      <br />
      <br />
      <br />

      <div className="container shadow-lg p-5 row d-flex align-items-center">
        <div className="col-md-5">
          <img src={ProfilePhoto} loading="lazy" alt="profile" className="img-fluid profileImg" />

        </div>
        <div className="col-md-6">
          <Flip bottom cascade>
            <Bounce bottom cascade>
              <h2 className="">AZIZUL HAKIM TAMZID</h2>
            </Bounce>
            <p className="display-6 h5">Frontend Developer(ReactJs)</p>
            <p className="">8+ MERN Stack Projects</p>
            <div className="h5 mt-2"><span className="badge bg-secondary me-1">JavaScript</span>  <span className="badge bg-secondary me-1">React Js</span> <span className="badge bg-secondary me-1">MongoDB</span> <span className="badge bg-secondary me-1">NodeJs</span></div>
            <Flip bottom cascade>
              <p>Hello, I am a ReactJs Based Junior Web Developer with two years of experience able to build ReactJs applications from the ground up - information gathering, planning, design, development, testing and delivery and sensitivity to serve the needs of the business balanced with the delivery of high quality solutions.</p>
              <br />
              <button onClick={()=> navigate('blog')} className="btn btn-outline-dark"><FontAwesomeIcon icon={faBlog}/> READ BLOGS</button>
            </Flip>
          </Flip>
        </div>
      </div>

    </div>
    <br />
    <br />
    <Footer />
  </div>;
};

export default Home;
