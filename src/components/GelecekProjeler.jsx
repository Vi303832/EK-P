import React from 'react'
import PCard from './PCard'
import Biten from './Biten'
import P2Card from './P2Card'
import Gelecek from './Gelecek.js'


function GelecekProjeler() {
    return (
        <div>
            <div className='py-30 bg-gray-500 text-white justify-center flex text-4xl' >Gelecek Projelerimiz</div>
            <div className='p-10  flex flex-wrap justify-center gap-1* '>
                {Gelecek && Gelecek.map((props, index) => (


                    <P2Card props={props} />



                ))}

            </div>


        </div>
    )
}

export default GelecekProjeler