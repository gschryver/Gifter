import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
        <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
        </Link>
        </p>
        <p>{post.caption}</p>
        <div>
          <h5>Comments:</h5>
          {post.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.message}</p>
              <p>Posted by: {comment.userProfileId}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
