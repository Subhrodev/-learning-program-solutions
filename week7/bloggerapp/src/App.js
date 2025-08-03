import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [view, setView] = useState("book"); // book, blog, course
  const [showExtra, setShowExtra] = useState(true);

  // 1️⃣ if/else method
  const renderWithIfElse = () => {
    if (view === "book") {
      return <BookDetails />;
    } else if (view === "blog") {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  // 2️⃣ Element variable method
  let details;
  if (view === "book") {
    details = <BookDetails />;
  } else if (view === "blog") {
    details = <BlogDetails />;
  } else {
    details = <CourseDetails />;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Blogger App</h1>

    

      <hr />

      <h2>Conditional Rendering using if/else</h2>
      {renderWithIfElse()}

      <hr />

      <h2>Conditional Rendering using Element Variables</h2>
      {details}

      <hr />

      <h2>Conditional Rendering using Ternary Operator</h2>
        <CourseDetails />

      <hr />
    </div>
  );
}

export default App;
