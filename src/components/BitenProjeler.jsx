import React, { useEffect, useState } from 'react'
import PCard from './PCard'
import Biten from './Biten'
import P2Card from './P2Card'
import "./Biten.js"
import { FaCheckCircle } from 'react-icons/fa'

function BitenProjeler() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const realProjects = Biten.filter(project => project.id !== "all");

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
            {/* Banner Alanı */}
            <div className='py-20 bg-[#EE1B24] text-white flex flex-col items-center justify-center text-center shadow-lg'>
                <h1 className="text-5xl font-bold mb-4 max-md:text-3xl">Projelerimiz</h1>
                <p className="text-xl max-w-2xl mx-auto font-normal max-md:text-base">
                    Ekip İnşaat olarak, modern mimari ve kaliteli işçilik ile hayata geçirdiğimiz projelerimizi keşfedin.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {realProjects.length === 0 ? (
                    <div className="flex justify-center items-center h-[400px]">
                        <h2 className="text-2xl text-gray-600 font-semibold">Henüz proje yok</h2>
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

export default BitenProjeler
