// app/components/WhatsAppButton.jsx

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Menggunakan ikon dari library

const WhatsAppButton = () => {
  // Ganti nomor telepon di bawah ini dengan nomor Anda
  // Format: 6281234567890 (tanpa +, spasi, atau tanda hubung)
  const phoneNumber = '6285738480128';
  const message = "Hello, I'm interested in one of your tour packages.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
};

export default WhatsAppButton;