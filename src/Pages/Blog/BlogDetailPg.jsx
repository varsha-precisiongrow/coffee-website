import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const BlogDetailPg = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const q = query(
        collection(db, "posts"),
        where("categoryId", "==", "Act-East")
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