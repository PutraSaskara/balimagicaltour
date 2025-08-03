import Link from 'next/link';
import Image from 'next/image';
// 1. Impor ikon yang dibutuhkan
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold flex items-center mb-4">
                  <Image src="/logo.png" alt="Balimagicaltours Logo" width={50} height={25} className="mr-2 object-contain" />
                  Balimagicaltours
              </Link>
              <p className="text-gray-300 max-w-md">
                  Your trusted partner in exploring Bali. We provide curated tours and unforgettable adventures, one trip at a time.
              </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link href="/tours" className="text-gray-300 hover:text-primary">Tours</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <span className="break-words">mang_budi08@yahoo.com</span></li>
              <li>Email: <span className="break-words">budidharmawan50@gmail.com</span></li>
              <li>Phone: +6285738480128</li>
            </ul>
            {/* 2. Tambahkan ikon sosial media di sini */}
              <div className="mt-4 flex space-x-4">
                <Link href="https://www.instagram.com/balimagicaltour/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="text-gray-300 hover:text-primary transition-colors duration-300" size={24} />
                </Link>
                <Link href="https://wa.me/6285738480128" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="text-gray-300 hover:text-primary transition-colors duration-300" size={24} />
                </Link>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Balimagicaltours. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;