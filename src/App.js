import React, { createContext, useState } from 'react';
import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
// import Login from './Component/Login/Login';
// import Posts from './Component/Posts/Posts';
import NotFound from './Component/CommonComponent/NotFound/NotFound';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AdminPage from './Component/AdminPage/AdminPage';
import Login from './Component/Login/Login';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState(false)
  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPage" element={<AdminPage />} />

          {/* <Route element={<PrivateRoute />} >
            <Route path="/adminPage" element={<AdminPage />} />
          </Route> */}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
