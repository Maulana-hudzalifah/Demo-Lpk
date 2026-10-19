import Image from "next/image";
import { hero, linkWhatsApp } from "../../data/site";

// Bagian pembuka: judul utama, kalimat pendukung, dua tombol, dan fakta singkat.
export default function Hero() {
  return (
    <section className="hero">
      <div className="wadah hero-isi">
        <div className="hero-teks">
          <p className="hero-label">{hero.label}</p>
          <h1 className="hero-judul">{hero.judul}</h1>
          <p className="hero-pendukung">{hero.pendukung}</p>

          <div className="hero-tombol">
            <a href={linkWhatsApp} className="tombol tombol-utama" target="_blank" rel="noopener noreferrer">
              {hero.tombolUtama}
            </a>
            <a href="#program" className="tombol tombol-garis">
              {hero.tombolKedua}
            </a>
          </div>

          <dl className="hero-fakta">
            {hero.fakta.map((item) => (
              <div key={item.id} className="hero-fakta-item">
                <dt>{item.keterangan}</dt>
                <dd>{item.angka}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-gambar">
          <Image src={hero.gambar.src} alt={hero.gambar.alt} fill priority sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
