import React, { useState } from "react";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Post 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 2, title: 'Post 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 3, title: 'Post 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 4, title: 'Post 4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
    {id: 5, title: 'Post 5', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro!'},
  ]);


  const delPost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const addPost = (objData) => {
    setPosts([...posts, objData]);
  }

  return (
    <div className="container">
      <h1>React app</h1>
     <AddPost addPost={addPost}/>
     <Posts posts={posts} delPost={delPost}/>
    </div>
  );
}

export default App;