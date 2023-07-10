import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const { addPost, getAllPosts } = React.useContext(PostContext);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      imageUrl,
      caption,
      dateCreated: new Date().toISOString(),
      userProfileId: 1,
      userProfile: {
        id: 1,
        name: "string",
        email: "string",
        imageUrl: "string",
        dateCreated: new Date().toISOString(),
        posts: [],
        comments: [],
      },
      comments: [],
    };

    addPost(newPost)
      .then(() => {
        setTitle("");
        setImageUrl("");
        setCaption("");

        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="imageUrl">Image URL:</Label>
        <Input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="caption">Caption:</Label>
        <Input
          type="textarea"
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Add Post
      </Button>
    </Form>
  );
};

export default PostForm;
