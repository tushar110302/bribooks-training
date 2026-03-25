"use client";
import { use } from "react";
import blogData from "../../../data/blogs.json"
import Image from "next/image";

const BlogPage = ({params}) => {
    const {id} = use(params);
    
    const blog = blogData.find((b) => b.id===id);

    return (
      <div className="max-w-10/12 mx-auto flex flex-col items-center justify-center gap-3 my-10">
        <div
          className=" h-[350px] w-full bg-cover bg-center flex flex-col gap-4 justify-end items-center rounded-xl px-4"
          style={{ backgroundImage: `url(${blog.featured_image})` }}
        >
          <h1 className="text-5xl font-bold text-center">{blog.title}</h1>

          <p className="text-lg">Related to {blog.category}</p>
          <div className="text-lg mb-5">
            <span>Created by </span>
            <span>{blog.user.first_name}</span>{" "}
            <span>{blog.user.last_name}</span>
          </div>
        </div>

        <p className="text-lg my-10 p-3 text-center">{blog.main_content}</p>

        <div className="space-y-3 my-8">
          <h3 className="text-3xl font-bold text-center">Summary</h3>
          <p className="text-lg text-center">{blog.summary}</p>
        </div>

        <div className="my-5">
          <h3 className="text-3xl mb-6 font-bold text-center">About Author</h3>
          <div className="flex items-center justify-center gap-6">
            <div className="">
              <Image
                src={blog.user.profile_pic}
                width={200}
                height={200}
                alt="profile_pic"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-start justify-evenly gap-3">
              <div className="text-lg ">
                <span>Name: </span>
                <span>{blog.user.first_name}</span>{" "}
                <span>{blog.user.last_name}</span>
              </div>
              <div className="text-lg">
                <span>Role: </span>
                <span>{blog.user.role}</span>
              </div>

              <div className="text-lg">
                <span>Email: </span>
                <span>{blog.user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BlogPage;