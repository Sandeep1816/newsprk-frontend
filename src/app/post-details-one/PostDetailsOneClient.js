"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Drawer from "@/components/Layout/Drawer/Drawer";
import useToggle from "@/Hooks/useToggle";
import { useSearchParams } from "next/navigation";
import { getPostById } from "@/lib/api";

export default function PostDetailsOneClient() {
  const [drawer, drawerAction] = useToggle(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((res) => setPost(res?.data || res))
        .catch(console.error);
    }
  }, [id]);

  if (!post)
    return (
      <div className="flex h-screen items-center justify-center text-gray-500 text-lg">
        Loading post...
      </div>
    );

  return (
    <Layout>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />

      {/* 🖼️ Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={post.imageUrl || "https://source.unsplash.com/1200x600/?news"}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="text-sm uppercase text-gray-300 tracking-wide mb-2">
            {post.category?.name || "Uncategorized"}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            {post.title}
          </h1>
          <p className="text-gray-300 text-sm">
            Published on{" "}
            {new Date(post.publishedAt || Date.now()).toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* 📰 Content Section */}
      <div className="container max-w-4xl mx-auto px-4 md:px-0 py-12">
        {/* 🧑‍💼 Author Block */}
        <div className="flex items-center gap-4 border-b border-gray-200 pb-6 mb-10">
          <img
            src={
              post.author?.avatarUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt={post.author?.name || "Author"}
            className="w-16 h-16 rounded-full object-cover shadow-md border"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {post.author?.name || "Anonymous Author"}
            </h3>
            <p className="text-sm text-gray-500">
              {post.author?.bio || "Contributor at Newsprk"}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(post.publishedAt || Date.now()).toLocaleString()}
            </p>
          </div>
        </div>

        {/* 📝 Article Content */}
        <article
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 🏷️ Category & Tags */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-6 mt-10">
          <div className="text-sm text-gray-500">
            Category:{" "}
            <span className="font-semibold text-indigo-600">
              {post.category?.name}
            </span>
          </div>
          {post.tags?.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ✍️ About Author */}
        <div className="mt-14 bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm flex items-start gap-5">
          <img
            src={
              post.author?.avatarUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Author avatar"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              {post.author?.name}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {post.author?.bio ||
                "A passionate writer bringing insightful perspectives to the readers of Newsprk."}
            </p>
            <div className="flex gap-3 text-gray-400 text-sm">
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🌍 Footer */}
      <Footer />
      <FooterCopyright />
    </Layout>
  );
}
