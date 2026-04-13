import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../Data/BlogData";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function BlogList() {

    return (
        <>
            <Navbar />
            <div className="pt-20">
                <div className="pt-20 px-6 pb-10 bg-blue-200 min-h-screen">
                    <h1 className="text-4xl font-bold text-center mb-10">
                        Latest Blogs
                    </h1>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                {/* Image Section */}
                                <div className="relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-44 object-cover"
                                    />

                                    {/* Tags */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {blog.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-black/60 text-white hover:bg-black/80  hover:text-blue-200 text-xs px-2 py-1 rounded-full cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Date */}
                                    <p className="text-xs text-gray-500">{blog.date} | {blog.readTime}</p>

                                    {/* Title */}
                                   <Link to="#"> <h2 className="text-lg font-semibold mt-2 leading-snug hover:text-blue-500">
                                        {blog.title}
                                    </h2>
                                    </Link>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mt-2">
                                        {blog.description}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center mt-4 gap-2">
                                        <img
                                            src={blog.authorImage}
                                            alt="author"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-sm text-gray-700">
                                            By {blog.author}
                                        </span>
                                    </div>

                                    {/* Read More */}
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="text-blue-600 hover:text-blue-400 text-sm mt-3 inline-block font-medium"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        </>
    );
}

