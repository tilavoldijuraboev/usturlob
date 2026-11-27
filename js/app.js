document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const homeView = document.getElementById("homeView");
  const subView = document.getElementById("subView");
  const searchView = document.getElementById("searchView");
  const sectionsGrid = document.getElementById("sectionsGrid");
  const themeDropdown = document.getElementById("themeDropdown");
  const modeToggleBtn = document.getElementById("modeToggleBtn");

  if (typeof initOwl === "function") initOwl();

  let navStack = [];
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

  document.getElementById("themeToggleBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle("hidden");
  });

  modeToggleBtn.addEventListener("click", () => {
    currentMode = currentMode === "dark" ? "light" : "dark";
    applyThemeAndMode();
  });

  document.addEventListener("click", (e) => {
    if (!themeDropdown.contains(e.target)) {
      themeDropdown.classList.add("hidden");
    }
  });

  function renderHomeSections() {
    sectionsGrid.innerHTML = SITE_DATA.sections.map(sec => `
      <div class="section-card" data-sec-id="${sec.id}">
        <div class="card-icon">${sec.icon}</div>
        <div class="card-info">
          <h3>${sec.title}</h3>
          ${sec.desc ? `<p>${sec.desc}</p>` : ""}
        </div>
      </div>
    `).join("");

    sectionsGrid.querySelectorAll(".section-card").forEach(card => {
      card.addEventListener("click", () => {
        const sec = SITE_DATA.sections.find(s => s.id === card.getAttribute("data-sec-id"));
        if (sec) {
          navStack = [sec];
          renderNode(sec);
        }
      });
    });
  }
  function showHome() {
    navStack = [];
    subView.classList.add("hidden");
    searchView.classList.add("hidden");
    homeView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    navStack.pop();
    if (navStack.length === 0) {
      showHome();
    } else {
      renderNode(navStack[navStack.length - 1]);
    }
  }

   function renderMath(el) {
    const greek = {
      "\\alpha": "α", "\\beta": "β", "\\gamma": "γ", "\\Delta": "Δ",
      "\\varepsilon": "ε", "\\lambda": "λ", "\\mu": "μ", "\\nu": "ν",
      "\\rho": "ρ", "\\sigma": "σ", "\\varphi": "φ", "\\omega": "ω",
      "\\Omega": "Ω", "\\cdot": "·", "\\times": "×"
    };

    el.innerHTML = el.innerHTML.replace(/\$([^$\n]+?)\$/g, (_, tex) => {
      let s = tex
        .replace(/\\text\{([^}]*)\}/g, "$1")
        .replace(/\{,\}/g, ",")
        .replace(/\^\{([^}]*)\}/g, "<sup>$1</sup>")
        .replace(/\^([0-9a-zA-Z+-])/g, "<sup>$1</sup>")
        .replace(/_\{([^}]*)\}/g, "<sub>$1</sub>")
        .replace(/_([0-9a-zA-Z])/g, "<sub>$1</sub>");

      Object.keys(greek).forEach(k => {
        s = s.split(k).join(greek[k]);
      });

      return `<span style="font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 1.05em;">${s}</span>`;
    });
  }

  }

  function renderNode(node) {
    homeView.classList.add("hidden");
    searchView.classList.add("hidden");
    subView.classList.remove("hidden");

    const breadcrumbEl = document.getElementById("breadcrumb");
    if (breadcrumbEl) {
      breadcrumbEl.textContent = navStack.map(n => n.title).join(" / ");
    }

    document.getElementById("subTitle").textContent = `${node.icon || ""} ${node.title}`;
    const subContent = document.getElementById("subContent");

    if (node.content) {
      subContent.innerHTML = `
        <div class="detail-card">
          <div class="detail-card-header">
            <span class="detail-card-title">${node.headerTitle || node.title}</span>
            <button class="detail-close-btn" id="detailCloseBtn" title="Yopish">✕</button>
          </div>
          <div class="detail-card-body">${node.content}</div>
        </div>
      `;

      document.getElementById("detailCloseBtn").addEventListener("click", goBack);
      renderMath(subContent);

      const tblSearch = subContent.querySelector(".table-search");
      const tblRows = subContent.querySelectorAll("tbody tr");
      if (tblSearch && tblRows.length > 0) {
        tblSearch.addEventListener("input", (e) => {
          const q = e.target.value.trim().toLowerCase();
          tblRows.forEach(tr => {
            tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
          });
        });
      }

      subContent.querySelectorAll(".copy-val").forEach(el => {
        el.addEventListener("click", () => {
          const val = el.getAttribute("data-copy") || el.textContent.trim();
          navigator.clipboard?.writeText(val);
          const orig = el.innerHTML;
          el.textContent = "✓";
          setTimeout(() => (el.innerHTML = orig), 700);
        });
      });

      if (typeof node.onRender === "function") {
        node.onRender(subContent);
      }
    } else if (!node.items || node.items.length === 0) {
      subContent.innerHTML = `<div class="empty-box"><h3>${node.title}</h3></div>`;
    } else if (node.viewType === "list") {
      subContent.innerHTML = `<div class="list-stack">` + node.items.map((item, idx) => `
        <div class="list-row" data-idx="${idx}">
          <div class="list-row-left">
            <span>${item.icon || "📄"}</span>
            <span>${item.title}</span>
          </div>
          <span class="list-row-arrow">→</span>
        </div>
      `).join("") + `</div>`;

      subContent.querySelectorAll(".list-row").forEach(row => {
        row.addEventListener("click", () => {
          const nextNode = node.items[Number(row.getAttribute("data-idx"))];
          if (nextNode) {
            navStack.push(nextNode);
            renderNode(nextNode);
          }
        });
      });
    } else {
      subContent.innerHTML = `<div class="sections-grid">` + node.items.map((item, idx) => `
        <div class="section-card" data-idx="${idx}">
          <div class="card-icon">${item.icon || "📘"}</div>
          <div class="card-info">
            <h3>${item.title}</h3>
            ${item.desc ? `<p>${item.desc}</p>` : ""}
          </div>
        </div>
      `).join("") + `</div>`;

      subContent.querySelectorAll(".section-card").forEach(card => {
        card.addEventListener("click", () => {
          const nextNode = node.items[Number(card.getAttribute("data-idx"))];
          if (nextNode) {
            navStack.push(nextNode);
            renderNode(nextNode);
          }
        });
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("homeBtn").addEventListener("click", showHome);
  document.getElementById("subHomeBtn").addEventListener("click", showHome);
  document.getElementById("searchBackBtn").addEventListener("click", showHome);
  document.getElementById("backBtn").addEventListener("click", goBack);

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

  function collectMatches(nodes, query, path, results) {
    nodes.forEach(item => {
      const currentPath = [...path, item];
      if (item.title.toLowerCase().includes(query)) {
        results.push({ item, path: currentPath });
      }
      if (item.items && item.items.length > 0) {
        collectMatches(item.items, query, currentPath, results);
      }
    });
  }

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
    collectMatches(SITE_DATA.sections, query, [], matches);

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="empty-box" style="grid-column: 1 / -1;">Topilmadi</div>`;
    } else {
      searchResults.innerHTML = matches.map((m, i) => `
        <div class="section-card" data-match-idx="${i}">
          <div class="card-icon">${m.item.icon || "📘"}</div>
          <div class="card-info">
            <h3>${m.item.title}</h3>
          </div>
        </div>
      `).join("");

      searchResults.querySelectorAll(".section-card").forEach(card => {
        card.addEventListener("click", () => {
          const chosen = matches[Number(card.getAttribute("data-match-idx"))];
          navStack = [...chosen.path];
          renderNode(chosen.item);
        });
      });
    }
  });

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

  applyThemeAndMode();
  renderHomeSections();
});
