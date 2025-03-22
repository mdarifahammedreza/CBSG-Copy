"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AppContext } from "../../AppProvider";
import { BentoGrid } from "../ui/bento-grid";
import Card from "../ui/Card";

const Blog = () => {
  const { uri } = useContext(AppContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 8; // Blogs per page

  useEffect(() => {
    axios
      .get(`${uri}blog-posts/`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, [uri]);

  if (loading) return <div className="text-center py-10 text-white">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  // **Pagination logic** (Slice blogs for the current page)
  const totalPages = Math.ceil(blogs.length / perPage);
  const paginatedBlogs = blogs.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full mt-16 px-10">
      <BentoGrid className="flex flex-wrap justify-center">
        {paginatedBlogs.map((item, i) => (
          <Link key={item.post_id} to={`/blog/${item.post_id}`} className="min-w-[300px]">
            <Card
              title={item.title}
              description={item.category}
              header={new Date(item.publication_date).toDateString()}
              className={i % 5 === 0 ? "md:col-span-2" : ""}
            />
          </Link>
        ))}
      </BentoGrid>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
