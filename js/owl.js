/* =========================================================
   USTURLOB - PARVOZ QILUVCHI VA RANG-BARANG JILOLI BOYO'G'LI
   ========================================================= */

function initOwl() {
  const container = document.getElementById("owlContainer");
  if (!container) return;

  // 1. Boyo'g'li va katakchali fon uchun maxsus animatsiya stillari
  if (!document.getElementById("owlDynamicStyles")) {
    const style = document.createElement("style");
    style.id = "owlDynamicStyles";
    style.textContent = `
      #owlContainer {
        width: 100%;
        max-width: 380px;
        height: 165px;
        position: relative;
        border-radius: 18px;
        border: 1px solid var(--border);
        background-color: var(--bg-card);
        background-image:
          linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px);
        background-size: 24px 24px;
        overflow: hidden;
        box-shadow: var(--shadow);
        margin: 0 auto;
      }
      .owl-tiles {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .owl-tile {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 4px;
        opacity: 0.25;
        transition: opacity 0.8s ease, transform 0.8s ease, background-color 0.8s ease;
      }
      .owl-fly-wrap {
        position: relative;
        z-index: 2;
        animation: owlHover 2.6s ease-in-out infinite;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @keyframes owlHover {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      #leftWing {
        transform-origin: 62px 98px;
        animation: flapLeft 0.75s ease-in-out infinite alternate;
      }
      #rightWing {
        transform-origin: 138px 98px;
        animation: flapRight 0.75s ease-in-out infinite alternate;
      }
      @keyframes flapLeft {
        0% { transform: rotate(12deg); }
        100% { transform: rotate(-28deg); }
      }
      @keyframes flapRight {
        0% { transform: rotate(-12deg); }
        100% { transform: rotate(28deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Katakchali fon ichidagi rangli kvadratlar va Qalpoqchali Boyo'g'li SVG
  container.innerHTML = `
    <div class="owl-tiles" id="owlTiles"></div>
    <div class="owl-fly-wrap">
      <svg id="usturlobOwl" viewBox="0 0 200 190" width="135" height="135" style="overflow: visible;">
        <!-- Qanotlar (Qanot qoqib uchish animatsiyasi bilan) -->
        <path id="leftWing" d="M64 92 C30 78, 22 115, 58 124 Z" fill="#4f46e5" stroke="#818cf8" stroke-width="2" />
        <path id="rightWing" d="M136 92 C170 78, 178 115, 142 124 Z" fill="#4f46e5" stroke="#818cf8" stroke-width="2" />

        <!-- Asosiy tana -->
        <ellipse cx="100" cy="105" rx="42" ry="46" fill="#4338ca" stroke="#6366f1" stroke-width="3" />
        <!-- Qorin qismi -->
        <ellipse cx="100" cy="116" rx="28" ry="30" fill="#6366f1" opacity="0.55" />

        <!-- Ko'z kosalari -->
        <circle cx="84" cy="88" r="18" fill="#ffffff" stroke="#312e81" stroke-width="2.5" />
        <circle cx="116" cy="88" r="18" fill="#ffffff" stroke="#312e81" stroke-width="2.5" />

        <!-- Harakatlanuvchi ko'z qorachiqlari -->
        <g id="leftPupil">
          <circle cx="84" cy="88" r="8" fill="#0f172a" />
          <circle cx="81" cy="85" r="2.8" fill="#ffffff" />
        </g>
        <g id="rightPupil">
          <circle cx="116" cy="88" r="8" fill="#0f172a" />
          <circle cx="113" cy="85" r="2.8" fill="#ffffff" />
        </g>

        <!-- Ko'z qovoqlari (Ko'z yumish uchun) -->
        <ellipse id="leftLid" cx="84" cy="88" rx="18" ry="0" fill="#4338ca" />
        <ellipse id="rightLid" cx="116" cy="88" rx="18" ry="0" fill="#4338ca" />

        <!-- Tumshuq -->
        <polygon points="94,98 106,98 100,110" fill="#f59e0b" />

        <!-- Akademik Qalpoqcha (Bitiruvchi shlyapasi) -->
        <polygon points="100,26 54,46 100,62 146,46" fill="#1e1b4b" stroke="#818cf8" stroke-width="2" />
        <rect x="74" y="50" width="52" height="12" rx="4" fill="#312e81" />
        <!-- Oltin popukcha -->
        <path d="M100 46 L138 56 L138 72" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="138" cy="74" r="3.5" fill="#fbbf24" />

        <!-- Panjalar -->
        <path d="M84 149 L80 158 M88 149 L88 158 M112 149 L112 158 M116 149 L120 158" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
      </svg>
    </div>
  `;
  // 3. KATAKCHALAR ICHIDA RANG-BARANG JILOLANUVCHI KVADRATLAR
  const tilesWrap = document.getElementById("owlTiles");
  const tileColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#06b6d4", "#6366f1"];
  const tiles = [];

  for (let i = 0; i < 18; i++) {
    const tile = document.createElement("div");
    tile.className = "owl-tile";
    const col = Math.floor(Math.random() * 15);
    const row = Math.floor(Math.random() * 6);
    tile.style.left = `${col * 24 + 1}px`;
    tile.style.top = `${row * 24 + 1}px`;
    tile.style.backgroundColor = tileColors[Math.floor(Math.random() * tileColors.length)];
    tilesWrap.appendChild(tile);
    tiles.push(tile);
  }

  // Har 1.2 soniyada ranglar va yorqinlik jilosini o'zgartirish
  setInterval(() => {
    tiles.forEach(tile => {
      if (Math.random() > 0.45) {
        tile.style.opacity = (Math.random() * 0.55 + 0.1).toFixed(2);
        tile.style.backgroundColor = tileColors[Math.floor(Math.random() * tileColors.length)];
        const col = Math.floor(Math.random() * 15);
        const row = Math.floor(Math.random() * 6);
        tile.style.left = `${col * 24 + 1}px`;
        tile.style.top = `${row * 24 + 1}px`;
      }
    });
  }, 1200);

  // 4. SICHQONCHA VA BARMOQ HARAKATIGA QARAB KO'Z YUGURTIRISH
  const svg = document.getElementById("usturlobOwl");
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");
  const leftLid = document.getElementById("leftLid");
  const rightLid = document.getElementById("rightLid");

  function moveEyes(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const maxOffset = 5.5;

    const dx = Math.cos(angle) * maxOffset;
    const dy = Math.sin(angle) * maxOffset;

    leftPupil.setAttribute("transform", `translate(${dx}, ${dy})`);
    rightPupil.setAttribute("transform", `translate(${dx}, ${dy})`);
  }

  window.addEventListener("mousemove", (e) => moveEyes(e.clientX, e.clientY));

  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
      moveEyes(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      moveEyes(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Ustiga bosilganda ko'z qisish va ranglarni chaqnatish
  container.addEventListener("click", () => {
    leftLid.setAttribute("ry", "18");
    rightLid.setAttribute("ry", "18");
    tiles.forEach(t => (t.style.opacity = "0.75"));
    setTimeout(() => {
      leftLid.setAttribute("ry", "0");
      rightLid.setAttribute("ry", "0");
    }, 180);
  });
}
