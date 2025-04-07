function Show() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 py-10 text-white">
      <h1 className="text-4xl font-extrabold text-center text-orange-400 mb-10 drop-shadow-lg">
        Community Showcase
      </h1>

      <p className="text-center max-w-2xl mx-auto text-lg text-gray-300 mb-12">
        A space for students and developers to showcase their best work.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project cards will go here */}
      </div>

      <div className="mt-16 text-center text-gray-500 italic">
        Content coming soon...
      </div>
    </div>
  );
}

export default Show;


// // import React from 'react'

// function Show() {
//   return (
//     <div className="h-screen">
//       Upcoming
//     </div>
//   )
// }

// export default Show
