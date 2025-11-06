"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) return;
    fetch("https://newsprk-backend.onrender.com/api/posts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.data || data))
      .catch(console.error);
  }, [token]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Link
        href="/admin/posts/create"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        + New Post
      </Link>

      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Published</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.category?.name}</td>
              <td className="p-2">
                {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : "Draft"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
