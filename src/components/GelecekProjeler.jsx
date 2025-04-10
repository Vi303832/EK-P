import React, { useEffect } from 'react'
import P2Card from './P2Card'
import Gelecek from './Gelecek.js'
import { FaCalendarAlt } from 'react-icons/fa'

function GelecekProjeler() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-Poppins">
            <div className='py-32 bg-gradient-to-r from-gray-600 to-gray-500 text-white flex items-center justify-center text-4xl font-semibold shadow-lg'>
                <FaCalendarAlt className="mr-4" />
                <h1>Gelecek Projelerimiz</h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Gelecek && Gelecek.map((props, index) => (
                        <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                            <P2Card props={props} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GelecekProjeler