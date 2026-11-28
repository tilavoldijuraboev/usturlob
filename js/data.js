const SITE_DATA = {
  about: {
    title: "O'zim haqimda",
    paragraphs: [""]
  },

  themes: [
    { id: "blue", name: "Klassik Ko'k", color: "#3a86ff" },
    { id: "emerald", name: "Zumrad Yashil", color: "#10b981" },
    { id: "cosmic", name: "Kosmos Binafsha", color: "#8b5cf6" },
    { id: "amber", name: "Usturlob Oltin", color: "#f59e0b" },
    { id: "crimson", name: "Yoqut Qizil", color: "#ef4444" },
    { id: "cyan", name: "Okean Moviy", color: "#06b6d4" },
    { id: "slate", name: "Grafit Kulrang", color: "#38bdf8" },
    { id: "rose", name: "Atirgul", color: "#f43f5e" }
  ],

  sections: [
    {
      id: "fizika",
      title: "Fizika",
      icon: "⚛️",
      desc: "",
      items: [
        { id: "fiz_mavzular", title: "Mavzular", icon: "📚", viewType: "list", items: typeof FIZ_MAVZULAR !== "undefined" ? FIZ_MAVZULAR : [] },
        { id: "fiz_masalalar", title: "Masalalar yechimlari", icon: "📝", viewType: "list", items: typeof FIZ_MASALALAR !== "undefined" ? FIZ_MASALALAR : [] },
        { id: "fiz_lab", title: "Elektron laboratoriya", icon: "🔬", items: typeof FIZ_LAB !== "undefined" ? FIZ_LAB : [] },
        { id: "fiz_oyinlar", title: "O'yinlar", icon: "🎮", items: typeof FIZ_OYINLAR !== "undefined" ? FIZ_OYINLAR : [] },
        { id: "fiz_jadvallar", title: "Jadvallar", icon: "📊", viewType: "list", items: typeof FIZ_JADVALLAR !== "undefined" ? FIZ_JADVALLAR : [] },
        { id: "fiz_materiallar", title: "O'quv materiallari", icon: "📂", viewType: "list", items: typeof FIZ_MATERIALLAR !== "undefined" ? FIZ_MATERIALLAR : [] }
      ]
    },
    { id: "matematika", title: "Matematika", icon: "📐", desc: "", items: [] },
    { id: "kimyo", title: "Kimyo", icon: "🧪", desc: "", items: [] },
    { id: "biologiya", title: "Biologiya", icon: "🧬", desc: "", items: [] },
    { id: "blog", title: "Blog", icon: "✍️", desc: "", items: [] },
    { id: "kalkulyator", title: "Kalkulyatorlar", icon: "🧮", desc: "", items: [] }
  ]
};

// AVTO-ULASH (PLUGIN) TIZIMI
// Kelajakda yangi fan, bo'lim yoki jadval qo'shganda data.js va app.js ni o'zgartirmaysiz!
const USTURLOB = {
  add(sectionId, subId, newItems) {
    if (!Array.isArray(newItems)) return;
    const sec = SITE_DATA.sections.find(s => s.id === sectionId);
    if (!sec) return;

    if (!subId) {
      sec.items.push(...newItems);
      return;
    }

    const sub = sec.items.find(i => i.id === subId);
    if (sub) {
      sub.items.push(...newItems);
    }
  },

  addSection(sectionObj) {
    if (sectionObj && sectionObj.id) {
      SITE_DATA.sections.push(sectionObj);
    }
  }
};
