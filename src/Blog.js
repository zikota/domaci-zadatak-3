import React, { Fragment } from 'react';
import { BrowserRouter, Link, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const Blog = (props) => {
    const { id } = useParams();
    const [ blog, setBlog] = useState({});

    useEffect( () => {
        fetch("https://jsonblob.com/api/jsonblob/975873847983357952")
            .then((response) => {
            return response.json();
            })
            .then((response) => {
            //console.log(response);
            setBlog(response.filter(el => el.id == id)[0]);
            
            })
            .catch(function (error) {
            console.log(error);
            });
    }, [])

    useEffect(() => {
        console.log(blog);
    }, [blog])
    return (
            <div className="container">
                <h1>{blog.title}</h1>
                <h3>{blog.author}</h3>
                <img className="imgContainer" src={blog.image_url}></img><br/><br/>
                <div>{blog.content}</div>
            </div>
      
    );
}
 