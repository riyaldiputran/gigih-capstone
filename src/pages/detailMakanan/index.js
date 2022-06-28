import Head from "next/head";
import Image from "next/image";
import { HiShare } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import {HiOutlineArrowLeft} from "react-icons/hi";
const Home = () => {
    return (
        <div>
            <div className="font-sans">
                <div className="bg-[#ffffff]">
                    <Head>

                        <title >Detail Makanan </title>
                    </Head>
                    <div className="bg-[#412C5B] h-[44px]">
                    </div>
                    <div className="flex bg-cover bg-[url('/images/tehbotol2.jpg')] h-[375px] mx-auto">
                        <button
                            className="bg-violet-900/[0.25] flex-initial mx-[21px] my-[21px] h-[43px] w-[43px]   bg-[#412C5B]  text-base text-[12px] font-semibold text-[#ffffff] rounded-[25px] outline-1 outline  outline-violet-900"
                        >
                            <HiOutlineArrowLeft className="ml-[15px]"/>
                        </button>
                        



                    </div>
                    <div className="bg-[#FFFFFF] h-auto shadow-[0px_-4px_6px_rgba(0,0,0,0.25)] rounded-t-[15px]">
                        <div className="px-[21px] pt-[30px]">
                            <div className=" flex">
                                <h1 className="flex-auto text-[12px]">Rizki Aulia</h1>
                                <h1 className="flex-auto text-[12px] text-center">|</h1>
                                <h1 className="flex-auto text-[12px] text-end">1 Minggu yang lalu</h1>
                            </div>
                            <div className="mt-[24px]">
                                <h1 className="text-[18px] font-bold">Teh Botol Sosro 8 Kotak</h1>
                            </div>
                            <div className="mt-[5px] flex">
                                <button
                                    className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-slate-200   bg-[#ffffff]  text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline  outline-violet-900"
                                >
                                    24 Agustus 2023
                                </button>
                                <h1 className="flex-auto text-[12px] text-end">Jumlah Porsi : 8</h1>
                            </div>
                            <div className="mt-[5px]">
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="flex-shrink mx-4 text-gray-400">Deskripsi</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>
                            </div>
                            <div className="mt-[5px]">
                                <p className="text-[12px]">Teh Botol Sosro Kotak
                                    Kadaluarsa masih sangat lama
                                    Diberi karena punya banyak banget</p>
                            </div>
                            <div className="mt-[5px]">
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-gray-400 w-full"></div>
                                </div>
                            </div>
                            <div className="mt-[5px] flex ">
                                <p className="text-[12px] text-[#240046] flex-auto">10 km dari <span className="font-bold  ">lokasi sekarang</span></p>
                                <p className="text-[12px] text-[#240046] flex-auto text-end">Pinggir,Duri</p>
                            </div>

                            <div className="mt-[10px]">
                                <button
                                    className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-slate-200  bg-[#ffffff]  text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900"
                                >
                                    Klik untuk lihat lokasi di Google Maps
                                </button>
                            </div>
                            <div className="mt-[10px]">
                                <button
                                    className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-slate-200  bg-[#ffffff]  text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900"
                                >
                                    KIRIM PERMINTAAN
                                </button>
                            </div>


                        </div>
                        <div className="h-[83px] mt-[5px] flex border-[1px]">
                            <HiShare className="flex-auto mt-[30px]" />
                            <HiOutlineHeart className="flex-auto mt-[30px]" />
                            <button
                                className=" bg-[]flex-auto mx-[21px] my-[21px] h-[43px] w-[100px] hover:bg-violet-400  bg-[#412C5B]  text-base text-[12px] font-semibold text-[#ffffff] rounded-[25px] outline-1 outline  outline-violet-900"
                            >
                                KONTAK
                            </button>

                        </div>

                    </div>

                </div>





            </div>
        </div>
    )
}

export default Home;