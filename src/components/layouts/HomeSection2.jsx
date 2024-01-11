import Image from "next/image";
import homeSection2Src from "../../../public/home-section-2-src.png";

export default function HomeSection2() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-center text-2xl font-semibold mb-1">
        Belum Mampu Dikelola
      </h3>
      <h5 className="text-center mb-5">
        Kementerian Lingkungan Hidup dan Kehutanan (KLHK) melansir data
        pengelolaan sampah yang masih mengkhawatirkan. Sebanyak{" "}
        <span className="text-pink-600 font-medium">4,2 juta ton</span> sampah
        produksi rumah tangga setiap tahunnya, belum bisa dikelola. Sehingga
        memicu persoalan lingkungan dan kesehatan.
      </h5>
      <div className="flex justify-center items-center gap-0.5">
        <p className="text-gray-400 text-sm">source:</p>
        <Image src={homeSection2Src} alt="Home Section 2 Source" />
      </div>
    </div>
  );
}