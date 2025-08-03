import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/data/tours';

const TourCard = ({ tour }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <Link href={`/tours/${tour.slug}`}>
        <div className="relative h-56 w-full">
          <Image src={tour.image} alt={tour.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <p className="text-sm text-primary font-semibold">{tour.location}</p>
          <h3 className="text-xl font-bold mt-2 mb-2">{tour.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{tour.duration}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-secondary">Rp {tour.price}</p>
            <span className="text-primary font-semibold">View Details &rarr;</span>
          </div>
        </div>
    </Link>
  </div>
);

export default function ToursPage() {
  return (
    <div>
      <section className="bg-white py-12 text-center">
        <h1 className="text-5xl font-bold">Our Tour Packages</h1>
        <p className="mt-4 text-lg text-gray-600">Find your next adventure from our curated list of tours.</p>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
}