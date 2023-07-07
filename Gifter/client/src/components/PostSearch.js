import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PostContext } from "../providers/PostProvider";

const PostSearch = () => {
  const { searchPosts } = useContext(PostContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSortDesc, setSearchSortDesc] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    searchPosts(searchQuery, searchSortDesc);
  };

  return (
    <div>
      <h2>Search Posts</h2>
      <Form onSubmit={handleSearch}>
        <FormGroup>
          <Label htmlFor="searchQuery">Search Query:</Label>
          <Input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={searchSortDesc}
              onChange={(e) => setSearchSortDesc(e.target.checked)}
            />
            Sort Descending
          </Label>
        </FormGroup>
        <Button type="submit" color="primary">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default PostSearch;
