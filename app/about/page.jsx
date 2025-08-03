import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-secondary text-white py-20 text-center">
        <h1 className="text-5xl font-bold">About Balimagicaltours</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your trusted partner in crafting unforgettable travel experiences around the globe.
        </p>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Balimagicaltours, we believe that travel should be an enriching experience that creates lasting memories. My name is Budi, the owner and lead guide. With my deep local knowledge, I personally curate and lead every tour to ensure it reflects our core values: your safety, comfort, and an authentic taste of Balinese culture.
            </p>
            <h2 className="text-3xl font-bold text-dark mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Expert Guides:</strong> Our local guides are passionate and knowledgeable.</li>
              <li><strong>Curated Itineraries:</strong> We design unique trips that go beyond the typical tourist spots.</li>
              <li><strong>Safety First:</strong> Your safety and well-being are our top priorities.</li>
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image src="/about1.png" alt="Team at a viewpoint" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
}