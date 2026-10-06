import React, { useEffect, useState } from "react";
import "../Styles/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/services/`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-loading">
        <h2>Loading blogs...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-error">
        <h2>{error}</h2>
      </div>
    );
  }

  console.log(blogs)
  
  const getImageUrl = (image) => {
    if (!image) return "";
    
    if (image.startsWith("http")) {
      return image;
    }

    if (image.startsWith("/media/")) {
      return `${API_URL}${image}`;
    }
    return `${API_URL}/media/${image}`
  };

  return (
    <>
    <section className="blog-container">
      <h1 className="blog-heading">Latest Articles</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image-container">
              <img className="blog-image" src={getImageUrl(blog.image)} alt={blog.title}/>
            </div>
            
            <div className="blog-content">
              <h2 className="blog-title">
                {blog.title}
              </h2>

              <div className="blog-meta">
                <span>By {blog.author}</span>
                <span>
                  {new Date(
                    blog.published_at
                  ).toLocaleDateString()}
                </span>
              </div>

              <p className="blog-text">
                {blog.content.length > 150
                  ? `${blog.content.substring(
                      0,
                      150
                    )}...`
                  : blog.content}
              </p>

              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Blog;