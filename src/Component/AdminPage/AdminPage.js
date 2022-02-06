import React, { useEffect, useState } from 'react';
import NavBar from '../CommonComponent/NavBar/NavBar';
import ReactPaginate from "react-paginate";
import Loading from '../CommonComponent/Loading/Loading';
const AdminPage = () => {
  const [userBlog, setUserBlog] = useState([])
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0);
  let limit = 9;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setItems(data);
      setLoading(false)
    };

    getPosts();
  }, [limit]);
  const fetchPosts = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );
    // console.log(res)
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {

    let currentPage = data.selected + 1;

    const postsFormServer = await fetchPosts(currentPage);

    setItems(postsFormServer);
  };
  const handleBlur = (e) => {
    const userInfo = { ...userBlog }
    userInfo[e.target.name] = e.target.value
    setUserBlog(userInfo)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset()
  }
  const handlePostCancel = async (data) => {
    document.getElementById(`post${data}`).style.display = 'none';
  }

  const handleAddBlogs = async (e) => {
    e.preventDefault();
    if (userBlog.title && userBlog.message) {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: userBlog.title,
          body: userBlog.message,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          response.json()
          console.log(response)
        })
        .then((json) => console.log(json));
    }
  }
  //  all Blogs Content
  const allBlogs = items.map((item) => {
    return (<div key={item.title} id={`post${item.id}`} className="col-sm-6 col-md-4  my-2 courser-p " >
      <div className="card shadow-sm w-100 card_click_ani">
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 col-sm-9 col-9" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <h5 className="card-subtitle mb-2  text-center text-dot">
                {item.title}
              </h5></div>
            <div className="col-md-2 col-sm-3 col-3">
              <button type="button" onClick={() => handlePostCancel(item.id)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
          <div className="" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <div className="box">
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  })
  // all Blogs Content finish


  return <div>
    <NavBar />

    <div className="container">
      <br />
      <br />
      <div className="totalAdminPage p-5 shadow-lg">
        <h2 className="text-center"> Admin Panel</h2>
        <br />
        <div className="createBlogFrom">
          <div className="">
            <form onSubmit={handleSubmit} className="row">
              {/* <input type="email" onBlur={handleBlur} className="form-control mb-2" name="email" id="exampleFormControlInput1" placeholder="name@example.com" required /> */}
              <input className="form-control mb-2" onBlur={handleBlur} type="text" placeholder="Subject" name="title" aria-label="default input example" required />
              <textarea onBlur={handleBlur} className="form-control mb-3" name="massage" placeholder="Your message" id="exampleFormControlTextarea1" rows="5" required></textarea>
              <div className="text-center"><button type="submit" onClick={handleAddBlogs} className="btn btn-dark"> ADD BLOG </button></div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />


        <div className="row m-2">
          {allBlogs}
        </div>

        <br />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

      </div>
      <br />
    </div>
  </div>;
};

export default AdminPage;
