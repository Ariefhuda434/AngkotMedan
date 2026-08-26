<div align="center">

# 🚐 AngkotMedan

**Cari Rute Angkot di Medan dengan Mudah**

[![Netlify Status](https://img.shields.io/badge/deployed-netlify-brightgreen)](https://angkotmedan.netlify.app)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)

[Live Demo](https://angkotmedan.netlify.app) · [Tentang](https://angkotmedan.netlify.app/tentang) · [Semua Trayek](https://angkotmedan.netlify.app/semua-trayek)

</div>

---

## Tentang

AngkotMedan adalah web app pencari rute angkot (angkutan kota) di Medan, Indonesia. Dibuat untuk membantu warga Medan dan pendatang menemukan rute angkot yang tepat dari satu titik ke titik lain — tanpa perlu tanya ke tetangga atau driver.

**Masalah yang diselesaikan:** Di Medan, tidak ada satu pun sumber data resmi yang menampilkan semua rute angkot secara lengkap dan mudah diakses. Informasi sering bergantung pada mulut ke mulut, yang sering bikin salah turun atau salah naik.

## Fitur

- **Pencarian Rute Cerdas** — Cari rute langsung (direct) dan rute transfer (1-2 kali transfer)
- **Peta Interaktif** — Jalur angkot mengikuti jalan asli (via OSRM road snapping)
- **197 POI** — Rumah sakit, kampus, terminal, mall, pasar, dan lainnya
- **Transportasi Publik** — 7 Trans Metro Deli + 3 Bus Listrik
- **Panduan Warna Livery** — Kenali angkot dari warna badan kendaraan
- **8 Bahasa** — Indonesia, English, Jawa, Melayu, Batak, Minang, Sunda, Aceh
- **Detail Trayek** — Klik kartu trayek untuk lihat daftar halte, jarak, dan estimasi waktu
- **Multi-Page** — Halaman beranda, tentang, dan explorer trayek terpisah
- **Mobile-Friendly** — Responsive, iOS safe-area, PWA-ready

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | HTML5, Tailwind CSS (CDN), Vanilla JavaScript |
| Peta | Leaflet.js + OpenStreetMap |
| Rute Jalan | OSRM API (road-following polyline) |
| Geocoding | Nominatim (OpenStreetMap) |
| Deploy | Netlify (static) |
| Server (lokal) | Node.js static server |

## Struktur Projek

```
AngkotMedan/
├── index.html          # Beranda — hero, pencarian, hasil rute, tracking
├── tentang.html        # Tentang — masalah transit, cara kerja, livery guide
├── semua-trayek.html   # Explorer — grid semua 118 trayek, detail modal
├── server.js           # Node.js static server (localhost:8080)
├── _redirects          # Netlify SPA fallback
├── logo.png            # Logo AngkotMedan
├── css/
│   └── style.css       # Slush Design System — brutalist aesthetic
├── js/
│   ├── app.js          # Core logic: i18n, search, map, routing, UI
│   └── data.js         # 118 routes, 170+ stops, 197 POIs, transport data
└── img/                # Assets gambar
```

## Mulai

### Online (Netlify)

Kunjungi [angkotmedan.netlify.app](https://angkotmedan.netlify.app) — langsung pakai, tanpa install.

### Lokal

```bash
git clone https://github.com/Ariefhuda434/AngkotMedan.git
cd AngkotMedan
node server.js
```

Buka `http://localhost:8080` di browser.

## Data

- **118 trayek angkot** dari berbagai operator di Medan
- **170+ halte dan titik** yang tersebar di seluruh kota
- **197 POI** (rumah sakit, kampus, terminal, mall, pasar, dll)
- **10 rute transportasi publik** (Trans Metro Deli + Bus Listrik)
- Data dikumpulkan dari sumber publik, papan informasi halte, dan komunitas pengguna angkot

> ⚠️ Data bisa berubah sewaktu-waktu karena trayek angkot sering disesuaikan oleh operator.

## Livery Angkot Medan

| Warna | Operator / Keterangan |
|-------|----------------------|
| 🟡 Kuning Emas | KPUM, Angkot Umum, Wampu Mini — mayoritas trayek |
| 🔵 Biru Laut | Medan Bus, Nasional Medan Transport |
| 🟢 Hijau Daun | Medan Mars, Medan Morina — trayek perifer |
| 🔴 Merah | RMC (Rahayu Medan Ceria), Mitra Transport |

## Bahasa

Aplikasi mendukung 8 bahasa untuk pengguna lokal dan pendatang:

🇮🇩 Indonesia · 🇺🇸 English · 🎭 Jawa · 🇲🇾 Melayu · 🏠 Batak · 🌾 Minang · 🏔️ Sunda · 🕌 Aceh

## Lisensi

Dibuat untuk komunitas Medan. Bukan resmi Dishub Medan.

---

<div align="center">

**Made for Medan 🇮🇩**

</div>
