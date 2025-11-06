// "use client"
// import AdWidgetTwo from '@/components/AdsWidget/AdWidgetTwo';
// import WideAdWidget from '@/components/AdsWidget/WideAdWidget';
// import CommentForm from '@/components/Comments/CommentForm';
// import CommentList from '@/components/Comments/CommentList';
// import Drawer from '@/components/Layout/Drawer/Drawer';
// import Footer from '@/components/Layout/Footer/Footer';
// import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
// import Header from '@/components/Layout/Header/Header';
// import Layout from '@/components/Layout/Layout';
// import NewsLetter from '@/components/Newsletter/NewsLetter';
// import TrendingNewsWidget from '@/components/NewsWidgets/TrendNewsWidget';
// import BreadCrumb from '@/components/Others/BreadCrumb';
// import LatestNews from '@/components/Others/LatestNews';
// import MostShare from '@/components/Sidebar/MostShare';
// import NewsTabs from '@/components/Sidebar/NewsTabs';
// import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
// import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
// import useToggle from '@/Hooks/useToggle';

// export default function PostDetailsOne() {
//   const [drawer, drawerAction] = useToggle(false);
//   return (
//     <Layout>
//       <div className="home-1-bg">
//         <Drawer drawer={drawer} action={drawerAction.toggle} />
//         <Header action={drawerAction.toggle} />
//         <section className="post-layout-1-area pb-80">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <BreadCrumb CategoryName="Health" />
//               </div>
//               <div className="col-lg-8">
//                 <div className="post-layout-top-content">
//                   <div className="post-categories d-flex justify-content-between align-content-center">
//                     <div className="categories-item">
//                       <span>HEALTH</span>
//                     </div>
//                     <div className="categories-share">
//                       <ul>
//                         <li>
//                           <i className="fas fa-comment"></i>45020
//                         </li>
//                         <li>
//                           <i className="fas fa-fire"></i>45020
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="post-content">
//                     <h3 className="title">
//                       Japan’s virus success has puzzled the world. Is its luck
//                       running out?
//                     </h3>
//                     <p>
//                       The property, complete with 30-seat screening from room, a
//                       100-seat amphitheater and a swimming pond with sandy
//                       shower…
//                     </p>
//                     <div className="thumb">
//                       <img src="/images/post-layout.png" alt="" />
//                     </div>
//                   </div>
//                   <div className="post-author">
//                     <div className="author-info">
//                       <div className="thumb">
//                         <img src="/images/author.png" alt="" />
//                       </div>
//                       <h5 className="title">Subash Chandra</h5>
//                       <ul>
//                         <li>March 26, 2020</li>
//                         <li>Updated 1:58 p.m. ET</li>
//                       </ul>
//                     </div>
//                     <div className="author-social">
//                       <ul>
//                         <li>
//                           <a href="#">
//                             <i className="fab fa-facebook-f"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fab fa-youtube"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fab fa-instagram"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fal fa-heart"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fal fa-bookmark"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fas fa-ellipsis-v"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="post-text mt-30">
//                     <p>
//                       Entilators will be taken from certain New York hospitals
//                       and redistributed to the worst-hit parts of the state
//                       under an order to be signed by Governor Andrew Cuomo.
//                     </p>
//                     <p>
//                       New York saw its highest single-day increase in deaths, up
//                       by 562 to 2,935 - nearly half of all virus-related US
//                       deaths recorded yesterday. The White House may advise
//                       those in virus hotspots to wear face coverings in public
//                       to help stem the spread.
//                     </p>
//                     <p>The US now has 245,658 Covid-19 cases.</p>
//                     <p>
//                       A shortage of several hundred ventilators in New York
//                       City, the epicentre of the outbreak in the US, prompted Mr
//                       Cuomo to say that he will order the machines be taken from
//                       various parts of the state and give them to harder-hit
//                       areas.
//                     </p>
//                     <p>
//                       Amid a deepening crisis, top health official{' '}
//                       <span className="user">Dr Anthony Fauci</span> has said he
//                       believes all states should issue stay-at-home orders.
//                     </p>
//                     <p>
//                       “I don’t understand why that’s not happening,” Dr Fauci
//                       told CNN on Thursday. “If you look at what’s going on in
//                       this country, I just don’t understand why we’re not doing
//                       that.”
//                     </p>
//                     <p>
//                       “You’ve got to put your foot on the accelerator to bring
//                       that number down,” he added, referring to infection and
//                       death rates.
//                     </p>
//                     <ul>
//                       <li>
//                         <a href="#">Should more of us wear face masks?</a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <u>
//                             Why some countries wear face masks and others don’t
//                           </u>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Coronavirus: Are homemade face masks safe?
//                         </a>
//                       </li>
//                     </ul>
//                     <p>
//                       The comments from Dr Fauci, who heads the National
//                       Institute of Allergy and Infectious Diseases, appeared to
//                       contradict those of President Trump, who has consistently
//                       dismissed the notion of a nationwide lockdown.
//                     </p>
//                     <p>
//                       “It’s awfully tough to say, ‘close it down.’ We have to
//                       have a little bit of flexibility,” Mr Trump said on
//                       Wednesday.
//                     </p>
//                   </div>
//                   <div className="post-text pt-20">
//                     <h5 className="title">What’s the debate over masks?</h5>
//                     <p>
//                       Both the US Centers for Disease Control (CDC) and the
//                       World Health Organization (WHO) are reassessing their
//                       guidance on face masks, as experts race to find ways to
//                       fight the highly contagious virus.
//                     </p>
//                     <p>
//                       Covid-19 is carried in airborne droplets from people
//                       coughing or sneezing, but there is some dispute over how
//                       far people should distance themselves from each other, and
//                       whether masks are useful when used by the public.
//                     </p>
//                     <div className="row pt-10">
//                       <div className="col-lg-6">
//                         <div className="post-thumb">
//                           <img src="/images/post-thumb-2.png" alt="" />
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="text">
//                           <p>
//                             The WHO advises that ordinary face masks are only
//                             effective if combined with careful hand-washing and
//                             social-distancing, and so far it does not recommend
//                             them generally for healthy people.
//                           </p>
//                           <p>
//                             However, more and more health experts now say there
//                             are benefits. They argue that the public use of
//                             masks can primarily help by preventing asymptomatic
//                             patients - people who have been infected with
//                             Covid-19 but are not aware, and not displaying any
//                             symptoms - from unknowingly spreading the virus to
//                             others.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="post-text pt-20">
//                     <p>
//                       Masks may also help lower the risk of individuals catching
//                       the virus through the droplets from another person’s
//                       sneeze or a cough - and people can be taught how put masks
//                       on and take them off correctly, they argue.
//                     </p>
//                     <p>
//                       On Thursday New York mayor Bill de Blasio urged all New
//                       Yorkers to cover their faces when outside and near others,
//                       but not to use surgical masks, which are in short supply.
//                     </p>
//                     <p>
//                       “It could be a scarf. It could be something you create
//                       yourself at home. It could be a bandana,” he said.
//                       Governor Cuomo weighed in on Friday, saying{' '}
//                       <span className="quote-text">
//                         “i think it’s fair to say that the masks couldn’t hurt
//                         unless they gave you a false sense of security.”
//                       </span>
//                     </p>
//                     <p>
//                       Meanwhile, residents in Laredo, Texas will now face a
//                       $1,000 (£816) fine if they fail to cover their noses and
//                       mouths while outside, after city officials issued an
//                       emergency ordinance to its approximately 250,000 residents
//                       this week.
//                     </p>
//                   </div>
//                   <div className="post-text pt-20">
//                     <h5 className="title">Which states are not in lockdown?</h5>
//                     <p>
//                       Both the US Centers for Disease Control (CDC) and the
//                       World Health Organization (WHO) are reassessing their
//                       guidance on face masks, as experts race to find ways to
//                       fight the highly contagious virus.
//                     </p>
//                     <p>
//                       Covid-19 is carried in airborne droplets from people
//                       coughing or sneezing, but there is some dispute over how
//                       far people should distance themselves from each other, and
//                       whether masks are useful when used by the public.
//                     </p>
//                     <div className="thumb pt-20 pb-35">
//                       <img src="/images/post-thumb-3.jpg" alt="" />
//                       <span>
//                         I just had a baby - now I’m going to the frontline.
//                       </span>
//                     </div>
//                     <p>
//                       Masks may also help lower the risk of individuals catching
//                       the virus through the droplets from another person’s
//                       sneeze or a cough - and people can be taught how put masks
//                       on and take them off correctly, they argue.
//                     </p>
//                     <p>
//                       On Thursday New York mayor Bill de Blasio urged all New
//                       Yorkers to cover their faces when outside and near others,
//                       but not to use surgical masks, which are in short supply.
//                     </p>
//                     <p>
//                       Meanwhile, residents in Laredo, Texas will now face a
//                       $1,000 (£816) fine if they fail to cover their noses and
//                       mouths while outside, after city officials issued an
//                       emergency ordinance to its approximately 250,000 residents
//                       this week.
//                     </p>
//                   </div>
//                   <div className="post-quote d-block d-md-flex align-items-center">
//                     <div className="thumb">
//                       <img src="/images/post-quote.jpg" alt="" />
//                     </div>
//                     <div className="post-quote-content">
//                       <img src="/images/quote-icon.png" alt="" />
//                       <p>
//                         I must explain to you how all this mistake idea
//                         denouncing pleasure and praising pain was born and I
//                         will give you a complete account of the system, and
//                         expound the actual teachings of the great explorer of
//                         the truth, the master-builder of human happiness. No one
//                         rejects, dislikes, or avoids pleasure because it is
//                         pleasure.
//                       </p>
//                       <div className="user">
//                         <img src="/images/author.png" alt="" />
//                         <h5 className="title">Subash Chandra</h5>
//                         <span>Founder at Seative Digital</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="post-text mt-35">
//                     <p>
//                       The next day I came back to my team and said, This is what
//                       I just heard, we have to get ready, he said. We knew that
//                       it wasn’t going to be long before we were going to have to
//                       deal with it.
//                     </p>
//                     <p>
//                       Mr. Hogan has also leaned on his wife, Yumi Hogan, a
//                       Korean immigrant, who was also at the governor’s
//                       convention, which included a dinner at the Korean
//                       ambassador’s home. As the first Korean first lady in
//                       American history, Ms. Hogan has become something of an
//                       icon in South Korea. I just grabbed my wife and said,
//                       Look, you speak Korean. You know the president. You know
//                       the first lady. You know the ambassador. Let’s talk to
//                       them in Korean, and tell them we need their help.
//                       Companies in South Korea said would tests.
//                     </p>
//                     <div className="thumb pt-10 pb-35">
//                       <img src="/images/post-thumb-4.png" alt="" />
//                     </div>
//                     <p>
//                       In global terms the US has the most Covid-19 cases - more
//                       than 245,000. And on Thursday the US authorities said more
//                       than 1,000 had died in the past 24 hours - the highest
//                       daily toll so far in the world.
//                     </p>
//                     <p>
//                       Hospitals and morgues in New York are struggling to cope
//                       with the pandemic, and New York Governor Andrew Cuomo has
//                       warned that New York risks running out of ventilators for
//                       patients in six days.
//                     </p>
//                   </div>
//                   <div className="post-tags">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <i className="fas fa-tag"></i> Tags
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">Health</a>
//                       </li>
//                       <li>
//                         <a href="#">World</a>
//                       </li>
//                       <li>
//                         <a href="#">Corona</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="post-reader-text pt-50">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="post-reader-prev">
//                           <span>PREVIOUS NEWS</span>
//                           <h4 className="title">
//                             <a href="#">
//                               Kushner puts himself in middle of white house’s
//                               chaotic coronavirus response.
//                             </a>
//                           </h4>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="post-reader-prev">
//                           <span>NEXT NEWS</span>
//                           <h4 className="title">
//                             <a href="#">
//                               C.I.A. Hunts for authentic virus totals in china,
//                               dismissing government tallies
//                             </a>
//                           </h4>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="post_gallery_sidebar mt-40">
//                   <NewsTabs />
//                   <WidgetOne customClass="mt-30" />
//                   <TrendingSingleCarousel />
//                   <TrendingNewsWidget />
//                   <AdWidgetTwo />
//                   <MostShare customClass="mt-40" />
//                   <NewsLetter />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <LatestNews />
//         <CommentForm />
//         <CommentList />
//         <WideAdWidget />
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
import { useSearchParams } from "next/navigation";
import { getPostById } from "@/lib/api";

export default function PostDetailsOne() {
  const [drawer, drawerAction] = useToggle(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      getPostById(id).then((res) => {
        setPost(res?.data || res);
      }).catch(console.error);
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
