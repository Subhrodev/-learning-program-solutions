import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Method to load posts using Fetch API
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        // Convert response to Post objects
        const postsList = data.map(
          item => new Post(item.userId, item.id, item.title, item.body)
        );

        // Update state
        this.setState({ posts: postsList });
      })
      .catch(error => console.log("Error fetching posts:", error));
  };

  // Life-cycle method: fetch posts when component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Catch errors in the component
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.log("Error info:", info);
    this.setState({ hasError: true });
  }

  // Render method to display posts
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.map(post => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
