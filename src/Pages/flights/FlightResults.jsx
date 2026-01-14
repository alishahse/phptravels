import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FlightResults = () => {
    const { from, to, date } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 ">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center px-10">
                <div className="flex gap-4 p-3 items-center">
                    <span className="font-bold uppercase">{from} ✈ {to}</span>
                    <span className="bg-blue-500 px-2 rounded text-sm">{date}</span>
                </div>

                </div>
        </div>
    );
};

export default FlightResults;