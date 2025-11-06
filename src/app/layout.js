import { Inter } from "next/font/google";



// Existing CSS files
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/slick.css";
import "@/assets/css/navbar.css";
import "@/assets/css/default.css";
import "@/assets/scss/style.scss";
import "react-modal-video/scss/modal-video.scss";

// 🧩 Import Tailwind first so it overrides other styles
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Newsprk Admin Panel",
  description: "Manage posts, categories, and authors for Newsprk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
