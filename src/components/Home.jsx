import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/mainpagedata.js";

import {
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';

const slides = [
    {
        image: 'https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'UNITED ELITE', buttonLabel: 'Discover', buttonLink: '/about'
    },
    {
        image: 'https://images.pexels.com/photos/8101971/pexels-photo-8101971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    },
    {
        image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const MainCards = data;

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
            {/* Slideshow */}
            <>
                {/* Slideshow Images */}
                <div className="w-full relative z-10 mt-[130px]">
                    <img
                        className="w-full h-[650px] object-cover transition-all ease-in duration-300"
                        src={slides[currentIndex].image}
                        alt=""
                    />

                    {/* Slideshow Arrow buttons */}
                    <div className="hidden lg:grid absolute top-[43%] left-0 p-4 ml-16">
                        <button className="border border-amber-500 bg-amber-100 p-2 text-4xl" onClick={prevSlide}>
                            <ChevronLeftIcon className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="hidden lg:grid absolute top-[43%] right-0 p-4 mr-16">
                        <button className="border border-amber-500 bg-amber-100 p-2 text-4xl" onClick={nextSlide}>
                            <ChevronRightIcon className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Slideshow Circle buttons */}
                    <div className="hidden lg:flex absolute top-[95%] left-1/2 space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-amber-200' : 'bg-amber-500'}`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>

                    {/* Slideshow Image text */}
                    <div className="hidden lg:flex absolute top-[10%] left-1/2 transform -translate-x-1/2 flex-col">
                        {slides[currentIndex].text && (
                            <div className="text-center pointer-events-auto">
                                <p className="text-yellow-500 font-bold text-9xl border border-amber-300">{slides[currentIndex].text}</p>
                            </div>
                        )}

                        {/* Slideshow Button */}
                        {slides[currentIndex].buttonLabel && (
                            <div className="text-center mt-4">
                                <button className="p-1 text-6xl font-bold border border-white text-yellow-300 bg-gradient-to-b from-amber-700 to-amber-500">
                                    {slides[currentIndex].buttonLabel}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Welcome */}
                <div>
                    <div className="flex justify-center mt-8 mb-8">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <h1 className="text-4xl font-bold text-center">
                                Welcome to United Elite
                            </h1>
                            <p className="text-center text-yellow-500 text-6xl font-bold tracking-widest">
                                Success starts here!
                            </p>
                        </div>
                    </div>
                </div>
            </>

            {/* Cards */}
            <>
                <div className="grid lg:grid-cols-3 md:grid-cols-1">
                    {MainCards.map((item, index) => (
                        // Images
                        <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between text-center items-center mx-auto content-div w-[300px] h-[400px] my-12">
                            <div
                                key={index}
                                className="w-full h-[50%] bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            {/* Title */}
                            <div className="text-2xl font-bold text-yellow-500 pt-2">{item.title}</div>
                            {/* Text */}
                            <div className="bottom-0 left-0 right-0 transition-all ease-in-out duration-300 text-black">
                                {item.text}
                            </div>
                            {/* Button */}
                            <div className="pt-5 text-center">
                                <a href={item.link}>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 text-yellow-300 font-bold text-lg bg-gradient-to-b from-amber-500 to-amber-700">
                                        {item.button}
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    );
}