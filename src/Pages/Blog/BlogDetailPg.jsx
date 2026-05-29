import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogDetailPg = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const q = query(
        collection(db, "posts"),
        where("categoryId", "==", "Coffee-website")
      );
      const snap = await getDocs(q);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const found = list.find((p) => p.id === slug);
      setPost(found);
    };

    fetch();
  }, [slug]);

  if (!post) return <h2 className="text-center mt-20">Loading...</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6 pt-28">
        <div className="mb-6 text-xl text-gray-600 max-w-7xl mx-auto">
        <Link to="/" className="hover:text-black font-medium">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black font-semibold">Blog</span>
      </div> 
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <img
        src={post.imageURL}
        alt="img" loading="lazy"
        className="w-full mb-6 rounded"
      />
      <p className="text-gray-600 mb-4">
        {post.authorName} |{" "}
        {post.timestamp?.seconds
          ? new Date(post.timestamp.seconds * 1000).toLocaleDateString()
          : ""}
      </p>
      <div   className=" text-justify leading-relaxed
        [&_img]:float-right
        [&_img]:w-[45%]
        [&_img]:ml-6
        [&_img]:mb-3
        [&_img]:rounded "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogDetailPg;