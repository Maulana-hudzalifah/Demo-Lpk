// Identitas LPK, menu, teks tiap bagian, kontak, dan CTA.
// Ganti semua teks bertanda [isi ...] dengan data asli klien.

import program from "./program";

const nomorWhatsApp = "6285749444747"; // format 62xxx, tanpa + dan tanpa 0 di depan
const pesanWhatsApp = "Halo, saya ingin konsultasi tentang program ke Jepang.";

export const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWhatsApp)}`;

export const identitas = {
  nama: "Lpk MGM Ngawi",
  namaSingkat: "Lpk MGM Ngawi ",
  kota: "Ngawi",
  deskripsiMeta:
    "Lembaga Pelatihan Kerja di Ngawi untuk program magang dan kerja ke Jepang: pelatihan bahasa, pendampingan dokumen, sampai keberangkatan.",
};

export const menu = [
  { id: "program", label: "Program", href: "#program" },
  { id: "alur", label: "Alur Daftar", href: "#alur" },
  { id: "kontak", label: "Kontak", href: "#kontak" },
];

export const navbar = {
  tombolWa: "Chat WhatsApp",
  labelBukaMenu: "Buka menu",
  labelTutupMenu: "Tutup menu",
};

export const hero = {
  label: "LPK resmi di Ngawi · Program magang & kerja ke Jepang",
  judul: "Ke Jepang dengan bekal bahasa yang matang dan jalur yang jelas.",
  pendukung:
    "Kami melatih bahasa dan budaya kerja Jepang, mengurus dokumen bersama Anda, dan menghubungkan Anda dengan perusahaan penerima sampai hari keberangkatan.",
  tombolUtama: "Konsultasi via WhatsApp",
  tombolKedua: "Lihat program",
  gambar: {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80",
    alt: "Pagoda dan rumah tradisional di Kyoto, Jepang",
  },
  fakta: [
    { id: "alumni", angka: "500+", keterangan: "alumni diberangkatkan" },
    { id: "berdiri", angka: "2017", keterangan: "tahun berdiri" },
    // Dihitung otomatis dari jumlah item di program.js
    { id: "program", angka: String(program.length), keterangan: "program pelatihan" },
  ],
};

export const keunggulan = {
  judul: "Kenapa berangkat lewat kami",
  pengantar: "Tiga hal yang kami pegang dari hari pertama pelatihan sampai Anda tiba di Jepang.",
  daftar: [
    {
      id: "bahasa",
      nomor: "01",
      judul: "Bahasa Jepang sampai [isi level, mis. JLPT N4]",
      deskripsi:
        "Kelas bahasa harian dengan pengajar [isi kualifikasi pengajar], latihan wawancara, dan pembiasaan budaya kerja Jepang seperti disiplin waktu dan aisatsu.",
    },
    {
      id: "dokumen",
      nomor: "02",
      judul: "Pendampingan dokumen",
      deskripsi:
        "Paspor, medical check-up, berkas COE, sampai visa kami dampingi langkah demi langkah, supaya Anda tidak bingung mengurus sendiri.",
    },
    {
      id: "perusahaan",
      nomor: "03",
      judul: "Koneksi perusahaan penerima",
      deskripsi:
        "Kami bekerja sama dengan [isi nama mitra / Sending Organization] untuk mempertemukan peserta dengan perusahaan penerima di Jepang.",
    },
  ],
};

export const bagianProgram = {
  judul: "Program pelatihan",
  pengantar: "Pilih program sesuai tujuan Anda. Detail syarat dan biaya bisa ditanyakan saat konsultasi.",
  labelDurasi: "Durasi",
  labelBiaya: "Biaya",
};

export const bagianAlur = {
  judul: "Alur pendaftaran",
  pengantar: "Dari pendaftaran sampai keberangkatan, ini langkah yang akan Anda lalui.",
};

export const bagianTestimoni = {
  judul: "Kata alumni",
  pengantar: "Pengalaman peserta yang sudah berangkat bersama kami.",
  catatan: "Contoh testimoni. Ganti dengan ulasan asli alumni sebelum situs dipublikasikan.",
  labelBerangkat: "Berangkat",
  labelContoh: "Contoh",
};

const alamatLengkap = "Dusun Pule RT 02 RW 03, Desa Ngrambe, Kecamatan Ngrambe, Kabupaten Ngawi, Jawa Timur 63263 (lokasi berada di belakang Kantor Kecamatan Ngrambe)., Ngawi";

export const kontak = {
  judul: "Datang atau chat kami",
  pengantar: "Konsultasi gratis. Bawa pertanyaan Anda, kami jelaskan programnya dengan jujur.",
  daftar: [
    { id: "wa", label: "WhatsApp", isi: `+${nomorWhatsApp}` },
    { id: "alamat", label: "Alamat", isi: alamatLengkap },
    { id: "jam", label: "Jam buka", isi: "[isi jam buka, mis. Senin–Sabtu 08.00–16.00]" },
  ],
  tombol: "Chat sekarang di WhatsApp",
  peta: {
    // Google Maps > Bagikan > Sematkan peta > salin isi src="..." ke sini
    src: "[alamat sematan Google Maps]",
    judul: "Peta lokasi kantor [isi nama LPK] di Google Maps",
    // Tautan rute otomatis mengikuti alamat di atas
    linkArah: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(alamatLengkap)}`,
    labelArah: "Petunjuk Arah",
  },
};

export const footer = {
  tagline: "Lembaga Pelatihan Kerja program magang & kerja ke Jepang · Ngawi",
  judulMedsos: "Ikuti kami",
  medsos: [
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "facebook", label: "Facebook", href: "#" },
    { id: "tiktok", label: "TikTok", href: "#" },
    { id: "youtube", label: "YouTube", href: "#" },
  ],
  hakCipta: "© 2026 Lpk MGM Ngawi. Semua hak dilindungi.",
  kredit: "Situs dibuat oleh [isi nama pembuat]",
  linkKredit: "#",
};
