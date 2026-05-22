import React, { useEffect, useState } from "react";
import { db } from "../../Firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Blogcard from "./Blogcard";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 9; // 3 rows × 3 cards

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("categoryId", "==", "Act-East")
        );

        const snap = await getDocs(q);

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // ✅ SORT BY DATE (latest first)
        const sortedData = data.sort((a, b) => {
          const dateA = a.timestamp?.seconds || 0;
          const dateB = b.timestamp?.seconds || 0;
          return dateB - dateA;
        });

        setPosts(sortedData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(posts.length / perPage);

  const current = posts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <>
      < Helmet>
        <title>Coffee Blog | Brewing Tips, Trends & Insights</title>

        <meta
          name="description"
          content="Explore coffee blogs on brewing methods, coffee trends, beans, recipes, and expert tips for coffee lovers."
        />

        <meta
          name="keywords"
          content="coffee blog, coffee brewing tips, coffee trends, coffee articles, coffee guides"
        />
        <link rel="canonical" href="https://coffeeinstitute.co.in/blog" />
     </Helmet>

     <div className="p-10 pt-28 bg-gradient-to-r from-[#f5e6d8] via-white to-[#f5e6d8]">

      {/* 🔥 Breadcrumb */}
      <div className="mb-6 text-xl text-gray-600 max-w-7xl mx-auto">
        <Link to="/" className="hover:text-black font-medium">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black font-semibold">Blog</span>
      </div>



      {/* ✅ 3x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {current.map((blog) => (
          <Blogcard
            key={blog.id}
            image={blog.imageURL}
            title={blog.title}
            author={blog.authorName}
            date={blog.timestamp?.seconds * 1000}
            detailPage={`/post/${blog.id}`}
          />
        ))}
      </div>

      {/* ❗ Empty state */}
      {posts.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No blogs found
        </p>
      )}

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span className="font-bold">{page}</span>

          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Blog;