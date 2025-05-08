import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <SEO
                title="Ekip İnşaat | Sayfa Bulunamadı (404)"
                description="Aradığınız sayfa bulunamadı. Ekip İnşaat web sitesinde gezinmeye devam etmek için ana sayfaya veya projelerimize göz atabilirsiniz."
                canonicalUrl="/404"
            />
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500">404</h1>
                <h2 className="text-4xl font-semibold mt-4 mb-6">Sayfa Bulunamadı</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
                    >
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        to="/BitenProjeler"
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
                    >
                        Projelerimizi İncele
                    </Link>
                </div>
            </div>

            {/* Dekoratif bileşenler */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>
        </div>
    );
};

export default NotFound; 