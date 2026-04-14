import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../Data/BlogData";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function BlogList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTag, setSelectedTag] = useState("ALL");


    const filteredBlogs = selectedTag === "ALL" ? blogs : blogs.filter(blog => blog.tags && blog.tags.includes(selectedTag));

    const blogsPerPage = 6;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <>
            <Navbar />
            <div className="pt-20">
                <div className="pt-20 px-6 pb-10 bg-blue-100 min-h-screen">
                    <h1 className="text-5xl font-bold text-center mb-10">
                        Latest Blogs
                    </h1>

                    <div className="flex justify-center items-center gap-4 mt-8 mb-10 rounded-full border border-blue-400 bg-gradient-to-br from-blue-100 to-white">

                        <button
                            onClick={() => {
                                setSelectedTag("ALL");
                                setCurrentPage(1);
                            }}
                            className={`p-4 m-6 font-semibold rounded-full border transition-all duration-400 ease-in-out transform hover:scale-105 ${selectedTag === "ALL"
                                ? "bg-blue-600 text-white scale-105 shadow-lg"
                                : "bg-blue-900 text-white hover:bg-blue-950"
                                }`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => {
                                setSelectedTag("HEALTHCARE");
                                setCurrentPage(1);
                            }}
                            className={`p-4 m-6 font-semibold rounded-full border transition-all duration-400 ease-in-out transform hover:scale-105 ${selectedTag === "HEALTHCARE"
                                ? "bg-blue-600 text-white scale-105 shadow-lg"
                                : "bg-blue-900 text-white hover:bg-blue-950"
                                }`}
                        >
                            HEALTHCARE
                        </button>
                        <button
                            onClick={() => {
                                setSelectedTag("BUSINESS");
                                setCurrentPage(1);
                            }}
                            className={`p-4 m-6 font-semibold rounded-full border transition-all duration-400 ease-in-out transform hover:scale-105 ${selectedTag === "BUSINESS"
                                ? "bg-blue-600 text-white scale-105 shadow-lg"
                                : "bg-blue-900 text-white hover:bg-blue-950"
                                }`}
                        >
                            BUSINESS
                        </button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
                        {currentBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                {/* Image Section */}
                                <div className="relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-75 object-cover"
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
                                    <Link  to={`/blog/${blog.id}`}> <h2 className="text-lg font-semibold mt-2 leading-snug hover:text-blue-500">
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
                                        <span className="text-sm font-medium text-gray-900">
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

                    {/* <div className="flex justify-center mt-10 gap-2 flex-wrap"> */}
                    <div className="flex justify-center items-center gap-4 mt-8">

                        {/* Prev Button */}
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded font-medium transition ${currentPage === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-500"
                                }`}
                        >
                            ← Prev
                        </button>

                        {/* Page Indicator */}
                        {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage))].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded  ${currentPage === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() =>
                                setCurrentPage(prev =>
                                    Math.min(prev + 1, Math.ceil(filteredBlogs.length / blogsPerPage))
                                )
                            }
                            disabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)}
                            className={`px-4 py-2 rounded font-medium transition  ${currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-500"
                                }`}
                        >
                            Next →
                        </button>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        </>
    );
}

