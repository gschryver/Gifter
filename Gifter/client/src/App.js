import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { PostProvider } from "./providers/PostProvider";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <Header />
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;