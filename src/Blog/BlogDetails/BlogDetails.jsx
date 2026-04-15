import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../Data/BlogData";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function BlogDetails() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) return <h2 className="p-6">Blog not found</h2>;

    return (
        <>
            <Navbar />
            <div className="pt-20">
                <div className="pt-20 p-6 max-w-3xl mx-auto min-h-screen">

                    <div className="flex flex-col items-center mt-4 mb-10">
                        <img
                            src={blog.authorImage}
                            alt="author"
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow"
                        />

                       <Link to="/"> <p className="mt-2 text-sm font-semibold text-gray-800 hover:text-blue-400">
                            {blog.author}
                        </p>
                        </Link>

                        <p className="text-xs text-gray-500">
                            Author
                        </p>
                        <p className="text-xs text-gray-500 mt-2">{blog.date} • {blog.readTime}</p>
                        <p className="text-xs capitalize text-gray-500 mt-2">
                            <span className="font-bold">Category:</span> {blog.tags?.map(tag => tag.toLowerCase()).join(", ")}
                        </p>
                    </div>

                    <h1 className="text-4xl font-bold mt-6 text-center">{blog.title}</h1>

                    {/* Description */}
                    <p className="text-gray-600 mt-2 mb-6 text-center">
                        {blog.description}
                    </p>

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className=" object-cover rounded-xl"
                    />

                    <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                        {blog.content.map((item, index) => {

                            if (item.type === "paragraph") {
                                return <p key={index} className="mb-4">{item.text}</p>;
                            }

                            if (item.type === "heading") {
                                return <h2 key={index} className="text-2xl font-bold mt-6">{item.text}</h2>;
                            }

                            if (item.type === "quote") {
                                return (
                                    <blockquote
                                        key={index}
                                        className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-6"
                                    >
                                        {item.text}
                                    </blockquote>
                                );
                            }

                            if (item.type === "list") {
                                return (
                                    <ul key={index} className="list-disc pl-6 mb-4">
                                        {item.items.map((li, i) => (
                                            <li key={i}>{li}</li>
                                        ))}
                                    </ul>
                                );
                            }

                            if (item.type === "imageGrid") {
                                return (
                                    <div key={index} className="grid grid-cols-3 gap-2 my-6">
                                        {item.images.map((img, i) => (
                                            <img key={i} src={img} className="rounded-sm object-cover" />
                                        ))}
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>

                    {/* <hr className="border-gray-300 my-10" /> */}
                    <hr className="border-t border-gray-300 my-12" />
                    {/* <div className="w-24 h-[2px] bg-gray-300 mx-auto my-10"></div> */}

                    {/* CTA */}
                    <div className="mt-10 bg-blue-50 p-6 rounded-xl text-center">
                        <h3 className="text-xl font-semibold">Need Care Services?</h3>
                        <p className="text-gray-600 mt-2">We are here to help you and your loved ones.</p>
                        <Link to="/inquiry"> <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105 text-white px-6 py-2 rounded-full">
                            Contact Us
                        </button></Link>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        </>

    );
}
