import Hero from "./components/sections/Hero";
import Keunggulan from "./components/sections/Keunggulan";
import Program from "./components/sections/Program";
import Alur from "./components/sections/Alur";
import Testimoni from "./components/sections/Testimoni";
import Kontak from "./components/sections/Kontak";

// Halaman utama: merangkai semua bagian sesuai urutan.
export default function Beranda() {
  return (
    <>
      <Hero />
      <Keunggulan />
      <Program />
      <Alur />
      <Testimoni />
      <Kontak />
    </>
  );
}
