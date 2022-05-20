import { React, useEffect, useState} from 'react';
import { Blog } from './Blog'
import { Link } from 'react-router-dom'

const Blogs = (props) => {
    
  const [ blogs, setBlogs ] = useState([]);

  useEffect(() => {
    fetch("https://jsonblob.com/api/jsonblob/975873847983357952")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      //console.log(response);
      let allBlogs = response;
      setBlogs(allBlogs);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },[]);

  function showAllBlogs () {
    return blogs.map(el => {
      return <div className="card" key={el.id}>
        <div className="content">
            <div className="header">{el.title}</div>
            <div className="description">
                {el.author}
            </div>
            <img className="ui image" src={el.image_url} ></img>
        </div>
        <Link to={`/${el.id}`}>
            <div className="ui bottom attached button">
                <i className="file alternate outline icon"></i>
                Read more
            </div>
        </Link>
      </div>
    })

  }
    return ( 
    <div className="container">
      <h1> All posts </h1>
      <div className="ui three cards">
        {showAllBlogs()}
      </div>
    </div>
 );
}
 
export default Blogs;