// Kartu umum: label kecil opsional, judul, deskripsi, dan isi tambahan (children).
export default function Card({ label, judul, deskripsi, children }) {
  return (
    <article className="kartu">
      {label && <span className="kartu-label">{label}</span>}
      <h3 className="kartu-judul">{judul}</h3>
      {deskripsi && <p className="kartu-deskripsi">{deskripsi}</p>}
      {children}
    </article>
  );
}
