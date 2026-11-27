/* =========================================================
   USTURLOB - MA'LUMOTLAR BAZASI (DATA)
   Barcha bo'limlar, mavzular va "O'zim haqimda" ma'lumotlari
   shu yerda saqlanadi.
   ========================================================= */

const SITE_DATA = {
  // 1. O'zim haqimda oynasi uchun ma'lumot (keyinchalik bemalol tahrirlaysiz)
  about: {
    title: "Loyiha va muallif haqida",
    paragraphs: [
      "Assalomu alaykum! USTURLOB — fizika, matematika, kimyo va biologiya fanlarini zamonaviy, tushunarli va interaktiv usulda o'rganish uchun yaratilgan ta'limiy platforma.",
      "Ushbu qismni keyinchalik o'zim haqimdagi batafsil ma'lumotlar bilan to'ldiraman."
    ]
  },

  // 2. Temalar ro'yxati (css/themes.css bilan mos)
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

  // 3. Asosiy 6 ta bo'lim
  sections: [
    {
      id: "fizika",
      title: "Fizika",
      icon: "⚛️",
      desc: "Nazariya, formulalar va interaktiv tajribalar",
      items: [] // Kelajakda boblarni shu yerga qo'shamiz
    },
    {
      id: "matematika",
      title: "Matematika",
      icon: "📐",
      desc: "Algebra, geometriya va mantiqiy masalalar",
      items: []
    },
    {
      id: "kimyo",
      title: "Kimyo",
      icon: "🧪",
      desc: "Elementlar, reaksiyalar va kimyoviy qonunlar",
      items: []
    },
    {
      id: "biologiya",
      title: "Biologiya",
      icon: "🧬",
      desc: "Hayot fanlari, hujayra va organizmlar",
      items: []
    },
    {
      id: "blog",
      title: "Blog",
      icon: "✍️",
      desc: "Ilmiy maqolalar, foydali maslahatlar va yangiliklar",
      items: []
    },
    {
      id: "kalkulyator",
      title: "Kalkulyatorlar",
      icon: "🧮",
      desc: "Fizika, matematika va birliklar konvertori",
      items: []
    }
  ]
};
