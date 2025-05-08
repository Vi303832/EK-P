import React, { useState } from 'react'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function ContactDisplay() {
    const navigate = useNavigate()
    const [status, setStatus] = useState('')

    const handleContactClick = () => {
        navigate("/iletişim")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch('https://formspree.io/f/mblgqnbl', {
                method: 'POST',
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                e.target.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <div className="bg-neutral-900 py-20 font-Poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-4xl font-bold text-white mb-6 cursor-pointer">
                            Projeleriniz İçin <span className="text-[#EE1B24]">Bizimle İletişime</span> Geçin
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Sorularınız mı var? Size yardımcı olmak için buradayız.
                            Projeleriniz hakkında konuşmak veya daha fazla bilgi almak için
                            iletişim sayfamızı ziyaret edin.
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="bg-[#EE1B24] text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center text-lg font-medium group"
                        >
                            <FaEnvelope className="mr-3" />
                            İletişime Geç
                            <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="md:w-1/2 flex justify-center max-md:hidden">
                        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                Hızlı İletişim
                            </h3>

                            {status === 'success' && (
                                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                                    Mesajınız başarıyla gönderildi!
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                                    Bir hata oluştu. Lütfen tekrar deneyin.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Adınız Soyadınız"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-posta Adresiniz"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <textarea
                                        name="message"
                                        placeholder="Mesajınız"
                                        rows="3"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-[#EE1B24] text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-75"
                                >
                                    {status === 'submitting' ? 'Gönderiliyor...' : 'Gönder'}
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    Veya detaylı bilgi için iletişim sayfamızı ziyaret edin
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDisplay