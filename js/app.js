let currentLang = localStorage.getItem('lang') || 'id';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.id[key] || key;
}

const I18N = {
  id: {
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    hero_location: 'Kota Medan, Sumatera Utara, Indonesia',
    hero_title: 'Naik Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Baru di Medan? Mahasiswa, perantau, atau cuma lagi jalan-jalan? Angkot itu minibus angkutan umum — murah, mana ada di mana-mana. Cukup ketik mau ke mana, langsung tahu naik angkot mana dan turun di mana.',
    search_title: 'Mau ke mana?',
    label_origin: 'Sekarang kamu di mana?',
    label_dest: 'Mau ke mana?',
    placeholder_origin: 'Contoh: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'Contoh: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Cari Rute',
    btn_my_location: 'Pakai Lokasi Saya',
    btn_track: 'Lacak Rute Ini',
    btn_stop_track: 'Berhenti Melacak',
    btn_follow: 'Ikuti Saya',
    route_direct: 'Rute Langsung — Tanpa Pindah',
    route_transfer: 'Perlu 1 Kali Pindah',
    route_multi: 'Perlu Beberapa Kali Pindah',
    route_no_result: 'Rute tidak ditemukan — coba halte lain',
    transfer_marker: 'Turun di Sini & Pindah Angkot',
    transfer_at: 'Pindah ke angkot lain di sini',
    stops: 'halte',
    explore_title: 'Lihat Semua 118 Trayek',
    explore_search: 'Cari nomor trayek, nama operator, atau nama halte...',
    about_title: 'Tentang AngkotMedan',
    popular_title: 'Rute Paling Populer',
    about_problem: 'Kenapa AngkotMedan?',
    about_problem_desc: 'Medan punya 118 trayek angkot, tapi gak ada peta yang jelas. Hasilnya? Mahasiswa baru, perantau, dan wisatawan bingung — banyak angkot lewat tapi gak tau mau naik yang mana. AngkotMedan hadir biar kamu gak lagi bingung di halte.',
    about_how: 'Gimana Caranya',
    about_how1: 'Ketik Mau ke Mana',
    about_how1_desc: 'Cukup ketik tujuan kamu — misalnya "Sun Plaza" atau "Museum Pertamina". Auto-suggest bantu kamu nemu tempat yang tepat.',
    about_how2: 'Langsung Tahu Angkotnya',
    about_how2_desc: 'Sistem menunjukkan angkot mana yang lewat, warna livery, nomor trayek, dan di mana harus turun. Ada juga rute yang perlu pindah angkot.',
    about_how3: 'Tinggal Naik!',
    about_how3_desc: 'Kenali angkot dari warna livery dan nomor trayek di badan kendaraan. Tinggal sebut ke supir mau turun di mana.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery di badan angkot menunjukkan operator atau kelompok trayek. Kenali warnanya biar gak salah naik.',
    about_data: 'Tentang Data',
    about_data_desc: 'Data 118 trayek angkot dikumpulkan dari berbagai sumber publik. Data bisa berubah sewaktu-waktu karena trayek sering disesuaikan oleh operator.',
    about_back: 'Beranda',
    tracking_searching: 'Mencari lokasi...',
    tracking_monitoring: 'Memantau pergerakan',
    btn_back: 'Kembali ke pencarian',
    result_title: 'Rute ditemukan',
    no_result_title: 'Gak ada rute ditemukan',
    no_result_desc: 'Coba pakai nama halte atau jalan yang lebih umum di sekitar lokasi awal dan tujuanmu.',
    btn_try_again: 'Coba lagi',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    hero_location: 'Medan City, North Sumatra, Indonesia',
    hero_title: 'Riding Angkot<br>in <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'New to Medan? Student, newcomer, or just visiting? Angkot is a shared minibus — cheap, and runs everywhere. Just type where you\'re headed, and we\'ll tell you which angkot to take and where to get off.',
    search_title: 'Where are you headed?',
    label_origin: 'Where are you now?',
    label_dest: 'Where do you want to go?',
    placeholder_origin: 'e.g. USU campus, boarding house, terminal...',
    placeholder_dest: 'e.g. Sun Plaza, Maimun Palace, Adam Malik Hospital...',
    btn_search: 'Find Route',
    btn_my_location: 'Use My Location',
    btn_track: 'Track This Route',
    btn_stop_track: 'Stop Tracking',
    btn_follow: 'Follow Me',
    route_direct: 'Direct Route — No Transfer',
    route_transfer: '1 Transfer Needed',
    route_multi: 'Multiple Transfers',
    route_no_result: 'No routes found — try different stops',
    transfer_marker: 'Get Off Here & Switch Angkot',
    transfer_at: 'Change to another angkot here',
    stops: 'stops',
    explore_title: 'Browse All 118 Routes',
    explore_search: 'Search by route number, operator name, or stop...',
    about_title: 'About AngkotMedan',
    popular_title: 'Most Popular Routes',
    about_problem: 'Why AngkotMedan?',
    about_problem_desc: 'Medan has 118 angkot routes, but no clear map. The result? New students, newcomers, and tourists are confused — angkots pass by but they don\'t know which one to take. AngkotMedan exists so you\'re never lost at the stop again.',
    about_how: 'How It Works',
    about_how1: 'Type Where You\'re Going',
    about_how1_desc: 'Just type your destination — like "Sun Plaza" or "Museum Pertamina". Auto-suggest helps you find the right place.',
    about_how2: 'Instantly See Which Angkot',
    about_how2_desc: 'Shows you which angkot passes through, livery color, route number, and where to get off. Includes transfer routes if needed.',
    about_how3: 'Just Hop On!',
    about_how3_desc: 'Recognize the angkot by its livery color and route number on the body. Just tell the driver where you\'re getting off.',
    about_livery: 'Livery Color Guide',
    about_livery_desc: 'Livery color on the angkot body shows the operator or route group. Learn the colors to avoid taking the wrong one.',
    about_data: 'About Data',
    about_data_desc: 'Data of 118 angkot routes collected from various public sources. Data may change as routes are frequently adjusted by operators.',
    about_back: 'Home',
    tracking_searching: 'Searching location...',
    tracking_monitoring: 'Tracking movement',
    btn_back: 'Back to search',
    result_title: 'Routes found',
    no_result_title: 'No routes found',
    no_result_desc: 'Try using a more common stop or street name near your starting point and destination.',
    btn_try_again: 'Try again',
  },
  btk: {
    nav_home: 'Bale',
    nav_about: 'Adong',
    hero_location: 'Kota Medan, Sumatera Utara, Indonesia',
    hero_title: 'Nain Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Baru sian dinde? Mahasiswa, perantau, atau musafir? Angkot itu minibus angkutan umum — murah, ado di mandailing-mandailing. Cukup ecat mak lajuoi, langsung teuing nain angkot nano et turun di nada.',
    search_title: 'Mak Lajuoi?',
    label_origin: 'Sai dohekon posisi?',
    label_dest: 'Mak Lajuoi?',
    placeholder_origin: 'Contoh: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'Contoh: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Epang Rute',
    btn_my_location: 'Pakai Lokasi Au',
    btn_track: 'Pantau Rute Ige',
    btn_stop_track: 'Hentikan Pantauan',
    btn_follow: 'Turuti Au',
    route_direct: 'Rute Langsung — Alai Pindah',
    route_transfer: 'Haraja 1 Kali Pindah',
    route_multi: 'Haraja Pindah Sampe',
    route_no_result: 'Alai rute na gok — coba halte sian dinde',
    transfer_marker: 'Turun Ige & Ganti Angkot',
    transfer_at: 'Ganti angkot sian dinde',
    stops: 'halte',
    explore_title: 'Parsuatan 118 Rute Sadiahona',
    explore_search: 'Epang nomor rute, nama operator, atau halte...',
    about_title: 'Adong AngkotMedan',
    popular_title: 'Rute Populer',
    about_problem: 'Ngapo AngkotMedan?',
    about_problem_desc: 'Medan ado 118 trayek angkot, tapi alai ado peta nan jelas. Hasilna? Mahasiswa baru, perantau, dongan turis bingung — banyak angkot lewat tapi alai teuing nain angkot nano. AngkotMedan adoh si agar sa alai bingung di halte.',
    about_how: 'Carana',
    about_how1: 'Ecat Mak Lajuoi',
    about_how1_desc: 'Cukup ecat tujuan sa — misalna "Sun Plaza" atawa "Museum Pertamina". Auto-suggest marsopot muse nemu nama nan tepat.',
    about_how2: 'Langsung Teuing Angkotno',
    about_how2_desc: 'Sistem nampak angkot nano lewat, warna livery, nomor trayek, dongan turun di nada. Adong rute nan haraja pindah.',
    about_how3: 'Tinggal Nain!',
    about_how3_desc: 'Mangali angkot sian warna livery dongan nomor trayek di badan kendaraan. Tinggal sebut ke supir turun di nada.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery sian badan angkot mangaon operator atau kelompok trayek. Mangali warnana supaya alai salah naik.',
    about_data: 'Adong Data',
    about_data_desc: 'Data 118 trayek angkot dikumpulkan sian berbagai sumber publik. Data bisak berubah karena trayek sering disesuaikan operator.',
    about_back: 'Bale',
    tracking_searching: 'Mencari lokasi...',
    tracking_monitoring: 'Memantau pergerakan',
    btn_back: 'Balik sian pencarian',
    result_title: 'Rute kapangki',
    no_result_title: 'Alai ado rute',
    no_result_desc: 'Mangkuli magaon artian halte atawa dalan nasib sian baris olo magabosi tujuan.',
    btn_try_again: 'Mangkuli gabe',
  },
  jv: {
    nav_home: 'Omah',
    nav_about: 'Babagan',
    hero_location: 'Kutha Medan, Sumatra Lor, Indonesia',
    hero_title: 'Numpak Angkot<br>Ing <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Anyar ing Medan? Mahasiswa, perantau, utawa keprotu mung jalan-jalan? Angkot iku minibus angkutan umum — murah, lan ana ing ngendi-ngendi. Cukup ketik arep menyang endi, langsung weruh numpak angkot endi lan turun ing endi.',
    search_title: 'Arep Menyang Endi?',
    label_origin: 'Saiki sampeyan ingendi?',
    label_dest: 'Arep menyang endi?',
    placeholder_origin: 'Contone: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'Contone: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Goleki Angkot',
    btn_my_location: 'Pakai Lokasiku',
    btn_track: 'Pantau Rute Iki',
    btn_stop_track: 'Mandeg Pantau',
    btn_follow: 'Tututana Aku',
    route_direct: 'Rute Langsung — Tanpa Pindah',
    route_transfer: 'Butuh 1 Kali Pindah',
    route_multi: 'Butuh Pindah Pirang-pirang Kali',
    route_no_result: 'Rute ora ditemokake — coba halte liyane',
    transfer_marker: 'Turun Ing Kene & Ganti Angkot',
    transfer_at: 'Ganti angkot liyane ing kene',
    stops: 'halte',
    explore_title: 'Deloken Kabeh 118 Trayek',
    explore_search: 'Goleki nomer trayek, jeneng operator, utawa halte...',
    about_title: 'Babagan AngkotMedan',
    popular_title: 'Rute Paling Populer',
    about_problem: 'Kenapa AngkotMedan?',
    about_problem_desc: 'Medan duwe 118 trayek angkot, nanging ora ana peta sing jelas. Hasile? Mahasiswa anyar, perantau, lan wisatawan bingung — akeh angkot liwat nanging ora ngerti numpak endi. AngkotMedan ana supaya sampeyan ora bingung maneh ing halte.',
    about_how: 'Carane Kerja',
    about_how1: 'Ketik Arep Menyang Endi',
    about_how1_desc: 'Cukup ketik destinasi sampeyan — kaya "Sun Plaza" utawa "Museum Pertamina". Auto-suggest mbantu nemokake panggonan sing bener.',
    about_how2: 'Langsung Weruh Angkote',
    about_how2_desc: 'Nampilake angkot endi sing liwat, warna livery, nomer trayek, lan ing endi kudu turun. Uga ana rute transfer.',
    about_how3: 'Tinggal Numpak!',
    about_how3_desc: 'Kenali angkot saka warna livery lan nomer trayek ing bodi kendaraan. Cukup ngomong ke supir arep turun ing endi.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery ing bodhi angkot nuduhake operator utawa kelompok trayek. Kenali warnane ben ora salah naik.',
    about_data: 'Babagan Data',
    about_data_desc: 'Data 118 trayek angkot dikumpulake saka macem-macem sumber publik. Data bisa owah amarga trayek sering diganti operator.',
    about_back: 'Omah',
    tracking_searching: 'Nggoleki lokasi...',
    tracking_monitoring: 'Nguji gerakan',
    btn_back: 'Bali menyang panggolekan',
    result_title: 'Rute ditemokake',
    no_result_title: 'Ora ana rute ditemokake',
    no_result_desc: 'Coba nganggo jeneng halte utawa dalan sing luwih umum ing sekitar titik asal lan tujuan.',
    btn_try_again: 'Coba maneh',
  },
  ms: {
    nav_home: 'Utama',
    nav_about: 'Tentang',
    hero_location: 'Bandar Medan, Sumatera Utara, Indonesia',
    hero_title: 'Naik Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Baru di Medan? Mahasiswa, perantau, atau cuma melancong? Angkot ialah minibus perkongsian — murah, dan ada di mana-mana. Taip sahaja mahu ke mana, kami tunjukkan naik angkot mana dan turun di mana.',
    search_title: 'Mahu ke mana?',
    label_origin: 'Anda di mana sekarang?',
    label_dest: 'Mahu pergi ke mana?',
    placeholder_origin: 'cth: Kampus USU, rumah sew, terminal...',
    placeholder_dest: 'cth: Sun Plaza, Istana Maimun, Hospital Adam Malik...',
    btn_search: 'Cari Angkot',
    btn_my_location: 'Gunakan Lokasi Saya',
    btn_track: 'Jejak Laluan Ini',
    btn_stop_track: 'Henti Jejak',
    btn_follow: 'Ikut Saya',
    route_direct: 'Laluan Terus — Tanpa Tukar',
    route_transfer: 'Perlu 1 Pertukaran',
    route_multi: 'Beberapa Pertukaran Diperlukan',
    route_no_result: 'Tiada laluan ditemui — cuba perhentian lain',
    transfer_marker: 'Turun Di Sini & Tukar Angkot',
    transfer_at: 'Tukar ke angkot lain di sini',
    stops: 'perhentian',
    explore_title: 'Semak Semua 118 Laluan',
    explore_search: 'Cari nombor laluan, nama pengendali, atau perhentian...',
    about_title: 'Tentang AngkotMedan',
    popular_title: 'Laluan Paling Popular',
    about_problem: 'Kenapa AngkotMedan?',
    about_problem_desc: 'Medan ada 118 laluan angkot, tapi tiada peta yang jelas. Akibatnya? Mahasiswa baru, perantau, dan pelancong keliru — banyak angkot lalu tapi tak tahu naik mana. AngkotMedan wujud supaya anda tak keliru lagi di perhentian.',
    about_how: 'Cara Guna',
    about_how1: 'Taip Mau ke Mana',
    about_how1_desc: 'Cukup taip destinasi anda — contohnya "Sun Plaza" atau "Museum Pertamina". Auto-suggest bantu anda cari tempat yang betul.',
    about_how2: 'Terus Tahu Angkot Mana',
    about_how2_desc: 'Sistem tunjukkan angkot mana yang lalu, warna livery, nombor laluan, dan di mana kena turun. Ada juga laluan pertukaran.',
    about_how3: 'Tinggal Naik!',
    about_how3_desc: 'Kenali angkot dari warna livery dan nombor laluan pada badan kenderaan. Cukup bagitahu pemandu nak turun di mana.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery pada badan angkot menunjukkan pengendali atau kumpulan laluan. Kenali warnanya supaya tidak salah naik.',
    about_data: 'Tentang Data',
    about_data_desc: 'Data 118 laluan angkot dikumpulkan dari pelbagai sumber awam. Data boleh berubah kerana laluan sering disesuaikan oleh pengendali.',
    about_back: 'Utama',
    tracking_searching: 'Mencari lokasi...',
    tracking_monitoring: 'Memantau pergerakan',
    btn_back: 'Kembali ke carian',
    result_title: 'Laluan dijumpai',
    no_result_title: 'Tiada laluan dijumpai',
    no_result_desc: 'Cuba guna nama perhentian atau jalan yang lebih umum berdekatan titik asal dan destinasi.',
    btn_try_again: 'Cuba lagi',
  },
  min: {
    nav_home: 'Rumah',
    nav_about: 'Adopuak',
    hero_location: 'Kota Medan, Sumatera Utara, Indonesia',
    hero_title: 'Nain Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Baru sian kampuang? Mahasiswa, perantau, atawa wisatawan? Angkot itu minibus angkutan umum — murah, ado dimana-mana. Cukup ketik badaro mano, katuang angkot mano nan badaja dinaiki dan turun di mano.',
    search_title: 'Badaro mano?',
    label_origin: 'Cadiak mano sekarang?',
    label_dest: 'Badaro mano?',
    placeholder_origin: 'Contoh: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'Contoh: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Tabaik Angkot',
    btn_my_location: 'Pakai Lokasi Audah',
    btn_track: 'Pantau Rute Iko',
    btn_stop_track: 'Patahkan Pantauan',
    btn_follow: 'Turuti Audah',
    route_direct: 'Rute Lsung — Tanpa Pindah',
    route_transfer: 'Badajo 1 Kali Pindah',
    route_multi: 'Badajo Pindah Banyak Kali',
    route_no_result: 'Rute tak tabaik — coba halte lain',
    transfer_marker: 'Turun Iko & Ganti Angkot',
    transfer_at: 'Ganti angkot lain di sini',
    stops: 'halte',
    explore_title: 'Liauak 118 Rute Sadiahona',
    explore_search: 'Tabaik nomor rute, nama operator, atau halte...',
    about_title: 'Adopuak AngkotMedan',
    popular_title: 'Rute Populer',
    about_problem: 'Ngapo AngkotMedan?',
    about_problem_desc: 'Medan ado 118 trayek angkot, tapi tak ado peta nan jelas. Hasilnya? Mahasiswa baru, perantau, dan wisatawan bingung — banyak angkot lewat tapi tak tau nain angkot mano. AngkotMedan ado si awak tak bingung lai di halte.',
    about_how: 'Carana',
    about_how1: 'Ketik Badaro Mano',
    about_how1_desc: 'Cukup ketik tujuan awak — misalnyo "Sun Plaza" atawa "Museum Pertamina". Auto-suggest mambantu namo nan bana.',
    about_how2: 'Langsung Katuang Angkotno',
    about_how2_desc: 'Sistem katuang angkot mano nan lewat, warna livery, nomor trayek, dan turun di mano. Adong rute nan badajo pindah.',
    about_how3: 'Tinggal Nain!',
    about_how3_desc: 'Mangali angkot sian warna livery dan nomor trayek di badan kendaraan. Tinggal sebut ke supir turun di mano.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery sian badan angkot mangaon operator atau kelompok trayek. Mangali warno supaya alai salah naik.',
    about_data: 'Adopuak Data',
    about_data_desc: 'Data 118 trayek angkot dikumpuak sian babilai sumber publik. Data bisa bakubah karena trayek sering disesuaikan operator.',
    about_back: 'Rumah',
    tracking_searching: 'Mancaliak lokasi...',
    tracking_monitoring: 'Mancalang gerakan',
    btn_back: 'Balik ka papan cari',
    result_title: 'Rute ditemui',
    no_result_title: 'Awak rute ditemui',
    no_result_desc: 'Coba gunoakan namo halte atawa jalan nan lebih umum di siko titik asal dan tujuan.',
    btn_try_again: 'Coba lagik',
  },
  su: {
    nav_home: 'Imah',
    nav_about: 'Ngeunaan',
    hero_location: 'Kota Medan, Sumatera Kalér, Indonesia',
    hero_title: 'Naék Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Anyar di Medan? Mahasiswa, perantau, atawa nuju wisata? Angkot nyaéta minibus angkutan umum — mirah, jeung aya di mana-mana. Cukup kétik badé ka mana, langsung nyaho naék angkot naon tur turun di mana.',
    search_title: 'Badé ka mana?',
    label_origin: 'Anjeun ayeuna di mana?',
    label_dest: 'Badé ka mana?',
    placeholder_origin: 'contoh: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'contoh: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Milarian Angkot',
    btn_my_location: 'Paké Lokasi Abdi',
    btn_track: 'Pantau Rute Ieu',
    btn_stop_track: 'Eureunkeun Pantauan',
    btn_follow: 'Nuturutan Abdi',
    route_direct: 'Rute Langsung — Teu Mantuan',
    route_transfer: 'Merlukan 1 Mantuan',
    route_multi: 'Merlukan Loba Mantuan',
    route_no_result: 'Rute teu kapanggih — cobian hélté séjén',
    transfer_marker: 'Turun Di Dieu & Ganti Angkot',
    transfer_at: 'Ganti ka angkot séjén di dieu',
    stops: 'hélté',
    explore_title: 'Tingali Sadaya 118 Rute',
    explore_search: 'Milarian nomor rute, nami operator, atawa hélté...',
    about_title: 'Ngeunaan AngkotMedan',
    popular_title: 'Rute Paling Populer',
    about_problem: 'Naha AngkotMedan?',
    about_problem_desc: 'Medan boga 118 rute angkot, tapi teu aya peta nu jelas. Hasilna? Mahasiswa anyar, perantau, jeung wisatawan bingung — loba angkot ngaliwat tapi teu nyaho naék nu mana. AngkotMedan aya supaya anjeun teu bingung deui di hélté.',
    about_how: 'Kumaha Carana',
    about_how1: 'Kétik Badé ka Mana',
    about_how1_desc: 'Cukup kétik destinasi anjeun — kayaning "Sun Plaza" atawa "Museum Pertamina". Auto-suggest ngabantuan mendakan tempat nu leres.',
    about_how2: 'Langsung Nyaho Angkotna',
    about_how2_desc: 'Nunjukkeun angkot nu ngaliwat, warna livery, nomer rute, jeung di mana kudu turun. Aya ogé rute mantuan.',
    about_how3: 'Tinggal Naék!',
    about_how3_desc: 'Kenali angkot ku warna livery jeung nomer rute dina bodi kandaraan. Cukup nyarioskeun ka supir badé turun di mana.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery dina bodi angkot nunjukkeun operator atanapi kelompok rute. Kenali warnana supaya teu salah naék.',
    about_data: 'Ngeunaan Data',
    about_data_desc: 'Data 118 rute angkot dikumpulkeun ti sababaraha sumber umum. Data tisa robah sabab rute sering dirobah ku operator.',
    about_back: 'Imah',
    tracking_searching: 'Milarian lokasi...',
    tracking_monitoring: 'Pantau gerakan',
    btn_back: 'Balik ka teangan',
    result_title: 'Rute kapanggih',
    no_result_title: 'Teu aya rute kapanggih',
    no_result_desc: 'Coba pakeun nam hélté atawa jalan nu leuwih umum di sabudeureun titik asal jeung tujuan.',
    btn_try_again: 'Coba deui',
  },
  ace: {
    nav_home: 'Urung',
    nav_about: 'Meupateuh',
    hero_location: 'Kota Medan, Sumatera Utara, Indonesia',
    hero_title: 'Nain Angkot<br>di <span class="text-[#ffd731] relative inline-block">Medan<svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 6C50 2 150 2 198 6" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg></span>?',
    hero_subtitle: 'Bari di Medan? Mahasiswa, perantau, atawa wisatawan? Angkot itu minibus angkutan umum — murah, hana di mana-mana. Cukup tuloe mak lajuoi, langsung teuning nain angkot mee dan turun di mee.',
    search_title: 'Mak lajuoi?',
    label_origin: 'Sala naon voi?',
    label_dest: 'Mak lajuoi?',
    placeholder_origin: 'Contoh: Kampus USU, kos-kosan, terminal...',
    placeholder_dest: 'Contoh: Sun Plaza, Istana Maimun, RS Adam Malik...',
    btn_search: 'Cari Angkot',
    btn_my_location: 'Pakai Lokasi Sah',
    btn_track: 'Pantoe Rute Nyan',
    btn_stop_track: 'Teupa Meupantoe',
    btn_follow: 'Suroe Sah',
    route_direct: 'Rute Langsung — Tanpa Pindah',
    route_transfer: 'Pindah 1 Kali',
    route_multi: 'Pindah Beuayoh Kali',
    route_no_result: 'Rute tak ditemukan — coba halte lain',
    transfer_marker: 'Turun Nyan & Pindah Angkot',
    transfer_at: 'Pindah ka angkot lain nyan',
    stops: 'halte',
    explore_title: 'Lihat Semua 118 Trayek',
    explore_search: 'Cari nomor trayek, nama operator, atawa nama halte...',
    about_title: 'Meupateuh AngkotMedan',
    popular_title: 'Rute Paling Popular',
    about_problem: 'Ngapa AngkotMedan?',
    about_problem_desc: 'Medan hana 118 trayek angkot, tapi teu ada peta nan teuh. Hasilna? Mahasiswa baru, perantau, dan wisatawan bingung — beuayoh angkot lewat tapi teu teuning nain angkot mee. AngkotMedan hana bi teu bingung lai di halte.',
    about_how: 'Carana',
    about_how1: 'Tuloe Mak Lajuoi',
    about_how1_desc: 'Cukup tuloe tujuan sa — misalna "Sun Plaza" atawa "Museum Pertamina". Auto-suggest teuming sapeu tempat nan teuh.',
    about_how2: 'Langsung Teuning Angkotna',
    about_how2_desc: 'Sistem teuming angkot mee nan lewat, warna livery, nomor trayek, dan turun di mee. Hana rute nan pindah.',
    about_how3: 'Tinggal Nain!',
    about_how3_desc: 'Teuing angkot dari warna livery dan nomor trayek di badan kandaraan. Cukup sebut ke supir turun di mee.',
    about_livery: 'Panduan Warna Livery',
    about_livery_desc: 'Warna livery di badan angkot neunjukkan operator atawa kelompok trayek. Teuing warna nyan teu salah nain.',
    about_data: 'Meupateuh Data',
    about_data_desc: 'Data 118 trayek angkot dikumpulkan dari beudeuh sumber publik. Data bisa beubah seumata-mata karena trayek sering disesuaikan operator.',
    about_back: 'Urung',
    tracking_searching: 'Cari lokasi...',
    tracking_monitoring: 'Pantoe peuggerakan',
    btn_back: 'Balik ke teuman',
    result_title: 'Rute ditemukan',
    no_result_title: 'Teu agai rute ditemukan',
    no_result_desc: 'Coba gune naon halte atawa jalan yang leubeuh umum di sekitar titik asal dan tujuan.',
    btn_try_again: 'Coba deui',
  }
};

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const trans = I18N[lang] || I18N.id;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      if (key === 'hero_title') {
        el.innerHTML = trans[key];
      } else {
        el.textContent = trans[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (trans[key]) el.placeholder = trans[key];
  });

  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = lang.toUpperCase();
}

function getStopCoords(stopName) {
  if (STOP_COORDS[stopName]) return STOP_COORDS[stopName];
  const normalized = normalize(stopName);
  for (const [name, coords] of Object.entries(STOP_COORDS)) {
    if (normalize(name) === normalized) return coords;
  }
  for (const [name, coords] of Object.entries(STOP_COORDS)) {
    if (normalize(name).includes(normalized) || normalized.includes(normalize(name))) return coords;
  }
  return null;
}

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

function stopsMatch(input, stop) {
  const ni = normalize(input);
  const ns = normalize(stop);
  if (ns.includes(ni) || ni.includes(ns)) return true;
  const inputWords = ni.split(/\s+/).filter(Boolean);
  const stopWords = ns.split(/\s+/).filter(Boolean);
  if (inputWords.length === 1 && inputWords[0].length >= 3) {
    return stopWords.some(sw => sw.startsWith(inputWords[0]) || inputWords[0].startsWith(sw));
  }
  return inputWords.every(iw => stopWords.some(sw => sw.includes(iw) || iw.includes(sw)));
}

const POI_DATABASE = [
  // === Kampus ===
  { name: "Universitas Sumatera Utara (USU)", short: "USU", cat: "Kampus", lat: 3.5613, lng: 98.6568 },
  { name: "Universitas Negeri Medan (UNIMED)", short: "UNIMED", cat: "Kampus", lat: 3.609, lng: 98.7171 },
  { name: "Universitas Muhammadiyah Sumatera Utara (UMSU)", short: "UMSU", cat: "Kampus", lat: 3.5714, lng: 98.6822 },
  { name: "Universitas Hang Tuah Medan", short: "Hang Tuah", cat: "Kampus", lat: 3.5800, lng: 98.6700 },
  { name: "Universitas Methodist Indonesia (UMI)", short: "UMI", cat: "Kampus", lat: 3.5815, lng: 98.6771 },
  { name: "Politeknik Negeri Medan", short: "Polmed", cat: "Kampus", lat: 3.5738, lng: 98.6755 },
  { name: "Politeknik Kesehatan Medan", short: "Polkes", cat: "Kampus", lat: 3.5790, lng: 98.6693 },
  { name: "Universitas Prima Indonesia (UNPRI)", short: "UNPRI", cat: "Kampus", lat: 3.5925, lng: 98.6731 },
  { name: "Universitas Pembangunan Panca Budi", short: "Panca Budi", cat: "Kampus", lat: 3.5960, lng: 98.6690 },
  { name: "IAIN Medan", short: "IAIN", cat: "Kampus", lat: 3.5750, lng: 98.6700 },
  { name: "STMIK STIKOM", short: "STIKOM", cat: "Kampus", lat: 3.5880, lng: 98.6740 },
  { name: "Universitas HKBP Nommensen", short: "UHN", cat: "Kampus", lat: 3.5620, lng: 98.6560 },
  { name: "Universitas Djaya Negara (UDJN)", short: "UDJN", cat: "Kampus", lat: 3.5830, lng: 98.6650 },
  { name: "Universitas Sisingamangaraja XII", short: "UNSADA", cat: "Kampus", lat: 3.5740, lng: 98.6730 },
  { name: "Universitas Medan Area", short: "UMA", cat: "Kampus", lat: 3.5200, lng: 98.6150 },
  { name: "Universitas Darma Agung", short: "UDA", cat: "Kampus", lat: 3.5780, lng: 98.6760 },
  { name: "Universitas Nahdlatul Ulama Sumut", short: "UNU SU", cat: "Kampus", lat: 3.5810, lng: 98.6690 },
  { name: "Universitas Sarjanawiyata Tamansiswa", short: "UST", cat: "Kampus", lat: 3.5770, lng: 98.6810 },
  { name: "Sekolah Tinggi Theologi Sikkola", short: "STT Sikkola", cat: "Kampus", lat: 3.5850, lng: 98.6720 },
  { name: "Universitas Potensi Utama", short: "UPU", cat: "Kampus", lat: 3.5930, lng: 98.6670 },

  // === Rumah Sakit ===
  { name: "RSUP H. Adam Malik", short: "RS Adam Malik", cat: "Rumah Sakit", lat: 3.5492, lng: 98.6618 },
  { name: "RS Pirngadi", short: "RS Pirngadi", cat: "Rumah Sakit", lat: 3.5960, lng: 98.6780 },
  { name: "RS Mitra Keluarga", short: "RS Mitra Keluarga", cat: "Rumah Sakit", lat: 3.5903, lng: 98.6702 },
  { name: "RS Sari Mutiara", short: "RS Sari Mutiara", cat: "Rumah Sakit", lat: 3.5826, lng: 98.6710 },
  { name: "RS Bunda Thamrin", short: "RS Bunda Thamrin", cat: "Rumah Sakit", lat: 3.5760, lng: 98.6720 },
  { name: "RS Elisabeth", short: "RS Elisabeth", cat: "Rumah Sakit", lat: 3.5844, lng: 98.6730 },
  { name: "RS Murni Teguh", short: "RS Murni Teguh", cat: "Rumah Sakit", lat: 3.5830, lng: 98.6705 },
  { name: "RS Permata Hati Medan", short: "RS Permata Hati", cat: "Rumah Sakit", lat: 3.5700, lng: 98.6750 },
  { name: "RS Siloam Dhirga Sari", short: "RS Siloam", cat: "Rumah Sakit", lat: 3.5770, lng: 98.6695 },
  { name: "RS Martha Friska", short: "RS Martha Friska", cat: "Rumah Sakit", lat: 3.5720, lng: 98.6620 },
  { name: "RS Columbia Asia Medan", short: "RS Columbia", cat: "Rumah Sakit", lat: 3.5900, lng: 98.6710 },
  { name: "RS Promo Mitra", short: "RS Promo Mitra", cat: "Rumah Sakit", lat: 3.5870, lng: 98.6740 },
  { name: "RS Hati Mulia", short: "RS Hati Mulia", cat: "Rumah Sakit", lat: 3.5670, lng: 98.6630 },
  { name: "RS Tengku Rhoewaeli", short: "RS TR", cat: "Rumah Sakit", lat: 3.5810, lng: 98.6670 },
  { name: "RSU Dokter Tercinta", short: "RS Tercinta", cat: "Rumah Sakit", lat: 3.5850, lng: 98.6660 },
  { name: "Klinik Mitra Keluarga Helvetia", short: "Klinik Helvetia", cat: "Rumah Sakit", lat: 3.6070, lng: 98.6310 },
  { name: "Klinik Pratama Wahidin", short: "Klinik Wahidin", cat: "Rumah Sakit", lat: 3.5830, lng: 98.6760 },

  // === Mall & Pusat Perbelanjaan ===
  { name: "Mall Centre Point", short: "Centre Point", cat: "Mall", lat: 3.5894, lng: 98.6717 },
  { name: "Mall Sun Plaza", short: "Sun Plaza", cat: "Mall", lat: 3.5823, lng: 98.6719 },
  { name: "Mall Plaza Medan Fair", short: "Plaza Medan Fair", cat: "Mall", lat: 3.5929, lng: 98.6637 },
  { name: "Mall Medan Fair", short: "Medan Fair", cat: "Mall", lat: 3.5929, lng: 98.6637 },
  { name: "Mall Cambridge City Square", short: "Cambridge City", cat: "Mall", lat: 3.5860, lng: 98.6710 },
  { name: "Mall North Park", short: "North Park", cat: "Mall", lat: 3.5910, lng: 98.6640 },
  { name: "ITC Mulia", short: "ITC Mulia", cat: "Mall", lat: 3.5805, lng: 98.6740 },
  { name: "Mall Johor", short: "Mall Johor", cat: "Mall", lat: 3.5680, lng: 98.7350 },
  { name: "Mall Mikastar", short: "Mikastar", cat: "Mall", lat: 3.5700, lng: 98.6580 },
  { name: "Mall Ring Road City Walks", short: "Ring Road City Walks", cat: "Mall", lat: 3.5800, lng: 98.6150 },
  { name: "Mall Embedded", short: "Embedded", cat: "Mall", lat: 3.5830, lng: 98.6650 },
  { name: "Pasar Pusat", short: "Pasar Pusat", cat: "Pasar", lat: 3.5870, lng: 98.6750 },
  { name: "Pasar Terjun", short: "Pasar Terjun", cat: "Pasar", lat: 3.5350, lng: 98.7650 },
  { name: "Pasar Rakyat Petisah", short: "Pasar Petisah", cat: "Pasar", lat: 3.5927, lng: 98.6580 },
  { name: "Pasar Bandar Baru", short: "Pasar Bandar Baru", cat: "Pasar", lat: 3.5890, lng: 98.6750 },

  // === Pasar ===
  { name: "Pasar Ikan Lama", short: "Pasar Ikan Lama", cat: "Pasar", lat: 3.5912, lng: 98.6775 },
  { name: "Pasar Baru", short: "Pasar Baru", cat: "Pasar", lat: 3.5880, lng: 98.6745 },
  { name: "Pasar Merdeka", short: "Pasar Merdeka", cat: "Pasar", lat: 3.5860, lng: 98.6760 },
  { name: "Pasar Simpang Limun", short: "Pasar Limun", cat: "Pasar", lat: 3.5570, lng: 98.6973 },
  { name: "Pasar Bersama Padang Bulan", short: "Pasar Padang Bulan", cat: "Pasar", lat: 3.5554, lng: 98.6613 },
  { name: "Pasar Rakyat Titi Kuning", short: "Pasar Titi Kuning", cat: "Pasar", lat: 3.5340, lng: 98.6842 },
  { name: "Pasar Tembung", short: "Pasar Tembung", cat: "Pasar", lat: 3.5948, lng: 98.7348 },
  { name: "Pasar Amplas", short: "Pasar Amplas", cat: "Pasar", lat: 3.5493, lng: 98.7167 },

  // === Landmark & Wisata ===
  { name: "Istana Maimun", short: "Istana Maimun", cat: "Landmark", lat: 3.5752, lng: 98.6838 },
  { name: "Tjong A Fie Mansion", short: "Tjong A Fie", cat: "Landmark", lat: 3.5870, lng: 98.6750 },
  { name: "Merdeka Walk", short: "Merdeka Walk", cat: "Landmark", lat: 3.5914, lng: 98.6791 },
  { name: "Lapangan Merdeka", short: "Lap. Merdeka", cat: "Landmark", lat: 3.5903, lng: 98.6787 },
  { name: "Rahmat International Museum", short: "Rahmat Museum", cat: "Landmark", lat: 3.5735, lng: 98.6655 },
  { name: "Kebun Binatang Medan", short: "Kebun Binatang", cat: "Landmark", lat: 3.5753, lng: 98.6650 },
  { name: "Masjid Raya Medan", short: "Masjid Raya", cat: "Ibadah", lat: 3.5873, lng: 98.6750 },
  { name: "Titi Gantung", short: "Titi Gantung", cat: "Landmark", lat: 3.5862, lng: 98.6758 },
  { name: "Sungai Deli", short: "Sungai Deli", cat: "Landmark", lat: 3.5850, lng: 98.6765 },
  { name: "Kampung Keling", short: "Kampung Keling", cat: "Landmark", lat: 3.5830, lng: 98.6760 },
  { name: "Chinatown Medan", short: "Chinatown", cat: "Landmark", lat: 3.5865, lng: 98.6755 },
  { name: "Taman Beringin", short: "Taman Beringin", cat: "Landmark", lat: 3.5763, lng: 98.6693 },
  { name: "Palladium Mall", short: "Palladium", cat: "Landmark", lat: 3.5902, lng: 98.6739 },
  { name: "Stasiun Kereta Api Medan", short: "Stasiun KA", cat: "Landmark", lat: 3.5898, lng: 98.6800 },
  { name: "Taman Alam Waringin", short: "Taman Waringin", cat: "Landmark", lat: 3.5720, lng: 98.6640 },
  { name: "Museum Negeri Sumut", short: "Museum Sumut", cat: "Landmark", lat: 3.5750, lng: 98.6830 },
  { name: "Graha MEDC", short: "Graha MEDC", cat: "Landmark", lat: 3.5830, lng: 98.6710 },
  { name: "Kantor Pos Besar Medan", short: "Kantor Pos", cat: "Landmark", lat: 3.5880, lng: 98.6740 },
  { name: "Gedung Juang 45", short: "Gedung Juang", cat: "Landmark", lat: 3.5890, lng: 98.6750 },

  // === Transportasi ===
  { name: "Bandara Internasional Kualanamu", short: "Bandara Kualanamu", cat: "Transportasi", lat: 3.6419, lng: 98.8830 },
  { name: "Stasiun Kereta Api Medan", short: "Stasiun KA", cat: "Transportasi", lat: 3.5898, lng: 98.6800 },
  { name: "Terminal Amplas", short: "Terminal Amplas", cat: "Transportasi", lat: 3.5391, lng: 98.7182 },
  { name: "Terminal Pinang Baris", short: "Terminal Pinang Baris", cat: "Transportasi", lat: 3.5900, lng: 98.6103 },
  { name: "Terminal Belawan", short: "Terminal Belawan", cat: "Transportasi", lat: 3.7867, lng: 98.6957 },
  { name: "Stasiun Binjai", short: "Stasiun Binjai", cat: "Transportasi", lat: 3.6000, lng: 98.4800 },

  // === Hotel ===
  { name: "Hotel Santika Medan", short: "Hotel Santika", cat: "Hotel", lat: 3.5800, lng: 98.6710 },
  { name: "Hotel Aryaduta Medan", short: "Aryaduta", cat: "Hotel", lat: 3.5840, lng: 98.6730 },
  { name: "Hotel JW Marriott Medan", short: "JW Marriott", cat: "Hotel", lat: 3.5860, lng: 98.6715 },
  { name: "Hotel Four Points", short: "Four Points", cat: "Hotel", lat: 3.5885, lng: 98.6705 },
  { name: "Hotel Midtown Medan", short: "Midtown", cat: "Hotel", lat: 3.5820, lng: 98.6725 },
  { name: "Hotel Padang Bulan", short: "Hotel Padang Bulan", cat: "Hotel", lat: 3.5550, lng: 98.6610 },
  { name: "Hotel Griya Martoba", short: "Griya Martoba", cat: "Hotel", lat: 3.5300, lng: 98.7800 },
  { name: "Hotel Sewu Indah", short: "Sewu Indah", cat: "Hotel", lat: 3.5850, lng: 98.6680 },
  { name: "Hotel Garuda Plaza", short: "Garuda Plaza", cat: "Hotel", lat: 3.5785, lng: 98.6861 },
  { name: "Hotel Danau Toba International", short: "Danau Toba", cat: "Hotel", lat: 3.5840, lng: 98.6710 },
  { name: "Hotel Sinabung", short: "Sinabung", cat: "Hotel", lat: 3.5810, lng: 98.6690 },

  // === Pemerintahan ===
  { name: "Kantor Gubernur Sumut", short: "Kantor Gubernur", cat: "Pemerintahan", lat: 3.5808, lng: 98.6717 },
  { name: "Kantor Wali Kota Medan", short: "Kantor Wali Kota", cat: "Pemerintahan", lat: 3.5900, lng: 98.6680 },
  { name: "Polda Sumut", short: "Polda Sumut", cat: "Pemerintahan", lat: 3.5810, lng: 98.6690 },
  { name: "Kantor DPRD Sumut", short: "Kantor DPRD", cat: "Pemerintahan", lat: 3.5800, lng: 98.6720 },
  { name: "Kantor Bappeda Sumut", short: "Kantor Bappeda", cat: "Pemerintahan", lat: 3.5790, lng: 98.6700 },
  { name: "Kantor Dinas Kesehatan", short: "Dinkes", cat: "Pemerintahan", lat: 3.5820, lng: 98.6695 },
  { name: "Polrestabes Medan", short: "Polrestabes", cat: "Pemerintahan", lat: 3.5870, lng: 98.6730 },
  { name: "Kejaksaan Tinggi Sumut", short: "Kejati Sumut", cat: "Pemerintahan", lat: 3.5780, lng: 98.6710 },
  { name: "Kantor Imigrasi Medan", short: "Imigrasi", cat: "Pemerintahan", lat: 3.5750, lng: 98.6650 },

  // === Jalan Utama ===
  { name: "Jl. Jenderal Sudirman", short: "Jl. Sudirman", cat: "Jalan", lat: 3.5769, lng: 98.6678 },
  { name: "Jl. Pemuda", short: "Jl. Pemuda", cat: "Jalan", lat: 3.5890, lng: 98.6750 },
  { name: "Jl. Gatot Subroto", short: "Jl. Gatot Subroto", cat: "Jalan", lat: 3.5911, lng: 98.6355 },
  { name: "Jl. Iskandar Muda", short: "Jl. Iskandar Muda", cat: "Jalan", lat: 3.5896, lng: 98.6615 },
  { name: "Jl. Sisingamangaraja", short: "Jl. Sisingamangaraja", cat: "Jalan", lat: 3.5377, lng: 98.7092 },
  { name: "Jl. Gajah Mada", short: "Jl. Gajah Mada", cat: "Jalan", lat: 3.5849, lng: 98.6544 },
  { name: "Jl. S. Parman", short: "Jl. S. Parman", cat: "Jalan", lat: 3.5803, lng: 98.6674 },
  { name: "Jl. Kapt. Muslim", short: "Jl. Kapt. Muslim", cat: "Jalan", lat: 3.6028, lng: 98.6454 },
  { name: "Jl. Yos Sudarso", short: "Jl. Yos Sudarso", cat: "Jalan", lat: 3.5900, lng: 98.6780 },
  { name: "Jl. SM Raja", short: "Jl. SM Raja", cat: "Jalan", lat: 3.5800, lng: 98.6850 },
  { name: "Jl. Dr. Mansyur", short: "Jl. Dr. Mansyur", cat: "Jalan", lat: 3.5700, lng: 98.6650 },
  { name: "Jl. Thamrin", short: "Jl. Thamrin", cat: "Jalan", lat: 3.5830, lng: 98.6700 },
  { name: "Jl. Letjen S Parman", short: "Jl. Letjen S Parman", cat: "Jalan", lat: 3.5800, lng: 98.6670 },
  { name: "Jl. Monginsidi", short: "Jl. Monginsidi", cat: "Jalan", lat: 3.5712, lng: 98.6718 },
  { name: "Jl. Palang Merah", short: "Jl. Palang Merah", cat: "Jalan", lat: 3.5842, lng: 98.6780 },
  { name: "Jl. Sunggal", short: "Jl. Sunggal", cat: "Jalan", lat: 3.5874, lng: 98.6423 },
  { name: "Jl. Denai", short: "Jl. Denai", cat: "Jalan", lat: 3.5819, lng: 98.7094 },
  { name: "Jl. Halat", short: "Jl. Halat", cat: "Jalan", lat: 3.5723, lng: 98.7015 },
  { name: "Jl. Amaliun", short: "Jl. Amaliun", cat: "Jalan", lat: 3.5761, lng: 98.6955 },
  { name: "Jl. Haji Adam Malik", short: "Jl. H. Adam Malik", cat: "Jalan", lat: 3.5600, lng: 98.6620 },
  { name: "Jl. Jamin Ginting", short: "Jl. Jamin Ginting", cat: "Jalan", lat: 3.6200, lng: 98.6200 },
  { name: "Jl. Karya", short: "Jl. Karya", cat: "Jalan", lat: 3.6009, lng: 98.6139 },
  { name: "Jl. Pancing", short: "Jl. Pancing", cat: "Jalan", lat: 3.6001, lng: 98.7204 },
  { name: "Jl. Wakil Raja", short: "Jl. Wakil Raja", cat: "Jalan", lat: 3.5880, lng: 98.6760 },

  // === Sekolah ===
  { name: "SMA Negeri 1 Medan", short: "SMA 1 Medan", cat: "Sekolah", lat: 3.5870, lng: 98.6750 },
  { name: "SMA Negeri 2 Medan", short: "SMA 2 Medan", cat: "Sekolah", lat: 3.5820, lng: 98.6700 },
  { name: "SMA Negeri 3 Medan", short: "SMA 3 Medan", cat: "Sekolah", lat: 3.5840, lng: 98.6680 },
  { name: "SMA Negeri 4 Medan", short: "SMA 4 Medan", cat: "Sekolah", lat: 3.5860, lng: 98.6720 },
  { name: "SMA Negeri 5 Medan", short: "SMA 5 Medan", cat: "Sekolah", lat: 3.5730, lng: 98.6650 },
  { name: "SMA Negeri 7 Medan", short: "SMA 7 Medan", cat: "Sekolah", lat: 3.5710, lng: 98.6720 },
  { name: "SMA Negeri 8 Medan", short: "SMA 8 Medan", cat: "Sekolah", lat: 3.5890, lng: 98.6700 },
  { name: "SMA Negeri 11 Medan", short: "SMA 11 Medan", cat: "Sekolah", lat: 3.5780, lng: 98.6670 },
  { name: "SMA Negeri 14 Medan", short: "SMA 14 Medan", cat: "Sekolah", lat: 3.5910, lng: 98.6640 },
  { name: "SMAS Katolik Stella Duce 1", short: "Stella Duce", cat: "Sekolah", lat: 3.5830, lng: 98.6730 },
  { name: "SMAS Methodist 1", short: "Methodist 1", cat: "Sekolah", lat: 3.5810, lng: 98.6700 },
  { name: "SMAS Swasta PANCABUDI", short: "SMAS PANCABUDI", cat: "Sekolah", lat: 3.5960, lng: 98.6690 },
  { name: "SMP Negeri 1 Medan", short: "SMP 1 Medan", cat: "Sekolah", lat: 3.5870, lng: 98.6760 },
  { name: "SMP Negeri 7 Medan", short: "SMP 7 Medan", cat: "Sekolah", lat: 3.5830, lng: 98.6710 },
  { name: "SD Negeri 110853", short: "SD 110853", cat: "Sekolah", lat: 3.5860, lng: 98.6750 },
  { name: "SD Negeri 060940", short: "SD 060940", cat: "Sekolah", lat: 3.5750, lng: 98.6700 },

  // === Kantor & Perkantoran ===
  { name: "Kantor BPS Medan", short: "BPS Medan", cat: "Bisnis", lat: 3.5790, lng: 98.6710 },
  { name: "Kantor Bea Cukai Medan", short: "Bea Cukai", cat: "Bisnis", lat: 3.5920, lng: 98.6640 },
  { name: "PLN Medan", short: "PLN Medan", cat: "Bisnis", lat: 3.5860, lng: 98.6710 },

  // === Tempat Ibadah ===
  { name: "Masjid Raya Medan", short: "Masjid Raya", cat: "Ibadah", lat: 3.5873, lng: 98.6750 },
  { name: "Masjid Al-Osmani", short: "Masjid Al-Osmani", cat: "Ibadah", lat: 3.5860, lng: 98.6740 },
  { name: "Masjid Taqwa", short: "Masjid Taqwa", cat: "Ibadah", lat: 3.5880, lng: 98.6700 },
  { name: "Gereja HKBP Dame", short: "HKBP Dame", cat: "Ibadah", lat: 3.5870, lng: 98.6720 },
  { name: "Gereja Katolik Maria Zaitun", short: "Maria Zaitun", cat: "Ibadah", lat: 3.5840, lng: 98.6730 },
  { name: "Gereja GPIB Maranatha", short: "GPIB Maranatha", cat: "Ibadah", lat: 3.5830, lng: 98.6700 },
  { name: "Vihara Duta Maitreya", short: "Vihara Duta", cat: "Ibadah", lat: 3.5780, lng: 98.6660 },
  { name: "Masjid Agung Medan", short: "Masjid Agung", cat: "Ibadah", lat: 3.5850, lng: 98.6690 },

  // === Kantor & Bisnis ===
  { name: "Menara Mandiri", short: "Menara Mandiri", cat: "Bisnis", lat: 3.5870, lng: 98.6730 },
  { name: "Gedung BPJS Kesehatan", short: "BPJS", cat: "Bisnis", lat: 3.5840, lng: 98.6700 },
  { name: "Kantor Telkom Medan", short: "Telkom", cat: "Bisnis", lat: 3.5850, lng: 98.6720 },
  { name: "Kantor Bank Indonesia Medan", short: "BI Medan", cat: "Bisnis", lat: 3.5860, lng: 98.6710 },
  { name: "Kantor BRI Medan", short: "BRI Medan", cat: "Bisnis", lat: 3.5870, lng: 98.6710 },
  { name: "Kantor BNI Medan", short: "BNI Medan", cat: "Bisnis", lat: 3.5880, lng: 98.6730 },
  { name: "Menara Tirtanadi", short: "Menara Tirtanadi", cat: "Bisnis", lat: 3.5890, lng: 98.6710 },
  { name: "Gedung Graha Pena", short: "Graha Pena", cat: "Bisnis", lat: 3.5910, lng: 98.6650 },
  { name: "Kantor Telkomsel Medan", short: "Telkomsel", cat: "Bisnis", lat: 3.5850, lng: 98.6710 },
  { name: "Kantor XL Axiata Medan", short: "XL Axiata", cat: "Bisnis", lat: 3.5830, lng: 98.6700 },

  // === Stadion & Olahraga ===
  { name: "Stadion Teladan", short: "Stadion Teladan", cat: "Olahraga", lat: 3.5649, lng: 98.6955 },
  { name: "GOR Medan", short: "GOR Medan", cat: "Olahraga", lat: 3.5800, lng: 98.6650 },
  { name: "Lapangan Merdeka", short: "Lap. Merdeka", cat: "Olahraga", lat: 3.5903, lng: 98.6787 },
  { name: "Kolam Renang Tirta Mas", short: "Tirta Mas", cat: "Olahraga", lat: 3.5600, lng: 98.6650 },

  // === Kompleks Perumahan ===
  { name: "Kompleks Taman Setiabudi", short: "Taman Setiabudi", cat: "Perumahan", lat: 3.5750, lng: 98.6650 },
  { name: "Kompleks Cemara Asri", short: "Cemara Asri", cat: "Perumahan", lat: 3.5920, lng: 98.6250 },
  { name: "Perumnas Helvetia", short: "Perum Helvetia", cat: "Perumahan", lat: 3.6070, lng: 98.6305 },
  { name: "Perumahan Simalingkar", short: "Perum Simalingkar", cat: "Perumahan", lat: 3.6100, lng: 98.6400 },
  { name: "Kompleks Padang Bulan", short: "Kompleks Padang Bulan", cat: "Perumahan", lat: 3.5554, lng: 98.6613 },
  { name: "Perumahan Johor", short: "Perum Johor", cat: "Perumahan", lat: 3.5680, lng: 98.6715 },
  { name: "Perumahan Titi Kuning", short: "Perum Titi Kuning", cat: "Perumahan", lat: 3.5340, lng: 98.6842 },
  { name: "Kompleks Amplas Baru", short: "Amplas Baru", cat: "Perumahan", lat: 3.5493, lng: 98.7167 },
  { name: "Perumahan Siborong", short: "Perum Siborong", cat: "Perumahan", lat: 3.5750, lng: 98.6850 },
  { name: "Kompleks Citra Garden", short: "Citra Garden", cat: "Perumahan", lat: 3.5800, lng: 98.6200 },

  // === Kafe & Restoran ===
  { name: "Kedai Kopi Pardede", short: "Kopi Pardede", cat: "Kuliner", lat: 3.5880, lng: 98.6750 },
  { name: "Tip Top Restaurant", short: "Tip Top", cat: "Kuliner", lat: 3.5870, lng: 98.6740 },
  { name: "Sate Kerang Simpang Raya", short: "Sate Kerang", cat: "Kuliner", lat: 3.5840, lng: 98.6730 },
  { name: "Bihun Bebek Kinang Beki", short: "Bihun Bebek", cat: "Kuliner", lat: 3.5860, lng: 98.6745 },
  { name: "Lontong Medan Pusat", short: "Lontong Medan", cat: "Kuliner", lat: 3.5850, lng: 98.6740 },
  { name: "Kopi Sidikalang", short: "Kopi Sidikalang", cat: "Kuliner", lat: 3.5830, lng: 98.6710 },
  { name: "Soto Medan Kesawan", short: "Soto Medan", cat: "Kuliner", lat: 3.5880, lng: 98.6750 },
  { name: "Mie Gomak Sitopolo", short: "Mie Gomak", cat: "Kuliner", lat: 3.5850, lng: 98.6720 },
  { name: "Lapau Nelayan", short: "Lapau Nelayan", cat: "Kuliner", lat: 3.5890, lng: 98.6760 },
  { name: "Durian Ucok Medan", short: "Durian Ucok", cat: "Kuliner", lat: 3.5820, lng: 98.6710 },

  // === Taman Tambahan ===
  { name: "Taman Deli", short: "Taman Deli", cat: "Landmark", lat: 3.5890, lng: 98.6770 },
  { name: "Taman Perwira", short: "Taman Perwira", cat: "Landmark", lat: 3.5870, lng: 98.6720 },
  { name: "Taman Ahmad Yani", short: "Taman Ahmad Yani", cat: "Landmark", lat: 3.5860, lng: 98.6710 },
  { name: "Taman Labu", short: "Taman Labu", cat: "Landmark", lat: 3.5840, lng: 98.6700 },
  { name: "Taman KR Medan", short: "Taman KR", cat: "Landmark", lat: 3.5850, lng: 98.6720 },
];

let osrmCache = {};
const OSRM_URL = "https://router.project-osrm.org/route/v1/driving/";

async function fetchRoadSegment(from, to) {
  const key = `${from[0]},${from[1]}->${to[0]},${to[1]}`;
  if (osrmCache[key]) return osrmCache[key];
  try {
    const url = `${OSRM_URL}${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&geometries=geojson`;
    const resp = await fetch(url, { signal: AbortSignal.timeout(6000) });
    const data = await resp.json();
    if (data.code === "Ok" && data.routes && data.routes[0]) {
      const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
      osrmCache[key] = coords;
      return coords;
    }
  } catch (e) {}
  osrmCache[key] = [from, to];
  return [from, to];
}

async function fetchRoadGeometry(coords) {
  if (coords.length < 2) return coords;
  if (coords.length === 2) return fetchRoadSegment(coords[0], coords[1]);

  const segments = [];
  for (let i = 0; i < coords.length - 1; i++) {
    segments.push(fetchRoadSegment(coords[i], coords[i + 1]));
  }
  const results = await Promise.all(segments);
  const merged = [results[0][0]];
  for (const seg of results) {
    for (let j = 1; j < seg.length; j++) {
      const last = merged[merged.length - 1];
      if (seg[j][0] !== last[0] || seg[j][1] !== last[1]) {
        merged.push(seg[j]);
      }
    }
  }
  return merged;
}

function drawRouteLine(map, coords, color, weight) {
  const w = weight || 5;
  L.polyline(coords, { color: "white", weight: w + 3, opacity: 0.9, lineCap: "round", lineJoin: "round" }).addTo(map);
  return L.polyline(coords, { color: color, weight: w, opacity: 0.85, lineCap: "round", lineJoin: "round" }).addTo(map);
}

function addMapLegend(map, segments) {
  const items = [];
  if (segments === 'direct') {
    items.push({ color: '#55db9c', label: 'Asal' });
    items.push({ color: '#1a1a2e', label: 'Jalur rute' });
    items.push({ color: '#fb4903', label: 'Tujuan' });
  } else if (segments === 'transfer') {
    items.push({ color: '#55db9c', label: 'Asal' });
    items.push({ color: '#1a1a2e', label: 'Rute 1' });
    items.push({ color: '#ffd731', label: 'Titik pindah' });
    items.push({ color: '#fb4903', label: 'Rute 2' });
    items.push({ color: '#fb4903', label: 'Tujuan' });
  } else {
    items.push({ color: '#55db9c', label: 'Asal' });
    items.push({ color: '#1a1a2e', label: 'Rute angkot' });
    items.push({ color: '#ffd731', label: 'Titik pindah' });
    items.push({ color: '#fb4903', label: 'Tujuan' });
  }
  const legend = L.control({ position: 'bottomleft' });
  legend.onAdd = function () {
    const div = L.DomUtil.create('div');
    div.style.cssText = 'background:rgba(255,255,255,0.92);border:2px solid #000;border-radius:8px;padding:6px 8px;font-family:Space Grotesk,sans-serif;font-size:10px;line-height:1.5;box-shadow:2px 2px 0 rgba(0,0,0,0.2);';
    div.innerHTML = items.map(it =>
      `<div style="display:flex;align-items:center;gap:5px;margin:1px 0;">
        <span style="width:10px;height:10px;border-radius:50%;background:${it.color};border:1px solid rgba(0,0,0,0.15);flex-shrink:0;"></span>
        <span style="font-weight:700;color:#1a1a2e;">${it.label}</span>
      </div>`
    ).join('');
    return div;
  };
  legend.addTo(map);
}

async function upgradeToRoadGeometry(map, straightLine, coords) {
  try {
    const roadCoords = await fetchRoadGeometry(coords);
    if (roadCoords.length > 2) {
      straightLine.setLatLngs(roadCoords);
    }
  } catch (e) {}
}

let nominatimCache = {};
let nominatimTimer = null;
let nominatimLastCall = 0;
const NOMINATIM_DEBOUNCE_MS = 600;

function searchNominatim(query) {
  return new Promise((resolve) => {
    if (nominatimCache[query]) { resolve(nominatimCache[query]); return; }
    const now = Date.now();
    const wait = Math.max(0, NOMINATIM_DEBOUNCE_MS - (now - nominatimLastCall));
    clearTimeout(nominatimTimer);
    nominatimTimer = setTimeout(() => {
      nominatimLastCall = Date.now();
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + " Medan")}&format=json&limit=5&addressdetails=1`;
      fetch(url, { headers: { "Accept-Language": "id" } })
        .then(r => r.json())
        .then(data => {
          const results = data.map(d => ({
            name: d.display_name.split(",")[0],
            short: d.display_name.split(",")[0],
            cat: d.type === "amenity" ? d.amenity : d.type === "shop" ? d.shop : d.type === "tourism" ? d.tourism : "Lokasi",
            lat: parseFloat(d.lat),
            lng: parseFloat(d.lon),
            isPOI: false,
            isNominatim: true
          }));
          nominatimCache[query] = results;
          resolve(results);
        })
        .catch(() => resolve([]));
    }, wait);
  });
}

function getPoiSuggestions(input) {
  if (!input || input.trim().length < 2) return [];
  const n = normalize(input);
  return POI_DATABASE.filter(poi => {
    return normalize(poi.name).includes(n) || normalize(poi.short).includes(n) || normalize(poi.cat).includes(n);
  }).slice(0, 5).map(p => ({ ...p, isPOI: true }));
}

function getAutoSuggestions(input) {
  if (!input || input.trim().length < 1) return [];
  const results = [];
  const inputNorm = normalize(input);
  ALL_STOPS.forEach(stop => {
    if (stopsMatch(input, stop)) results.push({ name: stop, cat: "Halte", isStop: true });
  });
  const pois = getPoiSuggestions(input);
  pois.forEach(p => results.push(p));
  const seen = new Set();
  const unique = results.filter(r => {
    const key = normalize(r.name);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return unique.slice(0, 10);
}

function renderSuggestionList(inputEl, listEl, hiddenField, highlightKey) {
  const val = inputEl.value;
  const suggestions = getAutoSuggestions(val);
  hiddenField.value = "";
  if (highlightKey) highlightedIndices[highlightKey] = -1;

  if (suggestions.length === 0 || val.trim().length < 1) {
    listEl.classList.add("hidden");
    listEl.innerHTML = "";
    return;
  }

  const catIcon = (cat) => {
    switch(cat) {
      case "Halte": return '<i data-lucide="bus" class="w-3.5 h-3.5 text-[#ffd731] inline mr-2 shrink-0"></i>';
      case "Kampus": return '<i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-[#4da2ff] inline mr-2 shrink-0"></i>';
      case "Rumah Sakit": return '<i data-lucide="heart-pulse" class="w-3.5 h-3.5 text-[#fb4903] inline mr-2 shrink-0"></i>';
      case "Mall": return '<i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#55db9c] inline mr-2 shrink-0"></i>';
      case "Pasar": return '<i data-lucide="store" class="w-3.5 h-3.5 text-[#55db9c] inline mr-2 shrink-0"></i>';
      case "Landmark": return '<i data-lucide="landmark" class="w-3.5 h-3.5 text-[#9C27B0] inline mr-2 shrink-0"></i>';
      case "Transportasi": return '<i data-lucide="plane" class="w-3.5 h-3.5 text-navy inline mr-2 shrink-0"></i>';
      case "Hotel": return '<i data-lucide="bed" class="w-3.5 h-3.5 text-[#795548] inline mr-2 shrink-0"></i>';
      case "Pemerintahan": return '<i data-lucide="building-2" class="w-3.5 h-3.5 text-navy inline mr-2 shrink-0"></i>';
      case "Ibadah": return '<i data-lucide="church" class="w-3.5 h-3.5 text-[#ffd731] inline mr-2 shrink-0"></i>';
      case "Jalan": return '<i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#000000]/40 inline mr-2 shrink-0"></i>';
      case "Sekolah": return '<i data-lucide="school" class="w-3.5 h-3.5 text-[#FF9800] inline mr-2 shrink-0"></i>';
      case "Perumahan": return '<i data-lucide="home" class="w-3.5 h-3.5 text-[#8D6E63] inline mr-2 shrink-0"></i>';
      case "Kuliner": return '<i data-lucide="utensils" class="w-3.5 h-3.5 text-[#E91E63] inline mr-2 shrink-0"></i>';
      case "Olahraga": return '<i data-lucide="trophy" class="w-3.5 h-3.5 text-[#4CAF50] inline mr-2 shrink-0"></i>';
      case "Bisnis": return '<i data-lucide="briefcase" class="w-3.5 h-3.5 text-[#607D8B] inline mr-2 shrink-0"></i>';
      default: return '<i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#000000]/30 inline mr-2 shrink-0"></i>';
    }
  };

  listEl.innerHTML = suggestions.map((s, i) => {
    const dataAttrs = s.isPOI
      ? `data-poi-name="${s.name}" data-poi-lat="${s.lat}" data-poi-lng="${s.lng}" data-poi-cat="${s.cat}"`
      : `data-value="${s.name}"`;
    return `<button type="button" class="suggestion-item w-full text-left px-4 py-2.5 text-sm hover:bg-[#4da2ff]/10 transition-colors border-b border-[#000000]/5 last:border-0 flex items-center gap-2" data-index="${i}" ${dataAttrs}>
      ${catIcon(s.cat)}
      <span class="min-w-0 flex-1 truncate">${s.name}</span>
      <span class="text-[10px] font-display font-bold text-[#000000]/25 shrink-0 uppercase">${s.cat}</span>
    </button>`;
  }).join("");
  listEl.classList.remove("hidden");
  lucide.createIcons({ nodes: listEl.querySelectorAll("[data-lucide]") });

  listEl.querySelectorAll(".suggestion-item").forEach(btn => {
    btn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(btn, inputEl, hiddenField, listEl);
    });
  });
}

function selectSuggestion(btn, inputEl, hiddenField, listEl) {
  if (btn.dataset.value) {
    inputEl.value = btn.dataset.value;
    hiddenField.value = btn.dataset.value;
  } else if (btn.dataset.poiLat) {
    inputEl.value = btn.dataset.poiName;
    hiddenField.value = `__POI__${btn.dataset.poiLat},${btn.dataset.poiLng}__${btn.dataset.poiName}`;
  }
  listEl.classList.add("hidden");
}

function setupKeyboardNav(inputEl, listEl, hiddenField, highlightKey) {
  inputEl.addEventListener("keydown", (e) => {
    const items = listEl.querySelectorAll(".suggestion-item");
    if (!items.length || listEl.classList.contains("hidden")) {
      if (e.key === "Escape") {
        listEl.classList.add("hidden");
        inputEl.blur();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlightedIndices[highlightKey] = Math.min(highlightedIndices[highlightKey] + 1, items.length - 1);
      updateHighlight(items, highlightedIndices[highlightKey]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlightedIndices[highlightKey] = Math.max(highlightedIndices[highlightKey] - 1, 0);
      updateHighlight(items, highlightedIndices[highlightKey]);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndices[highlightKey] >= 0 && highlightedIndices[highlightKey] < items.length) {
        selectSuggestion(items[highlightedIndices[highlightKey]], inputEl, hiddenField, listEl);
      } else {
        listEl.classList.add("hidden");
      }
    } else if (e.key === "Escape") {
      listEl.classList.add("hidden");
      highlightedIndices[highlightKey] = -1;
    }
  });
}

function updateHighlight(items, index) {
  items.forEach((item, i) => {
    item.classList.toggle("highlighted", i === index);
    if (i === index) item.scrollIntoView({ block: "nearest" });
  });
}

async function resolveToNearestStop(value) {
  if (value.startsWith("__POI__")) {
    const match = value.match(/__POI__([-\d.]+),([-\d.]+)__?(.*)/);
    if (match) {
      const lat = parseFloat(match[1]);
      const lng = parseFloat(match[2]);
      const poiName = match[3] || "";
      let best = null, bestDist = Infinity;
      for (const [stopName, coords] of Object.entries(STOP_COORDS)) {
        const d = Math.sqrt((lat - coords[0]) ** 2 + (lng - coords[1]) ** 2);
        if (d < bestDist) { bestDist = d; best = stopName; }
      }
      if (best) return { stop: best, fromPOI: poiName, poiLat: lat, poiLng: lng };
    }
  }
  const direct = findStop(value);
  if (direct) return { stop: direct };

  try {
    const results = await searchNominatim(value);
    if (results && results.length > 0) {
      const nomResult = results[0];
      let best = null, bestDist = Infinity;
      for (const [stopName, coords] of Object.entries(STOP_COORDS)) {
        const d = Math.sqrt((nomResult.lat - coords[0]) ** 2 + (nomResult.lng - coords[1]) ** 2);
        if (d < bestDist) { bestDist = d; best = stopName; }
      }
      if (best && bestDist < 0.05) return { stop: best, fromPOI: nomResult.name, poiLat: nomResult.lat, poiLng: nomResult.lng };
    }
  } catch (e) {}

  return null;
}

function findStop(input) {
  if (!input || input.trim().length < 2) return null;
  const normalized = normalize(input);
  for (const stop of ALL_STOPS) {
    if (normalize(stop) === normalized) return stop;
  }
  for (const stop of ALL_STOPS) {
    if (normalize(stop).includes(normalized) || normalized.includes(normalize(stop))) return stop;
  }
  for (const stop of ALL_STOPS) {
    if (stopsMatch(input, stop)) return stop;
  }
  return null;
}

function stopIndexInRoute(route, stop) {
  for (let i = 0; i < route.waypoints.length; i++) {
    if (normalize(route.waypoints[i]) === normalize(stop)) return i;
  }
  for (let i = 0; i < route.waypoints.length; i++) {
    if (stopsMatch(stop, route.waypoints[i])) return i;
  }
  return -1;
}

function scoreRoute(result) {
  const stops = result.subWaypoints ? result.subWaypoints.length : 10;
  let score = 0;
  if (!result.transfer) score += 0;
  else if (result.transfers === 1) score += 100;
  else score += 200 + (result.transfers || 0) * 50;
  score += stops;
  const originCoord = STOP_COORDS[result.originStop];
  const destCoord = STOP_COORDS[result.destStop];
  if (originCoord && destCoord) {
    const dist = Math.sqrt(Math.pow(originCoord[0] - destCoord[0], 2) + Math.pow(originCoord[1] - destCoord[1], 2));
    score += dist * 50;
  }
  return score;
}

function findDirectRoutes(origin, destination) {
  const results = [];
  ANGKOT_ROUTES.forEach(route => {
    const oi = stopIndexInRoute(route, origin);
    const di = stopIndexInRoute(route, destination);
    if (oi !== -1 && di !== -1 && oi !== di) {
      const forward = oi < di;
      const isBackward = route.pp ? !forward : false;
      if (!route.pp || forward || isBackward) {
        const start = Math.min(oi, di);
        const end = Math.max(oi, di);
        const subWaypoints = route.waypoints.slice(start, end + 1);
        if (!forward && route.pp) subWaypoints.reverse();
        results.push({ route, originStop: route.waypoints[oi], destStop: route.waypoints[di], subWaypoints, transfer: false, score: 0 });
      }
    }
  });
  results.forEach(r => r.score = scoreRoute(r));
  results.sort((a, b) => a.score - b.score);
  if (results.length > 0) results[0].bestMatch = true;
  return results;
}

function findPublicTransport(origin, destination) {
  if (typeof PUBLIC_TRANSPORT === 'undefined') return [];
  const results = [];
  PUBLIC_TRANSPORT.forEach(pt => {
    const wp = pt.waypoints;
    let oi = -1, di = -1;
    for (let i = 0; i < wp.length; i++) {
      if (normalize(wp[i]).includes(normalize(origin)) || normalize(origin).includes(normalize(wp[i]))) oi = i;
      if (normalize(wp[i]).includes(normalize(destination)) || normalize(destination).includes(normalize(wp[i]))) di = i;
    }
    if (oi !== -1 && di !== -1 && oi !== di) {
      const start = Math.min(oi, di);
      const end = Math.max(oi, di);
      results.push({ ...pt, originIdx: oi, destIdx: di, subWaypoints: wp.slice(start, end + 1) });
    }
  });
  return results;
}

function renderPublicTransportSection(ptRoutes, origin, destination) {
  if (!ptRoutes || ptRoutes.length === 0) return '';
  return `
    <div class="mb-10">
      <h3 class="font-display text-lg font-bold text-[#000000] mb-4 flex items-center gap-2">
        <div class="w-7 h-7 bg-[#00cc66] border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center">
          <i data-lucide="zap" class="w-4 h-4 text-white"></i>
        </div>
        Transportasi Umum
        <span class="text-xs font-body font-normal text-[#000000]/40 ml-1">(${ptRoutes.length})</span>
      </h3>
      <div class="grid gap-4">${ptRoutes.map(pt => renderPublicTransportCard(pt, origin, destination)).join("")}</div>
    </div>
  `;
}

function renderPublicTransportCard(pt, origin, destination) {
  const colorMap = { BRT: '#0066cc', Listrik: '#00cc66' };
  const labelMap = { BRT: 'Trans Metro Deli', Listrik: 'Bus Listrik' };
  const borderColor = colorMap[pt.type] || '#0066cc';
  const label = labelMap[pt.type] || pt.type;
  const icon = pt.type === 'BRT' ? 'bus' : 'zap';
  return `
    <div class="bg-white border-2 border-[#000000] shadow-brutal overflow-hidden">
      <div class="p-4 pb-3">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-[#000000] shadow-brutal-sm shrink-0" style="background:${borderColor}">
            <i data-lucide="${icon}" class="w-5 h-5 text-white"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-display text-sm font-bold text-[#000000]">${pt.name}</p>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-display font-bold px-1.5 py-0.5 rounded" style="background:${borderColor}15;color:${borderColor}">${label}</span>
              <span class="text-[10px] font-body text-[#000000]/40">${pt.waypoints.length} halte</span>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 mb-3">
          ${pt.subWaypoints.map((wp, i) => {
            const isOrigin = normalize(wp) === normalize(origin);
            const isDest = normalize(wp) === normalize(destination);
            const cls = isOrigin ? 'bg-[#55db9c] text-white font-bold border-[#55db9c]' : isDest ? 'bg-[#fb4903] text-white font-bold border-[#fb4903]' : 'bg-[#000000]/5 text-[#000000]/60 border-transparent';
            return `<span class="text-[10px] font-body px-2 py-1 rounded-full border ${cls}">${wp}</span>`;
          }).join("")}
        </div>
        <p class="text-[11px] font-body text-[#000000]/40">
          <i data-lucide="info" class="w-3 h-3 inline mr-1"></i>
          Halte terdekat dari lokasi asal dan tujuanmu. Naik ${label} langsung dari halte.
        </p>
      </div>
    </div>
  `;
}

function findTransferRoutes(origin, destination) {
  const results = [];
  const originRoutes = ANGKOT_ROUTES.filter(r => stopIndexInRoute(r, origin) !== -1);
  const destRoutes = ANGKOT_ROUTES.filter(r => stopIndexInRoute(r, destination) !== -1);

  originRoutes.forEach(r1 => {
    destRoutes.forEach(r2 => {
      if (r1.id === r2.id) return;
      const r1Stops = new Set(r1.waypoints.map(w => normalize(w)));
      for (const wp of r2.waypoints) {
        if (r1Stops.has(normalize(wp))) {
          const oIdx = stopIndexInRoute(r1, origin);
          const tIdx = stopIndexInRoute(r1, wp);
          const dIdx = stopIndexInRoute(r2, destination);
          const tIdx2 = stopIndexInRoute(r2, wp);
          if (oIdx === -1 || tIdx === -1 || dIdx === -1 || tIdx2 === -1) continue;
          const seg1Start = Math.min(oIdx, tIdx);
          const seg1End = Math.max(oIdx, tIdx);
          let sub1 = r1.waypoints.slice(seg1Start, seg1End + 1);
          if (oIdx > tIdx && r1.pp) sub1.reverse();
          else if (oIdx > tIdx && !r1.pp) continue;

          const seg2Start = Math.min(tIdx2, dIdx);
          const seg2End = Math.max(tIdx2, dIdx);
          let sub2 = r2.waypoints.slice(seg2Start, seg2End + 1);
          if (tIdx2 > dIdx && r2.pp) sub2.reverse();
          else if (tIdx2 > dIdx && !r2.pp) continue;

          results.push({
            leg1: { route: r1, originStop: r1.waypoints[oIdx], destStop: wp, subWaypoints: sub1 },
            leg2: { route: r2, originStop: wp, destStop: r2.waypoints[dIdx], subWaypoints: sub2 },
            transferStop: wp,
            transferCount: 1
          });
          break;
        }
      }
    });
  });

  const seen = new Set();
  const unique = results.filter(r => {
    const key = `${r.leg1.route.id}-${r.leg2.route.id}-${r.transferStop}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  unique.forEach(r => {
    const stops1 = r.leg1.subWaypoints.length;
    const stops2 = r.leg2.subWaypoints.length;
    const oCoord = STOP_COORDS[origin];
    const dCoord = STOP_COORDS[destination];
    let dist = 0;
    if (oCoord && dCoord) dist = Math.sqrt(Math.pow(oCoord[0] - dCoord[0], 2) + Math.pow(oCoord[1] - dCoord[1], 2));
    r.score = 100 + stops1 + stops2 + dist * 50;
  });
  unique.sort((a, b) => a.score - b.score);
  if (unique.length > 0) unique[0].bestMatch = true;
  return unique;
}

function getLiveryColor(warna) {
  return LIVERY_COLORS[warna] || LIVERY_COLORS["-"];
}

function getUniqueOperators() {
  const ops = new Set();
  ANGKOT_ROUTES.forEach(r => ops.add(r.operator));
  return [...ops].sort();
}

function getRoutesByOperator(operator) {
  return ANGKOT_ROUTES.filter(r => r.operator === operator);
}

function filterRoutes(query) {
  if (!query || query.trim().length < 1) return ANGKOT_ROUTES;
  const nq = normalize(query);
  return ANGKOT_ROUTES.filter(r => {
    const searchable = normalize(`${r.nomor} ${r.operator} ${r.asal} ${r.tujuan} ${r.waypoints.join(" ")}`);
    return searchable.includes(nq);
  });
}

let currentView = "home";
let searchResults = null;
let explorerFilter = "";
let explorerPage = 1;
const EXPLORER_PAGE_SIZE = 12;
let showAllTransfers = false;
let highlightedIndices = { origin: -1, dest: -1 };

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

function getViewPath(view) {
  if (view === 'home') return '/';
  if (view === 'result' && searchResults) {
    const s = slugify(searchResults.origin);
    const d = slugify(searchResults.destination);
    return `/rute/${s}-ke-${d}`;
  }
  if (view === 'tracking') return '/melacak';
  return '/';
}

function switchView(view, pushState) {
  if (pushState === undefined) pushState = true;
  currentView = view;
  document.querySelectorAll("[data-view]").forEach(el => {
    const isActive = el.dataset.view === view;
    el.classList.toggle("hidden", !isActive);
    if (el.dataset.view === "tracking") {
      el.classList.toggle("flex", isActive);
      el.classList.toggle("flex-col", isActive);
    } else {
      el.classList.toggle("flex", isActive);
    }
  });
  document.querySelectorAll("[data-nav]").forEach(btn => {
    const highlightView = (view === "tracking") ? "home" : view;
    const isActive = btn.dataset.nav === highlightView;
    btn.classList.toggle("text-mustard", isActive);
    btn.classList.toggle("text-[#000000]/60", !isActive);
    btn.classList.toggle("font-bold", isActive);
    btn.classList.toggle("font-medium", !isActive);
  });
  if (view === "tracking" && trackingMap) {
    setTimeout(() => trackingMap.invalidateSize(), 100);
  }
  if (pushState) {
    const path = getViewPath(view);
    if (window.location.pathname !== path) {
      history.pushState({ view }, '', path);
    }
  }
  updatePageTitle(view);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePageTitle(view) {
  const base = 'AngkotMedan';
  if (view === 'result') document.title = `Cari Rute — ${base}`;
  else if (view === 'tracking') document.title = `Melacak — ${base}`;
  else document.title = `${base} | Cari Rute Angkot Medan`;
}

window.addEventListener('popstate', () => {
  const view = pathToView(window.location.pathname);
  switchView(view, false);
});

function pathToView(path) {
  if (path.startsWith('/rute/')) return 'result';
  if (path === '/melacak') return 'tracking';
  return 'home';
}

function performSearch() {
  const originInput = document.getElementById("origin-input");
  const destInput = document.getElementById("dest-input");
  const originValue = document.getElementById("origin-resolved").value || originInput.value;
  const destValue = document.getElementById("dest-resolved").value || destInput.value;

  if (!originValue.trim() || !destValue.trim()) {
    showSearchError("Isi kedua kolom dulu, lek!");
    return;
  }

  showLoading(originValue, destValue);

  Promise.all([resolveToNearestStop(originValue), resolveToNearestStop(destValue)]).then(([originResult, destResult]) => {
    if (!originResult) {
      hideLoading();
      showSearchError(`Lokasi "${originValue}" gak ketemu. Coba nama halte, kampus, atau rumah sakit.`);
      return;
    }
    if (!destResult) {
      hideLoading();
      showSearchError(`Lokasi "${destValue}" gak ketemu. Coba nama halte, kampus, atau rumah sakit.`);
      return;
    }

    const resolvedOrigin = originResult.stop;
    const resolvedDest = destResult.stop;
    const originFromPOI = originResult.fromPOI || null;
    const destFromPOI = destResult.fromPOI || null;

    setTimeout(() => {
      const direct = findDirectRoutes(resolvedOrigin, resolvedDest);
      const transfer = findTransferRoutes(resolvedOrigin, resolvedDest);
      const multiTransfer = findMultiTransferRoutes(resolvedOrigin, resolvedDest, 3);
      const pubTransport = findPublicTransport(resolvedOrigin, resolvedDest);

      searchResults = { origin: resolvedOrigin, destination: resolvedDest, direct, transfer, multiTransfer, pubTransport, originFromPOI, destFromPOI };
      hideLoading();
      renderResults();
      switchView("result");
    }, 700);
  });
}

function showLoading(origin, dest) {
  const overlay = document.getElementById("loading-overlay");
  const originEl = document.getElementById("loading-origin");
  const destEl = document.getElementById("loading-dest");
  if (originEl) originEl.textContent = origin;
  if (destEl) destEl.textContent = dest;
  if (overlay) overlay.classList.remove("hidden");
}

function hideLoading() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.classList.add("hidden");
}

function showSearchError(msg) {
  showToast(msg, "error", 4000);
}

let activeResultTab = 'direct';

function renderResults() {
  const container = document.getElementById("results-container");
  if (!searchResults) { container.innerHTML = ""; return; }

  const { origin, destination, direct, transfer, multiTransfer, pubTransport, originFromPOI, destFromPOI } = searchResults;
  const totalCount = direct.length + transfer.length + (multiTransfer ? multiTransfer.length : 0) + (pubTransport ? pubTransport.length : 0);
  let html = "";

  const poiBadge = (poiName, stopName) => poiName ? `<span class="text-xs text-[#000000]/40 font-body block mt-0.5">Terdekat dari <span class="font-semibold text-navy">${poiName}</span> = ${stopName}</span>` : '';

  html += `
    <div class="mb-6">
      <button onclick="switchView('home')" class="inline-flex items-center gap-2 text-sm font-medium text-[#000000]/60 hover:text-[#000000] transition-colors mb-4 group">
        <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i> <span data-i18n="btn_back">Kembali ke pencarian</span>
      </button>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-[#000000] tracking-tight" data-i18n="result_title">Rute ditemukan</h2>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-mustard text-[#000000] border-2 border-[#000000] shadow-brutal-sm">${totalCount} rute</span>
      </div>
      <p class="mt-2 text-[#000000]/60 font-body text-sm">
        <span class="font-semibold text-[#000000]">${origin}</span>
        ${poiBadge(originFromPOI, origin)}
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 inline mx-1 text-[#000000]/40"></i>
        <span class="font-semibold text-[#000000]">${destination}</span>
        ${poiBadge(destFromPOI, destination)}
      </p>
    </div>
  `;

  if (totalCount === 0) {
    html += `
      <div class="text-center py-16 px-6 bg-white border-2 border-[#000000] shadow-brutal">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#000000]/5 mb-4">
          <i data-lucide="route" class="w-8 h-8 text-[#000000]/30"></i>
        </div>
        <h3 class="font-display text-xl font-bold text-[#000000] mb-2" data-i18n="no_result_title">Gak ada rute ditemukan</h3>
        <p class="text-[#000000]/60 font-body max-w-md mx-auto mb-6" data-i18n="no_result_desc">Coba pakai nama halte atau jalan yang lebih umum di sekitar lokasi awal dan tujuanmu.</p>
        <button onclick="switchView('home')" class="inline-flex items-center gap-2 px-5 py-2.5 bg-mustard border-2 border-[#000000] shadow-brutal-sm font-display text-sm font-bold text-[#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all">
          <i data-lucide="search" class="w-4 h-4"></i> <span data-i18n="btn_try_again">Coba lagi</span>
        </button>
      </div>
    `;
    container.innerHTML = html;
    lucide.createIcons();
    return;
  }

  const tabs = [];
  if (direct.length > 0) tabs.push({ id: 'direct', label: t('route_direct'), count: direct.length, color: '#ffd731' });
  if (transfer.length > 0) tabs.push({ id: 'transfer', label: t('route_transfer'), count: transfer.length, color: '#4da2ff' });
  if (multiTransfer && multiTransfer.length > 0) tabs.push({ id: 'multi', label: t('route_multi'), count: multiTransfer.length, color: '#fb4903' });

  if (direct.length > 0) activeResultTab = 'direct';
  else if (transfer.length > 0) activeResultTab = 'transfer';
  else if (multiTransfer && multiTransfer.length > 0) activeResultTab = 'multi';

  if (tabs.length > 1) {
    html += `<div class="flex gap-2 mb-6 overflow-x-auto pb-2">`;
    tabs.forEach(tab => {
      const isActive = activeResultTab === tab.id;
      html += `<button class="result-tab flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs font-bold border-2 transition-all whitespace-nowrap ${isActive ? 'bg-[#000000] text-white border-[#000000] shadow-brutal-sm' : 'bg-white text-[#000000]/50 border-[#000000]/15 hover:border-[#000000]/40'}" data-tab="${tab.id}">
        <span class="w-2 h-2 rounded-full" style="background:${tab.color}"></span>
        ${tab.label}
        <span class="px-1.5 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20' : 'bg-[#000000]/5'}">${tab.count}</span>
      </button>`;
    });
    html += `</div>`;
  }

  if (direct.length > 0 && activeResultTab === 'direct') {
    html += `<div class="grid gap-4">${direct.map(r => renderDirectCard(r)).join("")}</div>`;
  }

  if (transfer.length > 0 && activeResultTab === 'transfer') {
    const visibleTransfer = showAllTransfers ? transfer : transfer.slice(0, 4);
    const hasMoreTransfer = transfer.length > 4 && !showAllTransfers;
    html += `<div class="grid gap-4">${visibleTransfer.map(r => renderTransferCard(r)).join("")}</div>`;
    if (hasMoreTransfer) {
      html += `<button id="show-more-transfer" class="mt-4 w-full py-2.5 bg-white border-2 border-[#000000] shadow-brutal-sm font-display text-xs font-bold text-[#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all flex items-center justify-center gap-2">
        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i> Tampilkan ${transfer.length - 4} rute lainnya
      </button>`;
    }
  }

  if (multiTransfer && multiTransfer.length > 0 && activeResultTab === 'multi') {
    html += `<div class="grid gap-4">${multiTransfer.map(r => renderMultiTransferCard(r)).join("")}</div>`;
  }

  html += renderPublicTransportSection(pubTransport, origin, destination);

  container.innerHTML = html;
  lucide.createIcons();
  applyLang(currentLang);
  requestAnimationFrame(() => {
    renderAllMaps();
    injectTrackButtons();
    document.querySelectorAll('.result-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        activeResultTab = tab.dataset.tab;
        renderResults();
      });
    });
    const showMoreBtn = document.getElementById("show-more-transfer");
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", () => {
        showAllTransfers = true;
        renderResults();
      });
    }
  });
}

function generateNarrative(origin, destination, waypoints, route, isTransfer) {
  const wp = waypoints;
  const oIdx = wp.indexOf(origin);
  const dIdx = wp.indexOf(destination);
  const subWps = oIdx !== -1 && dIdx !== -1 ? wp.slice(Math.min(oIdx, dIdx), Math.max(oIdx, dIdx) + 1) : wp;

  const keyStops = subWps.filter((w, i) => {
    if (i === 0 || i === subWps.length - 1) return false;
    const isJl = w.startsWith("Jl.");
    const isSimp = w.startsWith("Simp");
    const isT = w.startsWith("T.");
    const isLandmark = ["USU", "UNIMED", "POLDASU", "Istana Maimun", "Sun Plaza", "Plaza Medan Fair", "Merdeka Walk", "Lapangan Merdeka", "Palladium", "RSU Adam Malik", "RS. Adam Malik", "Sambu"].some(l => w.includes(l));
    return isJl || isSimp || isT || isLandmark;
  }).slice(0, 6);

  let narrative = `Dari <strong>${origin}</strong> ke <strong>${destination}</strong>, kamu bisa naik angkot nomor <strong>${route.nomor}</strong>`;
  if (route.warna !== "-") narrative += ` (warna ${route.warna.toLowerCase()})`;
  narrative += `.`;

  if (keyStops.length > 0) {
    const viaParts = [];
    if (keyStops.length <= 2) {
      viaParts.push(keyStops.join(" dan "));
    } else {
      viaParts.push(keyStops.slice(0, -1).join(", "));
      viaParts.push(keyStops[keyStops.length - 1]);
    }
    narrative += `<br><br>Rute angkot ${route.nomor} lewat dari <strong>${subWps[0]}</strong>`;
    narrative += `, melewati <strong>${viaParts.join(" dan ")}</strong>`;
    narrative += `, menuju ke <strong>${subWps[subWps.length - 1]}</strong>.`;
  } else {
    narrative += `<br><br>Rute angkot ${route.nomor} langsung dari <strong>${subWps[0]}</strong> ke <strong>${subWps[subWps.length - 1]}</strong>.`;
  }

  const operatorInfo = route.operator;
  if (operatorInfo && operatorInfo !== "-") {
    narrative += `<br><br>Operator: <strong>${operatorInfo}</strong>.`;
  }

  if (route.pp) {
    narrative += ` Rute ini berlaku arah pulang-pergi.`;
  }

  return narrative;
}

function renderDirectCard(result) {
  const { route, originStop, destStop, subWaypoints, bestMatch } = result;
  const livery = getLiveryColor(route.warna);
  const narrative = generateNarrative(originStop, destStop, route.waypoints, route, false);
  return `
    <div class="route-card bg-white border-2 border-[#000000] shadow-brutal overflow-hidden ${bestMatch ? 'ring-2 ring-[#55db9c] ring-offset-1' : ''}">
      <!-- Route Header -->
      <div class="p-5 pb-0">
        <div class="flex items-start gap-3 mb-4">
          <div class="flex items-center justify-center min-w-[3rem] h-12 rounded-lg ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-black text-base shadow-brutal-sm shrink-0">
            ${route.nomor}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="font-display text-sm font-bold text-[#000000]">${originStop}</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-mustard shrink-0"></i>
              <span class="font-display text-sm font-bold text-[#000000]">${destStop}</span>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[10px] font-body text-[#000000]/40">${route.operator}</span>
              ${route.pp ? '<span class="text-[10px] font-display font-bold text-navy bg-navy/10 px-1.5 py-0.5 rounded">PP</span>' : ''}
              <span class="text-[10px] font-display font-bold px-1.5 py-0.5 rounded" style="background:${livery.hex}20;color:${livery.hex === '#FFFFFF' ? '#000000' : livery.hex}">${livery.label}</span>
              <span class="text-[10px] font-body text-[#000000]/30">${subWaypoints.length} halte</span>
              ${bestMatch ? '<span class="text-[10px] font-display font-bold bg-[#55db9c] text-white px-2 py-0.5 rounded flex items-center gap-1"><i data-lucide="trophy" class="w-3 h-3"></i>Terbaik</span>' : ''}
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="route-map mx-5 mb-0 border-2 border-[#000000] rounded-xl overflow-hidden shadow-[3px_3px_0_#000000]" style="height:220px;"
           data-route='${JSON.stringify(route.waypoints)}' data-origin="${originStop}" data-dest="${destStop}"
           data-color="${livery.hex}" data-nomor="${route.nomor}"></div>

      <!-- Narrative -->
      <div class="p-5">
        <div class="bg-[#f0f7ff] border border-[#000000]/10 rounded-lg p-4 mb-4">
          <p class="font-body text-sm text-[#000000]/70 leading-relaxed">${narrative}</p>
        </div>

        <!-- Stop Timeline -->
        <div class="mb-3">
          <p class="font-display text-[10px] font-bold text-[#000000]/40 uppercase tracking-widest mb-3">Jalur Perjalanan</p>
          <div class="space-y-0">
            ${subWaypoints.map((wp, i) => {
              const isFirst = wp === originStop;
              const isLast = wp === destStop;
              const isMain = isFirst || isLast;
              const dotColor = isFirst ? '#55db9c' : isLast ? '#fb4903' : (livery.hex === '#FFFFFF' ? '#000000' : livery.hex);
              const size = isMain ? 'w-[14px] h-[14px]' : 'w-[10px] h-[10px]';
              const mt = i === 0 ? 'mt-0' : '';
              return `
                <div class="flex items-center gap-3 ${mt}">
                  <div class="flex flex-col items-center shrink-0">
                    <div class="${size} rounded-full border-2 border-[#000000] z-10 ${isMain ? 'shadow-[1px_1px_0px_0px_#000000]' : ''}" style="background:${dotColor};"></div>
                    ${i < subWaypoints.length - 1 ? `<div class="w-[2px] h-[18px] rounded-full" style="background:${livery.hex === '#FFFFFF' ? '#000000' : livery.hex}30;"></div>` : ''}
                  </div>
                  <p class="font-body text-[11px] ${isMain ? 'font-bold text-[#000000]' : 'text-[#000000]/45'} leading-none py-[2px]">${wp}</p>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Track Button -->
        <button class="track-route-btn w-full flex items-center justify-center gap-2 py-2.5 bg-navy border-2 border-[#000000] shadow-brutal-sm font-display text-xs font-bold text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all"
          data-route='${JSON.stringify({ nomor: route.nomor, asal: originStop, tujuan: destStop, operator: route.operator, warna: route.warna, waypoints: route.waypoints })}'>
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> ${t('btn_track')}
        </button>
      </div>
    </div>
  `;
}

function renderTransferCard(result) {
  const { leg1, leg2, transferStop, bestMatch } = result;
  const livery1 = getLiveryColor(leg1.route.warna);
  const livery2 = getLiveryColor(leg2.route.warna);
  const narrative1 = generateNarrative(leg1.originStop, leg1.destStop, leg1.route.waypoints, leg1.route, true);
  const narrative2 = generateNarrative(leg2.originStop, leg2.destStop, leg2.route.waypoints, leg2.route, true);
  return `
    <div class="route-card bg-white border-2 border-[#000000] shadow-brutal overflow-hidden ${bestMatch ? 'ring-2 ring-[#55db9c] ring-offset-1' : ''}">
      <!-- Route Header -->
      <div class="p-5 pb-0">
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-center justify-center w-11 h-11 rounded-lg ${livery1.bg} ${livery1.text} border-2 border-[#000000] font-display font-bold text-sm shadow-brutal-sm shrink-0">
            ${leg1.route.nomor}
          </div>
          <div class="flex items-center gap-1.5">
            <div class="w-5 h-0.5 bg-[#000000]/20"></div>
            <div class="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center border-2 border-[#000000] shadow-brutal-sm">
              <i data-lucide="repeat" class="w-2.5 h-2.5"></i>
            </div>
            <div class="w-5 h-0.5 bg-[#000000]/20"></div>
          </div>
          <div class="flex items-center justify-center w-11 h-11 rounded-lg ${livery2.bg} ${livery2.text} border-2 border-[#000000] font-display font-bold text-sm shadow-brutal-sm shrink-0">
            ${leg2.route.nomor}
          </div>
          <span class="ml-auto text-[10px] font-display font-bold text-navy bg-navy/10 px-2 py-1 rounded border border-navy/20">1 Kali Pindah</span>
          ${bestMatch ? '<span class="text-[10px] font-display font-bold bg-[#55db9c] text-white px-2 py-1 rounded flex items-center gap-1"><i data-lucide="trophy" class="w-3 h-3"></i>Terbaik</span>' : ''}
        </div>
      </div>

      <!-- Map -->
      <div class="route-map mx-5 mb-0 border-2 border-[#000000] rounded-xl overflow-hidden shadow-[3px_3px_0_#000000]" style="height:220px;"
           data-leg1='${JSON.stringify(leg1.route.waypoints)}' data-leg2='${JSON.stringify(leg2.route.waypoints)}'
           data-origin="${leg1.originStop}" data-transfer="${transferStop}" data-dest="${leg2.destStop}"
           data-color1="${livery1.hex}" data-color2="${livery2.hex}"
           data-nomor1="${leg1.route.nomor}" data-nomor2="${leg2.route.nomor}"></div>

      <!-- Narrative & Timeline -->
      <div class="p-5">
        <!-- Step 1 -->
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 rounded-full ${livery1.bg} ${livery1.text} border-2 border-[#000000] flex items-center justify-center font-display text-[10px] font-black shrink-0">1</div>
            <p class="font-display text-xs font-bold text-[#000000]">Naik Angkot ${leg1.route.nomor}</p>
            <span class="text-[10px] font-body px-1.5 py-0.5 rounded" style="background:${livery1.hex}20;color:${livery1.hex === '#FFFFFF' ? '#000000' : livery1.hex}">${livery1.label}</span>
          </div>
          <div class="ml-8 bg-[#f0f7ff] rounded-lg p-3 mb-2">
            <p class="font-body text-xs text-[#000000]/60 leading-relaxed">${narrative1.replace(/<br>/g, ' ')}</p>
          </div>
          <!-- Mini Timeline Leg 1 -->
          <div class="ml-8 space-y-0">
            ${leg1.subWaypoints.map((wp, i) => {
              const isOrigin = wp === leg1.originStop;
              const isTransfer = wp === transferStop;
              const isMain = isOrigin || isTransfer;
              const dotColor = isOrigin ? '#55db9c' : isTransfer ? '#ffd731' : (livery1.hex === '#FFFFFF' ? '#000000' : livery1.hex);
              const size = isMain ? 'w-[12px] h-[12px]' : 'w-[9px] h-[9px]';
              return `<div class="flex items-center gap-2.5">
                <div class="flex flex-col items-center shrink-0">
                  <div class="${size} rounded-full border-[1.5px] border-[#000000] z-10" style="background:${dotColor};"></div>
                  ${i < leg1.subWaypoints.length - 1 ? `<div class="w-[1.5px] h-[14px] rounded-full" style="background:${livery1.hex === '#FFFFFF' ? '#000000' : livery1.hex}30;"></div>` : ''}
                </div>
                <p class="font-body text-[11px] ${isMain ? 'font-bold text-[#000000]' : 'text-[#000000]/40'} leading-none py-[1px]">${wp}</p>
              </div>`;
            }).join("")}
          </div>
        </div>

        <!-- Transfer Marker -->
        <div class="flex items-center gap-3 mb-4 ml-3">
          <div class="flex flex-col items-center shrink-0">
            <div class="w-8 h-8 rounded-full bg-mustard border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center">
              <i data-lucide="repeat" class="w-3.5 h-3.5 text-[#000000]"></i>
            </div>
          </div>
          <div>
            <p class="font-display text-[10px] font-bold text-mustard uppercase tracking-wider">Turun & Pindah Angkot</p>
            <p class="font-body text-sm font-semibold text-[#000000]">${transferStop}</p>
            <p class="font-body text-[11px] text-[#000000]/40">Angkot ${leg1.route.nomor} &rarr; ${leg2.route.nomor}</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 rounded-full ${livery2.bg} ${livery2.text} border-2 border-[#000000] flex items-center justify-center font-display text-[10px] font-black shrink-0">2</div>
            <p class="font-display text-xs font-bold text-[#000000]">Naik Angkot ${leg2.route.nomor}</p>
            <span class="text-[10px] font-body px-1.5 py-0.5 rounded" style="background:${livery2.hex}20;color:${livery2.hex === '#FFFFFF' ? '#000000' : livery2.hex}">${livery2.label}</span>
          </div>
          <div class="ml-8 bg-[#f0f7ff] rounded-lg p-3 mb-2">
            <p class="font-body text-xs text-[#000000]/60 leading-relaxed">${narrative2.replace(/<br>/g, ' ')}</p>
          </div>
          <!-- Mini Timeline Leg 2 -->
          <div class="ml-8 space-y-0">
            ${leg2.subWaypoints.map((wp, i) => {
              const isTransfer = wp === transferStop;
              const isDest = wp === leg2.destStop;
              const isMain = isTransfer || isDest;
              const dotColor = isTransfer ? '#ffd731' : isDest ? '#fb4903' : (livery2.hex === '#FFFFFF' ? '#000000' : livery2.hex);
              const size = isMain ? 'w-[12px] h-[12px]' : 'w-[9px] h-[9px]';
              return `<div class="flex items-center gap-2.5">
                <div class="flex flex-col items-center shrink-0">
                  <div class="${size} rounded-full border-[1.5px] border-[#000000] z-10" style="background:${dotColor};"></div>
                  ${i < leg2.subWaypoints.length - 1 ? `<div class="w-[1.5px] h-[14px] rounded-full" style="background:${livery2.hex === '#FFFFFF' ? '#000000' : livery2.hex}30;"></div>` : ''}
                </div>
                <p class="font-body text-[11px] ${isMain ? 'font-bold text-[#000000]' : 'text-[#000000]/40'} leading-none py-[1px]">${wp}</p>
              </div>`;
            }).join("")}
          </div>
        </div>

        <!-- Track Button -->
        <button class="track-route-btn w-full flex items-center justify-center gap-2 py-2.5 bg-navy border-2 border-[#000000] shadow-brutal-sm font-display text-xs font-bold text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all"
          data-route='${JSON.stringify({ nomor: leg1.route.nomor + "+" + leg2.route.nomor, asal: leg1.originStop, tujuan: leg2.destStop, operator: leg1.route.operator + " + " + leg2.route.operator, warna: leg1.route.warna, waypoints: [...leg1.route.waypoints, ...leg2.route.waypoints] })}'>
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> ${t('btn_track')}
        </button>
      </div>
    </div>
  `;
}

function findMultiTransferRoutes(originStop, destStop, maxTransfers) {
  if (maxTransfers < 2) return [];
  const visited = new Map();
  const queue = [{ stop: originStop, legs: [], depth: 0 }];
  visited.set(originStop, 0);
  const results = [];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.depth > maxTransfers) continue;
    const routesAtStop = ANGKOT_ROUTES.filter(r => stopIndexInRoute(r, current.stop) !== -1);
    for (const route of routesAtStop) {
      const idx = stopIndexInRoute(route, current.stop);
      const stopsAfter = route.waypoints.slice(idx);
      for (const potentialDest of stopsAfter) {
        if (potentialDest === current.stop) continue;
        if (current.legs.some(l => l.route.nomor === route.nomor)) continue;
        const newLegs = [...current.legs, {
          route, originStop: current.stop, destStop: potentialDest,
          originIdx: idx, destIdx: stopIndexInRoute(route, potentialDest)
        }];
        if (potentialDest === destStop) {
          results.push({ legs: newLegs, transfers: newLegs.length - 1 });
          if (results.length >= 12) break;
          continue;
        }
        if (current.depth + 1 < maxTransfers) {
          const key = potentialDest;
          if (!visited.has(key) || visited.get(key) > current.depth + 1) {
            visited.set(key, current.depth + 1);
            queue.push({ stop: potentialDest, legs: newLegs, depth: current.depth + 1 });
          }
        }
      }
      if (results.length >= 12) break;
    }
  }

  results.forEach(r => {
    const totalStops = r.legs.reduce((sum, l) => sum + (l.destIdx - l.originIdx), 0);
    r.score = 200 + r.transfers * 50 + totalStops;
  });
  results.sort((a, b) => a.score - b.score);
  if (results.length > 0) results[0].bestMatch = true;
  return results;
}

function renderMultiTransferCard(result) {
  const { legs, transfers, bestMatch } = result;
  const originStop = legs[0].originStop;
  const destStop = legs[legs.length - 1].destStop;

  const narratives = legs.map(leg => {
    return generateNarrative(leg.originStop, leg.destStop, leg.route.waypoints, leg.route, true);
  });

  const allWaypoints = legs.flatMap(leg => leg.route.waypoints);
  const allCoords = allWaypoints.map(w => getStopCoords(w)).filter(Boolean);
  const colors = legs.map(leg => {
    const l = getLiveryColor(leg.route.warna);
    return l.hex === "#FFFFFF" ? "#000000" : l.hex;
  });

  return `
    <div class="route-card bg-white border-2 border-[#000000] shadow-brutal overflow-hidden ${bestMatch ? 'ring-2 ring-[#55db9c] ring-offset-1' : ''}">
      <!-- Route Header -->
      <div class="p-5 pb-0">
        <div class="flex items-center gap-2 mb-4 flex-wrap">
          ${legs.map((leg, i) => {
            const livery = getLiveryColor(leg.route.warna);
            return `
              <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-lg ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-bold text-xs flex items-center justify-center shadow-brutal-sm">
                  ${leg.route.nomor}
                </div>
                ${i < legs.length - 1 ? '<div class="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center border-2 border-[#000000] shadow-brutal-sm"><i data-lucide="repeat" class="w-2.5 h-2.5"></i></div>' : ''}
              </div>
            `;
          }).join('')}
          <span class="ml-auto text-[10px] font-display font-bold text-[#000000]/30 border-2 border-[#000000]/15 rounded px-1.5 py-0.5">${transfers} Kali Pindah</span>
          ${bestMatch ? '<span class="text-[10px] font-display font-bold bg-[#55db9c] text-white px-2 py-1 rounded flex items-center gap-1"><i data-lucide="trophy" class="w-3 h-3"></i>Terbaik</span>' : ''}
        </div>
      </div>

      <!-- Map -->
      <div class="route-map-multi mx-5 mb-0 border-2 border-[#000000] rounded-xl overflow-hidden shadow-[3px_3px_0_#000000]" style="height:220px;"
           data-legs='${JSON.stringify(legs.map((leg, i) => ({ waypoints: leg.route.waypoints, originStop: leg.originStop, destStop: leg.destStop, color: colors[i] })))}'
           data-origin="${originStop}" data-dest="${destStop}"></div>

      <!-- Narratives -->
      <div class="p-5">
        ${legs.map((leg, i) => {
          const livery = getLiveryColor(leg.route.warna);
          return `
            <div class="mb-4 last:mb-0">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-6 h-6 rounded ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-bold text-[10px] flex items-center justify-center shadow-brutal-sm shrink-0">
                  ${leg.route.nomor}
                </div>
                <span class="font-display text-xs font-bold text-[#000000]">${leg.originStop} → ${leg.destStop}</span>
              </div>
              <div class="bg-[#f0f7ff] border border-[#000000]/10 rounded-lg p-3 mb-3">
                <p class="font-body text-xs text-[#000000]/70 leading-relaxed">${narratives[i]}</p>
              </div>
            </div>
          `;
        }).join('')}

        <!-- Stop Timeline -->
        <div class="mb-3">
          <p class="font-display text-[10px] font-bold text-[#000000]/40 uppercase tracking-widest mb-3">Jalur Perjalanan</p>
          <div class="space-y-0">
            ${(() => {
              let items = [];
              legs.forEach((leg, li) => {
                leg.route.waypoints.forEach((wp, i) => {
                  const isFirst = wp === originStop && li === 0;
                  const isLast = wp === destStop && li === legs.length - 1;
                  const isTransfer = wp === leg.destStop && li < legs.length - 1;
                  const isMain = isFirst || isLast || isTransfer;
                  const lineColor = colors[li];
                  let dotColor = lineColor;
                  if (isFirst) dotColor = '#55db9c';
                  else if (isLast) dotColor = '#fb4903';
                  else if (isTransfer) dotColor = '#ffd731';
                  const size = isMain ? 'w-[12px] h-[12px]' : 'w-[9px] h-[9px]';
                  const isLastItem = isLast || (i === leg.route.waypoints.length - 1 && li === legs.length - 1);
                  items.push(`
                    <div class="flex items-center gap-2.5">
                      <div class="flex flex-col items-center shrink-0">
                        <div class="${size} rounded-full border-[1.5px] border-[#000000] z-10" style="background:${dotColor};"></div>
                        ${!isLastItem ? `<div class="w-[1.5px] h-[14px] rounded-full" style="background:${lineColor}30;"></div>` : ''}
                      </div>
                      <p class="font-body text-[11px] ${isMain ? 'font-bold text-[#000000]' : 'text-[#000000]/40'} leading-none py-[1px]">${wp}</p>
                      ${isTransfer ? '<span class="font-display text-[8px] font-bold text-[#ffd731] uppercase tracking-wider ml-1">Pindah</span>' : ''}
                    </div>
                  `);
                });
              });
              return items.join('');
            })()}
          </div>
        </div>

        <!-- Track Button -->
        <button class="track-route-btn w-full flex items-center justify-center gap-2 py-2.5 bg-navy border-2 border-[#000000] shadow-brutal-sm font-display text-xs font-bold text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all"
          data-route='${JSON.stringify({ nomor: legs.map(l => l.route.nomor).join("+"), asal: originStop, tujuan: destStop, operator: legs.map(l => l.route.operator).join(" → "), warna: legs[0].route.warna, waypoints: allWaypoints })}'>
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> ${t('btn_track')}
        </button>
      </div>
    </div>
  `;
}

function renderAllMaps() {
  document.querySelectorAll(".route-map[data-route]").forEach(el => renderDirectMap(el));
  document.querySelectorAll(".route-map[data-leg1]").forEach(el => renderTransferMap(el));
  document.querySelectorAll(".route-map-multi[data-legs]").forEach(el => renderMultiTransferMap(el));
}

function gojekPinIcon(color, label) {
  const svg = `<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24s16-12 16-24C32 7.16 24.84 0 16 0z" fill="${color}" stroke="#000000" stroke-width="2.5"/>
    <circle cx="16" cy="15" r="7" fill="white" stroke="${color}" stroke-width="1.5"/>
    <text x="16" y="18.5" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="9" font-weight="800" fill="${color}">${label}</text>
  </svg>`;
  return L.divIcon({
    className: 'gojek-marker',
    html: `<div class="gojek-pin">${svg}</div>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    tooltipAnchor: [0, -42]
  });
}

function gojekDotIcon(color) {
  return L.divIcon({
    className: 'gojek-marker',
    html: `<div class="gojek-dot" style="background:${color}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    tooltipAnchor: [0, -14]
  });
}

function gojekTransferIcon() {
  return L.divIcon({
    className: 'gojek-marker',
    html: `<div class="gojek-transfer-dot"><svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round"><path d="M7 16l-4-4 4-4"/><path d="M3 12h14"/><path d="M17 8l4 4-4 4"/></svg></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    tooltipAnchor: [0, -16]
  });
}

function gojekRouteBadge(nomor) {
  return L.divIcon({
    className: 'gojek-marker',
    html: `<div class="gojek-route-badge">#${nomor}</div>`,
    iconSize: [60, 22],
    iconAnchor: [30, 11]
  });
}

function createGojekMap(el) {
  el.classList.add("map-inactive");

  const hint = document.createElement("div");
  hint.className = "map-hint-label";
  hint.innerHTML = '<i data-lucide="hand" class="w-3 h-3"></i> Ketuk untuk interaktif';
  el.appendChild(hint);

  const shrinkBtn = document.createElement("button");
  shrinkBtn.className = "map-shrink-btn hidden";
  shrinkBtn.innerHTML = '<i data-lucide="minimize-2" class="w-3.5 h-3.5"></i> Kecilkan';
  el.appendChild(shrinkBtn);

  const map = L.map(el, {
    zoomControl: true,
    attributionControl: false,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    touchZoom: false,
    keyboard: false
  });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  const activateHandler = () => {
    el.classList.remove("map-inactive");
    el.classList.add("map-active");
    map.dragging.enable();
    map.touchZoom.enable();
    hint.classList.add("hidden");
    shrinkBtn.classList.remove("hidden");
    el.removeEventListener("click", activateHandler);
    el.removeEventListener("touchstart", activateHandler);
  };
  el.addEventListener("click", activateHandler, { once: true });
  el.addEventListener("touchstart", activateHandler, { once: true });

  shrinkBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    el.classList.add("map-inactive");
    el.classList.remove("map-active");
    map.dragging.disable();
    map.touchZoom.disable();
    hint.classList.remove("hidden");
    shrinkBtn.classList.add("hidden");
    el.addEventListener("click", activateHandler, { once: true });
    el.addEventListener("touchstart", activateHandler, { once: true });
  });

  return map;
}

function createCardMap(el) {
  const map = L.map(el, {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: true,
    dragging: true,
    doubleClickZoom: true,
    touchZoom: true,
    keyboard: true
  });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);
  L.control.zoom({ position: "topright" }).addTo(map);
  return map;
}

async function renderDirectMap(el) {
  const waypoints = JSON.parse(el.dataset.route);
  const origin = el.dataset.origin;
  const dest = el.dataset.dest;
  const nomor = el.dataset.nomor || "";
  const coords = waypoints.map(w => getStopCoords(w)).filter(Boolean);
  if (coords.length < 2) {
    el.innerHTML = '<div class="flex items-center justify-center h-full text-[#000000]/30 font-body text-sm">Peta tidak tersedia</div>';
    return;
  }
  const map = createCardMap(el);
  setTimeout(() => { map.invalidateSize(); }, 100);

  // Draw straight lines immediately
  const mainLine = drawRouteLine(map, coords, "#1a1a2e");

  // Upgrade to road-following asynchronously
  upgradeToRoadGeometry(map, mainLine, coords);

  addMapLegend(map, 'direct');

  // Route badge at midpoint
  const midIdx = Math.floor(coords.length / 2);
  if (nomor) {
    L.marker(coords[midIdx], { icon: gojekRouteBadge(nomor) }).addTo(map);
  }

  // Origin marker (green pin)
  const originCoord = getStopCoords(origin);
  if (originCoord) {
    L.marker(originCoord, { icon: gojekPinIcon("#55db9c", "A") })
      .bindTooltip(`<b>${origin}</b><br><small>Naik di sini</small>`, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  }

  // Dest marker (red pin)
  const destCoord = getStopCoords(dest);
  if (destCoord) {
    L.marker(destCoord, { icon: gojekPinIcon("#fb4903", "B") })
      .bindTooltip(`<b>${dest}</b><br><small>Turun di sini</small>`, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  }

  // Intermediate dots
  const step = Math.max(1, Math.floor(waypoints.length / 6));
  waypoints.forEach((wp, i) => {
    if (wp === origin || wp === dest) return;
    if (i % step !== 0 && i !== waypoints.length - 1) return;
    const c = getStopCoords(wp);
    if (!c) return;
    L.marker(c, { icon: gojekDotIcon("#1a1a2e") })
      .bindTooltip(wp, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  });

  const bounds = L.latLngBounds(coords);
  map.fitBounds(bounds, { padding: [40, 40] });
}

async function renderTransferMap(el) {
  const leg1Waypoints = JSON.parse(el.dataset.leg1);
  const leg2Waypoints = JSON.parse(el.dataset.leg2);
  const origin = el.dataset.origin;
  const transfer = el.dataset.transfer;
  const dest = el.dataset.dest;
  const nomor1 = el.dataset.nomor1 || "";
  const nomor2 = el.dataset.nomor2 || "";
  const allCoords = [...leg1Waypoints, ...leg2Waypoints].map(w => getStopCoords(w)).filter(Boolean);
  if (allCoords.length < 2) {
    el.innerHTML = '<div class="flex items-center justify-center h-full text-[#000000]/30 font-body text-sm">Peta tidak tersedia</div>';
    return;
  }
  const map = createCardMap(el);
  setTimeout(() => { map.invalidateSize(); }, 100);

  const coords1 = leg1Waypoints.map(w => getStopCoords(w)).filter(Boolean);
  const coords2 = leg2Waypoints.map(w => getStopCoords(w)).filter(Boolean);

  // Draw straight lines immediately
  const line1 = coords1.length >= 2 ? drawRouteLine(map, coords1, "#1a1a2e") : null;
  const line2 = coords2.length >= 2 ? drawRouteLine(map, coords2, "#2d3a5c") : null;

  // Upgrade to road-following asynchronously
  if (line1) upgradeToRoadGeometry(map, line1, coords1);
  if (line2) upgradeToRoadGeometry(map, line2, coords2);

  addMapLegend(map, 'transfer');

  // Route badges at midpoints
  if (nomor1 && coords1.length >= 2) {
    const mid1 = Math.floor(coords1.length / 2);
    L.marker(coords1[mid1], { icon: gojekRouteBadge(nomor1) }).addTo(map);
  }
  if (nomor2 && coords2.length >= 2) {
    const mid2 = Math.floor(coords2.length / 2);
    L.marker(coords2[mid2], { icon: gojekRouteBadge(nomor2) }).addTo(map);
  }

  // Origin pin (green)
  const originCoord = getStopCoords(origin);
  if (originCoord) {
    L.marker(originCoord, { icon: gojekPinIcon("#55db9c", "A") })
      .bindTooltip(`<b>${origin}</b><br><small>Naik angkot</small>`, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  }

  // Transfer marker
  const transferCoord = getStopCoords(transfer);
  if (transferCoord) {
    L.marker(transferCoord, { icon: gojekTransferIcon() })
      .bindTooltip(`<b>${transfer}</b><br><small>Pindah angkot di sini</small>`, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  }

  // Dest pin (red)
  const destCoord = getStopCoords(dest);
  if (destCoord) {
    L.marker(destCoord, { icon: gojekPinIcon("#fb4903", "B") })
      .bindTooltip(`<b>${dest}</b><br><small>Turun di sini</small>`, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  }

  // Sparse intermediate dots
  const allWps = [...leg1Waypoints, ...leg2Waypoints];
  const step = Math.max(1, Math.floor(allWps.length / 8));
  allWps.forEach((wp, i) => {
    if (wp === origin || wp === transfer || wp === dest) return;
    if (i % step !== 0) return;
    const c = getStopCoords(wp);
    if (!c) return;
    const lc = i < leg1Waypoints.length ? "#1a1a2e" : "#2d3a5c";
    L.marker(c, { icon: gojekDotIcon(lc) })
      .bindTooltip(wp, { direction: "top", className: "brutalist-tooltip" })
      .addTo(map);
  });

  const bounds = L.latLngBounds(allCoords);
  map.fitBounds(bounds, { padding: [40, 40] });
}

async function renderMultiTransferMap(el) {
  const legsData = JSON.parse(el.dataset.legs);
  const origin = el.dataset.origin;
  const dest = el.dataset.dest;
  const allCoords = legsData.flatMap(leg => leg.waypoints.map(w => getStopCoords(w)).filter(Boolean));
  if (allCoords.length < 2) {
    el.innerHTML = '<div class="flex items-center justify-center h-full text-[#000000]/30 font-body text-sm">Peta tidak tersedia</div>';
    return;
  }
  const map = createCardMap(el);
  setTimeout(() => { map.invalidateSize(); }, 100);

  // Draw straight lines first, then upgrade
  const lines = legsData.map(leg => {
    const coords = leg.waypoints.map(w => getStopCoords(w)).filter(Boolean);
    if (coords.length >= 2) {
      return drawRouteLine(map, coords, "#1a1a2e");
    }
    return null;
  });

  // Upgrade each to road geometry
  legsData.forEach((leg, i) => {
    if (lines[i]) {
      const coords = leg.waypoints.map(w => getStopCoords(w)).filter(Boolean);
      upgradeToRoadGeometry(map, lines[i], coords);
    }
  });

  addMapLegend(map, 'multi');

  const originCoord = getStopCoords(origin);
  if (originCoord) {
    L.circleMarker(originCoord, { radius: 8, color: "#000000", fillColor: "#55db9c", fillOpacity: 1, weight: 2.5 })
      .bindTooltip(`<b>${origin}</b><br><small>Naik di sini</small>`, { permanent: false, direction: "top", className: "brutalist-tooltip" }).addTo(map);
  }
  const destCoord = getStopCoords(dest);
  if (destCoord) {
    L.circleMarker(destCoord, { radius: 8, color: "#000000", fillColor: "#fb4903", fillOpacity: 1, weight: 2.5 })
      .bindTooltip(`<b>${dest}</b><br><small>Turun di sini</small>`, { permanent: false, direction: "top", className: "brutalist-tooltip" }).addTo(map);
  }
  legsData.forEach((leg, li) => {
    const transferCoord = getStopCoords(leg.destStop);
    if (transferCoord && li < legsData.length - 1) {
      L.circleMarker(transferCoord, { radius: 7, color: "#000000", fillColor: "#ffd731", fillOpacity: 1, weight: 2 })
        .bindTooltip(`<b>${leg.destStop}</b><br><small>Pindah angkot</small>`, { permanent: false, direction: "top", className: "brutalist-tooltip" }).addTo(map);
    }
  });

  const bounds = L.latLngBounds(allCoords);
  map.fitBounds(bounds, { padding: [30, 30] });
}

function swapInputs() {
  const originInput = document.getElementById("origin-input");
  const destInput = document.getElementById("dest-input");
  const originResolved = document.getElementById("origin-resolved");
  const destResolved = document.getElementById("dest-resolved");
  const tmp = originInput.value;
  originInput.value = destInput.value;
  destInput.value = tmp;
  const tmpR = originResolved.value;
  originResolved.value = destResolved.value;
  destResolved.value = tmpR;
}

let userGeoCoords = null;

function useMyLocation() {
  const originInput = document.getElementById("origin-input");
  const originResolved = document.getElementById("origin-resolved");
  if (!navigator.geolocation) {
    showSearchError("Geolocation gak didukung di browser ini.");
    return;
  }
  const btn = document.getElementById("geoloc-btn");
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> Mencari...';
  btn.disabled = true;
  btn.classList.add("pointer-events-none");
  lucide.createIcons({ nodes: btn.querySelectorAll("[data-lucide]") });

  const geoOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.classList.remove("pointer-events-none");
      lucide.createIcons({ nodes: btn.querySelectorAll("[data-lucide]") });

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      userGeoCoords = { lat, lng };

      const nearest = findNearestKnownStop(lat, lng);
      if (nearest) {
        originInput.value = nearest;
        originResolved.value = nearest;
        const dist = Math.sqrt(
          Math.pow((lat - STOP_COORDS[nearest][0]) * 111, 2) +
          Math.pow((lng - STOP_COORDS[nearest][1]) * 111, 2)
        );
        const distText = dist < 1 ? `${Math.round(dist * 1000)}m` : `${dist.toFixed(1)}km`;
        showToast(`Lokasi ditemukan: ${nearest} (${distText} dari lokasimu)`, "success");

        // Show nearby stops
        const nearby = findNearbyStops(lat, lng, 5);
        if (nearby.length > 1) {
          setTimeout(() => {
            showToast(`Halte terdekat: ${nearby.map(n => n.name).join(', ')}`, "info", 5000);
          }, 1500);
        }
      } else {
        originInput.value = `GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        originResolved.value = "";
        showToast("Lokasi gak dekat halte. Ketik nama tempat tujuan.", "info");
      }
    },
    (err) => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.classList.remove("pointer-events-none");
      lucide.createIcons({ nodes: btn.querySelectorAll("[data-lucide]") });
      originInput.value = "";
      userGeoCoords = null;
      if (err.code === 1) {
        showSearchError("Akses lokasi ditolak. Izinkan akses lokasi di browser settings kamu.");
      } else if (err.code === 2) {
        showSearchError("Lokasi tidak tersedia. Pastikan GPS aktif.");
      } else if (err.code === 3) {
        showSearchError("Waktu habis mendapatkan lokasi. Coba lagi.");
      } else {
        showSearchError("Gagal mendapatkan lokasi. Coba lagi nanti.");
      }
    },
    geoOptions
  );
}

function findNearbyStops(lat, lng, count) {
  const stops = [];
  for (const [name, coords] of Object.entries(STOP_COORDS)) {
    const d = Math.sqrt((lat - coords[0]) ** 2 + (lng - coords[1]) ** 2);
    stops.push({ name, dist: d, km: d * 111 });
  }
  stops.sort((a, b) => a.dist - b.dist);
  return stops.slice(0, count).filter(s => s.dist < 0.05);
}

function findNearestKnownStop(lat, lon) {
  let best = null, bestDist = Infinity;
  for (const [name, [la, lo]] of Object.entries(STOP_COORDS)) {
    const d = Math.sqrt((lat - la) ** 2 + (lon - lo) ** 2);
    if (d < bestDist) { bestDist = d; best = name; }
  }
  return bestDist < 0.03 ? best : null;
}

function renderPopularRoutes() {
  const container = document.getElementById("popular-routes");
  container.innerHTML = POPULAR_ROUTES.map(r => {
    const matching = ANGKOT_ROUTES.filter(route =>
      stopIndexInRoute(route, r.from) !== -1 && stopIndexInRoute(route, r.to) !== -1
    );
    const topLivery = matching.length > 0 ? getLiveryColor(matching[0].warna) : getLiveryColor("-");
    return `
      <button type="button" class="popular-route bg-white border-2 border-[#000000] shadow-brutal-sm p-3.5 text-left hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        data-from="${r.from}" data-to="${r.to}">
        <div class="flex items-center gap-3">
          <div class="flex flex-col items-center shrink-0">
            ${matching.length > 0 ? `<div class="w-9 h-9 rounded-md ${topLivery.bg} ${topLivery.text} border-2 border-[#000000] font-display font-black text-xs flex items-center justify-center shadow-brutal-sm">${matching[0].nomor}</div>` : ''}
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-body text-sm font-semibold text-[#000000] truncate leading-tight">${r.from}</p>
            <div class="flex items-center gap-1 mt-0.5">
              <i data-lucide="arrow-right" class="w-3 h-3 text-mustard"></i>
              <p class="font-body text-xs text-[#000000]/50 truncate">${r.to}</p>
            </div>
          </div>
          <div class="shrink-0">
            <span class="text-[10px] font-display font-bold text-[#000000]/30">${matching.length} rute</span>
          </div>
        </div>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".popular-route").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("origin-input").value = btn.dataset.from;
      document.getElementById("dest-input").value = btn.dataset.to;
      document.getElementById("origin-resolved").value = btn.dataset.from;
      document.getElementById("dest-resolved").value = btn.dataset.to;
      performSearch();
    });
  });
}

function renderRouteExplorer() {
  const container = document.getElementById("explorer-grid");
  const countEl = document.getElementById("explorer-count");
  const filtered = filterRoutes(explorerFilter);
  const totalPages = Math.ceil(filtered.length / EXPLORER_PAGE_SIZE);
  explorerPage = Math.min(explorerPage, Math.max(1, totalPages));
  const pageRoutes = filtered.slice((explorerPage - 1) * EXPLORER_PAGE_SIZE, explorerPage * EXPLORER_PAGE_SIZE);

  countEl.textContent = `${filtered.length} dari ${ANGKOT_ROUTES.length}`;

  if (pageRoutes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="font-display text-lg font-bold text-[#000000]/30">Gak ada rute yang cocok</p>
        <p class="font-body text-sm text-[#000000]/40 mt-1">Coba kata kunci lain</p>
      </div>`;
    renderExplorerPagination(totalPages);
    return;
  }

  container.innerHTML = pageRoutes.map(r => {
    const livery = getLiveryColor(r.warna);
    const liveryClass = r.warna === "Kuning" ? "livery-kuning" : r.warna === "Biru" ? "livery-biru" : r.warna === "Hijau" ? "livery-hijau" : r.warna.includes("Merah") ? "livery-merah" : r.warna === "Putih" ? "livery-putih" : "";
    return `
      <div class="explorer-card ${liveryClass} bg-white border-2 border-[#000000] shadow-brutal-sm p-4 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all cursor-pointer" data-route-id="${r.id}">
        <div class="flex items-start gap-3 mb-3">
          <div class="w-11 h-11 rounded-lg ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-black text-sm flex items-center justify-center shadow-brutal-sm shrink-0">
            ${r.nomor}
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-body text-sm font-bold text-[#000000] leading-tight truncate">${r.asal}</p>
            <div class="flex items-center gap-1 mt-0.5">
              <i data-lucide="arrow-down" class="w-3 h-3 text-mustard"></i>
              <p class="font-body text-sm font-bold text-[#000000] leading-tight truncate">${r.tujuan}</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 text-[10px] font-body text-[#000000]/40">
          <span class="font-medium">${r.operator}</span>
          ${r.pp ? '<span class="font-bold text-navy">PP</span>' : ''}
          <span class="ml-auto">${r.waypoints.length} halte</span>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".explorer-card").forEach(card => {
    card.addEventListener("click", () => {
      const route = ANGKOT_ROUTES.find(r => r.id === card.dataset.routeId);
      if (route) openRouteDetail(route);
    });
  });

  renderExplorerPagination(totalPages);
  lucide.createIcons();
}

function renderExplorerPagination(totalPages) {
  const el = document.getElementById("explorer-pagination");
  if (totalPages <= 1) { el.innerHTML = ""; return; }

  let html = '';
  html += `<button class="page-btn px-3 py-1.5 border-2 border-[#000000]/20 font-display text-xs font-bold ${explorerPage === 1 ? 'text-[#000000]/20 cursor-not-allowed' : 'text-[#000000] hover:bg-mustard/10 hover:border-[#000000]'} transition-all" data-page="${explorerPage - 1}" ${explorerPage === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" class="w-3.5 h-3.5 inline"></i></button>`;

  const startPage = Math.max(1, explorerPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const isActive = i === explorerPage;
    html += `<button class="page-btn w-8 h-8 border-2 font-display text-xs font-bold ${isActive ? 'bg-mustard border-[#000000] shadow-brutal-sm text-[#000000]' : 'border-[#000000]/20 text-[#000000] hover:bg-mustard/10 hover:border-[#000000]'} transition-all" data-page="${i}">${i}</button>`;
  }

  if (endPage < totalPages) {
    html += `<span class="px-1 text-[#000000]/30 font-display text-xs">...</span>`;
    html += `<button class="page-btn w-8 h-8 border-2 border-[#000000]/20 font-display text-xs font-bold text-[#000000] hover:bg-mustard/10 hover:border-[#000000] transition-all" data-page="${totalPages}">${totalPages}</button>`;
  }

  html += `<button class="page-btn px-3 py-1.5 border-2 border-[#000000]/20 font-display text-xs font-bold ${explorerPage === totalPages ? 'text-[#000000]/20 cursor-not-allowed' : 'text-[#000000] hover:bg-mustard/10 hover:border-[#000000]'} transition-all" data-page="${explorerPage + 1}" ${explorerPage === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" class="w-3.5 h-3.5 inline"></i></button>`;

  el.innerHTML = html;
  lucide.createIcons();
  el.querySelectorAll(".page-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      explorerPage = parseInt(btn.dataset.page);
      renderRouteExplorer();
      document.getElementById("route-explorer").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function handleExplorerSearch(e) {
  explorerFilter = e.target.value;
  explorerPage = 1;
  renderRouteExplorer();
}

// ===== ROUTE DETAIL MODAL =====

function calcRouteDistance(waypoints) {
  let total = 0;
  for (let i = 1; i < waypoints.length; i++) {
    const a = STOP_COORDS[waypoints[i - 1]];
    const b = STOP_COORDS[waypoints[i]];
    if (!a || !b) continue;
    const dlat = (b[0] - a[0]) * 111;
    const dlng = (b[1] - a[1]) * 111 * Math.cos(a[0] * Math.PI / 180);
    total += Math.sqrt(dlat * dlat + dlng * dlng);
  }
  return total;
}

let modalMap = null;

function openRouteDetail(route) {
  const modal = document.getElementById("route-detail-modal");
  const content = document.getElementById("modal-content");
  if (!modal || !content) return;
  const wps = route.waypoints;
  const dist = calcRouteDistance(wps);
  const timeMin = Math.round(dist / 20 * 60);
  const livery = getLiveryColor(route.warna);

  const stopListHtml = wps.map((wp, i) => {
    const isFirst = i === 0;
    const isLast = i === wps.length - 1;
    const color = isFirst ? 'bg-mint-pop' : isLast ? 'bg-ember' : 'bg-white border-2 border-[#000000]/20';
    const iconColor = isFirst ? 'text-white' : isLast ? 'text-white' : 'text-[#000000]/30';
    const icon = isFirst ? 'circle-arrow-up' : isLast ? 'map-pin' : 'circle';
    const stopCoord = getStopCoords(wp);
    let distLabel = '';
    if (i > 0 && getStopCoords(wps[i - 1]) && stopCoord) {
      const a = getStopCoords(wps[i - 1]);
      const dlat = (stopCoord[0] - a[0]) * 111;
      const dlng = (stopCoord[1] - a[1]) * 111 * Math.cos(a[0] * Math.PI / 180);
      const seg = Math.sqrt(dlat * dlat + dlng * dlng);
      distLabel = `<span class="text-[10px] text-[#000000]/30 font-body ml-6 block -mt-1 mb-1">${seg.toFixed(1)} km</span>`;
    }
    return `${distLabel}
      <div class="flex items-center gap-3 relative">
        <div class="w-7 h-7 ${color} border-2 border-[#000000] rounded-full flex items-center justify-center shrink-0 shadow-brutal-sm z-10">
          <i data-lucide="${icon}" class="w-3.5 h-3.5 ${iconColor}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-body text-sm font-semibold text-[#000000] truncate">${wp}</p>
        </div>
        ${stopCoord ? `<span class="text-[10px] font-body text-[#000000]/30 shrink-0">${stopCoord[0].toFixed(3)}, ${stopCoord[1].toFixed(3)}</span>` : ''}
      </div>`;
  }).join('');

  content.innerHTML = `
    <div class="p-6 pb-4">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-14 h-14 rounded-xl ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-black text-lg flex items-center justify-center shadow-brutal shrink-0">
          ${route.nomor}
        </div>
        <div class="min-w-0">
          <p class="font-display text-xl font-bold text-[#000000]">Angkot ${route.nomor}</p>
          <p class="font-body text-sm text-[#000000]/50">${route.operator} ${route.pp ? '• PP' : ''}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3 mb-5">
        <div class="bg-white border-2 border-[#000000] shadow-brutal-sm rounded-xl p-3 text-center">
          <p class="font-display text-lg font-black text-[#000000]">${wps.length}</p>
          <p class="font-body text-[10px] text-[#000000]/40 mt-0.5">Halte</p>
        </div>
        <div class="bg-white border-2 border-[#000000] shadow-brutal-sm rounded-xl p-3 text-center">
          <p class="font-display text-lg font-black text-navy">${dist.toFixed(1)}</p>
          <p class="font-body text-[10px] text-[#000000]/40 mt-0.5">km</p>
        </div>
        <div class="bg-white border-2 border-[#000000] shadow-brutal-sm rounded-xl p-3 text-center">
          <p class="font-display text-lg font-black text-ember">~${timeMin}</p>
          <p class="font-body text-[10px] text-[#000000]/40 mt-0.5">menit</p>
        </div>
      </div>
      <div id="modal-map" class="w-full h-48 border-2 border-[#000000] shadow-brutal-sm rounded-xl overflow-hidden mb-5"></div>
      <div class="flex items-center gap-2 mb-3">
        <div class="w-6 h-6 bg-mustard border-2 border-[#000000] shadow-brutal-sm rounded-full flex items-center justify-center">
          <i data-lucide="route" class="w-3 h-3 text-[#000000]"></i>
        </div>
        <h3 class="font-display text-sm font-bold text-[#000000]">Jalur Perjalanan</h3>
      </div>
      <div class="space-y-0 pl-1">${stopListHtml}</div>
      <div class="mt-6 flex gap-3">
        <button onclick="searchFromExplorer('${route.asal}', '${route.tujuan}')" class="flex-1 py-2.5 bg-mustard border-2 border-[#000000] shadow-brutal-sm font-display text-xs font-bold text-[#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all flex items-center justify-center gap-2">
          <i data-lucide="search" class="w-3.5 h-3.5"></i> Cari Rute
        </button>
        <button onclick="closeRouteDetail()" class="px-4 py-2.5 bg-white border-2 border-[#000000]/20 font-display text-xs font-bold text-[#000000]/50 hover:border-[#000000] transition-all flex items-center justify-center gap-2">
          Tutup
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();

  requestAnimationFrame(() => {
    const modalMapEl = document.getElementById("modal-map");
    if (!modalMapEl) return;
    if (modalMap) { modalMap.remove(); modalMap = null; }
    modalMap = L.map(modalMapEl, { zoomControl: false, attributionControl: false, scrollWheelZoom: false }).setView([3.59, 98.67], 12);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(modalMap);
    const validCoords = wps.map(wp => getStopCoords(wp)).filter(Boolean);
    if (validCoords.length >= 2) {
      L.polyline(validCoords, { color: '#000000', weight: 4, opacity: 0.8 }).addTo(modalMap);
      L.polyline(validCoords, { color: livery.hex || '#ffd731', weight: 2.5, opacity: 1 }).addTo(modalMap);
      validCoords.forEach((c, i) => {
        const isFirst = i === 0;
        const isLast = i === validCoords.length - 1;
        const color = isFirst ? '#55db9c' : isLast ? '#fb4903' : '#ffffff';
        L.circleMarker(c, { radius: isFirst || isLast ? 7 : 4, fillColor: color, color: '#000000', weight: 2, fillOpacity: 1 }).addTo(modalMap);
      });
      modalMap.fitBounds(validCoords, { padding: [30, 30] });
    }
  });
}

function closeRouteDetail() {
  const modal = document.getElementById("route-detail-modal");
  if (modal) modal.classList.add("hidden");
  if (modalMap) {
    modalMap.remove();
    modalMap = null;
  }
}

function searchFromExplorer(asal, tujuan) {
  closeRouteDetail();
  const originInput = document.getElementById("origin-input");
  const originResolved = document.getElementById("origin-resolved");
  const destInput = document.getElementById("dest-input");
  const destResolved = document.getElementById("dest-resolved");
  if (originInput) originInput.value = asal;
  if (originResolved) originResolved.value = asal;
  if (destInput) destInput.value = tujuan;
  if (destResolved) destResolved.value = tujuan;
  switchView("home");
  setTimeout(() => performSearch(), 300);
}

// ===== TOAST SYSTEM =====
function showToast(message, type = 'success', duration = 3500) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast-notification fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] bg-white border-2 border-[#000000] shadow-brutal px-5 py-3 flex items-center gap-3 max-w-sm`;
  toast.style.animation = 'toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

  const iconMap = {
    success: '<div class="w-8 h-8 bg-[#55db9c] border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center shrink-0"><i data-lucide="check" class="w-4 h-4 text-white"></i></div>',
    error: '<div class="w-8 h-8 bg-[#fb4903] border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center shrink-0"><i data-lucide="x" class="w-4 h-4 text-white"></i></div>',
    info: '<div class="w-8 h-8 bg-navy border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center shrink-0"><i data-lucide="info" class="w-4 h-4 text-white"></i></div>'
  };

  toast.innerHTML = `${iconMap[type] || iconMap.success}<p class="font-body text-sm text-[#000000] font-medium">${message}</p>`;
  document.body.appendChild(toast);
  lucide.createIcons({ nodes: toast.querySelectorAll("[data-lucide]") });

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ===== TRACKING =====
let trackingMap = null;
let trackingWatchId = null;
let trackingUserMarker = null;
let trackingFollowMode = true;
let trackingRouteLayer = null;

function startTracking(routeData) {
  switchView("tracking");
  setTimeout(() => initTrackingMap(routeData), 200);
}

function initTrackingMap(routeData) {
  const mapEl = document.getElementById("tracking-map");
  if (!mapEl) return;
  if (trackingMap) { trackingMap.remove(); trackingMap = null; }

  trackingMap = L.map(mapEl, {
    zoomControl: false,
    attributionControl: false
  }).setView([3.5950, 98.6700], 13);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(trackingMap);

  L.control.zoom({ position: "bottomright" }).addTo(trackingMap);

  const nameEl = document.getElementById("tracking-route-name");
  const infoEl = document.getElementById("tracking-route-info");
  if (nameEl) nameEl.textContent = `Angkot ${routeData.nomor} — ${routeData.asal} → ${routeData.tujuan}`;
  if (infoEl) infoEl.textContent = `${routeData.operator} · ${routeData.waypoints.length} halte`;

  const allCoords = routeData.waypoints.map(w => getStopCoords(w)).filter(Boolean);
  if (allCoords.length >= 2) {
    const livery = getLiveryColor(routeData.warna);
    const routeColor = livery.hex === "#FFFFFF" ? "#000000" : livery.hex;

    // White outline
    L.polyline(allCoords, {
      color: "white",
      weight: 7,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(trackingMap);

    // Main route line
    trackingRouteLayer = L.polyline(allCoords, {
      color: routeColor,
      weight: 4.5,
      opacity: 0.9,
      dashArray: "10 6",
      lineCap: "round",
      lineJoin: "round"
    }).addTo(trackingMap);

    allCoords.forEach((coord, i) => {
      const wp = routeData.waypoints[i];
      const isFirst = i === 0;
      const isLast = i === allCoords.length - 1;
      const markerColor = isFirst ? "#55db9c" : isLast ? "#fb4903" : "#ffd731";
      const radius = isFirst || isLast ? 6 : 3.5;
      L.circleMarker(coord, {
        radius: radius,
        color: "#000000",
        fillColor: markerColor,
        fillOpacity: 1,
        weight: isFirst || isLast ? 2.5 : 1.5
      }).bindTooltip(wp, { permanent: false, direction: "top", className: "brutalist-tooltip" }).addTo(trackingMap);
    });

    trackingMap.fitBounds(trackingRouteLayer.getBounds(), { padding: [60, 60] });
  }

  addMapLegend(trackingMap, 'direct');

  startGPSWatch();
}

function startGPSWatch() {
  if (!navigator.geolocation) {
    document.getElementById("tracking-coords").textContent = "GPS tidak tersedia";
    return;
  }

  trackingUserMarker = null;
  trackingWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude: lat, longitude: lng, speed } = pos.coords;
      const latlng = [lat, lng];

      if (!trackingUserMarker) {
        const personIcon = L.divIcon({
          className: "tracking-person-marker",
          html: `<div class="tpm-wrap"><div class="tpm-pulse"></div><div class="tpm-dot"></div><div class="tpm-person">🧑</div></div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
        trackingUserMarker = L.marker(latlng, { icon: personIcon, zIndexOffset: 1000 }).addTo(trackingMap);

        if (trackingFollowMode) {
          trackingMap.setView(latlng, 16);
        }
      } else {
        trackingUserMarker.setLatLng(latlng);
        if (trackingFollowMode) {
          trackingMap.panTo(latlng);
        }
      }

      const coordsEl = document.getElementById("tracking-coords");
      const speedEl = document.getElementById("tracking-speed");
      if (coordsEl) coordsEl.textContent = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      if (speedEl) {
        const speedKmh = speed !== null ? (speed * 3.6).toFixed(1) : "0";
        speedEl.textContent = speed !== null ? `Kecepatan: ${speedKmh} km/jam` : "Memantau pergerakan";
      }
    },
    (err) => {
      document.getElementById("tracking-coords").textContent = "Gagal mendapatkan lokasi";
      document.getElementById("tracking-speed").textContent = err.message;
    },
    { enableHighAccuracy: true, maximumAge: 3000, timeout: 15000 }
  );
}

function stopTracking() {
  if (trackingWatchId !== null) {
    navigator.geolocation.clearWatch(trackingWatchId);
    trackingWatchId = null;
  }
  if (trackingMap) { trackingMap.remove(); trackingMap = null; }
  trackingUserMarker = null;
  switchView("home");
}

function initTracking() {
  document.getElementById("tracking-center-btn")?.addEventListener("click", () => {
    trackingFollowMode = true;
    if (trackingUserMarker) {
      trackingMap.setView(trackingUserMarker.getLatLng(), 15);
    }
  });

  document.getElementById("tracking-follow-btn")?.addEventListener("click", () => {
    trackingFollowMode = !trackingFollowMode;
    const btn = document.getElementById("tracking-follow-btn");
    if (trackingFollowMode) {
      btn.classList.remove("bg-white", "text-[#000000]", "border-[#000000]/20");
      btn.classList.add("bg-mustard", "text-[#000000]", "border-[#000000]");
      if (trackingUserMarker) trackingMap.setView(trackingUserMarker.getLatLng(), 15);
    } else {
      btn.classList.add("bg-white", "text-[#000000]", "border-[#000000]/20");
      btn.classList.remove("bg-mustard", "text-[#000000]", "border-[#000000]");
    }
  });

  document.getElementById("tracking-stop-btn")?.addEventListener("click", stopTracking);
}

function injectTrackButtons() {
  document.querySelectorAll(".track-route-btn").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", (e) => {
      const rd = JSON.parse(e.currentTarget.dataset.route || "{}");
      startTracking(rd);
    });
  });
}

function initMarquee() {
  const items = [
    { text: 'ANGKOT MEDAN FINDER', color: '#ffffff' },
    { text: '118 TRAYEK', color: '#4da2ff' },
    { text: '500+ HALTE', color: '#ffd731' },
    { text: 'GRATIS & AKURAT', color: '#55db9c' }
  ];
  const dotColors = ['#4da2ff', '#ffd731', '#55db9c', '#e9ccff'];

  function buildSet() {
    return items.map((item, i) =>
      `<span class="font-display text-[11px] tracking-wider px-6">${item.text}</span>` +
      `<span style="color:${dotColors[i % dotColors.length]}" class="px-2">●</span>`
    ).join('');
  }

  const el = document.getElementById('marquee-top');
  if (!el) return;
  const content = buildSet();
  el.innerHTML = content + content + content + content;
}

function initApp() {
  lucide.createIcons();
  initMarquee();
  applyLang(currentLang);
  renderPopularRoutes();
  initTracking();

  const langToggle = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLang(btn.dataset.lang);
        langDropdown.classList.add('hidden');
      });
    });
    document.addEventListener('click', () => langDropdown.classList.add('hidden'));
  }

  const originInput = document.getElementById("origin-input");
  const originSuggestions = document.getElementById("origin-suggestions");
  const originResolved = document.getElementById("origin-resolved");
  const destInput = document.getElementById("dest-input");
  const destSuggestions = document.getElementById("dest-suggestions");
  const destResolved = document.getElementById("dest-resolved");

  if (originInput) {
    originInput.addEventListener("input", () => renderSuggestionList(originInput, originSuggestions, originResolved, "origin"));
  }
  if (destInput) {
    destInput.addEventListener("input", () => renderSuggestionList(destInput, destSuggestions, destResolved, "dest"));
  }

  if (originInput) setupKeyboardNav(originInput, originSuggestions, originResolved, "origin");
  if (destInput) setupKeyboardNav(destInput, destSuggestions, destResolved, "dest");

  document.querySelectorAll('.input-group').forEach(group => {
    const input = group.querySelector('input[type="text"]');
    if (!input) return;
    input.addEventListener('focus', () => group.classList.add('focused'));
    input.addEventListener('blur', () => group.classList.remove('focused'));
  });

  document.addEventListener("click", (e) => {
    if (originSuggestions && !e.target.closest("#origin-input") && !e.target.closest("#origin-suggestions")) {
      originSuggestions.classList.add("hidden");
    }
    if (destSuggestions && !e.target.closest("#dest-input") && !e.target.closest("#dest-suggestions")) {
      destSuggestions.classList.add("hidden");
    }
  });

  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      performSearch();
    });
  }

  document.getElementById("swap-btn")?.addEventListener("click", swapInputs);
  document.getElementById("geoloc-btn")?.addEventListener("click", useMyLocation);

  document.getElementById("modal-close-btn")?.addEventListener("click", closeRouteDetail);
  document.getElementById("route-detail-modal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeRouteDetail();
  });

  const routeCountBadge = document.getElementById("route-count-badge");
  if (routeCountBadge && typeof ANGKOT_ROUTES !== "undefined") {
    routeCountBadge.textContent = ANGKOT_ROUTES.length;
  }

  const heroStops = document.getElementById("hero-stops-count");
  if (heroStops && typeof ALL_STOPS !== "undefined") {
    heroStops.innerHTML = `${ALL_STOPS.length}<span class="text-lg">+</span>`;
  }

  const initialView = pathToView(window.location.pathname);
  if (typeof switchView === "function") {
    switchView(initialView, false);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
