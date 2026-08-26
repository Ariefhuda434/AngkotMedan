  let currentLang = localStorage.getItem('lang') || 'id';

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.id[key] || key;
  }

  const I18N = {
    id: {
      nav_home: 'Beranda',
      nav_about: 'Tentang',
      hero_title: 'Naik Angkot di Medan?',
      hero_subtitle: 'Cari tahu rute angkot, nomor trayek, dan tempat turun dengan mudah tanpa bingung.',
      search_title: 'Mau ke mana?',
      label_origin: 'Sekarang kamu di mana?',
      label_dest: 'Mau ke mana?',
      btn_search: 'Cari Rute',
      btn_my_location: 'Lokasi Saya',
      btn_track: 'Lacak Rute Ini',
      btn_stop_track: 'Berhenti Melacak',
      route_direct: 'Rute Langsung — Tanpa Pindah',
      route_transfer: 'Perlu 1 Kali Pindah',
      route_multi: 'Perlu Beberapa Kali Pindah',
      route_no_result: 'Rute tidak ditemukan — coba halte lain',
      popular_title: 'Rute Paling Populer',
      result_title: 'Rute ditemukan',
      no_result_title: 'Gak ada rute ditemukan',
      no_result_desc: 'Coba pakai nama halte atau jalan yang lebih umum di sekitar lokasi awal dan tujuanmu.',
      btn_try_again: 'Coba lagi',
      btn_back: 'Kembali ke pencarian'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      hero_title: 'Riding Angkot in Medan?',
      hero_subtitle: 'Find angkot routes, route numbers, and drop-off points easily.',
      search_title: 'Where are you headed?',
      label_origin: 'Where are you now?',
      label_dest: 'Where do you want to go?',
      btn_search: 'Find Route',
      btn_my_location: 'My Location',
      btn_track: 'Track This Route',
      btn_stop_track: 'Stop Tracking',
      route_direct: 'Direct Route — No Transfer',
      route_transfer: '1 Transfer Needed',
      route_multi: 'Multiple Transfers',
      route_no_result: 'No routes found — try different stops',
      popular_title: 'Most Popular Routes',
      result_title: 'Routes found',
      no_result_title: 'No routes found',
      no_result_desc: 'Try using a more common stop or street name near your starting point and destination.',
      btn_try_again: 'Try again',
      btn_back: 'Back to search'
    }
  };

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const trans = I18N[lang] || I18N.id;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (trans[key]) {
        if (key === 'hero_title') return;
        el.textContent = trans[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (trans[key]) {
        el.setAttribute('placeholder', trans[key]);
      }
    });
  }

  function normalize(str) {
    if (!str) return "";
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

  function getStopCoords(stopName) {
    if (typeof STOP_COORDS === 'undefined') return null;
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

  function findStop(input) {
    if (!input || input.trim().length < 2 || typeof ALL_STOPS === 'undefined') return null;
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
    return score;
  }

  function findDirectRoutes(origin, destination) {
    if (typeof ANGKOT_ROUTES === 'undefined') return [];
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

  function findTransferRoutes(origin, destination) {
    if (typeof ANGKOT_ROUTES === 'undefined') return [];
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
      r.score = 100 + stops1 + stops2;
    });
    unique.sort((a, b) => a.score - b.score);
    if (unique.length > 0) unique[0].bestMatch = true;
    return unique;
  }

  function getLiveryColor(warna) {
    if (typeof LIVERY_COLORS !== 'undefined' && LIVERY_COLORS[warna]) {
      return LIVERY_COLORS[warna];
    }
    return { bg: 'bg-gray-200', text: 'text-black', hex: '#cccccc', label: warna || 'Standar' };
  }

  let currentView = "home";
  let searchResults = null;
  let highlightedIndices = { origin: -1, dest: -1 };

  function switchView(view) {
    const targetExists = document.querySelector(`[data-view="${view}"]`);
    if (!targetExists) {
      return;
    }

    currentView = view;
    document.querySelectorAll("[data-view]").forEach(el => {
      const isActive = el.dataset.view === view;
      el.classList.toggle("hidden", !isActive);
      el.classList.toggle("flex", isActive);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function performSearch() {
    const originInput = document.getElementById("origin-input");
    const destInput = document.getElementById("dest-input");
    if (!originInput || !destInput) return;

    const originValue = document.getElementById("origin-resolved").value || originInput.value;
    const destValue = document.getElementById("dest-resolved").value || destInput.value;

    if (!originValue.trim() || !destValue.trim()) {
      showToast("Isi kedua kolom asal dan tujuan dulu, lek!", "error");
      return;
    }

    showLoading(originValue, destValue);

    setTimeout(() => {
      const resolvedOrigin = findStop(originValue) || originValue;
      const resolvedDest = findStop(destValue) || destValue;

      const direct = findDirectRoutes(resolvedOrigin, resolvedDest);
      const transfer = findTransferRoutes(resolvedOrigin, resolvedDest);

      searchResults = { origin: resolvedOrigin, destination: resolvedDest, direct, transfer, multiTransfer: [], pubTransport: [] };
      hideLoading();
      renderResults();
      switchView("result");
    }, 500);
  }

  function showLoading(origin, dest) {
    const overlay = document.getElementById("loading-overlay");
    document.getElementById("loading-origin").textContent = "Dari: " + origin;
    document.getElementById("loading-dest").textContent = "Ke: " + dest;
    if (overlay) overlay.classList.remove("hidden");
  }

  function hideLoading() {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) overlay.classList.add("hidden");
  }

  function renderResults() {
    const container = document.getElementById("results-container");
    if (!container) return; // Mencegah error null
    
    if (!searchResults) { 
      container.innerHTML = ""; 
      return; 
    }

    const { origin, destination, direct, transfer } = searchResults;
    const totalCount = direct.length + transfer.length;
    let html = "";

    html += `
      <div class="mb-6">
        <button onclick="switchView('home')" class="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black mb-4">
          ← Kembali ke pencarian
        </button>
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-black">Rute Ditemukan</h2>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-300 border-2 border-[#000000]">${totalCount} rute</span>
        </div>
        <p class="mt-1 text-gray-600 text-sm font-medium">
          <span class="font-bold text-black">${origin}</span> &rarr; <span class="font-bold text-black">${destination}</span>
        </p>
      </div>
    `;

    if (totalCount === 0) {
      html += `
        <div class="text-center py-12 bg-white border-2 border-[#000000] shadow-brutal rounded-xl p-6">
          <h3 class="text-lg font-bold mb-2">Gak ada rute langsung atau 1x pindah</h3>
          <p class="text-gray-500 text-sm mb-4">Coba gunakan nama halte atau jalan raya lain di dekat lokasimu.</p>
          <button onclick="switchView('home')" class="px-4 py-2 bg-amber-300 border-2 border-[#000000] shadow-brutal-sm font-bold text-sm rounded-lg">Coba Lagi</button>
        </div>
      `;
      container.innerHTML = html;
      return;
    }

    if (direct.length > 0) {
      html += `<div class="mb-6"><h3 class="font-bold text-sm text-gray-500 uppercase mb-3">Rute Langsung</h3><div class="space-y-4">`;
      html += direct.map(r => renderDirectCard(r)).join("");
      html += `</div></div>`;
    }

    if (transfer.length > 0) {
      html += `<div class="mb-6"><h3 class="font-bold text-sm text-gray-500 uppercase mb-3">Rute 1x Pindah Angkot</h3><div class="space-y-4">`;
      html += transfer.map(r => renderTransferCard(r)).join("");
      html += `</div></div>`;
    }

    container.innerHTML = html;
    lucide.createIcons();
    
    // Render Leaflet Maps di dalam card hasil
    setTimeout(() => {
      document.querySelectorAll(".route-map").forEach(el => renderCardMap(el));
    }, 100);
  }

  function renderDirectCard(result) {
    const { route, originStop, destStop, subWaypoints } = result;
    const livery = getLiveryColor(route.warna);
    return `
      <div class="bg-white border-2 border-[#000000] shadow-brutal rounded-xl overflow-hidden p-4 sm:p-5">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-lg ${livery.bg} ${livery.text} border-2 border-[#000000] font-black text-base flex items-center justify-center shadow-brutal-sm shrink-0">
            ${route.nomor}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold truncate">Angkot ${route.nomor} — ${route.operator}</p>
            <p class="text-xs text-gray-500">${subWaypoints.length} halte dilewati</p>
          </div>
        </div>
        <div class="route-map w-full h-40 border-2 border-[#000000] rounded-lg mb-4" data-waypoints='${JSON.stringify(route.waypoints)}' data-origin="${originStop}" data-dest="${destStop}"></div>
        <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-gray-700 mb-3">
          Naik dari <strong>${originStop}</strong>, turun langsung di <strong>${destStop}</strong>.
        </div>
        <button class="track-route-btn w-full py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center gap-2" data-route='${JSON.stringify({ nomor: route.nomor, asal: originStop, tujuan: destStop, operator: route.operator, warna: route.warna, waypoints: route.waypoints })}'>
          Mulai Lacak Perjalanan
        </button>
      </div>
    `;
  }

  function renderTransferCard(result) {
    const { leg1, leg2, transferStop } = result;
    const l1 = getLiveryColor(leg1.route.warna);
    const l2 = getLiveryColor(leg2.route.warna);
    return `
      <div class="bg-white border-2 border-[#000000] shadow-brutal rounded-xl overflow-hidden p-4 sm:p-5">
        <div class="flex items-center gap-2 mb-3">
          <div class="px-2.5 py-1 rounded ${l1.bg} ${l1.text} border-2 border-[#000000] font-black text-xs">#${leg1.route.nomor}</div>
          <span>&rarr;</span>
          <div class="px-2.5 py-1 rounded ${l2.bg} ${l2.text} border-2 border-[#000000] font-black text-xs">#${leg2.route.nomor}</div>
          <span class="ml-auto text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded border border-blue-200">1x Pindah</span>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-gray-700 mb-3">
          1. Naik <strong>#${leg1.route.nomor}</strong> dari <strong>${leg1.originStop}</strong> turun di <strong>${transferStop}</strong>.<br>
          2. Sambung <strong>#${leg2.route.nomor}</strong> dari <strong>${transferStop}</strong> turun di <strong>${leg2.destStop}</strong>.
        </div>
        <button class="track-route-btn w-full py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg border-2 border-[#000000] shadow-brutal-sm flex items-center justify-center gap-2" data-route='${JSON.stringify({ nomor: leg1.route.nomor + "+" + leg2.route.nomor, asal: leg1.originStop, tujuan: leg2.destStop, operator: leg1.route.operator, warna: leg1.route.warna, waypoints: [...leg1.route.waypoints, ...leg2.route.waypoints] })}'>
          Mulai Lacak Rute Ini
        </button>
      </div>
    `;
  }

  function renderCardMap(el) {
    const waypoints = JSON.parse(el.dataset.waypoints || "[]");
    const origin = el.dataset.origin;
    const dest = el.dataset.dest;
    const coords = waypoints.map(w => getStopCoords(w)).filter(Boolean);
    if (coords.length < 2) return;

    const map = L.map(el, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", { maxZoom: 19 }).addTo(map);

    L.polyline(coords, { color: '#1a1a2e', weight: 4, opacity: 0.8 }).addTo(map);
    
    const oCoord = getStopCoords(origin);
    const dCoord = getStopCoords(dest);
    if (oCoord) L.circleMarker(oCoord, { radius: 6, fillColor: '#22c55e', color: '#000', weight: 2, fillOpacity: 1 }).addTo(map);
    if (dCoord) L.circleMarker(dCoord, { radius: 6, fillColor: '#ef4444', color: '#000', weight: 2, fillOpacity: 1 }).addTo(map);

    map.fitBounds(L.latLngBounds(coords), { padding: [20, 20] });
  }

  function renderPopularRoutes() {
    const container = document.getElementById("popular-routes");
    if (!container || typeof POPULAR_ROUTES === 'undefined') return;
    
    container.innerHTML = POPULAR_ROUTES.map(r => `
      <button type="button" class="popular-btn bg-white border-2 border-[#000000] shadow-brutal-sm p-3 text-left rounded-lg hover:bg-amber-50 transition-all flex items-center justify-between" data-from="${r.from}" data-to="${r.to}">
        <div>
          <p class="text-xs font-bold text-gray-900">${r.from}</p>
          <p class="text-[11px] text-gray-500">&rarr; ${r.to}</p>
        </div>
        <span class="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">Cari</span>
      </button>
    `).join("");

    container.querySelectorAll(".popular-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.getElementById("origin-input").value = btn.dataset.from;
        document.getElementById("dest-input").value = btn.dataset.to;
        document.getElementById("origin-resolved").value = btn.dataset.from;
        document.getElementById("dest-resolved").value = btn.dataset.to;
        performSearch();
      });
    });
  }

  function setupSuggestions(inputEl, hiddenEl, listEl) {
    if (!inputEl) return;
    inputEl.addEventListener("input", () => {
      const val = inputEl.value.trim();
      hiddenEl.value = "";
      if (val.length < 1 || typeof ALL_STOPS === 'undefined') {
        listEl.classList.add("hidden");
        return;
      }
      const matches = ALL_STOPS.filter(s => stopsMatch(val, s)).slice(0, 6);
      if (matches.length === 0) {
        listEl.classList.add("hidden");
        return;
      }
      listEl.innerHTML = matches.map(m => `
        <div class="sugg-item px-3 py-2 text-xs hover:bg-amber-100 cursor-pointer border-b border-gray-100 last:border-0 font-medium" data-value="${m}">
          📍 ${m}
        </div>
      `).join("");
      listEl.classList.remove("hidden");

      listEl.querySelectorAll(".sugg-item").forEach(item => {
        item.addEventListener("mousedown", (e) => {
          e.preventDefault();
          inputEl.value = item.dataset.value;
          hiddenEl.value = item.dataset.value;
          listEl.classList.add("hidden");
        });
      });
    });

    document.addEventListener("click", (e) => {
      if (!inputEl.contains(e.target) && !listEl.contains(e.target)) {
        listEl.classList.add("hidden");
      }
    });
  }

  function showToast(msg, type = 'success') {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `custom-toast fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] bg-white border-2 border-[#000000] shadow-brutal px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2`;
    toast.innerHTML = `<span>${type === 'error' ? '❌' : '✅'}</span> ${msg}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // ===== TRACKING SYSTEM =====
  let trackingMap = null;
  let trackingWatchId = null;
  let trackingUserMarker = null;
  let trackingFollowMode = true;

  function startTracking(routeData) {
    switchView("tracking");
    setTimeout(() => initTrackingMap(routeData), 150);
  }

  function initTrackingMap(routeData) {
    const mapEl = document.getElementById("tracking-map");
    if (!mapEl) return;
    if (trackingMap) { trackingMap.remove(); trackingMap = null; }

    trackingMap = L.map(mapEl, { zoomControl: false, attributionControl: false }).setView([3.5950, 98.6700], 13);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", { maxZoom: 19 }).addTo(trackingMap);

    document.getElementById("tracking-route-name").textContent = `Angkot ${routeData.nomor} (${routeData.asal} → ${routeData.tujuan})`;

    const allCoords = routeData.waypoints.map(w => getStopCoords(w)).filter(Boolean);
    if (allCoords.length >= 2) {
      const livery = getLiveryColor(routeData.warna);
      L.polyline(allCoords, { color: livery.hex === '#FFFFFF' ? '#000' : livery.hex, weight: 5, opacity: 0.9 }).addTo(trackingMap);
      trackingMap.fitBounds(L.latLngBounds(allCoords), { padding: [50, 50] });
    }

    startGPSWatch();
  }

  function startGPSWatch() {
    if (!navigator.geolocation) {
      document.getElementById("tracking-coords").textContent = "GPS tidak didukung";
      return;
    }

    trackingWatchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude: lat, longitude: lng, speed } = pos.coords;
        const latlng = [lat, lng];

        if (!trackingUserMarker) {
          const icon = L.divIcon({
            className: 'user-marker',
            html: `<div style="background:#22c55e;width:18px;height:18px;border:3px solid #000;border-radius:50%;box-shadow:0 0 0 4px rgba(34,197,94,0.3)"></div>`,
            iconSize: [18, 18], iconAnchor: [9, 9]
          });
          trackingUserMarker = L.marker(latlng, { icon }).addTo(trackingMap);
        } else {
          trackingUserMarker.setLatLng(latlng);
        }

        if (trackingFollowMode) {
          trackingMap.panTo(latlng);
        }

        document.getElementById("tracking-coords").textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        const speedKmh = speed !== null ? (speed * 3.6).toFixed(1) : "0";
        document.getElementById("tracking-speed").textContent = `Kecepatan: ${speedKmh} km/jam`;
      },
      (err) => {
        document.getElementById("tracking-coords").textContent = "Gagal GPS";
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 }
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

  // ===== ROUTE EXPLORER =====
  let explorerFilter = "";
  let explorerPage = 1;
  const explorerPageSize = 12;
  let explorerModalMap = null;
  let explorerSelectedRoute = null;

  function getExplorerFilteredRoutes() {
    if (typeof ANGKOT_ROUTES === "undefined") return [];

    const searchInput = document.getElementById("explorer-search");
    const query = normalize(searchInput ? searchInput.value : "");
    const filter = normalize(explorerFilter);

    return ANGKOT_ROUTES.filter(route => {
      const routeFilter = normalize(route.warna || "");
      const filterMatch = !filter || routeFilter.includes(filter);
      if (!filterMatch) return false;

      if (!query) return true;
      const searchable = [
        route.nomor,
        route.operator,
        route.asal,
        route.tujuan,
        ...(route.waypoints || [])
      ].join(" ");

      return normalize(searchable).includes(query);
    });
  }

  function renderRouteExplorer() {
    const grid = document.getElementById("explorer-grid");
    if (!grid) return;

    const countEl = document.getElementById("explorer-count");
    const paginationEl = document.getElementById("explorer-pagination");
    const filtered = getExplorerFilteredRoutes();
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / explorerPageSize));
    if (explorerPage > totalPages) explorerPage = totalPages;
    if (explorerPage < 1) explorerPage = 1;

    if (countEl) {
      countEl.textContent = `${total} trayek ditemukan`;
    }

    document.querySelectorAll(".explorer-filter-btn").forEach(btn => {
      const current = normalize(btn.getAttribute("data-filter") || "");
      const active = current === normalize(explorerFilter || "");
      btn.classList.toggle("border-[#000000]", active);
      btn.classList.toggle("shadow-brutal-sm", active);
    });

    if (total === 0) {
      grid.innerHTML = `
        <div class="col-span-full bg-white border-2 border-[#000000] shadow-brutal rounded-xl p-6 text-center">
          <p class="font-display text-base font-bold mb-1">Trayek tidak ditemukan</p>
          <p class="font-body text-xs text-[#000]/50">Coba ganti kata kunci pencarian atau warna livery.</p>
        </div>
      `;
      if (paginationEl) paginationEl.innerHTML = "";
      return;
    }

    const start = (explorerPage - 1) * explorerPageSize;
    const visible = filtered.slice(start, start + explorerPageSize);

    grid.innerHTML = visible.map(route => {
      const livery = getLiveryColor(route.warna);
      const waypointCount = route.waypoints ? route.waypoints.length : 0;
      return `
        <button type="button"
          class="explorer-card text-left border-2 border-[#000000] bg-white shadow-brutal rounded-2xl p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          data-route-id="${route.id}">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-11 h-11 rounded-lg ${livery.bg} ${livery.text} border-2 border-[#000000] font-display font-bold text-sm flex items-center justify-center shrink-0">${route.nomor}</div>
            <div class="min-w-0 flex-1">
              <p class="font-display text-sm font-bold text-[#000000] truncate">${route.operator}</p>
              <p class="font-body text-xs text-[#000]/50 truncate">${route.asal} → ${route.tujuan}</p>
            </div>
          </div>
          <div class="flex items-center justify-between text-[11px] font-body text-[#000]/45">
            <span>${route.warna}</span>
            <span>${waypointCount} titik</span>
          </div>
        </button>
      `;
    }).join("");

    grid.querySelectorAll(".explorer-card").forEach(card => {
      card.addEventListener("click", () => {
        const route = ANGKOT_ROUTES.find(r => r.id === card.getAttribute("data-route-id"));
        if (route) {
          openExplorerModal(route);
        }
      });
    });

    if (paginationEl) {
      if (totalPages <= 1) {
        paginationEl.innerHTML = "";
      } else {
        let pages = "";
        for (let p = 1; p <= totalPages; p++) {
          pages += `<button type="button" class="page-btn ${p === explorerPage ? "active" : ""}" data-page="${p}">${p}</button>`;
        }
        paginationEl.innerHTML = `
          <button type="button" class="page-btn" data-page="${Math.max(1, explorerPage - 1)}" aria-label="Halaman sebelumnya">‹</button>
          ${pages}
          <button type="button" class="page-btn" data-page="${Math.min(totalPages, explorerPage + 1)}" aria-label="Halaman berikutnya">›</button>
        `;
        paginationEl.querySelectorAll("[data-page]").forEach(btn => {
          btn.addEventListener("click", () => {
            const nextPage = Number(btn.getAttribute("data-page"));
            if (!Number.isNaN(nextPage)) {
              explorerPage = nextPage;
              renderRouteExplorer();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          });
        });
      }
    }

    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function handleExplorerSearch() {
    explorerPage = 1;
    renderRouteExplorer();
  }

  function openExplorerModal(route) {
    const modal = document.getElementById("route-detail-modal");
    const titleEl = document.getElementById("modal-route-title");
    const statsEl = document.getElementById("modal-stats");
    const stopsEl = document.getElementById("modal-stops");
    const searchBtn = document.getElementById("modal-search-btn");
    const mapEl = document.getElementById("modal-map");
    if (!modal || !titleEl || !statsEl || !stopsEl || !searchBtn || !mapEl) return;

    explorerSelectedRoute = route;
    const livery = getLiveryColor(route.warna);
    titleEl.textContent = `Angkot ${route.nomor} — ${route.operator}`;

    statsEl.innerHTML = `
      <div class="bg-white border-2 border-[#000]/10 rounded-xl p-3 text-center">
        <p class="font-display text-[10px] text-[#000]/40 mb-1">NOMOR</p>
        <p class="font-display text-lg font-bold">${route.nomor}</p>
      </div>
      <div class="bg-white border-2 border-[#000]/10 rounded-xl p-3 text-center">
        <p class="font-display text-[10px] text-[#000]/40 mb-1">WARNA</p>
        <p class="font-display text-sm font-bold ${livery.text}">${route.warna}</p>
      </div>
      <div class="bg-white border-2 border-[#000]/10 rounded-xl p-3 text-center">
        <p class="font-display text-[10px] text-[#000]/40 mb-1">TITIK</p>
        <p class="font-display text-lg font-bold">${route.waypoints.length}</p>
      </div>
    `;

    stopsEl.innerHTML = route.waypoints.map((wp, idx) => `
      <div class="relative pl-6 pb-4 last:pb-0">
        <span class="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#4da2ff] border border-[#000000]"></span>
        ${idx < route.waypoints.length - 1 ? '<span class="absolute left-[4px] top-4 bottom-0 w-[1px] bg-[#000]/15"></span>' : ''}
        <p class="font-body text-sm text-[#000]/75">${wp}</p>
      </div>
    `).join("");

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (explorerModalMap) {
      explorerModalMap.remove();
      explorerModalMap = null;
    }

    const coords = route.waypoints.map(w => getStopCoords(w)).filter(Boolean);
    explorerModalMap = L.map(mapEl, { zoomControl: true, attributionControl: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", { maxZoom: 19 }).addTo(explorerModalMap);

    if (coords.length >= 2) {
      L.polyline(coords, { color: livery.hex || "#1a1a2e", weight: 4, opacity: 0.9 }).addTo(explorerModalMap);
      L.circleMarker(coords[0], { radius: 6, fillColor: "#22c55e", color: "#000", weight: 2, fillOpacity: 1 }).addTo(explorerModalMap);
      L.circleMarker(coords[coords.length - 1], { radius: 6, fillColor: "#ef4444", color: "#000", weight: 2, fillOpacity: 1 }).addTo(explorerModalMap);
      explorerModalMap.fitBounds(L.latLngBounds(coords), { padding: [20, 20] });
    } else {
      explorerModalMap.setView([3.595, 98.67], 12);
    }

    setTimeout(() => explorerModalMap.invalidateSize(), 120);
  }

  function closeExplorerModal() {
    const modal = document.getElementById("route-detail-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
    if (explorerModalMap) {
      explorerModalMap.remove();
      explorerModalMap = null;
    }
    explorerSelectedRoute = null;
  }

  function setupExplorerModalHandlers() {
    const closeBtn = document.getElementById("modal-close");
    const backdrop = document.getElementById("modal-backdrop");
    const searchBtn = document.getElementById("modal-search-btn");

    if (closeBtn) closeBtn.addEventListener("click", closeExplorerModal);
    if (backdrop) backdrop.addEventListener("click", closeExplorerModal);
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        if (!explorerSelectedRoute) return;
        const route = explorerSelectedRoute;
        const from = route.waypoints[0] || route.asal;
        const to = route.waypoints[route.waypoints.length - 1] || route.tujuan;
        const target = `/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
        window.location.href = target;
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeExplorerModal();
      }
    });
  }

  function initApp() {
    lucide.createIcons();
    applyLang(currentLang);
    renderPopularRoutes();
    setupExplorerModalHandlers();

    setupSuggestions(document.getElementById("origin-input"), document.getElementById("origin-resolved"), document.getElementById("origin-suggestions"));
    setupSuggestions(document.getElementById("dest-input"), document.getElementById("dest-resolved"), document.getElementById("dest-suggestions"));

    const langToggle = document.getElementById("lang-toggle");
    const langDropdown = document.getElementById("lang-dropdown");
    const langLabel = document.getElementById("lang-label");
    if (langToggle && langDropdown && langLabel) {
      langLabel.textContent = String(currentLang || "id").toUpperCase();
      langToggle.addEventListener("click", () => {
        langDropdown.classList.toggle("hidden");
      });
      document.querySelectorAll(".lang-option").forEach(btn => {
        btn.addEventListener("click", () => {
          const lang = btn.getAttribute("data-lang") || "id";
          applyLang(lang);
          langLabel.textContent = lang.toUpperCase();
          langDropdown.classList.add("hidden");
        });
      });
      document.addEventListener("click", (e) => {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
          langDropdown.classList.add("hidden");
        }
      });
    }

    document.getElementById("search-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      performSearch();
    });

    document.getElementById("swap-btn")?.addEventListener("click", () => {
      const oInput = document.getElementById("origin-input");
      const dInput = document.getElementById("dest-input");
      const oRes = document.getElementById("origin-resolved");
      const dRes = document.getElementById("dest-resolved");
      
      const tempVal = oInput.value; oInput.value = dInput.value; dInput.value = tempVal;
      const tempRes = oRes.value; oRes.value = dRes.value; dRes.value = tempRes;
    });

    document.getElementById("geoloc-btn")?.addEventListener("click", () => {
      if (!navigator.geolocation) {
        showToast("GPS tidak didukung browser ini.", "error");
        return;
      }
      navigator.geolocation.getCurrentPosition((pos) => {
        const nearest = findStop("USU") || "Kampus USU"; // Fallback jika fungsi pencarian terdekat belum di-load
        document.getElementById("origin-input").value = nearest;
        document.getElementById("origin-resolved").value = nearest;
        showToast("Lokasi berhasil diset ke halte terdekat!");
      }, () => {
        showToast("Gagal mengambil lokasi GPS.", "error");
      });
    });

    // Event delegasi untuk tombol lacak perjalanan
    document.addEventListener("click", (e) => {
      const trackBtn = e.target.closest(".track-route-btn");
      if (trackBtn) {
        const routeData = JSON.parse(trackBtn.dataset.route || "{}");
        startTracking(routeData);
      }
    });

    document.getElementById("tracking-stop-btn")?.addEventListener("click", stopTracking);
    document.getElementById("tracking-center-btn")?.addEventListener("click", () => {
      if (trackingUserMarker) trackingMap.setView(trackingUserMarker.getLatLng(), 15);
    });
    document.getElementById("tracking-follow-btn")?.addEventListener("click", () => {
      trackingFollowMode = !trackingFollowMode;
      showToast(trackingFollowMode ? "Mode ikuti aktif" : "Mode ikuti dimatikan");
    });

    const countBadge = document.getElementById("route-count-badge");
    if (countBadge && typeof ANGKOT_ROUTES !== 'undefined') {
      countBadge.textContent = ANGKOT_ROUTES.length;
    }

    const url = new URL(window.location.href);
    const from = url.searchParams.get("from");
    const to = url.searchParams.get("to");
    if (from && to) {
      const originInput = document.getElementById("origin-input");
      const destInput = document.getElementById("dest-input");
      const originResolved = document.getElementById("origin-resolved");
      const destResolved = document.getElementById("dest-resolved");
      if (originInput && destInput && originResolved && destResolved) {
        originInput.value = from;
        destInput.value = to;
        originResolved.value = from;
        destResolved.value = to;
        performSearch();
      }
    }
  }

  window.renderRouteExplorer = renderRouteExplorer;
  window.handleExplorerSearch = handleExplorerSearch;
  window.closeExplorerModal = closeExplorerModal;
  window.switchView = switchView;
  Object.defineProperty(window, "explorerFilter", {
    get() { return explorerFilter; },
    set(value) { explorerFilter = value || ""; }
  });
  Object.defineProperty(window, "explorerPage", {
    get() { return explorerPage; },
    set(value) { explorerPage = Number(value) || 1; }
  });

  document.addEventListener("DOMContentLoaded", initApp);