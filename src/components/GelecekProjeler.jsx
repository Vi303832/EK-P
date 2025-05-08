import React, { useEffect } from 'react'
import PCard from './PCard'
import Gelecek from './Gelecek'
import P2Card from './P2Card'
import "./Gelecek.js"
import { FaCalendarAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function GelecekProjeler() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const realProjects = Gelecek.filter(project => project.id !== "all");

    return (
        <div className="min-h-screen bg-gray-50 font-Poppins">
            <div className='py-32 bg-gradient-to-r from-gray-600 to-gray-500 text-white flex items-center justify-center text-4xl font-semibold shadow-lg text-center'>
                <div className="flex items-center whitespace-nowrap">
                    <FaCalendarAlt className="mr-4" />
                    <h1 className="max-md:text-2xl">Gelecek Projelerimiz</h1>
                </div>
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
                            className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl"
                        >
                            <span>Biten Projeleri Görüntüle</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {realProjects.map((props, index) => (
                            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                <P2Card props={props} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GelecekProjeler