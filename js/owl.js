/* =========================================================
   USTURLOB - UZUNASIGA TO'LIQ INTERAKTIV BOYO'G'LI VA SETKA
   ========================================================= */

function initOwl() {
  const container = document.getElementById("owlContainer");
  if (!container) return;

  // 1. Uzunasiga to'liq maydon va qanot qoqish animatsiyasi stillari
  if (!document.getElementById("owlDynamicStyles")) {
    const style = document.createElement("style");
    style.id = "owlDynamicStyles";
    style.textContent = `
      #owlContainer {
        width: 100%;
        max-width: 100%;
        height: 175px;
        position: relative;
        border-radius: 16px;
        border: 1px solid var(--border);
        background-color: #0b1221;
        overflow: hidden;
        box-shadow: var(--shadow);
        cursor: crosshair;
        user-select: none;
      }
      .gh-grid {
        position: absolute;
        inset: 8px;
        display: grid;
        gap: 4px;
        z-index: 1;
      }
      .gh-cell {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background-color: rgba(30, 41, 59, 0.55);
        transition: background-color 0.45s ease, transform 0.35s ease, box-shadow 0.35s ease;
      }
      .owl-fly-wrap {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 82px;
        height: 82px;
        margin-left: -41px;
        margin-top: -41px;
        z-index: 3;
        pointer-events: none;
        will-change: left, top, transform;
      }
      #leftWing {
        transform-origin: 74px 96px;
        animation: flapL 0.35s ease-in-out infinite alternate;
      }
      #rightWing {
        transform-origin: 126px 96px;
        animation: flapR 0.35s ease-in-out infinite alternate;
      }
      @keyframes flapL {
        0% { transform: rotate(22deg); }
        100% { transform: rotate(-32deg); }
      }
      @keyframes flapR {
        0% { transform: rotate(-22deg); }
        100% { transform: rotate(32deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Katakchalar to'ri va Qalpoqchali Boyo'g'li SVG
  container.innerHTML = `
    <div class="gh-grid" id="ghGrid"></div>
    <div class="owl-fly-wrap" id="owlFlyWrap">
      <svg id="usturlobOwl" viewBox="0 0 200 180" width="82" height="82" style="overflow: visible;">
        <!-- Qanotlar -->
        <path id="leftWing" d="M74 92 C35 76, 26 112, 68 116 Z" fill="#6366f1" />
        <path id="rightWing" d="M126 92 C165 76, 174 112, 132 116 Z" fill="#6366f1" />

        <!-- Tana -->
        <ellipse cx="100" cy="102" rx="34" ry="38" fill="#4f46e5" />
        <ellipse cx="100" cy="112" rx="22" ry="24" fill="#6366f1" opacity="0.55" />

        <!-- Oq ko'zlar -->
        <circle cx="87" cy="86" r="15" fill="#ffffff" />
        <circle cx="113" cy="86" r="15" fill="#ffffff" />

        <!-- Ko'z qorachiqlari -->
        <g id="leftPupil">
          <circle cx="88" cy="86" r="6.5" fill="#0f172a" />
          <circle cx="86" cy="84" r="2.2" fill="#ffffff" />
        </g>
        <g id="rightPupil">
          <circle cx="112" cy="86" r="6.5" fill="#0f172a" />
          <circle cx="110" cy="84" r="2.2" fill="#ffffff" />
        </g>

        <!-- Tumshuq -->
        <polygon points="95,96 105,96 100,106" fill="#facc15" />

        <!-- Akademik Qalpoqcha -->
        <polygon points="100,36 62,52 100,66 138,52" fill="#1e1b4b" stroke="#818cf8" stroke-width="2" />
        <rect x="78" y="55" width="44" height="10" rx="3" fill="#312e81" />
        <path d="M100 52 L70 62 L70 74" fill="none" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="70" cy="75" r="3" fill="#facc15" />

        <!-- Panjalar -->
        <path d="M88 138 L85 146 M92 138 L92 146 M108 138 L108 146 M112 138 L115 146" stroke="#facc15" stroke-width="3" stroke-linecap="round" />
      </svg>
    </div>
  `;
  // 3. UZUNASIGA TO'LIQ KATAKCHALAR TO'RI VA RANG JILOSI
  const ghGrid = document.getElementById("ghGrid");
  const owlWrap = document.getElementById("owlFlyWrap");
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");

  const palette = ["#10b981", "#34d399", "#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"];
  let cells = [];
  let cols = 24;
  const rows = 7;

  function buildGrid() {
    const width = container.clientWidth || window.innerWidth;
    cols = Math.max(14, Math.floor(width / 22));
    ghGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    ghGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    ghGrid.innerHTML = "";
    cells = [];

    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement("div");
      cell.className = "gh-cell";
      if (Math.random() > 0.85) {
        cell.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        cell.style.opacity = "0.45";
      }
      ghGrid.appendChild(cell);
      cells.push({ el: cell, timer: null });
    }
  }

  buildGrid();
  window.addEventListener("resize", buildGrid);

  // Katakchani rang-barang jilolantirish
  function lightUpCell(index, intensity = 1) {
    const item = cells[index];
    if (!item) return;
    const color = palette[Math.floor(Math.random() * palette.length)];
    item.el.style.backgroundColor = color;
    item.el.style.opacity = intensity;
    item.el.style.boxShadow = `0 0 8px ${color}`;
    item.el.style.transform = "scale(1.12)";

    clearTimeout(item.timer);
    item.timer = setTimeout(() => {
      item.el.style.backgroundColor = "rgba(30, 41, 59, 0.55)";
      item.el.style.opacity = "1";
      item.el.style.boxShadow = "none";
      item.el.style.transform = "scale(1)";
    }, 950);
  }

  // 4. KURSOR VA BARMOQ ORTIDAN UCHISH FIZIKASI
  let owlX = (container.clientWidth || 300) / 2;
  let owlY = (container.clientHeight || 175) / 2;
  let targetX = owlX;
  let targetY = owlY;

  function updateTarget(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    const x = Math.max(36, Math.min(rect.width - 36, clientX - rect.left));
    const y = Math.max(36, Math.min(rect.height - 36, clientY - rect.top));
    targetX = x;
    targetY = y;

    const c = Math.floor((x / rect.width) * cols);
    const r = Math.floor((y / rect.height) * rows);
    const idx = r * cols + c;
    lightUpCell(idx, 1);
    lightUpCell(idx - 1, 0.75);
    lightUpCell(idx + 1, 0.75);
  }

  window.addEventListener("mousemove", (e) => updateTarget(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
      updateTarget(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  window.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      updateTarget(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Silliq parvoz sikli
  function animateFlight() {
    const dx = targetX - owlX;
    const dy = targetY - owlY;

    owlX += dx * 0.08;
    owlY += dy * 0.08;

    const tilt = Math.max(-18, Math.min(18, dx * 0.15));
    owlWrap.style.left = `${owlX}px`;
    owlWrap.style.top = `${owlY}px`;
    owlWrap.style.transform = `rotate(${tilt}deg)`;

    const lookX = Math.max(-4, Math.min(4, dx * 0.05));
    const lookY = Math.max(-4, Math.min(4, dy * 0.05));
    leftPupil.setAttribute("transform", `translate(${lookX}, ${lookY})`);
    rightPupil.setAttribute("transform", `translate(${lookX}, ${lookY})`);

    if (Math.abs(dx) > 1.5 || Math.abs(dy) > 1.5) {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const c = Math.floor((owlX / rect.width) * cols);
        const r = Math.floor((owlY / rect.height) * rows);
        lightUpCell(r * cols + c, 0.9);
      }
    }

    requestAnimationFrame(animateFlight);
  }

  animateFlight();
}
