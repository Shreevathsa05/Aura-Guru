import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[40vh] text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 typewriter">
          Learn, Build, and Showcase...
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Unlock your potential as a developer with tools to help you learn faster, build smarter, and share your innovations with the world.
        </p>
        <style>{`
          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid orange;
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.15em;
            animation: typing 6s steps(30, end) infinite, blink-caret 1s step-end infinite;
          }
          @keyframes typing {
            0% { width: 0; }
            50% { width: 100%; }
            60% { width: 100%; }
            100% { width: 0; }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: orange; }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* API Docs */}
        <NavLink to="/ApiDocs" className="hover:no-underline">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h2 className="text-3xl font-bold mb-2 text-orange-400">📚 API Docs</h2>
            <p className="text-gray-300">
              Clear, beginner-friendly documentation to help you understand and integrate APIs effortlessly. Ideal for students and early-stage devs.
            </p>
          </div>
        </NavLink>

        {/* Showcase Projects */}
        <NavLink to="/Show" className="hover:no-underline">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h2 className="text-3xl font-bold mb-2 text-cyan-400">🌟 Showcase Projects</h2>
            <p className="text-gray-300">
              Upload your projects, inspire others, and get noticed. Our community hub lets you present what you’ve built with pride.
            </p>
          </div>
        </NavLink>

        {/* JSON Converter */}
        <NavLink to="/JsonConverter" className="hover:no-underline">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h2 className="text-3xl font-bold mb-2 text-green-400">🛠️ JSON Converter</h2>
            <p className="text-gray-300">
              Convert, validate, and pretty-print JSON data with ease. Built for developers who need speed and simplicity.
            </p>
          </div>
        </NavLink>
      </section>

      {/* Call to Action Banner */}
      <div className="mt-16 text-center p-6 bg-gray-800 rounded-2xl mx-6 md:mx-24 shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-yellow-300">🚀 Ready to Elevate Your Dev Journey?</h2>
        <p className="text-gray-300 text-lg">
          Whether you're learning APIs, building projects, or just want a fast JSON tool — this platform is built for you.
        </p>
      </div>
    </div>
  );
}

export default Home;
// function Home() {
//   return (
//     <div className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center h-[40vh] text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 typewriter">
//           Learn, Build, and Showcase...
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
//           Discover powerful tools to help you grow as a developer—access API documentation, convert JSON, and showcase your own projects.
//         </p>
//         <style>{`
//           .typewriter {
//             overflow: hidden;
//             border-right: 0.15em solid orange;
//             white-space: nowrap;
//             margin: 0 auto;
//             letter-spacing: 0.15em;
//             animation: typing 6s steps(30, end) infinite, blink-caret 1s step-end infinite;
//           }
//           @keyframes typing {
//             0% { width: 0; }
//             50% { width: 100%; }
//             60% { width: 100%; }
//             100% { width: 0; }
//           }
//           @keyframes blink-caret {
//             from, to { border-color: transparent; }
//             50% { border-color: orange; }
//           }
//         `}</style>
//       </section>

//       {/* Features Section */}
//       <section className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {/* API Docs Card */}
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//           <h2 className="text-3xl font-bold mb-2 text-orange-400">📚 API Docs</h2>
//           <p className="text-gray-300 mb-4">
//             Dive into clean and easy-to-follow documentation. Learn how to build robust applications with our developer-friendly APIs.
//           </p>
//           <a href="/api-docs" className="text-orange-300 hover:underline">Explore Docs →</a>
//         </div>

//         {/* Showcase Card */}
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//           <h2 className="text-3xl font-bold mb-2 text-cyan-400">🌟 Showcase</h2>
//           <p className="text-gray-300 mb-4">
//             Got a cool project? Share it with our growing community and get valuable feedback and exposure.
//           </p>
//           <a href="/showcase" className="text-cyan-300 hover:underline">Share Your Work →</a>
//         </div>

//         {/* JSON Converter Card */}
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//           <h2 className="text-3xl font-bold mb-2 text-green-400">🛠️ JSON Converter</h2>
//           <p className="text-gray-300 mb-4">
//             Instantly convert JSON data with our sleek and easy-to-use converter. Save time and reduce errors.
//           </p>
//           <a href="/json-converter" className="text-green-300 hover:underline">Try Converter →</a>
//         </div>
//       </section>

      
//     </div>
//   );
// }

// export default Home;
