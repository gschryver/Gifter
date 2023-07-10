import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../providers/PostProvider"; 

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch user posts based on the ID
    getUserPosts(id)
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => {
        console.log("Error fetching user posts:", error);
      });
  }, [id]);

  return (
    <div>
      <h2>User Posts</h2>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
