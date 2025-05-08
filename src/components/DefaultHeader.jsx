import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Logo from '../assets/EkipLogo.png';

function DefaultHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    // Sayfa kaydırıldığında header'ın arka planını değiştirme
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Mobil menü açıkken body'nin kaydırılmasını engelleme
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    const handleNavigate = (path) => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        navigate(path);
    };

    const headerClasses = ` top-0 left-0 w-full z-50 font-Poppins transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/90'
        }`;

    return (
        <header className={headerClasses}>
            <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 py-4 h-[90px]">
                {/* Logo */}
                <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigate('/')}>
                    <div className='h-[120%]  flex justify-center mx-10 max-md:mx-5 max-sm:mx-0 '>
                        <img src={Logo} onClick={() => handleNavigate("/")} className='h-full object-cover cursor-pointer w-[100px]' />
                    </div>
                </div>

                {/* Masaüstü Menü */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    <NavItem
                        path="/"
                        label="Anasayfa"
                        currentPath={pathname}
                        onClick={() => handleNavigate("/")}
                    />

                    {/* Projeler Dropdown */}
                    <div className="relative group">
                        <button className={`flex items-center px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 cursor-pointer ${pathname.includes('/Projeler') ? 'text-red-600 bg-red-50' : ''
                            }`}>
                            <span>Projeler</span>
                            <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-1 w-56 origin-top-left bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 z-50">
                            <div className="py-1">
                                <DropdownItem
                                    label="Biten Projeler"
                                    onClick={() => handleNavigate("/BitenProjeler")}
                                    currentPath={pathname}
                                    path="/BitenProjeler"
                                />
                                <DropdownItem
                                    label="Devam Eden Projeler"
                                    onClick={() => handleNavigate("/DevamEdenProjeler")}
                                    currentPath={pathname}
                                    path="/DevamEdenProjeler"
                                />
                                <DropdownItem
                                    label="Gelecek Projeler"
                                    onClick={() => handleNavigate("/GelecekProjeler")}
                                    currentPath={pathname}
                                    path="/GelecekProjeler"
                                />
                            </div>
                        </div>
                    </div>

                    <NavItem
                        path="/iletişim"
                        label="İletişim"
                        currentPath={pathname}
                        onClick={() => handleNavigate("/iletişim")}
                    />

                    <NavItem
                        path="/Hakkımızda"
                        label="Hakkımızda"
                        currentPath={pathname}
                        onClick={() => handleNavigate("/Hakkımızda")}
                    />
                </div>

                {/* Mobil Menü Butonu */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className="sr-only">Menüyü Aç/Kapat</span>
                    <FaBars size={22} />
                </button>
            </nav>

            {/* Mobil Menü */}
            <div className={`fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Mobil Menü Kapatma Butonu */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer"
                >
                    <IoMdClose size={24} />
                </button>

                <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
                    <nav className="flex-1 space-y-2">
                        <MobileNavItem
                            label="Anasayfa"
                            onClick={() => handleNavigate("/")}
                            currentPath={pathname}
                            path="/"
                        />

                        {/* Mobil Projeler Accordion */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex justify-between items-center w-full py-3 px-4 text-left text-lg font-medium rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                            >
                                <span>Projeler</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown Content */}
                            <div className={`transition-all duration-300 overflow-hidden ${dropdownOpen ? 'max-h-60' : 'max-h-0'}`}>
                                <div className="py-2 pl-6 space-y-2">
                                    <MobileDropdownItem
                                        label="Biten Projeler"
                                        onClick={() => handleNavigate("/BitenProjeler")}
                                        currentPath={pathname}
                                        path="/BitenProjeler"
                                        delay="delay-100"
                                        isOpen={dropdownOpen}
                                    />
                                    <MobileDropdownItem
                                        label="Devam Eden Projeler"
                                        onClick={() => handleNavigate("/DevamEdenProjeler")}
                                        currentPath={pathname}
                                        path="/DevamEdenProjeler"
                                        delay="delay-200"
                                        isOpen={dropdownOpen}
                                    />
                                    <MobileDropdownItem
                                        label="Gelecek Projeler"
                                        onClick={() => handleNavigate("/GelecekProjeler")}
                                        currentPath={pathname}
                                        path="/GelecekProjeler"
                                        delay="delay-300"
                                        isOpen={dropdownOpen}
                                    />
                                </div>
                            </div>
                        </div>

                        <MobileNavItem
                            label="İletişim"
                            onClick={() => handleNavigate("/iletişim")}
                            currentPath={pathname}
                            path="/iletişim"
                        />

                        <MobileNavItem
                            label="Hakkımızda"
                            onClick={() => handleNavigate("/Hakkımızda")}
                            currentPath={pathname}
                            path="/Hakkımızda"
                        />
                    </nav>

                    {/* Mobil Menu Footer */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-center text-gray-600 text-sm">
                            © {new Date().getFullYear()} EKİP İnşaat ve Boya
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Masaüstü Navigasyon Öğesi
const NavItem = ({ path, label, currentPath, onClick }) => {
    const isActive = path === currentPath;

    return (
        <button
            onClick={onClick}
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${isActive
                ? 'text-red-600 bg-red-50'
                : 'hover:bg-red-50 hover:text-red-600'
                }`}
        >
            {label}
        </button>
    );
};

// Dropdown Menü Öğesi
const DropdownItem = ({ label, onClick, currentPath, path }) => {
    const isActive = path === currentPath;

    return (
        <button
            onClick={onClick}
            className={`block w-full text-left px-4 py-2 text-sm cursor-pointer ${isActive
                ? 'bg-red-50 text-red-600'
                : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
        >
            {label}
        </button>
    );
};

// Mobil Navigasyon Öğesi
const MobileNavItem = ({ label, onClick, currentPath, path }) => {
    const isActive = path === currentPath;

    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center py-3 px-4 rounded-lg text-lg font-medium transition-colors cursor-pointer ${isActive
                ? 'bg-red-100 text-red-600'
                : 'hover:bg-red-50'
                }`}
        >
            {label}
        </button>
    );
};

// Mobil Dropdown Öğesi
const MobileDropdownItem = ({ label, onClick, currentPath, path, delay, isOpen }) => {
    const isActive = path === currentPath;

    return (
        <button
            onClick={onClick}
            className={`block w-full text-left py-2 px-4 rounded-md transform transition-all duration-300 cursor-pointer ${delay} 
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                ${isActive ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 text-gray-700'}`}
        >
            {label}
        </button>
    );
};

export default DefaultHeader;