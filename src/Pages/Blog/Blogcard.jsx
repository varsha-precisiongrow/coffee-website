import React from "react";
import { Link } from "react-router-dom";

const Blogcard = ({ image, title, author, date, detailPage }) => {
  return (
    <div className="relative group overflow-hidden rounded shadow">
      
      {/* IMAGE */}
      <img src={image || "https://via.placeholder.com/300"} alt="blogcard" className="h-60 w-full object-cover" />

      {/* CONTENT (bottom text) */}
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500">
          {author} |{" "} {date ? new Date(date).toLocaleDateString() : ""}
        </p>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* 🔥 BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center ">
        
        {/* READ MORE BUTTON */}
        <Link to={detailPage}>
          <button className="px-5 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
            Read More
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Blogcard;