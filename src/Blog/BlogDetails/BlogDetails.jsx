import React from "react";
import { useParams } from "react-router-dom";
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
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-64 object-cover rounded-xl"
                    />

                    <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>

                    <p className="text-gray-500 mt-2">{blog.date} • {blog.readTime}</p>

                    <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                        {blog.content.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-10 bg-blue-50 p-6 rounded-xl text-center">
                        <h3 className="text-xl font-semibold">Need Care Services?</h3>
                        <p className="text-gray-600 mt-2">We are here to help you and your loved ones.</p>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">
                            Contact Us
                        </button>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        </>

    );
}
