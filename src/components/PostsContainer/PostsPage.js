//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import './PostHeader'


const PostsPage = (props) => {
  console.log(props)
  return (
    <div className="posts-container-wrapper">
      {props.data.map((index) => (
        <Post />
      ))}
    </div>
  );
};

export default PostsPage;
