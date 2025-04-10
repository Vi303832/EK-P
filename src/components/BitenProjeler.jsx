import React, { useEffect } from 'react'
import PCard from './PCard'
import Biten from './Biten'
import P2Card from './P2Card'
import "./Biten.js"


function BitenProjeler() {

    useEffect(() => {
        // Sayfa değiştiğinde en üste kaydır
        window.scrollTo(0, 0);
    }, []);



    return (
        <div>
            <div className='py-30 bg-gray-500 text-white justify-center flex text-4xl' >Biten Projelerimiz</div>
            <div className='p-10  flex flex-wrap justify-center gap-1* '>
                {Biten && Biten.map((props, index) => (


                    <P2Card props={props} />



                ))}

            </div>


        </div>
    )
}

export default BitenProjeler