import React from 'react';

function PCard({ slide }) { // Destructure the slide prop
    return (
        <div className='w-[20rem] h-[30rem] flex flex-col gap-3 items-start'>
            <div className='w-[20rem] h-[20rem]'>
                <img src={slide} className='w-full h-full object-cover' />
            </div>
            <div className='text-altin'>
                Gayrimenkul
            </div>

            <div className='text-xl'>
                Proje İsmi
            </div>
            <div className='opacity-80'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt hic quo aliquam adipisci, qui temporibus corrupti optio labore quidem.
            </div>
        </div>
    );
}

export default PCard;
