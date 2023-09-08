import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';

const slides = [
    {
        image: 'https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'UNITED ELITE', buttonLabel: 'Discover'
    },
    {
        image: 'https://images.pexels.com/photos/8101971/pexels-photo-8101971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'UNITED ELITE', buttonLabel: 'Discover'
    },
    {
        image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'UNITED ELITE', buttonLabel: 'Discover'
    }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 10000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Images */}
            <div className="w-full h-screen relative">
                <img
                    className="w-full h-[650px] object-cover transition-all ease-in duration-300"
                    src={slides[currentIndex].image}
                    alt=""
                />


                {/* Arrow buttons */}
                <div className="absolute top-[23%] left-0 p-4 ml-16">
                    <button className="border border-amber-500 bg-amber-100 p-2 text-4xl" onClick={prevSlide}>
                        <ChevronLeftIcon className="w-8 h-8" />
                    </button>
                </div>
                <div className="absolute top-[23%] right-0 p-4 mr-16">
                    <button className="border border-amber-500 bg-amber-100 p-2 text-4xl" onClick={nextSlide}>
                        <ChevronRightIcon className="w-8 h-8" />
                    </button>
                </div>

                {/* Circle buttons */}
                <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-amber-200' : 'bg-amber-500'}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>

                {/* Image text */}
                <div className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="text-center pointer-events-auto">
                        <p className="text-amber-600 font-bold text-9xl border border-amber-300 bg-amber-200">{slides[currentIndex].text}</p>
                        <button className="p-1 mt-4 text-7xl text-amber-600 border border-amber-300 bg-amber-200">{slides[currentIndex].buttonLabel}</button>
                    </div>
                </div>

            </div>
        </>
    );
}