import Card from "../ui/Card";
import program from "../../data/program";
import { bagianProgram } from "../../data/site";

// Kartu-kartu program pelatihan beserta durasi dan biayanya.
export default function Program() {
  return (
    <section className="bagian bagian-warna" id="program">
      <div className="wadah">
        <header className="bagian-kepala">
          <h2 className="bagian-judul">{bagianProgram.judul}</h2>
          <p className="bagian-pengantar">{bagianProgram.pengantar}</p>
        </header>

        <div className="grid grid-2">
          {program.map((item) => (
            <Card key={item.id} judul={item.nama} deskripsi={item.ringkasan}>
              <dl className="kartu-meta">
                <div>
                  <dt>{bagianProgram.labelDurasi}</dt>
                  <dd>{item.durasi}</dd>
                </div>
                <div>
                  <dt>{bagianProgram.labelBiaya}</dt>
                  <dd>Rp {item.biaya}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
