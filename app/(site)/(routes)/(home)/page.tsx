"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Array.from({ length: 15 }, (_, i) => ({
    image: `/images/slider_${i + 1}.jpg`,
    title: `Slide ${i + 1} Title`,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      {/* Top Advertisement */}
      <div className="container mx-auto px-4 py-4">
        <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">Top Banner Advertisement</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Slider Section */}
        <section className="mb-8">
          <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex">
            {/* Small News Boxes on Sides */}
            <div className="hidden sm:flex flex-col justify-between w-1/5 p-2">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={`/images/news_${i + 1}.jpg`}
                    alt={`News ${i + 1}`}
                    className="w-full h-20 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-sm font-bold">News {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4">
                <h3 className="text-white text-lg font-bold">
                  {slides[currentSlide].title}
                </h3>
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
              >
                ❮
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
              >
                ❯
              </button>
            </div>

            <div className="hidden sm:flex flex-col justify-between w-1/5 p-2">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={`/images/news_${i + 4}.jpg`}
                    alt={`News ${i + 4}`}
                    className="w-full h-20 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-sm font-bold">News {i + 4}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx
                    ? "bg-blue-500"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentSlide(idx)}
              ></button>
            ))}
          </div>
        </section>

        {/* Category Sections */}
        {"Category 1,Category 2".split(",").map((category, idx) => (
          <section key={idx} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 10 }, (_, itemIdx) => (
                <div
                  key={itemIdx}
                  className="flex bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={`/images/category_${itemIdx + 1}.jpg`}
                    alt={`${category} Content ${itemIdx + 1}`}
                    className="w-2/5 object-cover"
                  />
                  <div className="p-4 w-3/5 flex flex-col justify-between">
                    <h4 className="text-lg font-bold mb-2">{category} Content {itemIdx + 1}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 dark:text-blue-400 font-bold">
                Daha Fazla Göster
              </button>
            </div>

            {/* Advertisement */}
            <div className="my-8">
              <div className="w-full h-24 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300">Advertisement Space</p>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer Advertisement */}
      <div className="container mx-auto px-4 mb-8">
        <div className="w-full h-24 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">Footer Advertisement Space</p>
        </div>
      </div>
    </div>
  );
}