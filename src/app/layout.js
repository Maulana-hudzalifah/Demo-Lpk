import { Nunito_Sans, M_PLUS_Rounded_1c } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { identitas } from "./data/site";
import "./globals.css";

const fontIsi = Nunito_Sans({ subsets: ["latin"], variable: "--font-isi", display: "swap" });
const fontJudul = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-judul",
  display: "swap",
});

export const metadata = {
  title: `${identitas.nama} · Magang & Kerja ke Jepang`,
  description: identitas.deskripsiMeta,
};

// Kerangka halaman: font, metadata, Navbar di atas, Footer di bawah.
export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fontIsi.variable} ${fontJudul.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
