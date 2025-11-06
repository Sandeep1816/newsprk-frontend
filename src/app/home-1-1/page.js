// "use client"
// import AdOne from '@/components/AdsWidget/AdOne';
// import FeatureNewsCarousel from '@/components/FeatureNews/FeatureNewsCarousel';
// import Drawer from '@/components/Layout/Drawer/Drawer';
// import Footer from '@/components/Layout/Footer/Footer';
// import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
// import Header from '@/components/Layout/Header/Header';
// import LogoBanner from '@/components/Layout/Header/LogoBanner';
// import Topbar from '@/components/Layout/Header/Topbar';
// import Layout from '@/components/Layout/Layout';
// import BusinessNews from '@/components/News/BusinessNews';
// import EntertainmentNews from '@/components/News/EntertainmentNews';
// import NewsGallary from '@/components/News/NewsGallary';
// import PopularNewsCarousel from '@/components/News/PopularNewsCarousel';
// import SportsNewsCarousel from '@/components/News/SportsNewsCarousel';
// import TrendingCarousel from '@/components/News/TrendingCarousel';
// import TwoPostCarousel from '@/components/News/TwoPostCarousel';
// import VideoNews from '@/components/News/VideoNews';
// import NewsLetter from '@/components/Newsletter/NewsLetter';
// import MostShare from '@/components/Sidebar/MostShare';
// import MostviewNews from '@/components/Sidebar/MostviewNews';
// import NewsTabs from '@/components/Sidebar/NewsTabs';
// import SidebarCategories from '@/components/Sidebar/SidebarCategories';
// import SportsFixtures from '@/components/Sidebar/SportsFixtures';
// import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
// import TrendingNewPost from '@/components/TrendingNews/TrendingNewPost';
// import useToggle from '@/Hooks/useToggle';
// import Link from 'next/link';
// import React from 'react';

// export default function HomeOneOne() {
//   const [drawer, drawerAction] = useToggle(false);
//   return (
//     <Layout>
//       <div className="home-1-bg">
//         <Drawer drawer={drawer} action={drawerAction.toggle} />
//         <Header action={drawerAction.toggle} />
//         <div className="post__gallery__area pt-50">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <NewsGallary />
//               </div>
//               <div className="col-lg-4">
//                 <div className="post_gallery_sidebar">
//                   <NewsTabs />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <FeatureNewsCarousel customClass="pb-40" />
//         <section className="trending-news-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <div className="section-title">
//                   <h3 className="title">Trending News</h3>
//                 </div>
//                 <TrendingCarousel />
//                 <TrendingNewPost />
//               </div>
//               <div className="col-lg-4">
//                 <div className="trending-right-sidebar">
//                   <WidgetOne />
//                   <MostviewNews />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <TwoPostCarousel />
//         <section className="video-news-area">
//           <div className="container custom-container">
//             <div className="video-news-box">
//               <div className="row">
//                 <div className="col-lg-8">
//                   <VideoNews />
//                 </div>
//                 <div className="col-lg-4">
//                   <PopularNewsCarousel />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="all-post-area">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8">
//                 <EntertainmentNews />
//                 <div className="sports-news-area">
//                   <div className="section-title">
//                     <h3 className="title">Sports News</h3>
//                   </div>
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6">
//                       <div className="trending-news-item  mb-30">
//                         <div className="trending-news-thumb">
//                           <img src="/images/sports-news.jpg" alt="sports" />
//                         </div>
//                         <div className="trending-news-content">
//                           <div className="post-meta">
//                             <div className="meta-categories">
//                               <Link href="/post-details-two">TECHNOLOGY</Link>
//                             </div>
//                             <div className="meta-date">
//                               <span>March 26, 2020</span>
//                             </div>
//                           </div>
//                           <h3 className="title">
//                             <Link href="/post-details-two">
//                               There may be no consoles in the future ea exec
//                               says
//                             </Link>
//                           </h3>
//                           <p className="text">
//                             The property, complete with 30-seat screening from
//                             room, a 100-seat amphitheater and a swimming pond
//                             with sandy shower…
//                           </p>
//                           <Link href="/post-details-two">Read more</Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <SportsNewsCarousel />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="post-add mt-30">
//                   <a href="#">
//                     <img src="/images/ads/banner.png" alt="ad" />
//                   </a>
//                 </div>
//                 <BusinessNews />
//               </div>
//               <div className="col-lg-4">
//                 <MostShare />
//                 <SportsFixtures />
//                 <NewsLetter />
//                 <SidebarCategories />
//                 <AdOne />
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//         <FooterCopyright />
//       </div>
//     </Layout>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Drawer from "@/components/Layout/Drawer/Drawer";
import useToggle from "@/Hooks/useToggle";
import { getPosts } from "@/lib/api";
import Link from "next/link";

export default function HomeOneOne() {
  const [drawer, drawerAction] = useToggle(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <div className="container py-10">
        <h2 className="text-2xl font-bold mb-4">📰 Latest News</h2>

        {posts.length === 0 ? (
          <p>Loading....</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 pb-4 mb-6">
              <Link href={`/post-details-one?id=${post.id}`}>
                <h3 className="font-semibold text-lg hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">
                {post.category?.name} —{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <p>{post.author?.name || "Anonymous Author"}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
      <FooterCopyright />
    </Layout>
  );
}
