import { identitas, footer } from "../../data/site";

// Kaki halaman: nama LPK, tautan media sosial, hak cipta, dan kredit pembuat.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wadah footer-isi">
        <div>
          <p className="footer-nama">{identitas.nama}</p>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>

        <div>
          <p className="footer-judul">{footer.judulMedsos}</p>
          <ul className="footer-medsos">
            {footer.medsos.map((item) => (
              <li key={item.id}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wadah footer-bawah">
        <span>{footer.hakCipta}</span>
        <a href={footer.linkKredit}>{footer.kredit}</a>
      </div>
    </footer>
  );
}
