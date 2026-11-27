/* =========================================================
   USTURLOB - ASOSIY DASTURIY MANTIQI (APP CONTROLLER)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;

  // Elementlar
  const homeView = document.getElementById("homeView");
  const subView = document.getElementById("subView");
  const searchView = document.getElementById("searchView");
  const sectionsGrid = document.getElementById("sectionsGrid");
  const themeDropdown = document.getElementById("themeDropdown");
  const modeToggleBtn = document.getElementById("modeToggleBtn");

  // 1. BOYO'G'LINI ISHGA TUSHIRISH
  if (typeof initOwl === "function") initOwl();

  // 2. SAQLANGAN TEMA VA KUN/TUN REJIMINI YUKLASH
  let currentTheme = localStorage.getItem("usturlob_theme") || "blue";
  let currentMode = localStorage.getItem("usturlob_mode") || "dark";

  function applyThemeAndMode() {
    htmlEl.setAttribute("data-theme", currentTheme);
    htmlEl.setAttribute("data-mode", currentMode);
    modeToggleBtn.textContent = currentMode === "dark" ? "☀️" : "🌙";
    localStorage.setItem("usturlob_theme", currentTheme);
    localStorage.setItem("usturlob_mode", currentMode);
    renderThemeMenu();
  }

  // Temalar menyusini avtomatik chizish
  function renderThemeMenu() {
    themeDropdown.innerHTML = SITE_DATA.themes.map(t => `
      <button class="theme-option ${t.id === currentTheme ? "active" : ""}" data-id="${t.id}">
        <span class="theme-dot" style="background-color: ${t.color}"></span>
        <span>${t.name}</span>
      </button>
    `).join("");

    themeDropdown.querySelectorAll(".theme-option").forEach(btn => {
      btn.addEventListener("click", () => {
        currentTheme = btn.getAttribute("data-id");
        applyThemeAndMode();
        themeDropdown.classList.add("hidden");
      });
    });
  }

  // Tema menyusini ochish/yopish
  document.getElementById("themeToggleBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle("hidden");
  });

  // Kun / Tun rejimini almashtirish
  modeToggleBtn.addEventListener("click", () => {
    currentMode = currentMode === "dark" ? "light" : "dark";
    applyThemeAndMode();
  });

  // Tashqariga bosilganda tema menyusini yopish
  document.addEventListener("click", (e) => {
    if (!themeDropdown.contains(e.target)) {
      themeDropdown.classList.add("hidden");
    }
  });

  // 3. ASOSIY 6 TA BO'LIMNI EKRANGA CHIQARISH
  function renderHomeSections() {
    sectionsGrid.innerHTML = SITE_DATA.sections.map(sec => `
      <div class="section-card" data-sec-id="${sec.id}">
        <div class="card-icon">${sec.icon}</div>
        <div class="card-info">
          <h3>${sec.title}</h3>
          <p>${sec.desc}</p>
        </div>
      </div>
    `).join("");

    sectionsGrid.querySelectorAll(".section-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-sec-id");
        openSection(id);
      });
    });
  }
  // 4. BO'LIM ICHIGA KIRISH VA ORQAGA QAYTISH
  function showHome() {
    subView.classList.add("hidden");
    searchView.classList.add("hidden");
    homeView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openSection(secId) {
    const section = SITE_DATA.sections.find(s => s.id === secId);
    if (!section) return;

    homeView.classList.add("hidden");
    searchView.classList.add("hidden");
    subView.classList.remove("hidden");

    document.getElementById("subTitle").textContent = `${section.icon} ${section.title}`;
    const subContent = document.getElementById("subContent");

    if (!section.items || section.items.length === 0) {
      subContent.innerHTML = `
        <div class="empty-box">
          <h3>${section.title} bo'limi tayyorlanmoqda</h3>
          <p style="margin-top: 8px;">Tez orada bu bo'limga yangi mavzular, formulalar va interaktiv mashg'ulotlar qo'shiladi.</p>
        </div>
      `;
    } else {
      subContent.innerHTML = `<div class="sections-grid">` + section.items.map(item => `
        <div class="section-card">
          <div class="card-icon">${item.icon || "📘"}</div>
          <div class="card-info">
            <h3>${item.title}</h3>
            <p>${item.desc || ""}</p>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("homeBtn").addEventListener("click", showHome);
  document.getElementById("backBtn").addEventListener("click", showHome);
  document.getElementById("searchBackBtn").addEventListener("click", showHome);

  // 5. QIDIRUV TIZIMI
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  document.getElementById("searchToggleBtn").addEventListener("click", () => {
    searchBar.classList.toggle("hidden");
    if (!searchBar.classList.contains("hidden")) {
      searchInput.focus();
    }
  });

  document.getElementById("searchCloseBtn").addEventListener("click", () => {
    searchBar.classList.add("hidden");
    searchInput.value = "";
    showHome();
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      showHome();
      return;
    }

    homeView.classList.add("hidden");
    subView.classList.add("hidden");
    searchView.classList.remove("hidden");

    const matches = [];
    SITE_DATA.sections.forEach(sec => {
      if (sec.title.toLowerCase().includes(query) || sec.desc.toLowerCase().includes(query)) {
        matches.push({ title: sec.title, desc: sec.desc, icon: sec.icon, secId: sec.id });
      }
      if (sec.items) {
        sec.items.forEach(item => {
          if (item.title.toLowerCase().includes(query) || (item.desc && item.desc.toLowerCase().includes(query))) {
            matches.push({ title: item.title, desc: `${sec.title} bo'limi`, icon: item.icon || "📘", secId: sec.id });
          }
        });
      }
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="empty-box" style="grid-column: 1 / -1;">"${e.target.value}" bo'yicha hech narsa topilmadi.</div>`;
    } else {
      searchResults.innerHTML = matches.map(m => `
        <div class="section-card" data-sec-id="${m.secId}">
          <div class="card-icon">${m.icon}</div>
          <div class="card-info">
            <h3>${m.title}</h3>
            <p>${m.desc}</p>
          </div>
        </div>
      `).join("");

      searchResults.querySelectorAll(".section-card").forEach(card => {
        card.addEventListener("click", () => openSection(card.getAttribute("data-sec-id")));
      });
    }
  });

  // 6. "O'ZIM HAQIMDA" MODAL OYNASI
  const aboutModal = document.getElementById("aboutModal");
  const aboutContent = document.getElementById("aboutContent");

  aboutContent.innerHTML = `
    <h4 style="margin-bottom: 10px; color: var(--accent);">${SITE_DATA.about.title}</h4>
    ${SITE_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join("")}
  `;

  document.getElementById("aboutBtn").addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
  });

  document.getElementById("aboutCloseBtn").addEventListener("click", () => {
    aboutModal.classList.add("hidden");
  });

  aboutModal.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.classList.add("hidden");
    }
  });

  // 7. SAHIFANI ISHGA TUSHIRISH
  applyThemeAndMode();
  renderHomeSections();
});
