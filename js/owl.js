/* =========================================================
   USTURLOB - INTERAKTIV BOYO'G'LI (Kursor va barmoq kuzatuvchisi)
   ========================================================= */

function initOwl() {
  const container = document.getElementById("owlContainer");
  if (!container) return;

  // Boyo'g'lining SVG grafikasi (tema ranglariga moslashuvchan)
  container.innerHTML = `
    <svg id="usturlobOwl" viewBox="0 0 200 200" width="145" height="145" style="overflow: visible;">
      <!-- Quloq patlari -->
      <path d="M52 58 L36 26 L74 46 Z" fill="var(--accent)" />
      <path d="M148 58 L164 26 L126 46 Z" fill="var(--accent)" />

      <!-- Asosiy tana va bosh -->
      <rect x="42" y="42" width="116" height="128" rx="58" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="5" />

      <!-- Qorin qismi (naqsh) -->
      <path d="M68 122 Q100 108 132 122 Q132 162 100 164 Q68 162 68 122 Z" fill="var(--bg-main)" opacity="0.65" />

      <!-- Qanotlar -->
      <path d="M42 96 Q24 125 44 152" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" />
      <path d="M158 96 Q176 125 156 152" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" />

      <!-- Ko'z kosalari (Oq fon) -->
      <circle cx="76" cy="86" r="24" fill="#ffffff" stroke="var(--accent)" stroke-width="3.5" />
      <circle cx="124" cy="86" r="24" fill="#ffffff" stroke="var(--accent)" stroke-width="3.5" />

      <!-- Harakatlanuvchi ko'z qorachiqlari -->
      <g id="leftPupil">
        <circle cx="76" cy="86" r="10" fill="#0f172a" />
        <circle cx="72" cy="82" r="3.5" fill="#ffffff" />
      </g>
      <g id="rightPupil">
        <circle cx="124" cy="86" r="10" fill="#0f172a" />
        <circle cx="120" cy="82" r="3.5" fill="#ffffff" />
      </g>

      <!-- Ko'z qovoqlari (Bosilganda ko'z yumishi uchun) -->
      <ellipse id="leftLid" cx="76" cy="86" rx="24" ry="0" fill="var(--accent)" />
      <ellipse id="rightLid" cx="124" cy="86" rx="24" ry="0" fill="var(--accent)" />

      <!-- Tumshuq -->
      <polygon points="92,102 108,102 100,118" fill="#f59e0b" />

      <!-- Panjalar -->
      <path d="M74 170 L74 178 M82 170 L82 178" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
      <path d="M118 170 L118 178 M126 170 L126 178" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
    </svg>
  `;

  const svg = document.getElementById("usturlobOwl");
  const leftPupil = document.getElementById("leftPupil");
  const rightPupil = document.getElementById("rightPupil");
  const leftLid = document.getElementById("leftLid");
  const rightLid = document.getElementById("rightLid");

  // Kursor yoki barmoq koordinatasiga qarab ko'zlarni siljitish funksiyasi
  function moveEyes(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const maxOffset = 7; // Qorachiq ko'z kosasidan chiqib ketmasligi uchun chegara

    const dx = Math.cos(angle) * maxOffset;
    const dy = Math.sin(angle) * maxOffset;

    leftPupil.setAttribute("transform", `translate(${dx}, ${dy})`);
    rightPupil.setAttribute("transform", `translate(${dx}, ${dy})`);
  }

  // Kompyuter sichqonchasi uchun
  window.addEventListener("mousemove", (e) => {
    moveEyes(e.clientX, e.clientY);
  });

  // Telefon va planshet ekrani (sensor) uchun
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

  // Ustiga bosilganda ko'z qisish animatsiyasi
  container.addEventListener("click", () => {
    leftLid.setAttribute("ry", "24");
    rightLid.setAttribute("ry", "24");
    setTimeout(() => {
      leftLid.setAttribute("ry", "0");
      rightLid.setAttribute("ry", "0");
    }, 180);
  });
}
