import React from 'react'
import Map from "../assets/Map.png"

function İletişim() {
    return (
        <div>
            <div className='py-30  bg-gray-500 text-white justify-center flex text-4xl' >İletişim </div>
            <div className='mx-30 flex '>
                {/*LeftSide*/}
                <div className='w-[50%] p-10 border-r-2 border-gray-300 my-5        '>
                    <div className='py-10 text-2xl'>BİZE ULAŞIN</div>
                    <div className=' flex justify-between'>
                        <div className='flex flex-col'>
                            <label className='py-2'>AD SOYAD</label>
                            <input type='text' className='border-2 px-6 py-2 rounded-3xl' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='py-2'>E-POSTA</label>
                            <input type='email' className='border-2 px-6 py-2 rounded-3xl' />
                        </div>
                    </div>
                    <div className=' flex justify-between'>
                        <div className='flex flex-col'>
                            <label className='py-2'>TELEFON</label>
                            <input type='phone' className='border-2 px-6 py-2 rounded-3xl' />
                        </div>
                        <div className='flex flex-col '>
                            <label className='py-2'>ŞİRKET </label>
                            <input type='email' className='border-2 px-6 py-2 rounded-3xl' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full py-10'>
                        <label className='py-5'>MESAJINIZ</label>
                        <textarea className='border-2 px-5 h-36 py-3 rounded-3xl '></textarea>

                    </div>
                    <div>
                        <button className='cursor-pointer px-4 py-2 border-2 rounded-3xl '>GÖNDER</button>
                    </div>

                </div>

                {/*RightSide*/}
                <div className='w-[50%]'>
                    <div className=' p-10  my-5 border-b-2 border-gray-300  '>
                        <div className='py-5 text-2xl'>İLETİŞİM</div>
                        <div className='flex gap-1 py-1'><span>TELEFON:</span><span>5xxxxxxxxx</span></div>
                        <div className='flex gap-1 py-1'><span>MAİL:</span><span>ekipgrup@hotmail.com</span></div>
                        <div className='flex gap-1 py-1'><span>ADRES:</span><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dignissimos voluptatibus.</span></div>
                    </div>
                    <div className='  p-10  my-5  '>
                        <img src={Map} />

                    </div>
                </div>


            </div>

        </div>
    )
}

export default İletişim