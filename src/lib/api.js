export const API_BASE_URL = "https://newsprk-backend.onrender.com/api";

export async function getPosts() {
  const res = await fetch(`${API_BASE_URL}/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.data || data;
}

export async function getPostById(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  return await res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_BASE_URL}/categories`, { cache: "no-store" });
  return await res.json();
}
