const Footer = () => {
    const myfooter = [
        {id: 1, url: '/About', title: 'About Us'},
        {id: 2, url: '/Privacy', title: 'Privacy Policy'},
        {id: 3, url: '/File', title: 'File A Claim'},
    ]


     const myfooter2 = [
        {id: 4, url: '/Contact', title: 'Contact Us'},
        {id: 5, url: '/Supplier', title: 'Become A Supplier'},
        {id: 6, url: '/Career', title: 'Careers And Jobs'}
        
     ] 
     

     const myfooter3 = [
        {id: 7, url: '/Terms', title: 'Terms Of Use'},
        {id: 8, url: '/Faq', title: 'FAQ'},
        {id: 9, url: '/Booking', title: 'How To Book'},
     ]

     
     const myfooter4 = [
        {id: 10, url: '/Policies', title: 'Cookies Policy'},
        {id: 11, url: '/Tips', title: 'Booking Tips'}
        
     ]

    return (
      // 1st Array ====================================================
  <div className="grid grid-cols-4 px-20 py-10 gap-10">
    <div className="flex flex-col gap-2">
      {myfooter.map((item) => (
        <a key={item.id} href={item.url}>{item.title}</a>
      ))}
    </div>

         {/* 2nd Array ================================================ */}
    <div className="flex flex-col gap-2">
      {myfooter2.map((item) => (
        <a key={item.id} href={item.url}>{item.title}</a>
      ))}
    </div>

         {/* 3rd Array ================================================ */}
         <div className="flex flex-col gap-2">
           {myfooter3.map((item) => (
            <a key={item.id} href={item.url}>{item.title}</a>
            ))}
          </div>

         {/* 4th Array ================================================ */}
      <div className="flex flex-col gap-2">
        {myfooter4.map((item) => (
          <a key={item.id} href={item.url}>{item.title}</a>
        ))}
    </div>

        {/* News Latter Part ====================================================== */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-8 border-t border-gray-200 gap-6 bg-white">
      <div className="flex items-center gap-3 min-w-75">
        <div className="w-16 h-16 flex items-center justify-center">
          <img 
            src="https://phptravels.net/uploads/global/favicon.png" 
            alt="phptravels-icon" 
            className="max-w-full h-auto object-contain" 
          />
       </div>
        <div className="flex flex-col text-gray-800">
          <span className="font-bold text-sm text-gray-500">+123456789</span>
          <a href="mailto:email@agency.com" className="text-sm">email@agency.com</a>
          <a href="/Contact" className="text-sm font-semibold">Contact Us</a>
        </div>
  </div>

       {/* Form ==================================================================== */}
  <div className="flex flex-col sm:flex-row flex-1 max-w-3xl w-full gap-3">
    <input 
      type="text" 
      placeholder="Name" 
      className="flex-1 border border-gray-300 p-3 rounded-md focus:ring-1 focus:ring-blue-500 outline-none" 
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="flex-1 border border-gray-300 p-3 rounded-md focus:ring-1 focus:ring-blue-500 outline-none" 
    />
    <button className="bg-blue-600 text-white px-7 py-3 rounded-md font-bold hover:bg-black whitespace-nowrap transition-colors">
      Signup Newsletter
    </button>
    </div>
  </div>
</div>
  // Main div Close ==============================
);
}

export default Footer