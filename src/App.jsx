
// import { useState, useEffect } from "react";
// import Lenis from "lenis";
// import { Route, Routes } from "react-router-dom";

// import CoffeeAnimation from "./Components/CoffeeAnimation";
// // import CustomCursor from "./Components/CustomCursor";
// import Navbar from "./HeadFoot/Navbar";
// import Footer from "./HeadFoot/Footer";
// import Canonical from "./Components/Canonical";
// import ScrollToTop from "./Components/ScrolltoTop";

// // Pages
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Sustainability from "./Pages/Sustainability";
// import OurStory from "./Pages/OurStory";
// import Beans from "./Pages/Beans";
// import Blog from "./Pages/Blog/Blog";
// import BlogDetailPg from "./Pages/Blog/BlogDetailPg";
// import Health from "./Pages/Health";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";
// import BackendTest from "./Components/BackendTest";
// import SchemaInjector from "./Components/SchemaMarkup/SchemaInjector";

// import "./index.css";

// export const routes = [
//   { path: "/", component: Home },
//   { path: "/about", component: About },
//   { path: "/sustainability", component: Sustainability },
//   { path: "/story", component: OurStory },
//   { path: "/beans", component: Beans },
//   { path: "/contact", component: Contact },
//   { path: "/health", component: Health },
//   { path: "/blog", component: Blog },

//   // Blog Details
//   { path: "/blog/:slug", component: BlogDetailPg },

//   // 404
//   { path: "*", component: NotFound },
// ];

// function App() {
//   const [showIntro, setShowIntro] = useState(true);

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-coffee-dark text-coffee-light">
//       {/* <CustomCursor /> */}

//       {showIntro ? (
//         <CoffeeAnimation onFinish={() => setShowIntro(false)} />
//       ) : (
//         <>
//           {/* Navbar */}
//           <Navbar />

//           {/* Scroll To Top */}
//           <ScrollToTop />
          
//           <SchemaInjector />
//           {/* Canonical */}
//           <Canonical />

//           {/* Backend Test */}
//           <BackendTest />

//           {/* Routes */}
//           <Routes>
//             {routes.map((route, index) => (
//               <Route
//                 key={index}
//                 path={route.path}
//                 element={<route.component />}
//               />
//             ))}
//           </Routes>

//           {/* Footer */}
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }


import {  useState,  useEffect,  lazy,  Suspense,} from "react";

import Lenis from "lenis";

import {  Route,  Routes, } from "react-router-dom";

// ================= COMPONENTS =================

import CoffeeAnimation from "./Components/CoffeeAnimation";

import Navbar from "./HeadFoot/Navbar";

import Footer from "./HeadFoot/Footer";

import Canonical from "./Components/Canonical";

import ScrollToTop from "./Components/ScrolltoTop";

import BackendTest from "./Components/BackendTest";

import SchemaInjector from "./Components/SchemaMarkup/SchemaInjector";

// ================= LAZY LOAD PAGES =================

const Home = lazy(() => import("./Pages/Home"));

const About = lazy(() => import("./Pages/About"));

const Sustainability = lazy(() =>  import("./Pages/Sustainability"));

const OurStory = lazy(() =>  import("./Pages/OurStory"));

const Beans = lazy(() => import("./Pages/Beans"));

const Blog = lazy(() => import("./Pages/Blog/Blog"));

const BlogDetailPg = lazy(() => import("./Pages/Blog/BlogDetailPg"));

const Health = lazy(() => import("./Pages/Health"));

const Contact = lazy(() => import("./Pages/Contact"));

const NotFound = lazy(() => import("./Pages/NotFound"));

// ================= ROUTES =================

export const routes = [
  { path: "/", component: Home },

  { path: "/about", component: About },

  { path: "/sustainability", component: Sustainability, },

  { path: "/story", component: OurStory },

  { path: "/beans", component: Beans },

  { path: "/contact", component: Contact },

  { path: "/health", component: Health },

  { path: "/blog", component: Blog },

  // ✅ BLOG DETAIL
  { path: "/blog/:slug", component: BlogDetailPg, },

  // ✅ 404
  { path: "*", component: NotFound, },
];

function App() {

  const [showIntro, setShowIntro] = useState(true);

  // ================= LENIS SMOOTH SCROLL =================

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,

      smoothWheel: true,
    });

    function raf(time) {

      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <div className="min-h-screen bg-coffee-dark text-coffee-light">

      {/* ================= INTRO ================= */}

      {showIntro ? (

        <CoffeeAnimation onFinish={() => setShowIntro(false)} />

      ) : (

        <>

          {/* ================= NAVBAR ================= */}

          <Navbar />

          {/* ================= SCROLL TOP ================= */}

          <ScrollToTop />

          {/* ================= SCHEMA ================= */}

          <SchemaInjector />

          {/* ================= CANONICAL ================= */}

          <Canonical />

          {/* ================= BACKEND TEST ================= */}

          {/* REMOVE IN PRODUCTION */}
          {/* <BackendTest /> */}

          {/* ================= ROUTES ================= */}

          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-xl">
                Loading...
              </div>
            }
          >

            <Routes>

              {routes.map((route, index) => (

                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />

              ))}

            </Routes>

          </Suspense>

          {/* ================= FOOTER ================= */}

          <Footer />

        </>

      )}

    </div>
  );
}

export default App;


// export default App;
// // scroll animation 
// // Entrance animation
// // Parallax Animation
// // Hover animation
// // SVG / Path Animation
// // Loop / Infinite Animation
// // Page Transition Animation
// // Hover / Click Animation (Micro-interactions)
// // Component Animation
