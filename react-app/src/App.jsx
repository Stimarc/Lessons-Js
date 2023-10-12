import React, { useState } from "react";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Post 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 2, title: 'Post 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 3, title: 'Post 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 4, title: 'Post 4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 5, title: 'Post 5', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
  ]);

  const title = 'My react app';

  const ref = React.createRef();

  const delPost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const addPost = (objData) => {
    setPosts([...posts, objData]);
  }

  const clickHandler = (e) => {
    e.preventDefault();
    const input =  ref.current;
    const value = input.value;
    addPost({
      id: window.crypto.randomUUID(),
      title: value,
      text: 'some text ...'
    });
    input.value = '';
  }

  return (
    <div className="container">
      <h1>{ title }</h1>

      <form className="add-post">
        <h3 className="add-post-title">Add post</h3>
        <div className="add-post-action">
          <input type="text" ref={ref}/>
          <button className="btn" onClick={clickHandler}>Add</button>
        </div>
      </form>

      <h2>Posts</h2>
      <div className="posts">
        {
          posts.map(post => <Post key={ post.id } data={ post } delPost={ delPost }/>)
        }
        
      </div>
    </div>
  );
}

export default App;