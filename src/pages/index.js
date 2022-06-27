import Head from "next/head";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      <div className="bg-[#412C5B]">
        <div> </div>
        <Head>
          <title > Publikasi Barang </title>
        </Head>
          <div className=" pt-10 pl-10 pb-4">
          
            
            <h1 className="  text-white text-lg font-bold">Publikasi Barang</h1>
          </div>
        
      </div>
      <div className="bg-[#D6BEE0]">
        <div className="pt-5 pl-10">
          <h1 className="font-bold text-xs text-[#240046] " > NAMA BARANG </h1>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> FOTO BARANG </h1>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> DESKRIPSI BARANG </h1>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> KATEGORI BARANG </h1>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> KEADAAN BARANG </h1>
          <h1 className="font-bold text-xs text-[#240046] mt-2"> ASAL/ALAMAT BARANG </h1>
        </div>
        
      </div>
    </div>
    
  )
}

export default Home;