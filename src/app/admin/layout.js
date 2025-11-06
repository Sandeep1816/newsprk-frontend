"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/admin/login");
  }, [router]);

  return <div className="p-6">{children}</div>;
}


// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminLayout({ children }) {
//   const router = useRouter();

//   // 🔒 Auth guard: redirect if not logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) router.push("/admin/login");
//   }, [router]);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
//       {/* 🔹 Header */}
//       <header className="bg-white shadow-sm border-b flex justify-between items-center px-6 py-4">
//         <h1 className="text-xl font-bold text-indigo-600 tracking-tight">
//           📰 Newsprk Admin
//         </h1>
//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             router.push("/admin/login");
//           }}
//           className="text-sm text-red-600 hover:text-red-700 transition"
//         >
//           Logout
//         </button>
//       </header>

//       {/* 🔹 Main Content Area */}
//       <main className="flex-1 flex justify-center items-start p-10">
//         <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
//           {children}
//         </div>
//       </main>

//       {/* 🔹 Footer */}
//       <footer className="bg-white border-t text-center text-sm text-gray-500 py-3">
//         © {new Date().getFullYear()} Newsprk CMS — Admin Panel
//       </footer>
//     </div>
//   );
// }
