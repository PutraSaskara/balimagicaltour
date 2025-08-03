import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="bg-white py-12 text-center">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-600">We'd love to hear from you! Please fill out the form below or reach out to us on social media.</p>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          
          <form action="https://api.web3forms.com/submit" method="POST">

            {/* GANTI DENGAN ACCESS KEY ANDA DARI WEB3FORMS */}
            <input type="hidden" name="access_key" value="85a8c814-e66d-469e-b4cd-408ca44e367e" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
            </div>
            
            <div className="mt-8 text-center border-t pt-6">
              <p className="text-gray-600 mb-4">Or connect with us on:</p>
              <div className="flex justify-center space-x-6">
                  <Link href="https://www.instagram.com/balimagicaltour/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram className="text-gray-500 hover:text-primary transition-colors duration-300" size={32} />
                  </Link>
                  <Link href="https://wa.me/6285738480128" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <FaWhatsapp className="text-gray-500 hover:text-primary transition-colors duration-300" size={32} />
                  </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button type="submit" className="bg-primary text-white font-bold px-10 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}