import { React, useState, useEffect } from 'react'
import { useNavigate, BrowserRouter, Link, Routes, Route } from 'react-router-dom'

export const NewBlog = (props) => {
    const [ author, setAuthor ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ image, setImage ] = useState("");

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        let maxID = 0;

        fetch("https://jsonblob.com/api/jsonblob/975873847983357952")
        .then((response) => {
        return response.json();
        })
        .then((response) => {
        if (response.length > 0)
          maxID = Math.max.apply(Math, response.map(el => { return el.id; })) + 1 ;
        else maxID = 1;
        let obj = JSON.parse( `{"id": ${maxID}, "image_url": "${image}", "author": "${author}", "title": "${title}", "content": "${content}"}`);
        response.push(obj);
        putBlob(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        
        
    }

    function putBlob(obj){ 
        let url = "https://jsonblob.com/api/jsonblob/975873847983357952";
        fetch(url,{
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          })
          .then((response) => response.json())
          .then((data) => navigate("/"))
          .catch((error) => console.log(error))
      }
    
    return ( <div className="container">
        <div className="ui form">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" value={author} onChange={e => setAuthor(e.target.value)}></input>
                </div>
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="field">
                    <label htmlFor="image">Image</label>
                    <input type="url" id="image" name="image" value={image} placeholder="https://example.com" pattern="https://.*" size="30" required onChange={e => setImage(e.target.value)}></input>
                </div>
                <div className="field">
                    <label htmlFor="content">Content</label>
                    <textarea name='content' id="content" rows="2" value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit" className="ui primary button">
                    Save
                </button>
            </form>
        </div>
        </div>
     );
}
 