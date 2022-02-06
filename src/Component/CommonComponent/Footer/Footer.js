import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
// import './Footer.css'
const Footer = () => {
    return (
     <footer className="bg-light">
         <div className=" justify-content-center p-5 text-secondary">
             <div className="col-md-11">
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 className="text-muted mb-md-0 mb-5 ">Thanks for visiting.</h3>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 text-muted "><b>MENU</b></h6>
                         <ul className="list-unstyled">
                             {/* <li>Home</li>
                             <li>BLOG</li>
                             <li>PROJECT</li> */}
                             <li> <NavLink className="text-muted text-decoration-none" to="/"> HOME</NavLink></li>
                             <li> <NavLink className="text-muted text-decoration-none" to="/blog"> BLOG</NavLink></li>
                             <li> <NavLink className="text-muted text-decoration-none" to="/contact"> CONTACT</NavLink></li>
                             <li> <NavLink className="text-muted text-decoration-none" to="/adminPage"> ADMIN PANEL</NavLink></li>
                         </ul>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 text-muted  mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p className="mb-1">DHAKA</p>
                         <p>KHILKHAT-1229</p>
                     </div>
                 </div>
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p className="h4 text-muted mb-0 pb-0 "> <a className="mx-2 text-decoration-none text-muted " href="https://www.facebook.com/azizulhakim.tumzid" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a> <a className="mx-2 text-decoration-none text-muted " href="https://github.com/azizulhakim0794" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a> <a className="mx-2 text-decoration-none text-muted " href="https://www.linkedin.com/in/azizul-hakim-tamzid-624064212/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a> <a className="mx-2 text-decoration-none text-muted " href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a> <a className="mx-2 text-decoration-none text-muted " href="https://mail.google.com/mail" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a> </p><br /><small className="rights"><span>&#174;</span> This page is created by Tamzid in {new Date().getFullYear()}.</small>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 className="mt-55 mt-2 text-muted "><b>PHONE</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> +8801760690793</small>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 className="text-muted "><b>AZIZUL HAKIM</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span>azizulhakimtumzid0793@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
    );
};

export default Footer;