'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { heroImages } from '@/consts';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handlers for manual image navigation
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? heroImages.length - 1 : prevImage - 1
    );
  };

  return (
    <section className="relative sm:h-[100vh] h-[70vh] w-full overflow-hidden">
      <Image
        src={heroImages[currentImage]}
        alt="Hero background"
        fill
        blurDataURL='/hero1-blur.jpg'
        placeholder='blur'
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-4"
        >
          Study In Russia
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl sm:text-2xl text-zinc-200 mb-8"
        >
          Join with us to make your life successful.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild className="text-zinc-200 bg-[#002244] hover:bg-[#0a2351]">
            <Link href="#Consultation">Get Free Consultation</Link>
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft /> 
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight />
      </button>
    </section>
  );
};

export default Hero;


