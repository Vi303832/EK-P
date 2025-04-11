import React, { useEffect } from 'react'
import PCard from './PCard'
import Biten from './Biten'
import P2Card from './P2Card'
import "./Biten.js"
import { FaCheckCircle } from 'react-icons/fa'

function BitenProjeler() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-Poppins">
            <div className='py-32 bg-gradient-to-r from-gray-600 to-gray-500 text-white flex items-center justify-center text-4xl font-semibold shadow-lg text-center'>
                <div className="flex items-center whitespace-nowrap">
                    <FaCheckCircle className="mr-4" />
                    <h1 className="max-md:text-2xl">Biten Projelerimiz</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Biten && Biten.filter(props => props.İsim !== "Bütün Biten Projeler").map((props, index) => (
                        <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                            <P2Card props={props} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BitenProjeler