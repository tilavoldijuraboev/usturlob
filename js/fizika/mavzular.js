const FIZ_MAVZULAR = [
  {
    id: "bob_mexanika",
    title: "1-bob. Mexanika",
    icon: "⚙️",
    viewType: "list",
    items: [
      {
        id: "mex_01",
        title: "1.1. Mexanik harakat va sanoq sistemasi",
        icon: "🚀",
        file: "js/fizika/mavzular/mexanika/01-harakat.js"
      }
    ]
  },
  {
    id: "bob_molekulyar",
    title: "2-bob. Molekulyar fizika va termodinamika",
    icon: "🌡️",
    viewType: "list",
    items: []
  },
  {
    id: "bob_elektrodinamika",
    title: "3-bob. Elektrodinamika",
    icon: "⚡",
    viewType: "list",
    items: []
  },
  {
    id: "bob_tebranishlar",
    title: "4-bob. Tebranishlar va to'lqinlar",
    icon: "〰️",
    viewType: "list",
    items: []
  },
  {
    id: "bob_optika",
    title: "5-bob. Optika",
    icon: "🔭",
    viewType: "list",
    items: []
  },
  {
    id: "bob_kvant",
    title: "6-bob. Atom va yadro fizikasi",
    icon: "☢️",
    viewType: "list",
    items: []
  }
];
window.CURRENT_TOPIC = {
  headerTitle: "1-bob • Mexanika",
  content: String.raw`
    <div class="content-box" style="margin-bottom:14px;">
      <h3>Asosiy tushunchalar</h3>
      <p><strong>Mexanik harakat</strong> — jismning vaqt o'tishi bilan fazodagi vaziyatining boshqa jismlarga nisbatan o'zgarishi.</p>
      <div class="formula-box">
        $v = \frac{s}{t}$ &nbsp;&nbsp;|&nbsp;&nbsp; $s = v \cdot t$
      </div>
    </div>

    <div class="content-box" style="margin-bottom:14px;">
      <h3>Interaktiv tajriba: Harakat tezligi</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">Tezlikni o'zgartirib, jismning harakatini kuzating:</p>
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:14px;">
        <div id="carTrack" style="position:relative; height:40px; border-bottom:2px dashed var(--border); overflow:hidden;">
          <div id="carEmoji" style="position:absolute; left:0; top:6px; font-size:1.5rem;">🚗</div>
        </div>
        <div style="margin-top:10px; display:flex; align-items:center; gap:10px;">
          <label for="speedRange">Tezlik:</label>
          <input type="range" id="speedRange" min="1" max="10" value="3" style="flex:1;">
          <span id="speedVal" style="font-weight:700; color:var(--accent);">3 m/s</span>
        </div>
      </div>
    </div>

    <div class="content-box">
      <h3>O'z-o'zini tekshirish</h3>
      <p style="margin-bottom:8px;">Jism 10 sekundda 50 metr masofani tekis bosib o'tdi. Uning tezligi qancha?</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="back-btn quiz-opt" data-ok="0">500 m/s</button>
        <button class="back-btn quiz-opt" data-ok="1">5 m/s</button>
        <button class="back-btn quiz-opt" data-ok="0">0,2 m/s</button>
      </div>
      <p id="quizFeedback" style="margin-top:8px; font-weight:600;"></p>
    </div>
  `,
  onRender(container) {
    const car = container.querySelector("#carEmoji");
    const track = container.querySelector("#carTrack");
    const range = container.querySelector("#speedRange");
    const valEl = container.querySelector("#speedVal");
    let pos = 0;
    let speed = 3;

    range.addEventListener("input", () => {
      speed = Number(range.value);
      valEl.textContent = `${speed} m/s`;
    });

    function moveCar() {
      if (!document.body.contains(car)) return;
      const maxW = track.clientWidth - 32;
      pos += speed * 0.6;
      if (pos > maxW) pos = 0;
      car.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(moveCar);
    }
    requestAnimationFrame(moveCar);

    const feedback = container.querySelector("#quizFeedback");
    container.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.getAttribute("data-ok") === "1") {
          feedback.style.color = "#10b981";
          feedback.textContent = "✅ To'g'ri! v = s / t = 50 / 10 = 5 m/s.";
        } else {
          feedback.style.color = "#ef4444";
          feedback.textContent = "❌ Noto'g'ri, qayta urinib ko'ring.";
        }
      });
    });
  }
};
