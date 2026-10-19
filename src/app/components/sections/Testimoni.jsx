import Card from "../ui/Card";
import testimoni from "../../data/testimoni";
import { bagianTestimoni } from "../../data/site";

// Kartu kesan alumni (saat ini berisi contoh, ditandai jelas).
export default function Testimoni() {
  return (
    <section className="bagian bagian-warna" id="testimoni">
      <div className="wadah">
        <header className="bagian-kepala">
          <h2 className="bagian-judul">{bagianTestimoni.judul}</h2>
          <p className="bagian-pengantar">{bagianTestimoni.pengantar}</p>
          <p className="catatan">{bagianTestimoni.catatan}</p>
        </header>

        <div className="grid grid-3">
          {testimoni.map((item) => (
            <Card key={item.id} label={bagianTestimoni.labelContoh} judul={item.nama} deskripsi={item.kesan}>
              <p className="kartu-kaki">
                {bagianTestimoni.labelBerangkat} {item.tahun}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
