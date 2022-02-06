import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../CommonComponent/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../CommonComponent/Footer/Footer';
import Loading from '../CommonComponent/Loading/Loading';
const Blog = () => {
  const [loggedInUser] = useContext(UserContext)
  const [loading ,setLoading] = useState(true)
  const [blogs,setBlog] = useState([])
  const navigate = useNavigate()
  const handleGoToLogin = () => {
    if (loggedInUser) navigate('/adminPage')
    else navigate('/login')
  }

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await res.json();
      // const total = res.headers;
      // console.log(total)
      setBlog(data);
      setLoading(false)
    };
    // .get("x-total-count")
    getPosts();
  }, [blogs]);


   const BlogContent = blogs.map((data)=>{
     const {title,body,id} = data
     return(
      <div key={title} className="blog-content p-5 border m-2">
          {/* <div className="">
            <button className="details-btn "> <FontAwesomeIcon icon={faEllipsisV} /> </button>
          </div> */}
          <h3 className="">{id}. {title}</h3>
          <p className="">{body}</p>
        </div>
     )
   }) 

  return <div>
    <NavBar />
    <div className="container">
      {/* Heading */}
      <br />
      <br />
      <div className="p-5 total-blogs shadow-lg">
        <div>
          <h2 className="text-center"> <Flip bottom cascade>Read my Blogs</Flip></h2>
        </div>
        <div className="">
          <button className="addBlogBtn" data-bs-toggle="modal" data-bs-target={loggedInUser ? "#createBlogModal" : "#exampleModal"}> <FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <br />
        { loading ?
          BlogContent: <Loading/>
        }
      </div>
    </div>

    {/* All Modals */}
    {/* Modal Login Alert */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Admin Verify</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h5> Adding a new blog you must be login first.
            </h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" className="btn btn-dark" onClick={handleGoToLogin} data-bs-dismiss="modal">GO FOR LOGIN</button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Login Alert Finish*/}
    {/* Modal Create Blog Alert */}
    <div className="modal fade" id="createBlogModal" tabIndex="-1" aria-labelledby="createBlogModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createBlogModalLabel">Create a Blog</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h5> Are you sure You want create a Blog </h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" className="btn btn-dark" onClick={() => navigate('/adminPage')} data-bs-dismiss="modal"> GO TO CREATE</button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Create Blog Alert Finish*/}
    <Footer/>
  </div>;
};

export default Blog;
