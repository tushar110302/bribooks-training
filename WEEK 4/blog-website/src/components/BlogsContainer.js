"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import blogData from "../data/blogs.json";

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData);
    }, [])

    return (
      <>
        <div className="flex flex-wrap justify-center gap-8 py-7">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </>
    );
}

export default BlogsContainer;