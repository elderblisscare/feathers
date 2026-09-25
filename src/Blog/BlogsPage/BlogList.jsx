import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogs } from "../Data/BlogData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTag, setSelectedTag] = useState("ALL");

    const { tag } = useParams();
    const navigate = useNavigate();

    const tags = [
        "ALL",
        "HEALTHCARE",
        "AMBULANCE",
        "CONVENIENCE",
        "EMERGENCY",
        "HOME CARE ATTENDANT",
        "LIFESTYLE",
        "NURSE",
        "PHYSIOTHERAPY"
    ];


    const filteredBlogs = selectedTag === "ALL" ? blogs : blogs.filter(blog => blog.tags && blog.tags.includes(selectedTag));

    const blogsPerPage = 6;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    useEffect(() => {
        if (tag) {
            setSelectedTag(tag.toUpperCase());
            setCurrentPage(1);
        } else {
            setSelectedTag("ALL");
        }
    }, [tag]);

    return (
        <>
            <Navbar />
            <div className="pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-10 bg-blue-100 min-h-screen">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#102f4f] tracking-tight text-center mb-8 md:mb-10">
                    Latest Blogs
                </h1>


                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8 mb-8 md:mb-10 rounded-2xl border-2 border-[#1C4571]/30 bg-white/80 backdrop-blur-xs p-3 sm:p-4 shadow-sm">
                        {tags.map((tag) => {
                            const isSelected = selectedTag === tag;
                            return (
                                <button
                                    key={tag}
                                    onClick={() => {
                                        setSelectedTag(tag);
                                        setCurrentPage(1);

                                        if (tag === "ALL") {
                                            navigate("/blogs");
                                        } else {
                                            navigate(`/blogs/category/${tag.toLowerCase()}`);
                                        }
                                    }}
                                    className={`px-4 py-2 capitalize text-sm sm:text-base font-semibold rounded-full border-2 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-xs ${
                                        isSelected
                                            ? "bg-[#1C4571] text-white border-[#1C4571] shadow-md scale-105"
                                            : "bg-white text-[#1C4571] border-[#1C4571] hover:border-[#C41E3A] hover:text-[#C41E3A] hover:bg-rose-50/40"
                                    }`}
                                >
                                    {tag.toLowerCase()}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
                        {currentBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="group bg-white rounded-2xl overflow-hidden border-2 border-[#1C4571] hover:border-[#C41E3A] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-75 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Tags */}
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                                        {blog.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedTag(tag);
                                                    setCurrentPage(1);
                                                    navigate(`/blogs/category/${tag.toLowerCase()}`);
                                                }}
                                                className="bg-white/95 backdrop-blur-md text-[#1C4571] border-2 border-[#1C4571] hover:border-[#C41E3A] hover:text-[#C41E3A] hover:bg-white text-xs sm:text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1 justify-between">
                                    <div>
                                        {/* Date */}
                                        <p className="text-sm text-gray-500">{blog.date} | {blog.readTime}</p>

                                        {/* Title */}
                                        <Link to={`/blog/${blog.id}`}>
                                            <h2 className="text-xl font-semibold mt-2 leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h2>
                                        </Link>

                                        {/* Description */}
                                        <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mt-2.5">
                                            {blog.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                        {/* Author */}
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={blog.authorImage || "/Testimonials_Img/Deepak-Saraswat-1.avif"}
                                                alt="author"
                                                className="w-7 h-7 rounded-full object-cover"
                                            />
                                            <span className="text-sm sm:text-base font-medium text-gray-900">
                                                By {blog.author}
                                            </span>
                                        </div>

                                        {/* Read More */}
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="px-3.5 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-gray-900 hover:border-blue-300 text-sm font-semibold transition-all duration-200 shadow-xs inline-flex items-center whitespace-nowrap cursor-pointer"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
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
                                ? "bg-gray-300 cursor-not-allowed border-2 border-blue-400"
                                : "bg-blue-600 text-white hover:bg-blue-500  border-2 border-black"
                                }`}
                        >
                            ← Prev
                        </button>

                        {/* Page Indicator */}
                        {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage))].map((_, i) => (
                            <Link key={i} to={`/page/${i + 1}`}>
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 rounded  ${currentPage === i + 1
                                        ? "bg-blue-600 text-white border-2 border-black"
                                        : "bg-white border-2 border-blue-400 hover:border-black"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            </Link>
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
                                ? "bg-gray-300 cursor-not-allowed  border-2 border-blue-400"
                                : "bg-blue-600 text-white hover:bg-blue-500  border-2 border-black"
                                }`}
                        >
                            Next →
                        </button>
                    </div>
                </div>
                <Footer />
        </>
    );
}

