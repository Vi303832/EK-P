import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import Logo from '../assets/EkipLogo.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-neutral-900 text-white font-Poppins">
            {/* Scroll to top button */}
            <div className="flex justify-center">
                <button
                    onClick={scrollToTop}
                    className="bg-[#EE1B24] hover:bg-red-700 transition-colors p-3 rounded-full relative -top-6 shadow-lg"
                    aria-label="Sayfanın başına dön"
                >
                    <FaChevronUp className="text-white text-xl" />
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white p-2 rounded-lg w-40 h-auto">
                            <img
                                src={Logo}
                                alt="Ekip Grup İnşaat Logo"
                                className="w-full h-full object-contain"
                                loading="lazy"
                                width="160"
                                height="80"
                            />
                        </div>
                        <p className='text-gray-300 text-sm pb-1 w-fit hover:text-white transition-colors'>
                            <span className="underline">Güvenilir İnşaat Çözümleri</span>
                        </p>
                        <p className='text-gray-400 text-xs'>Ekip İnşaat, Ekip Boya ve Ekip Boya İnşaat ile güvenilir çözümler.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold border-b border-[#EE1B24] pb-2 w-fit">Hızlı Erişim</h3>
                        <div className="flex flex-col space-y-2">
                            <button
                                onClick={() => navigate("/")}
                                className="hover:text-[#EE1B24] transition-colors cursor-pointer text-left"
                                aria-label="Ana sayfaya git"
                            >
                                Anasayfa
                            </button>
                            <button
                                onClick={() => navigate("/Hakkımızda")}
                                className="hover:text-[#EE1B24] transition-colors cursor-pointer text-left"
                                aria-label="Hakkımızda sayfasına git"
                            >
                                Hakkımızda
                            </button>
                            <button
                                onClick={() => navigate("/BitenProjeler")}
                                className="hover:text-[#EE1B24] transition-colors cursor-pointer text-left"
                                aria-label="Projelerimiz sayfasına git"
                            >
                                Projelerimiz
                            </button>
                            <button
                                onClick={() => navigate("/iletişim")}
                                className="hover:text-[#EE1B24] transition-colors cursor-pointer text-left"
                                aria-label="İletişim sayfasına git"
                            >
                                İletişim
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold border-b border-[#EE1B24] pb-2 w-fit">İletişim</h3>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-[#EE1B24] mt-1 flex-shrink-0" aria-hidden="true" />
                                <address className="not-italic text-sm text-gray-300">
                                    Camiikebir Mahallesi,<br />
                                    Kasımpaşa Tabakhane Cd.<br />
                                    No:17A, 34440 Beyoğlu/İstanbul
                                </address>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-[#EE1B24] flex-shrink-0" aria-hidden="true" />
                                <a href="tel:+902244530008" className="text-gray-300 hover:text-[#EE1B24] transition-colors">
                                    0224 453 00 08
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-[#EE1B24] flex-shrink-0" aria-hidden="true" />
                                <a
                                    href="mailto:insaat@ekipgrup.net"
                                    className="text-gray-300 hover:text-[#EE1B24] transition-colors"
                                    aria-label="E-posta gönder"
                                >
                                    insaat@ekipgrup.net
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold border-b border-[#EE1B24] pb-2 w-fit">Sosyal Medya</h3>
                        <p className="text-gray-300 text-sm">Sosyal medya hesaplarımızdan bizi takip edin, projelerimizden haberdar olun.</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/ekib.insaat/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-[#EE1B24] transition-colors p-3 rounded-full"
                                aria-label="Instagram sayfamızı ziyaret et"
                            >
                                <FaInstagram className="text-white text-xl" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.facebook.com/Ekib.Insaat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-[#EE1B24] transition-colors p-3 rounded-full"
                                aria-label="Facebook sayfamızı ziyaret et"
                            >
                                <FaFacebookF className="text-white text-xl" aria-hidden="true" />
                            </a>
                            <a
                                href="https://wa.me/902244530008"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-[#EE1B24] transition-colors p-3 rounded-full"
                                aria-label="WhatsApp ile iletişime geç"
                            >
                                <FaWhatsapp className="text-white text-xl" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ekip Grup İnşaat, Ekip Boya ve Ekip Boya İnşaat. Tüm Hakları Saklıdır.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <p className="text-gray-500 text-xs">
                            Güven ve Kalite, Başarının Temeli
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;