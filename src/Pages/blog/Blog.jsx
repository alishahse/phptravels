import React from 'react';

const BlogPage = () => {

    const mainBlogs = [
    { id: 1, title: "Things To Do This Weekend", image: "https://phptravels.net/uploads/blog/298065_10.jpg" },
    { id: 2, title: "Fiercely Independent Cultures", image: "https://phptravels.net/uploads/blog/696228_2.jpg" },
    { id: 3, title: "Fly & Save with Kuwait Airways!", image: "https://phptravels.net/uploads/blog/120331_3.jpg" },
    { id: 4, title: "Special Fares with FlyDubai!", image: "https://phptravels.net/uploads/blog/780975_1.jpg" },
  ];

  const recentBlogs = [
    { id: 1, title: "Things To Do This Weekend", image: "https://phptravels.net/uploads/blog/298065_10.jpg" },
    { id: 2, title: "Fiercely Independent Cultures", image: "https://phptravels.net/uploads/blog/696228_2.jpg" },
    { id: 3, title: "Peace Train A Long Time Coming", image: "https://phptravels.net/uploads/blog/120331_3.jpg" },
    { id: 4, title: "South Africa A Terminal Tyre", image: "https://phptravels.net/uploads/blog/780975_1.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Header Bar ============================================================= */}
      <div className="bg-gray-600 py-4 shadow-md">
        <h1 className="text-white text-center text-xl md:text-2xl tracking-widest">
          PHPTRAVELS Blogs
        </h1>
      </div>

      {/* 2. Main Content Container ================================================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column Blog Cards=================================================== */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {mainBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-37">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex justify-between items-center">
                  <h3 className="text-medium text-gray-800 leading-snug">
                    {blog.title}
                  </h3>
                  {/* small arrow icon ====================================================== */}
                  <button className="bg-blue-50 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
              </div>
              
            ))}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-10">
              <button className="px-85 py-3 bg-blue-600 text-white font-semibold rounded-lg ">
                   View More
              </button>
           </div>

          </div>

          {/* Right Column Sidebar ======================================================== */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-5">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1.5 h-8 bg-blue-600 mr-3 rounded-full"></span>
                New Blogs
              </h2>
              
              <div className="space-y-6">
                {recentBlogs.map((item) => (
                  <div key={item.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-24 h-16 shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[15px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;