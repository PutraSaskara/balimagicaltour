"use client"; // Wajib ditambahkan untuk menggunakan state dan event

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Icon untuk hamburger & close

const Header = () => {
  // State untuk melacak kondisi menu (terbuka/tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary/90 backdrop-blur-sm text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <Image src="/logo.png" alt="Balimagicaltours Logo" width={50} height={25} className="mr-2 object-contain" />
          Balimagicaltours
        </Link>

        {/* Menu untuk Desktop (md ke atas) */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/tours" className="hover:text-primary transition-colors">Tours</Link></li>
          <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
        <Link href="/tours" className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          Book A Trip
        </Link>

        {/* Tombol Hamburger (hanya muncul di mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu untuk Mobile (muncul saat isMenuOpen true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center">
            <li className="w-full text-center py-4 border-b border-gray-700">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="w-full text-center py-4 border-b border-gray-700">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
            </li>
            <li className="w-full text-center py-4 border-b border-gray-700">
              <Link href="/tours" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Tours</Link>
            </li>
            <li className="w-full text-center py-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
            </li>
            <li className="w-full p-4">
              <Link href="/tours" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Book A Trip
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;