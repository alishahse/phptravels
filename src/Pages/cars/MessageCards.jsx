import { Bold } from "lucide-react";

const MessageCards = () => {
    const mesgcard = [
        {id: 1, logo: ( <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>), title: 'You will never roam alone', description: 'Find best travel services and book them instantly'},
        {id: 2, logo: (
            <svg xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
        ), title: 'Travel to anytime, anywhere', description: 'No limits and boundaries for your next destination'},
        {id: 3, logo: (
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                </path>
            </svg>
        ), title: 'Ease of mind, search and book', description: 'Lets help you find best travel deals and offers today'}
    ]

    return(
        <>
        <div className="flex flex-wrap justify-center gap-6 p-8 bg-white">
            {mesgcard.map((item) => {
                return (
                <div
                 key={item.id}
                 className="h-65 w-90 flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-gray-200 shadow-sm group "
            >
                {/* Logo Section ============================================================*/}
                <div className="mb-5 p-5 bg-blue-500 rounded-full text-white">
                    {item.logo}
                </div>

                {/* Content Section ========================================================== */}
                <h2 className="font-medium text-lg mb-1 text-gray-900">
                    {item.title}
                </h2>
                
                <p className="text-gray-800 leading-relaxed text-sm">
                    {item.description}
                </p>
            </div>
        )
    })}
</div>
        </>
    );
}

export default MessageCards;