/* =========================================================
   USTURLOB - GITHUB USLUBIDAGI RANG-BARANG SETKA VA BOYO'G'LI
   ========================================================= */

function initOwl() {
  const container = document.getElementById("owlContainer");
  if (!container) return;

  // 1. GitHub uslubidagi setka va uchish animatsiyasi stillari
  if (!document.getElementById("owlDynamicStyles")) {
    const style = document.createElement("style");
    style.id = "owlDynamicStyles";
    style.textContent = `
      #owlContainer {
        width: 100%;
        max-width: 380px;
        height: 155px;
        position: relative;
        border-radius: 16px;
        border: 1px solid var(--border);
        background-color: #0d1526;
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 18px 18px;
        overflow: hidden;
        box-shadow: var(--shadow);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /* GitHub contribution graph kabi rangli kvadratlar bloki */
      .gh-grid {
        position: absolute;
        left: 22%;
        top: 50%;
        transform: translateY(-50%);
        display: grid;
        grid-template-columns: repeat(9, 14px);
        grid-template-rows: repeat(5, 14px);
        gap: 4px;
        z-index: 1;
      }
      .gh-cell {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        transition: background-color 0.6s ease, opacity 0.6s ease, transform 0.4s ease;
      }
      /* Boyo'g'lining parvoz harakati */
      .owl-fly-wrap {
        position: relative;
        z-index: 2;
        margin-left: 55px;
        animation: owlFloat 2.4s ease-in-out infinite;
      }
      @keyframes owlFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-7px) rotate(2deg); }
      }
      #leftWing {
        transform-origin: 72px 98px;
        animation: flapL 0.55s ease-in-out infinite alternate;
      }
      #rightWing {
        transform-origin: 128px 98px;
        animation: flapR 0.55s ease-in-out infinite alternate;
      }
      @keyframes flapL {
        0% { transform: rotate(15deg); }
        100% { transform: rotate(-25deg); }
      }
      @keyframes flapR {
        0% { transform: rotate(-15deg); }
        100% { transform: rotate(25deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // 2. HTML va Rasmdagi Boyo'g'li SVG ko'rinishi
  container.innerHTML = `
    <div class="gh-grid" id="ghGrid"></div>
    <div class="owl-fly-wrap">
      <svg id="usturlobOwl" viewBox="0 0 200 180" width="115" height="115" style="overflow: visible;">
        <!-- Qanotlar -->
        <path id="leftWing" d="M74 92 C42 82, 34 108, 68 114 Z" fill="#6366f1" />
        <path id="rightWing" d="M126 92 C158 82, 166 108, 132 114 Z" fill="#6366f1" />

        <!-- Tana (Binafsha-ko'k) -->
        <ellipse cx="100" cy="102" rx="34" ry="38" fill="#4f46e5" />
        <ellipse cx="100" cy="112" rx="22" ry="24" fill="#6366f1" opacity="0.5" />

        <!-- Bir-biriga tutashgan ikkita katta oq ko'z -->
        <circle cx="87" cy="86" r="15" fill="#ffffff" />
        <circle cx="113" cy="86" r="15" fill="#ffffff" />

        <!-- Harakatlanuvchi ko'z qorachiqlari -->
        <g id="leftPupil">
          <circle cx="88" cy="86" r="6.5" fill="#0f172a" />
          <circle cx="86" cy="84" r="2.2" fill="#ffffff" />
        </g>
        <g id="rightPupil">
          <circle cx="112" cy="86" r="6.5" fill="#0f172a" />
          <circle cx="110" cy="84" r="2.2" fill="#ffffff" />
        </g>

        <!-- Ko'z qovoqlari -->
        <ellipse id="leftLid" cx="87" cy="86" rx="15" ry="0" fill="#4f46e5" />
        <ellipse id="rightLid" cx="113" cy="86" rx="15" ry="0" fill="#4f46e5" />

        <!-- Sariq tumshuq -->
        <polygon points="95,96 105,96 100,106" fill="#facc15" />

        <!-- Akademik Qalpoqcha -->
        <polygon points="100,36 62,52 100,66 138,52" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" />
        <rect x="78" y="55" width="44" height="10" rx="3" fill="#312e81" />
        <!-- Sariq popuk -->
        <path d="M100 52 L70 62 L70 74" fill="none" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="70" cy="75" r="3" fill="#facc15" />

        <!-- Sariq panjalar -->
        <path d="M88 138 L85 146 M92 138 L92 146 M108 138 L108 146 M112 138 L115 146" stroke="#facc15" stroke-width="3" stroke-linecap="round" />
      </svg>
    </div>
  `;
  // 3. GITHUB USLUBIDAGI RANG-BARANG KATAKCHALAR JILOSI (9x5 = 45 katak)
  const ghGrid = document.getElementById("ghGrid");
  const palette = [
    "#1e293b", // bo'sh/xira katak
    "#10b981", // yashil
    "#34d399", // och yashil
    "#3b82f6", // ko'k
    "#06b6d4", // moviy
    "#8b5cf6", // binafsha
    "#ec4899", // pushti
    "#f59e0b"  // sariq-oltin
  ];

  const cells = [];
  for (let i = 0; i < 45; i++) {
    const cell = document.createElement("div");
    cell.className = "gh-cell";
    // Ba'zi kataklar xira, ba'zilari yorqin rangda bo'lishi uchun
    const isBright = Math.random() > 0.35;
    cell.style.backgroundColor = isBright
      ? palette[Math.floor(Math.random() * (palette.length - 1)) + 1]
      : palette[0];
    cell.style.opacity = isBright ? "0.9" : "0.4";
    ghGrid.appendChild(cell);
    cells.push(cell);
  }

  // Har 900 millisekundda kataklar rangini jilolantirish
  setInterval(() => {
    cells.forEach(cell => {
      if (Math.random() > 0.65) {
        const isBright = Math.random() > 0.3;
        cell.style.backgroundColor = isBright
          ? palette[Math.floor(Math.random() * (palette.length - 1)) + 1]
          : palette[0];
        cell.style.opacity = isBright ? "0.95" : "0.35";
      }
    });
  }, 900);

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
    const maxOffset = 4.5;

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

  // Ustiga bosilganda ko'z qisish va barcha kataklarni chaqnatish
  container.addEventListener("click", () => {
    leftLid.setAttribute("ry", "15");
    rightLid.setAttribute("ry", "15");
    cells.forEach(c => {
      c.style.backgroundColor = palette[Math.floor(Math.random() * (palette.length - 1)) + 1];
      c.style.opacity = "1";
    });
    setTimeout(() => {
      leftLid.setAttribute("ry", "0");
      rightLid.setAttribute("ry", "0");
    }, 180);
  });
}
