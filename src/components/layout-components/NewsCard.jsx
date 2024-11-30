import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props={}) => {

    const {news} = props ||  {};

    console.log(news)
    return (
        <div className="card w-full bg-white shadow-md rounded-lg p-4">
            {/* Author and Date */}
            <div className="flex items-center mb-4">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                    <h3 className="font-semibold">{news.author.name}</h3>
                    <p className="text-sm text-gray-500">{news.author.published_date}</p>
                </div>
                <button className="ml-auto text-gray-500 hover:text-gray-700">
                    <FaShareAlt />
                </button>
            </div>

            {/* Thumbnail and Title */}
            <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
            <p className="text-sm text-gray-500">{news.details.substring(0, 100)}...</p>

            {/* Read More */}
            <Link  to={`/news/${news._id}`} className="text-blue-500 font-semibold mt-2 inline-block">
                Read More
            </Link>
            

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < Math.floor(news.rating.number) ? '' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                    <p className="text-gray-600 ml-2">{news.rating.number}</p>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    {news.total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;