import React from 'react';
import { books } from './api';
import ReadBook  from "./ReadBook";

const Books = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto p-2 sm:p-5 md:p-8">
                {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📚 বাংলা বইয়ের সংগ্রহ</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 gap-5">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            {/* Background Image */}
                            <div
                                className="h-96 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                // style={{ backgroundImage: `url(${book.image})` }}
                                style={{ height: 300, backgroundImage: 'url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)' }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 p-6 text-white">
                                <h3 className="text-xl font-semibold">{book.title}</h3>
                                <p className="text-sm text-gray-300">✍️ {book.author}</p>
                                {/* Read & Download Button */}
                                <div className="mt-4 flex space-x-3">
                                    <a
                                        href={book.pdfLink}
                                        className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📥 ডাউনলোড
                                    </a>
                                    <button className="px-4 py-2 text-sm font-semibold bg-gray-800 hover:bg-gray-700 rounded transition duration-300">
                                        📖 পড়ুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Books;
