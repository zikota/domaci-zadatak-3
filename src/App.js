import './App.css';
import { Blog } from './Blog'
import { React, useEffect, useState} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { NewBlog } from './NewBlog'
import Blogs from './Blogs'
import blogLogo from './blog.png'


function App() {

  return (
    <div className="App AppContainer">
        <BrowserRouter>
        <Link to="/">
          <img src={blogLogo} className="logo" />
        </Link>
        <Link to="/add-post">
          <button className="ui primary basic button dodajBtn"><i className="plus icon"></i> Add post
          </button>
        </Link>
        <Routes>
          <Route exact path="/" element={<Blogs></Blogs>}></Route>
          <Route path="/add-post" element={<NewBlog></NewBlog>}></Route>
          <Route path="/:id" element={<Blog></Blog>}></Route>
        </Routes>
        </BrowserRouter>
          
        <br/><br/><br/>
    </div>
  );
}

export default App;
