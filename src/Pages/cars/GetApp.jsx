
const GetApp = () => {
    return (
         <div className="flex flex-row items-center justify-between mt-3 gap-10 bg-blue-600 text-white p-10">

    {/* 1. Buttons ========================================================== */}
    <div className="flex flex-col gap-3 w-40 shrink-0">
        <button className="border hover:bg-black p-4 rounded-xl hover:border-none transition-all duration-300">
            <i className="fa-brands fa-google-play text-xl p-1"></i>
            PlayStore
        </button>
           <button className="border hover:bg-black p-4 rounded-xl hover:border-none transition-all duration-300">
             <i className="fa-brands fa-apple text-xl p-1"></i>
             AppStore
             </button>
    </div>
    
    {/* 2. Text ============================================================== */}
    <div> 
        <h2 className="font-bold text-2xl mb-2">Get The App!</h2>
        <p className="text-medium opacity-90 leading-relaxed">
            Our app has all your travel needs covered: Secure payment channels, easy 4-step booking process. What more could you ask for?
        </p>
    </div>

    {/* 3. Image ================================================================ */}
    <div className="flex justify-end items-center">
        <img 
            src="https://phptravels.net/assets/img/apps.png" 
            alt="mobile image" 
            className="w-90 h-auto object-contain drop-shadow-2xl" 
        />
    </div>
</div>
    )
   
}

export default GetApp;