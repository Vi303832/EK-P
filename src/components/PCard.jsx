import React from 'react';

function PCard({ slide }) { // Destructure the slide prop

    let { kategori, İsim, Açıklama, img } = slide

    return (
        <div className='w-[20rem] h-[30rem] flex flex-col gap-3 items-start'>
            <div className='w-[20rem] h-[20rem]'>
                <img src={img} className='w-full h-full object-cover' />
            </div>
            <div className='text-altin'>
                {kategori}
            </div>

            <div className='text-xl'>
                {İsim}
            </div>
            <div className='opacity-80'>
                {Açıklama}
            </div>
        </div>
    );
}

export default PCard;
