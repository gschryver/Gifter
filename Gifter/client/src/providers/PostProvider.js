import React, { useState } from "react";

export const PostContext = React.createContext();

export const getUserPosts = (id) => {
  return fetch(`/api/UserProfile/${id}/posts`).then((res) => res.json());
};

export const getPostWithComments = (id) => {
  return fetch(`/api/post/${id}/with-comments`)
    .then((res) => res.json());
};

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getAllPostsWithComments = () => {
    return fetch("/api/post/all-with-comments")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const searchPosts = (query, sortDesc) => {
    return fetch(`/api/post/search?q=${query}&sortDesc=${sortDesc}`)
      .then((res) => res.json())
      .then(setPosts);
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, getAllPostsWithComments, getPostWithComments, getUserPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};