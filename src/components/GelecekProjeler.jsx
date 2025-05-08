import React, { useEffect, useState } from 'react'
import PCard from './PCard'
import Gelecek from './Gelecek'
import P2Card from './P2Card'
import "./Gelecek.js"
import { FaCalendarAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SEO from './SEO'

function GelecekProjeler() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const realProjects = Gelecek.filter(project => project.id !== "all");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(realProjects.length / projectsPerPage);
    const startIdx = (currentPage - 1) * projectsPerPage;
    const endIdx = startIdx + projectsPerPage;
    const currentProjects = realProjects.slice(startIdx, endIdx);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-Poppins">
            <SEO
                title="Ekip İnşaat | Gelecek Projelerimiz"
                description="Ekip İnşaat'ın yakın gelecekte hayata geçirilecek projeleri. Planlanan inşaat projeleri ve gelecek vizyonumuz hakkında bilgi edinin."
                keywords="gelecek projeler, planlanan projeler, Ekip İnşaat, yeni inşaat projeleri, yakında başlayacak projeler"
                canonicalUrl="/GelecekProjeler"
            />
            {/* Banner Alanı */}
            <div className='py-20 bg-[#EE1B24] text-white flex flex-col items-center justify-center text-center shadow-lg'>
                <h1 className="text-5xl font-bold mb-4 max-md:text-3xl">Gelecek Projelerimiz</h1>
                <p className="text-xl max-w-2xl mx-auto font-normal max-md:text-base">
                    Ekip İnşaat olarak, yakında hayata geçireceğimiz projelerimizi keşfedin.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {realProjects.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-[400px] bg-gray-800/5 rounded-xl p-8 space-y-6">
                        <h2 className="text-3xl text-gray-700 font-semibold text-center">Henüz Gelecek Proje Bulunmamaktadır</h2>
                        <p className="text-gray-500 text-center max-w-lg">
                            Şu an için planlanmış gelecek projemiz bulunmuyor. Tamamlanmış projelerimizi inceleyebilirsiniz.
                        </p>
                        <button
                            onClick={() => navigate("/BitenProjeler")}
                            className="bg-[#EE1B24] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
                        >
                            <span>Biten Projeleri Görüntüle</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {currentProjects.map((props, index) => (
                                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                    <P2Card props={props} />
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-10">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 hover:bg-gray-300 transition-colors"
                                >
                                    Önceki
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-10 h-10 rounded-full font-semibold flex items-center justify-center ${currentPage === i + 1 ? 'bg-[#EE1B24] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 hover:bg-gray-300 transition-colors"
                                >
                                    Sonraki
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default GelecekProjeler