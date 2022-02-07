import React, { useContext, useState } from 'react';
// import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [adminEmail, setAdminEmail] = useState([])
  const navigate = useNavigate()
  const handleLogin = () => {
    // setLoggedInUser(true)
    navigate("/adminPage", {
      replace:true
    })
  }
  const handleBlur = (e) => {
    const userInfo = { ...adminEmail }
    userInfo[e.target.name] = e.target.value
    setAdminEmail(userInfo)
  }
  const handleAdminCheck = async (e) => {
    e.preventDefault();
   if(adminEmail.email === "programmer@gmail.com" && adminEmail.password === "programmer#3"){
    await  setLoggedInUser(true)
      handleLogin()
    }
     if(adminEmail.email !== "programmer@gmail.com" && adminEmail.password !== "programmer#3"){
      alert('Please Enter the right email and password')
    }
    // e.target.reset()
    console.log(adminEmail)
  }
  return <div className="container">
    <br />
    <br />
    <br />
    <div className="from shadow-lg p-5">
      <h2 className="text-center">Login for Access Admin Panel</h2>
      <br />
      <br />
      <form onSubmit={handleAdminCheck}>
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" onChange={handleBlur}  name="email" className="form-control" id="" required/>
          </div>
        </div>
        <div className="mb-3 row">
          <label  className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onChange={handleBlur}  name="password" className="form-control"  required/>
          </div>
        </div>
        <br />
        <div className="text-center"><button className="btn btn-dark">LOGIN</button></div>
      </form>
      email: programmer@gmail.com
      password: programmer#3
    </div>
  </div>;
};

export default Login;
