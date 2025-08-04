import { tourPackages } from '@/data/tours';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function TourDetailPage({ params }) {
  const { slug } = params;
  const tour = tourPackages.find(p => p.slug === slug);

  if (!tour) {
    notFound();
  }

  const phoneNumber = '6285738480128'; // Ganti dengan nomor WhatsApp Anda
  const message = `Hello, I would like to book the "${tour.title}" tour.`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white">
      <section className="relative h-[50vh]">
        <Image src={tour.image} alt={tour.title} layout="fill" objectFit="cover" className="brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-lg">{tour.location}</p>
            <h1 className="text-6xl font-extrabold mt-2">{tour.title}</h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-secondary mb-4">About The Tour</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{tour.description}</p>
            <h2 className="text-3xl font-bold text-secondary mb-4">Itinerary</h2>
            <div className="space-y-4">
              {tour.itinerary.map((day, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold mr-4">{index + 1}</div>
                  <p className="text-gray-700">{day}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-background p-8 rounded-xl shadow-lg sticky top-28">
              <p className="text-lg">Starting from</p>
              <p className="text-4xl font-bold text-secondary my-2">USD {tour.price}</p>
              <p className="text-gray-600 mb-6">per person</p>
               <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-primary text-white text-lg font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Book Now via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}