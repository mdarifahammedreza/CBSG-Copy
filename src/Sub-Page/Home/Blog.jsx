"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const BlockPage = () => {
  const { uri } = useContext(AppContext); // Get API base URL from Context
  const { id } = useParams(); // Get post ID from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${uri}blog-posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load post.");
        setLoading(false);
      });
  }, [id, uri]);

  if (loading) {
    return <CBSGCharLoader />;
  }

  if (error || !post) {
    return <div className="text-center py-10 text-red-500">{error || "Post not found."}</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-12">
      <div className="w-full  text-black  rounded-lg p-8 backdrop-blur-lg">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-1/2 h-64 object-cover rounded-lg mb-4 shadow-md shadow-gray-600"
          />
        ) : (
          <div className="w-full h-64  rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-800">{new Date(post.publication_date).toDateString()}</p>
        <span className="inline-block bg-blue-500/70 text-white px-3 py-1 rounded-md text-sm mt-2">
          {post.category}
        </span>
        <div className="text-base font-normal text-blue-950  dynamic-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <p className="mt-4 text-gray-600"><strong>Tags:</strong> {post.tags || "None"}</p>
      </div>
    </div>
  );
};

export default BlockPage;
