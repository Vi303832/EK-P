import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/EkipLogo.png'; // Adjust the path to your logo image

function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo and Tagline Section */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-32 h-24 flex items-center justify-center rounded">
                            {/* Replace with your actual logo */}
                            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-2xl font-medium text-center">Kaliteli Yaşam Alanları</h3>
                        <p className="text-gray-300 underline underline-offset-2 text-center">
                            Güvenilir İnşaat Çözümleri
                        </p>
                    </div>

                    {/* Contact Information Section */}
                    <div className="flex flex-col space-y-6 items-center">
                        <h4 className="text-xl font-medium mb-2">İletişim</h4>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
                            <address className="not-italic text-center">
                                Camiikebir Mahallesi,<br />
                                Kasımpaşa Tabakhane Cd.<br />
                                No:17A, 34440 Beyoğlu/İstanbul
                            </address>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-red-600 flex-shrink-0" />
                            <span>0212 361 12 81</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-red-600 flex-shrink-0" />
                            <span>info@isasinsaat.com</span>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col space-y-6 items-center">
                        <h4 className="text-xl font-medium mb-2">Bizi Takip Edin</h4>
                        <div className="flex flex-col space-y-4 items-center">
                            <a href="#" className="flex items-center space-x-3 hover:text-red-600 transition-colors duration-300">
                                <FaInstagram className="text-lg" />
                                <span>Instagram</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-red-600 transition-colors duration-300">
                                <FaFacebookF className="text-lg" />
                                <span>Facebook</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-red-600 transition-colors duration-300">
                                <FaWhatsapp className="text-lg" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Ekip İnşaat. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;