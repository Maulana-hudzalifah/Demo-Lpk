import alur from "../../data/alur";
import { bagianAlur } from "../../data/site";

// Langkah pendaftaran bernomor dari daftar sampai berangkat.
export default function Alur() {
  return (
    <section className="bagian" id="alur">
      <div className="wadah">
        <header className="bagian-kepala">
          <h2 className="bagian-judul">{bagianAlur.judul}</h2>
          <p className="bagian-pengantar">{bagianAlur.pengantar}</p>
        </header>

        <ol className="alur">
          {alur.map((langkah) => (
            <li key={langkah.id} className="alur-langkah">
              <span className="alur-nomor">{langkah.nomor}</span>
              <div>
                <h3 className="alur-judul">{langkah.judul}</h3>
                <p className="alur-deskripsi">{langkah.deskripsi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
