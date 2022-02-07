import axios from './../../api/axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../CommonComponent/NavBar/NavBar';
import { DateContext } from '../../App';

const EditUserBlog = () => {
    const [userBlog, setUserBlog] = useState({});
    const [date,setDate] = useContext(DateContext)
    const { id } = useParams();

    useEffect(() => {
        axios.get('/blogs/'+id)
    .then(res=>{
        setUserBlog(res.data)
    })
    }, [id]);
    // console.log(userBlog)
    // Update User
    const handleTitleChange = e => {
        const updatedTitle = e.target.value;
        const updatedUser = { title: updatedTitle, blog: userBlog.blog };
        setUserBlog(updatedUser);
    }

    const handleBlogChange = e => {
        const updatedBlog = e.target.value;
        const updatedUser = { title: userBlog.title, blog: updatedBlog }
        setUserBlog(updatedUser);
    }
    const handleUpdateUser = e => {
        axios.put('/blogs/delete/'+id,userBlog)
            .then(res => {
                if ( res.data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUserBlog({});
                    setDate(new Date().toUTCString())
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
  
    return <div>
        <NavBar/>
        <div className="container">
        <h2 className="text-center">Update: {userBlog.title}</h2>
        <p><small>{id}</small></p>
        <form onSubmit={handleUpdateUser}>
            <input className="form-control mb-2" type="text" onChange={handleTitleChange} value={userBlog.title || ''} />
            <textarea type="text" className="form-control mb-3" onChange={handleBlogChange} value={userBlog.blog || ''} />
            <input type="submit" className="btn btn-dark"value="Update" />
        </form>
        </div>
    </div>;
};

export default EditUserBlog;
