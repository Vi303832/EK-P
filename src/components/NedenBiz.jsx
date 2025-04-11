import React from 'react'

function NedenBiz() {
    return (
        <div className='my-20 w-full overflow-hidden'>
            <div className='px-6 md:px-20'>
                <div className='inline-block'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>Neden Biz?</h2>
                    <div className='h-1 w-1/2 bg-red-600'></div>
                </div>
            </div>

            <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 px-6 md:px-20'>
                {/* Üst */}
                <div className='border-b border-gray-200 p-6 md:p-10 lg:p-20 md:border-r'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-xl md:text-2xl text-gray-400'>01</span>
                        <span className='text-xl md:text-2xl font-bold'>THE BEST PRİCE</span>
                    </div>
                    <div className='mt-6 md:mt-10'>
                        <span className='text-base md:text-lg opacity-80'>
                            A project is an activiry to meet the creation of a unique product of service and thus activities that are under taken to accomodate outline.
                        </span>
                    </div>
                </div>

                <div className='border-b border-gray-200 p-6 md:p-10 lg:p-20'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-xl md:text-2xl text-gray-400'>02</span>
                        <span className='text-xl md:text-2xl font-bold'>Daily Consultant</span>
                    </div>
                    <div className='mt-6 md:mt-10'>
                        <span className='text-base md:text-lg opacity-80'>
                            A project is an activiry to meet the creation of a unique product of service and thus activities that are under taken to accomodate outline.
                        </span>
                    </div>
                </div>

                {/* Alt */}
                <div className='border-b md:border-b-0 border-gray-200 p-6 md:p-10 lg:p-20 md:border-r'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-xl md:text-2xl text-gray-400'>03</span>
                        <span className='text-xl md:text-2xl font-bold'>Custom Design</span>
                    </div>
                    <div className='mt-6 md:mt-10'>
                        <span className='text-base md:text-lg opacity-80'>
                            A project is an activiry to meet the creation of a unique product of service and thus activities that are under taken to accomodate outline.
                        </span>
                    </div>
                </div>

                <div className='p-6 md:p-10 lg:p-20'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-xl md:text-2xl text-gray-400'>04</span>
                        <span className='text-xl md:text-2xl font-bold'>Premium Quality</span>
                    </div>
                    <div className='mt-6 md:mt-10'>
                        <span className='text-base md:text-lg opacity-80'>
                            A project is an activiry to meet the creation of a unique product of service and thus activities that are under taken to accomodate outline.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NedenBiz