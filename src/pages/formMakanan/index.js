import Head from "next/head";
import { HiOutlineChevronLeft } from "react-icons/hi";

const Home = () => {
  return (
    <div className="font-sans">
      <div className="bg-[#412C5B]">
        <div> </div>
        <Head>

          <title > Publikasi Makanan </title>
        </Head>
        <div className=" flex pt-10 pl-10 pb-4 l">

          <HiOutlineChevronLeft className="text-white text-xl mr-2 mt-1" />
          <h1 className="  text-white text-lg font-bold">Publikasi Makanan</h1>
        </div>

      </div>
      <div className="bg-[#D6BEE0]">
        <div className="pt-5 pl-10">
          <h1 className="font-bold mb-2 text-xs text-[#240046] " > NAMA MAKANAN </h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan Nama Makanan.."
            className=" w-[300px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <h1 className="font-bold text-xs text-[#240046] mt-2"> FOTO MAKANAN </h1>
          <input className="form-control
            block
            w-[300px]
            my-2
            px-6
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            
          
           

            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple>
          </input>
          <h1 className="font-bold text-xs text-[#240046] mt-2 mb-2"> DESKRIPSI MAKANAN </h1>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Masukkan Deskripsi Makanan..."
            className="w-[300px] resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
          <h1 className="font-bold text-xs text-[#240046] mt-2 mb-2"> JUMLAH MAKANAN </h1>
          <input
            type="number"
            name="name"
            id="name"
            placeholder="Masukkan Jumlah Makanan.."
            className=" w-[300px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <h1 className="font-bold text-xs text-[#240046] mt-2"> KATEGORI MAKANAN </h1>
          <div className="block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Buah/sayur</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Makanan berat</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Makanan ringan</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Minuman</span>
              </label>
            </div>
          </div>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> TANGGAL KADALUARSA MAKANAN </h1>
          <div className="flex flex-col">
            <input
              type="date"
              id="date"
              className="w-[300px] mt-2 form-control block px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
            />
          </div>
          <h1 className="font-bold text-xs text-[#240046] mt-2 mb-2"> ASAL/ALAMAT MAKANAN </h1>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Masukkan Alamat Makanan..."
            className=" w-[300px] resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div className="footer h-[83px] bg-[#ffffff]    border-solid border-[1px] border-gray-300 flex">
          <div>
            <button
              className="hover:shadow-form  bg-[#D6BEE0] my-[20px] ml-[35px] w-[141px] h-[43px] text-base font-semibold text-[#89549F] rounded-[25px] outline-none"
            >
              BATAL
            </button>
            <button
              className="hover:shadow-form  bg-[#412C5B] my-[20px] ml-[35px] w-[141px] h-[43px] text-base font-semibold text-white rounded-[25px] outline-none"
            >
              PUBLIKASI
            </button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;