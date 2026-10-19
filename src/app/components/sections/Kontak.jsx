import { kontak, linkWhatsApp } from "../../data/site";

// Informasi kontak: alamat, jam buka, nomor WhatsApp, dan tombol chat.
export default function Kontak() {
  return (
    <section className="bagian" id="kontak">
      <div className="wadah">
        <div className="kontak">
          <header className="bagian-kepala">
            <h2 className="bagian-judul">{kontak.judul}</h2>
            <p className="bagian-pengantar">{kontak.pengantar}</p>
          </header>

          <dl className="kontak-daftar">
            {kontak.daftar.map((item) => (
              <div key={item.id} className="kontak-item">
                <dt>{item.label}</dt>
                <dd>{item.isi}</dd>
              </div>
            ))}
          </dl>

          <div className="kontak-peta">
            {/* Iframe hanya dipasang kalau src sudah berupa URL asli, bukan placeholder */}
            {kontak.peta.src.startsWith("https://") ? (
              <iframe
                className="peta"
                src={kontak.peta.src}
                title={kontak.peta.judul}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="peta peta-kosong">{kontak.peta.src}</div>
            )}

            <a href={kontak.peta.linkArah} className="peta-arah" target="_blank" rel="noopener noreferrer">
              {kontak.peta.labelArah}
            </a>
          </div>

          <a href={linkWhatsApp} className="tombol tombol-utama tombol-lebar" target="_blank" rel="noopener noreferrer">
            {kontak.tombol}
          </a>
        </div>
      </div>
    </section>
  );
}
