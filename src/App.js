import React, { createContext, useEffect, useState,Suspense  } from 'react';
import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Pusher from 'pusher-js';
import axios from './api/axios';
import Loading from './Component/CommonComponent/Loading/Loading';
const Home = React.lazy(() => import('./Component/Home/Home'))
const Login = React.lazy(() => import('./Component/Login/Login'))
const EditUserBlog = React.lazy(() => import('./Component/AdminPage/EditUserBlog'))
const AdminPage = React.lazy(() => import('./Component/AdminPage/AdminPage'))
const Contact = React.lazy(() => import('./Component/Contact/Contact'))
const Blog = React.lazy(() => import('./Component/Blog/Blog'))
const NotFound = React.lazy(() => import('./Component/CommonComponent/NotFound/NotFound'))

export const UserContext = createContext()
export const DateContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false)
  const [date, setDate] = useState('')
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    axios.get('/blogs/sync')
    .then(res=>{
      setBlogs(res.data)
    })
  },[date])
  // console.log(date)
  useEffect(()=>{
    const pusher = new Pusher('cd93ad139a71068c5287', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('blogs');
    channel.bind('insert', (newBlog)=> {
      setBlogs([...blogs,newBlog])
    });
    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  },[blogs,date])
// console.log(blogs)
  return (
    <Suspense fallback={<Loading />}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <DateContext.Provider value={[date, setDate]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog blogs={blogs} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPage" element={<AdminPage blogs={blogs} />} />
          <Route path="/adminPage/:id" element={<EditUserBlog />} />

          {/* <Route element={<PrivateRoute />} >
            <Route path="/adminPage" element={<AdminPage />} />
            <Route path="/adminPage/:id" element={<EditUserBlog />} />
          </Route> */}
        </Routes>
      </DateContext.Provider>
      </UserContext.Provider>
      </Suspense>
  );
}

export default App;
