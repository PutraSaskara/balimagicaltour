"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/galleryData'; // <-- 1. Impor dari file baru

// 1. Import komponen dan style dari Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Lightbox dan CSS-nya
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const heroImages = [
  { src: '/images/gallery/guest1.jpg', alt: 'Beautiful beach destination' },
  { src: '/images/gallery/guest2.jpg', alt: 'Stunning mountain landscape' },
  { src: '/images/gallery/guest3.webp', alt: 'Iconic cultural landmark' },
  { src: '/images/gallery/guest4.webp', alt: 'Lush green rice terrace' },
];

// Data dummy untuk Testimonials
const testimonials = [
  {
    quote: "We enjoyed our Private Street Food Tour. Buid our guide  was great, very knowledgeable and friendly. So much food taste, no need to eat before you go!",
    name: "Mwissler",
    from: "Australia",
    stars: 5,
  },
  {
    quote: "We learned and ate so much during  this tour. This was definitely one of the highlights of our trip. Budi was a great guide and made you sure you were FULL and  having a great time. The tour description under promised and OVER delivered! Thank you Budi",
    name: "Nick C",
    from: "USA",
    stars: 5,
  },
  {
    quote: "Budi an amazing guide, he was so happy and energetic always happy to answer any questions. he was full of fantastic  information. I fell us had an excelent understanding of the culture to him he was very profesional",
    name: "Mario",
    from: "Singapore",
    stars: 5,
  },
];

// 2. Filter untuk mendapatkan gambar featured saja
const featuredGalleryImages = galleryImages.filter(image => image.featured);


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
   // State untuk Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const activities = [
    { name: 'Bali Swing', image: '/activity1.jpg', description: 'Capture unforgettable moments on the iconic Bali swing with a lush green forest backdrop.' },
    { name: 'Sightseeing', image: '/activity2.jpg', description: 'Explore exotic temples, stunning beaches, and a variety of charming Balinese cultural icons.' },
    { name: 'Adventure', image: '/activity4.jpg', description: 'Get your adrenaline pumping with exciting activities like rafting, ATV rides, and various water sports.' },
    { name: 'Hiking', image: '/activity3.webp', description: 'Hike to the peak of a Balinese volcano to witness a spectacular sunrise view.' },
  ];
  
  const getStyle = (index) => {
    const totalItems = heroImages.length;
    let style = {
      transform: 'translateX(150%) scale(0.4)',
      opacity: 0,
      zIndex: 0,
    };
    if (index === currentIndex) {
      style = { transform: 'translateX(0%) scale(1)', opacity: 1, zIndex: 30 };
    } else if (index === (currentIndex + 1) % totalItems) {
      style = { transform: 'translateX(80%) scale(0.7)', opacity: 1, zIndex: 20 };
    } else if (index === (currentIndex + 2) % totalItems) {
      style = { transform: 'translateX(140%) scale(0.5)', opacity: 1, zIndex: 10 };
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      style = { transform: 'translateX(-80%) scale(0.7)', opacity: 0, zIndex: 20 };
    }
    return style;
  };

  return (
    <div>
     {/* ================================================================== */}
      {/* HERO SECTION DENGAN BACKGROUND DAN CAROUSEL                      */}
      {/* ================================================================== */}
      <section className="relative h-[85vh] lg:grid lg:grid-cols-2 lg:items-center overflow-hidden">
        
        {/* Latar Belakang Utama (Desktop) */}
        <div className="lg:block absolute inset-0 -z-20">
          <Image
            src="/hero1.jpg"
            alt="Bali background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay sedikit lebih gelap untuk kontras */}
        </div>

        {/* Kolom Kiri: Konten Teks */}
        <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 lg:px-12">
          {/* Panel kaca dihapus dari div ini */}
          <div className="max-w-xl">
            <p className="text-primary font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
              Adventure Awaits
            </p>
            {/* Warna teks diubah menjadi putih dan diberi bayangan */}
            <h1 className="text-white text-5xl md:text-5xl font-bold my-4 leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Explore The World One Adventure At A Time
            </h1>
            {/* Warna teks diubah menjadi abu-abu terang dan diberi bayangan */}
           <p className="text-gray-200 lg:text-gray-100 mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Let us handle the details while you create timeless memories. Discover authentic Balinese culture and breathtaking landscapes with our expert-guided tours.
          </p>
            <Link href="/tours" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
              View Packages
            </Link>
          </div>
        </div>


        {/* Kolom Kanan: Carousel (Hanya di Desktop) - INI DIKEMBALIKAN */}
        <div className="relative w-full h-full hidden lg:flex items-center justify-center">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out"
              style={getStyle(index)}
            >
              <div className="relative w-[80%] max-w-2xl h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Latar Belakang Gambar (Hanya di Mobile) */}
        {/* <div className="lg:hidden absolute inset-0 -z-10">
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div> */}
      </section>

      {/* ... (bagian activities section tetap sama) ... */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-semibold">Discover Your</p>
          <h2 className="text-4xl font-bold mb-12">Beyond the Unforgettable Tour Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <div key={activity.name} className="bg-background p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                   <Image src={activity.image} alt={activity.name} width={200} height={160} className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-semibold">{activity.name}</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ================================================================== */}
      {/* SECTION GALLERY DENGAN CAROUSEL SWIPER                           */}
      {/* ================================================================== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold">Our Gallery</p>
            <h2 className="text-4xl font-bold">Unforgettable Moments in Bali</h2>
            <p className="text-gray-600 mt-2">A glimpse of the beauty and adventures that await you.</p>
          </div>
          
          {/* 2. Ganti grid dengan komponen Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              // Tampilkan 1 slide di mobile
              320: { slidesPerView: 1, spaceBetween: 20 },
              // Tampilkan 2 slide di tablet
              768: { slidesPerView: 2, spaceBetween: 30 },
              // Tampilkan 4 slide di desktop
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="w-full"
          >
            {featuredGalleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Komponen Lightbox (tidak berubah) */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={featuredGalleryImages}
        index={lightboxIndex}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />

      {/* ================================================================== */}
      {/* SECTION BARU 2: TESTIMONIALS                                       */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold">Testimonials</p>
            <h2 className="text-4xl font-bold">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-xl shadow-lg flex flex-col">
                <Quote className="text-primary w-10 h-10 mb-4" />
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.from}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}