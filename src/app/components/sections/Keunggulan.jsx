import Card from "../ui/Card";
import { keunggulan } from "../../data/site";

// Tiga alasan utama memilih LPK ini.
export default function Keunggulan() {
  return (
    <section className="bagian" id="keunggulan">
      <div className="wadah">
        <header className="bagian-kepala">
          <h2 className="bagian-judul">{keunggulan.judul}</h2>
          <p className="bagian-pengantar">{keunggulan.pengantar}</p>
        </header>

        <div className="grid grid-3">
          {keunggulan.daftar.map((item) => (
            <Card key={item.id} label={item.nomor} judul={item.judul} deskripsi={item.deskripsi} />
          ))}
        </div>
      </div>
    </section>
  );
}
