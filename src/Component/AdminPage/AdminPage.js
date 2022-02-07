import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateContext } from '../../App';
import NavBar from '../CommonComponent/NavBar/NavBar';
import axios from './../../api/axios'
// import Loading from '../CommonComponent/Loading/Loading';
const AdminPage = ({ blogs }) => {
  const [userInputTitle, setUserInputTitle] = useState('')
  const [userInputBlog, setUserInputBlog] = useState('')
  const [date, setDate] = useContext(DateContext)
  const navigate = useNavigate()
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   e.target.reset()
  // }
  const handleDeleteBlogs = async (deleteId) => {
    await axios.delete('/blogs/delete/'+deleteId)
    .then(res => {
      if(res.data) document.getElementById(`blog${deleteId}`).style.display = 'none';
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/blogs/new', {
      title: userInputTitle,
      blog: userInputBlog,
      timestamp: new Date().toUTCString()
    })
    .then(res =>{
      if(res.data){
        setDate(new Date().toUTCString())
        
      }
      setUserInputTitle('')
        setUserInputBlog('')
    })
   
  }
  //  all Blogs Content
 const allBlogs = blogs ? blogs.map((data, index) => {
    const { title, blog, _id } = data
    return (
      <div id={`blog${_id}`} key={_id} className="blog-content p-5 border m-2">
        <div className="">
          <h3 className="">{index + 1}. {title}</h3>
          <p className="">{blog}</p>
          <div className=""><button className="btn btn-dark" onClick={() => navigate('/adminPage/'+_id)} >Edit</button><button className="btn btn-danger ms-4" onClick={() => handleDeleteBlogs(_id)} >Delete</button></div>
        </div>
      </div>
    )
  })  : ""

  // all Blogs Content finish


  return <div>
    <NavBar />
    <div className="container-fluid mt-4"><h5><span>/</span>/admin page</h5></div>
    <div className="container">
      <br />
      <br />
      <div className="totalAdminPage p-5 shadow-lg">
        <h2 className="text-center"> AD BLOGS</h2>
        <br />
        <div className="createBlogFrom">
          <div className="">
            <form action="" onSubmit={handleSubmit} className="row">
              {/* <input type="email" onBlur={handleBlur} className="form-control mb-2" name="email" id="exampleFormControlInput1" placeholder="name@example.com" required /> */}
              <input value={userInputTitle} className="form-control mb-2" onChange={(e) => setUserInputTitle(e.target.value)} type="text" placeholder="Title" name="title" aria-label="default input example" required />
              <textarea value={userInputBlog} onChange={(e) => setUserInputBlog(e.target.value)} className="form-control mb-3" name="massage" placeholder="Your Blog Content" id="exampleFormControlTextarea1" rows="5" required></textarea>
              <div className="text-center"><button type="submit" className="btn btn-dark"> ADD BLOG </button></div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="">
          <h2 className="text-center">ALL EDITABLE BLOGS</h2>
          <br />
          {allBlogs}
        </div>
        <br />
      </div>
      <br />
    </div>
  </div>;
};

export default AdminPage;
