"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

// Örnek kategoriler (constants dosyasından alınabilir)
const categories = [
  {
    slug: "teknoloji",
    title: "Teknoloji",
    icon: "/images/teknoloji-icon.png",
    contents: [
      { title: "Teknoloji Haberi 1", description: "Kısa açıklama", image: "/images/tech_1.jpg" },
      { title: "Teknoloji Haberi 2", description: "Kısa açıklama", image: "/images/tech_2.jpg" },
    ],
  },
  {
    slug: "gundem",
    title: "Gündem",
    icon: "/images/gundem-icon.png",
    contents: [
      { title: "Gündem Haberi 1", description: "Kısa açıklama", image: "/images/gundem_1.jpg" },
      { title: "Gündem Haberi 2", description: "Kısa açıklama", image: "/images/gundem_2.jpg" },
    ],
  },
];

export default function CategoryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const slides = Array.from({ length: 5 }, (_, i) => ({
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
  const params = useParams(); // Slug parametresini alıyoruz
  const categorySlug = params?.slug;

  const category = categories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Kategori bulunamadı.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4">
      {/* Reklam Alanı */}
      <div className="container mx-auto px-4 py-4">
        <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">Reklam Alanı</p>
        </div>
      </div>

      {/* Navigasyon */}
      <div className="container mx-auto px-4 py-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Ana Sayfa &gt; {category.title}
        </p>
      </div>

      {/* Kategori Başlığı ve İkon */}
      <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
        <img src={category.icon} alt={category.title} className="w-16 h-16" />
        <h1 className="text-3xl font-bold">{category.title}</h1>
      </div>

      {/* Slider Section */}
      <section className="mb-8">
          <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex">
            {/* Small News Boxes on Sides */}

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

        {/* Slider */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {category.contents.slice(0, 5).map((content, index) => (
            <div key={index} className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
              <img src={content.image} alt={content.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold">{content.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* İçerikler */}
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="col-span-2">
          {category.contents.map((content, index) => (
            <div
              key={index}
              className="flex items-start bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden mb-4"
            >
              <img
                src={content.image}
                alt={content.title}
                className="w-32 h-32 object-cover flex-shrink-0"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">{content.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{content.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sağ Taraf (Reklam ve Öneriler) */}
        <div>
          <div className="w-full h-24 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg shadow-md mb-4">
            <p className="text-gray-700 dark:text-gray-300">Reklam Alanı</p>
          </div>
          <h4 className="text-lg font-bold mb-2">Sizin İçin Seçtiklerimiz</h4>
          <div className="space-y-2">
            {category.contents.slice(0, 5).map((content, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <p className="text-sm font-medium">{content.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
