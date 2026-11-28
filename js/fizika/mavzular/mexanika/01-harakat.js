window.CURRENT_TOPIC = {
  headerTitle: "1-bob • Mexanika • 1.1-mavzu",
  content: String.raw`
    <!-- 1. MEXANIK HARAKAT VA NISBIYLIK -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>1. Mexanik harakat va uning nisbiyligi</h3>
      <p>Kundalik hayotda hamma narsa harakatda: ko'chada yurayotgan mashina, osmonda uchayotgan qush, shamolda tebranayotgan daraxt bargi va Quyosh atrofida aylanayotgan Yer. Fizikada jismlarning fazodagi o'rnini o'zgartirishini <strong>mexanik harakat</strong> o'rganadi.</p>
      
      <p style="margin-top:8px;"><strong>Ta'rif:</strong> Jismning vaqt o'tishi bilan fazodagi vaziyatining boshqa jismlarga nisbatan o'zgarishiga <em>mexanik harakat</em> deyiladi.</p>

      <p style="margin-top:8px;"><strong>Hayotiy misol:</strong> Siz poyezd vagonida deraza yonida o'tiribsiz, stol ustida esa kitob turibdi. Vagon ichidagi yo'lovchi uchun kitob qimirlamayapti (tinch turibdi). Lekin temiryo'l chetida turgan odam uchun bu kitob ham, siz ham poyezd tezligida oldinga ketmoqdasiz. Demak, bir jismning o'zi bir vaqtning o'zida ham tinch, ham harakatda bo'lishi mumkin — bu <strong>harakatning nisbiyligi</strong> deyiladi.</p>

      <!-- 1-INTERAKTIV: TELEFONGA MOSLASHUVCHAN POYEZD VA KUZATUVCHI -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:12px; margin-top:12px;">
        <div style="font-weight:600; margin-bottom:8px; font-size:0.92rem;">Kuzatuvchini tanlang va tezliklarni o'zgartirib ko'ring:</div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
          <button class="back-btn frame-btn" data-frame="ground" style="background:var(--accent); color:#fff; font-size:0.85rem;">🌍 Yerdan kuzatish</button>
          <button class="back-btn frame-btn" data-frame="train" style="font-size:0.85rem;">🚄 Poyezd ichidan</button>
          <button class="back-btn frame-btn" data-frame="walker" style="font-size:0.85rem;">🚶 Yo'lovchi bilan birga</button>
        </div>

        <canvas id="relativityCanvas" style="width:100%; height:190px; display:block; border-radius:10px; background:#0b1221; border:1px solid var(--border);"></canvas>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-top:10px;">
          <div style="background:var(--bg-card); padding:8px 10px; border-radius:8px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:0.84rem;">
              <span>🚄 Poyezd tezligi ($\vec{v}_1$):</span>
              <strong id="trainSpeedLabel" style="color:var(--accent);">+12 m/s</strong>
            </div>
            <input type="range" id="trainSpeedSlider" min="-20" max="20" value="12" style="width:100%; margin-top:4px;">
          </div>

          <div style="background:var(--bg-card); padding:8px 10px; border-radius:8px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:0.84rem;">
              <span>🚶 Yo'lovchi tezligi ($\vec{v}_2$):</span>
              <strong id="walkerSpeedLabel" style="color:#10b981;">+3 m/s</strong>
            </div>
            <input type="range" id="walkerSpeedSlider" min="-8" max="8" value="3" style="width:100%; margin-top:4px;">
          </div>
        </div>

        <div id="relativityReadout" style="margin-top:10px; padding:8px 12px; border-radius:8px; background:var(--bg-card); border-left:3px solid var(--accent); font-size:0.88rem; line-height:1.6;"></div>
      </div>
    </div>

    <!-- 2. MODDIY NUQTA VA SANOQ SISTEMASI (CHIZMA BILAN) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>2. Moddiy nuqta va Sanoq sistemasi</h3>
      <p><strong>Moddiy nuqta</strong> — o'rganilayotgan sharoitda o'lchamlarini hisobga olmaslik mumkin bo'lgan jism. Jismning hamma qismi bir xil harakatlansa yoki bosib o'tayotgan masofasi o'z o'lchamidan juda katta bo'lsa, uni bitta nuqta deb olish hisob-kitobni osonlashtiradi.</p>

      <!-- VIZUAL SVG CHIZMA -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:10px; margin:12px 0;">
        <svg viewBox="0 0 600 155" style="width:100%; height:auto; display:block;">
          <!-- Chap tomon: Moddiy nuqta (Yer orbitada) -->
          <rect x="8" y="8" width="284" height="139" rx="10" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="1.5"/>
          <text x="150" y="28" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">✓ Moddiy nuqta deb olish mumkin</text>
          <circle cx="95" cy="82" r="18" fill="#f59e0b"/>
          <text x="95" y="115" fill="#cbd5e1" font-size="11" text-anchor="middle">Quyosh</text>
          <ellipse cx="150" cy="82" rx="105" ry="34" fill="none" stroke="#64748b" stroke-dasharray="4 4"/>
          <circle cx="255" cy="82" r="5" fill="#3b82f6"/>
          <text x="255" y="70" fill="#93c5fd" font-size="11" text-anchor="middle">Yer</text>
          <text x="150" y="138" fill="#94a3b8" font-size="11" text-anchor="middle">Orbita radiusi Yer o'lchamidan 23 000 marta katta</text>

          <!-- O'ng tomon: Moddiy nuqta emas (Poyezd ko'prikda) -->
          <rect x="308" y="8" width="284" height="139" rx="10" fill="rgba(239, 68, 68, 0.08)" stroke="#ef4444" stroke-width="1.5"/>
          <text x="450" y="28" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">✕ Moddiy nuqta deb bo'lmaydi</text>
          <line x1="330" y1="95" x2="570" y2="95" stroke="#94a3b8" stroke-width="4"/>
          <line x1="380" y1="95" x2="380" y2="120" stroke="#64748b" stroke-width="4"/>
          <line x1="520" y1="95" x2="520" y2="120" stroke="#64748b" stroke-width="4"/>
          <rect x="355" y="73" width="110" height="18" rx="4" fill="#3b82f6"/>
          <text x="410" y="65" fill="#93c5fd" font-size="11" text-anchor="middle">Poyezd uzunligi L₁</text>
          <text x="450" y="138" fill="#94a3b8" font-size="11" text-anchor="middle">Poyezd uzunligi ko'prik uzunligi L₂ bilan tenglashadi</text>
        </svg>
      </div>

      <p><strong>Sanoq sistemasi</strong> — jismning vaziyatini aniq belgilash uchun tanlangan uchta narsa birligi:</p>
      <div class="formula-box">
        $$\text{Sanoq sistemasi} = \text{Sanoq jismi} + \text{Koordinatalar sistemasi } (x, y, z) + \text{Soat } (t)$$
      </div>
    </div>
    <!-- 3. TRAEKTORIYA, YO'L VA KO'CHISHNING MATEMATIK ASOSLARI -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>3. Traektoriya, Yo'l va Ko'chish: Fizika va Matematika</h3>

      <p><strong>Traektoriya</strong> — harakatlanayotgan nuqtaning fazoda qoldirgan izi (chizig'i). Agar jism koordinatalari vaqtga bog'liq holda $x(t)$ va $y(t)$ tenglamalar bilan berilsa, ular orasidan $t$ vaqtni yo'qotib, $y = f(x)$ ko'rinishidagi <em>traektoriya tenglamasini</em> olamiz.</p>
      
      <p style="margin-top:8px;"><strong>Hayotiy misol (1-sinf o'quvchisidan shaxmatchigacha):</strong></p>
      <ul style="margin:6px 0 12px 20px; color:var(--text-muted); line-height:1.7;">
        <li><strong>Avtomobil spidometri (odometri):</strong> Mashina Toshkentdan Samarqandga borib, yana Toshkentga qaytib keldi. Spidometr ko'rsatkichi $600\text{ km}$ ga oshdi — bu <strong>bosib o'tilgan yo'l ($l = 600\text{ km}$)</strong>. Lekin mashina yana o'z joyiga qaytib kelgani uchun uning boshlang'ich va oxirgi vaziyati orasidagi masofa nolga teng — bu <strong>ko'chish ($s = 0$)</strong>.</li>
        <li><strong>Shaxmat taxtasi:</strong> Ot yurish qilganda 2 katak oldinga va 1 katak yonga siljiydi. Bosib o'tgan kataklar yig'indisi $l = 2 + 1 = 3$ birlik, boshlang'ich va oxirgi katak markazlari orasidagi to'g'ri masofa (ko'chish) esa $s = \sqrt{2^2 + 1^2} = \sqrt{5} \approx 2{,}24$ birlik bo'ladi.</li>
      </ul>

      <!-- MATEMATIK KELTIRIB CHIQARISH BLOKI -->
      <div class="formula-box" style="text-align:left; line-height:1.9;">
        <strong>1-holat. To'g'ri chiziqli harakat ($Ox$ o'qi bo'ylab):</strong><br>
        Jism $x_1$ nuqtadan $x_2$ nuqtaga ko'chsa, ko'chish proyeksiyasi: $s_x = x_2 - x_1$.<br>
        • Agar $x_2 > x_1$ bo'lsa, $s_x > 0$ (jism $Ox$ o'qi yo'nalishida harakatlangan).<br>
        • Agar $x_2 < x_1$ bo'lsa, $s_x < 0$ (jism $Ox$ o'qiga qarama-qarshi harakatlangan).<br>
        Ko'chish moduli: $s = |x_2 - x_1|$.
      </div>

      <div class="formula-box" style="text-align:left; line-height:1.9;">
        <strong>2-holat. Tekislikda harakat ($Oxy$ koordinatalar sistemasi):</strong><br>
        Boshlang'ich nuqta $A(x_1; y_1)$ va oxirgi nuqta $B(x_2; y_2)$ berilgan bo'lsin.<br>
        1) Ko'chish vektorining o'qlardagi proyeksiyalari: $s_x = x_2 - x_1$ &nbsp;va&nbsp; $s_y = y_2 - y_1$.<br>
        2) Katetlari $s_x$ va $s_y$ bo'lgan to'g'ri burchakli uchburchakdan Pifagor teoremasi bo'yicha:<br>
        $$s = \sqrt{s_x^2 + s_y^2} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
        3) Ko'chish vektorining $Ox$ o'qi bilan tashkil qilgan $\varphi$ burchagi: $\tan\varphi = \frac{s_y}{s_x}$, &nbsp; $\cos\varphi = \frac{s_x}{s}$, &nbsp; $\sin\varphi = \frac{s_y}{s}$.
      </div>

      <div class="formula-box" style="text-align:left; line-height:1.9;">
        <strong>3-holat. Ikki ketma-ket ko'chishni qo'shish (Kosinuslar teoremasi):</strong><br>
        Jism avval $\vec{s}_1$ masofaga, so'ngra yo'nalishini $\alpha$ burchakka burib $\vec{s}_2$ masofaga ko'chdi. Uchburchaklarning kosinuslar teoremasiga ko'ra natijaviy ko'chish moduli:<br>
        $$s = \sqrt{s_1^2 + s_2^2 + 2 s_1 s_2 \cos\alpha}$$
        • Bir yo'nalishda ($\alpha = 0^\circ, \cos 0^\circ = 1$): $s = s_1 + s_2$ (maksimal ko'chish, $s = l$).<br>
        • Qarama-qarshi yo'nalishda ($\alpha = 180^\circ, \cos 180^\circ = -1$): $s = |s_1 - s_2|$ (minimal ko'chish).<br>
        • To'g'ri burchak ostida ($\alpha = 90^\circ, \cos 90^\circ = 0$): $s = \sqrt{s_1^2 + s_2^2}$.
      </div>
    </div>

    <!-- 4. YANGILANGAN INTERAKTIV: TRAEKTORIYA VA KO'CHISH SIMULYATORI -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>4. Interaktiv tajriba: Yo'l va Ko'chishni o'zingiz yasang</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">
        <strong>Qo'llanma:</strong> Koordinata tekisligidagi nuqtalarni barmoq bilan ushlab xohlagan joyga sudrang, kerak bo'lsa <strong>"+ Nuqta qo'shish"</strong> tugmasi bilan murakkab yo'l yasang va <strong>"▶ Jismni yurgizish"</strong> tugmasini bosing!
      </p>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:10px;">
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
          <button class="back-btn" id="playPathBtn" style="background:#10b981; color:#fff; font-size:0.84rem;">▶ Jismni yurgizish</button>
          <button class="back-btn" id="addPointBtn" style="font-size:0.84rem;">➕ Nuqta qo'shish</button>
          <button class="back-btn" id="closedPathBtn" style="font-size:0.84rem;">🔁 Yopiq yo'l ($s=0$)</button>
          <button class="back-btn" id="resetPathBtn" style="font-size:0.84rem;">🔄 Tozalash</button>
        </div>

        <canvas id="vectorCanvas" style="width:100%; height:260px; display:block; border-radius:10px; background:#0b1221; border:1px solid var(--border); touch-action:none; cursor:grab;"></canvas>

        <div id="vectorMathReadout" style="margin-top:10px; padding:10px 12px; border-radius:8px; background:var(--bg-card); border-left:3px solid #10b981; font-size:0.88rem; line-height:1.7;"></div>
      </div>
    </div>
    <!-- 5. TEZKOR MANTIQIY SAVOL-JAVOBLAR -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>5. Tezkor savol-javob: Mantiqiy tahlil</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">Savol ustiga bosing va javobini tekshiring:</p>

      <details style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:10px 14px; margin-bottom:8px; cursor:pointer;">
        <summary style="font-weight:600; color:var(--accent);">1. Jism harakatda bo'lsa-yu, lekin ko'chishi nolga teng bo'lishi mumkinmi?</summary>
        <p style="margin-top:8px; font-size:0.92rem;"><strong>Ha, albatta.</strong> Agar jism harakatni boshlagan nuqtasiga qaytib kelsa (yopiq traektoriya, masalan, Yerning Quyosh atrofida 1 yillik aylanishi yoki stadion yugurish yo'lagidan 1 marta to'liq aylanib chiqish), boshlang'ich va oxirgi koordinatalar ustma-ust tushadi ($x_2 = x_1, y_2 = y_1$). Natijada $s = 0$, ammo bosib o'tilgan yo'l $l > 0$ bo'ladi.</p>
      </details>

      <details style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:10px 14px; margin-bottom:8px; cursor:pointer;">
        <summary style="font-weight:600; color:var(--accent);">2. Harakatlanayotgan jismning bosib o'tgan yo'li nolga teng bo'lishi mumkinmi?</summary>
        <p style="margin-top:8px; font-size:0.92rem;"><strong>Yo'q, hech qachon.</strong> Tanlangan sanoq sistemasida jism biror masofaga siljigan bo'lsa, traektoriya uzunligi musbat ($l > 0$) bo'ladi. Yo'l faqat jism shu sanoq sistemasida mutlaqo tinch turgandagina $l = 0$ ga teng.</p>
      </details>

      <details style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:10px 14px; margin-bottom:8px; cursor:pointer;">
        <summary style="font-weight:600; color:var(--accent);">3. Nima uchun uchish-qo'nish maydoniga yaqinlashayotgan samolyotni moddiy nuqta deb bo'lmaydi?</summary>
        <p style="margin-top:8px; font-size:0.92rem;">Chunki samolyotning uzunligi ($40\text{–}70\text{ m}$) va qanot kengligi qo'nish yo'lagining eni hamda g'ildiraklarning yerga tegish burchagini hisoblashda hal qiluvchi ahamiyatga ega. Ammo Toshkentdan Londonga uchish vaqtini hisoblaganda samolyot o'lchami $5\,300\text{ km}$ masofaga nisbatan juda kichik — bu holda u moddiy nuqta.</p>
      </details>

      <details style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:10px 14px; cursor:pointer;">
        <summary style="font-weight:600; color:var(--accent);">4. Ko'chish proyeksiyasi manfiy bo'lishi mumkinmi? Buning fizik ma'nosi nima?</summary>
        <p style="margin-top:8px; font-size:0.92rem;"><strong>Ha, mumkin.</strong> Agar jism tanlangan koordinata o'qining musbat yo'nalishiga qarama-qarshi tomonga harakatlansa ($x_2 < x_1$), ko'chish proyeksiyasi $s_x = x_2 - x_1 < 0$ (manfiy) chiqadi. Ammo ko'chishning moduli ($s$) va bosib o'tilgan yo'l ($l$) doimo musbat yoki nolga teng.</p>
      </details>
    </div>

    <!-- 6. MASALALAR (OSONDAN QIYINGA — 4 DARAJADA) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>6. Masalalar: Osondan qiyinga (4 darajada)</h3>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:10px;">
        <span style="background:#10b981; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">1-daraja • Oson</span>
        <p style="margin-top:6px;"><strong>Masala:</strong> Koptok $3\text{ m}$ balandlikdan vertikal pastga tashlandi va yerga urilib, $1\text{ m}$ balandlikka sakrab chiqdi, shu yerda ushlab olindi. Koptokning bosib o'tgan yo'lini ($l$) va ko'chish modulini ($s$) toping.</p>
        <details style="margin-top:6px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.9rem;">
            • <strong>Yo'l:</strong> $l = 3 + 1 = 4\text{ m}$.<br>
            • <strong>Ko'chish:</strong> $s = |y_2 - y_1| = |1 - 3| = 2\text{ m}$.
          </p>
        </details>
      </div>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:10px;">
        <span style="background:#3b82f6; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">2-daraja • O'rta</span>
        <p style="margin-top:6px;"><strong>Masala:</strong> Sayyoh avval sharqqa tomon $600\text{ m}$, so'ngra shimolga burilib $800\text{ m}$ yurdi. Sayyohning bosib o'tgan yo'li ko'chish modulidan necha metrga ortiq?</p>
        <details style="margin-top:6px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.9rem;">
            • <strong>Yo'l:</strong> $l = 600 + 800 = 1\,400\text{ m}$.<br>
            • <strong>Ko'chish:</strong> $s = \sqrt{600^2 + 800^2} = 1\,000\text{ m}$.<br>
            • <strong>Farq:</strong> $l - s = 1\,400 - 1\,000 = 400\text{ m}$.
          </p>
        </details>
      </div>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:10px;">
        <span style="background:#f59e0b; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">3-daraja • Murakkab</span>
        <p style="margin-top:6px;"><strong>Masala:</strong> Moddiy nuqta radiusi $R = 10\text{ m}$ bo'lgan aylana bo'ylab harakatlanib, aylananing to'rtdan bir qismini ($90^\circ$ yoyni) bosib o'tdi. Nuqtaning bosib o'tgan yo'li va ko'chish modulini toping.</p>
        <details style="margin-top:6px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Matematik yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.9rem;">
            • <strong>Yo'l:</strong> $l = \frac{2\pi R}{4} = \frac{\pi R}{2} \approx 15{,}7\text{ m}$.<br>
            • <strong>Ko'chish:</strong> $s = \sqrt{R^2 + R^2} = R\sqrt{2} \approx 14{,}1\text{ m}$.
          </p>
        </details>
      </div>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:12px;">
        <span style="background:#ef4444; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">4-daraja • Chuqurlashtirilgan</span>
        <p style="margin-top:6px;"><strong>Masala:</strong> Radiusi $R = 2\text{ m}$ bo'lgan g'ildirak gorizontal yo'lda sirpanmasdan yarim aylanish ($180^\circ$) qildi. G'ildirakning dastlab yerga tegib turgan $A$ nuqtasining ko'chish modulini ($s$) toping.</p>
        <details style="margin-top:6px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Matematik yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.9rem;">
            • Gorizontal siljish: $s_x = \pi R$, vertikal siljish: $s_y = 2R$.<br>
            • Ko'chish moduli: $s = \sqrt{(\pi R)^2 + (2R)^2} = R\sqrt{\pi^2 + 4} \approx 7{,}45\text{ m}$.
          </p>
        </details>
      </div>
    </div>

    <!-- 7. INTERAKTIV TESTLAR (8 TA SAVOL) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>7. Bilimingizni tekshiring: Test savollari</h3>
      <div id="topicQuizBox"></div>
      <button class="back-btn" id="checkTopicQuizBtn" style="margin-top:12px; background:var(--accent); color:#fff;">Natijani tekshirish</button>
      <div id="topicQuizResult" style="margin-top:10px; font-weight:700;"></div>
    </div>

    <!-- 8. FOYDALANILGAN ADABIYOTLAR -->
    <div class="content-box">
      <h3>8. Foydalanilgan adabiyotlar</h3>
      <ul style="margin-left:18px; color:var(--text-muted); font-size:0.9rem; line-height:1.8;">
        <li><strong>Qodirov O., Boydedayev A. va b.</strong> — <em>Fizika (Akademik litsey va kasb-hunar kollejlari uchun darslik)</em>, I qism: Mexanika, Toshkent.</li>
        <li><strong>Turdiyev N.Sh.</strong> — <em>Fizika 6–9-sinf darsliklari</em>, O'zbekiston Respublikasi Xalq ta'limi vazirligi nashri.</li>
        <li><strong>Halliday D., Resnick R., Walker J.</strong> — <em>Fundamentals of Physics (10th Edition)</em>, Chapter 2 & Chapter 4.</li>
        <li><strong>Kalashnikov S.G., Lansberg G.S.</strong> — <em>Elementar fizika kursi</em>, I tom: Mexanika.</li>
      </ul>
    </div>
  `,
  onRender(container) {
    /* 1-INTERAKTIV: TELEFONGA MOSLASHUVCHAN POYEZD VA KUZATUVCHI */
    const relCanvas = container.querySelector("#relativityCanvas");
    const rCtx = relCanvas.getContext("2d");
    const trainSlider = container.querySelector("#trainSpeedSlider");
    const walkerSlider = container.querySelector("#walkerSpeedSlider");
    const trainLabel = container.querySelector("#trainSpeedLabel");
    const walkerLabel = container.querySelector("#walkerSpeedLabel");
    const relReadout = container.querySelector("#relativityReadout");
    const frameBtns = container.querySelectorAll(".frame-btn");

    let activeFrame = "ground";
    let vTrain = 12;
    let vWalkerRel = 3;
    let xTrainWorld = 0;
    let xWalkerRatio = 0.25; // Vagon ichidagi nisbiy o'rni (0.12 dan 0.88 gacha)

    frameBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        activeFrame = btn.getAttribute("data-frame");
        frameBtns.forEach(b => {
          b.style.background = "var(--bg-card)";
          b.style.color = "var(--accent)";
        });
        btn.style.background = "var(--accent)";
        btn.style.color = "#fff";
      });
    });

    trainSlider.addEventListener("input", () => {
      vTrain = Number(trainSlider.value);
      trainLabel.textContent = (vTrain >= 0 ? "+" : "") + vTrain + " m/s";
    });

    walkerSlider.addEventListener("input", () => {
      vWalkerRel = Number(walkerSlider.value);
      walkerLabel.textContent = (vWalkerRel >= 0 ? "+" : "") + vWalkerRel + " m/s";
    });

    function drawMiniArrow(ctx, x, y, vx, color) {
      if (Math.abs(vx) < 0.5) return;
      const len = Math.max(-45, Math.min(45, vx * 2.2));
      const x2 = x + len;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y);
      ctx.stroke();

      const dir = len > 0 ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(x2, y);
      ctx.lineTo(x2 - 7 * dir, y - 4);
      ctx.lineTo(x2 - 7 * dir, y + 4);
      ctx.closePath();
      ctx.fill();
    }

    function drawRelativity() {
      if (!document.body.contains(relCanvas)) return;
      const w = relCanvas.clientWidth || 340;
      const h = relCanvas.clientHeight || 190;
      if (relCanvas.width !== w) relCanvas.width = w;
      if (relCanvas.height !== h) relCanvas.height = h;

      // Vagon uzunligi ekran eniga qarab moslashadi (hech qachon ekrandan chiqmaydi)
      const trainLen = Math.max(120, Math.min(210, w * 0.46));

      xTrainWorld += vTrain * 0.09;
      xWalkerRatio += (vWalkerRel * 0.09) / trainLen;
      if (xWalkerRatio > 0.85) xWalkerRatio = 0.15;
      if (xWalkerRatio < 0.15) xWalkerRatio = 0.85;

      const xWalkerWorld = xTrainWorld + xWalkerRatio * trainLen;

      // Kamera markazi
      let camX = 0;
      if (activeFrame === "train") camX = xTrainWorld + trainLen * 0.5 - w * 0.5;
      else if (activeFrame === "walker") camX = xWalkerWorld - w * 0.5;
      else camX = xTrainWorld + trainLen * 0.5 - w * 0.5;

      rCtx.clearRect(0, 0, w, h);

      // Rels chizig'i
      rCtx.strokeStyle = "#334155";
      rCtx.lineWidth = 3;
      rCtx.beginPath();
      rCtx.moveTo(0, 152);
      rCtx.lineTo(w, 152);
      rCtx.stroke();

      // Yerdagi ustunlar va daraxtlar
      const step = Math.max(95, w * 0.35);
      const firstObj = Math.floor((camX - step) / step) * step;
      for (let gx = firstObj; gx < camX + w + step; gx += step) {
        const sx = gx - camX;
        rCtx.fillStyle = "#1e293b";
        rCtx.fillRect(sx - 2, 118, 4, 34);
        rCtx.fillStyle = "#10b981";
        rCtx.beginPath();
        rCtx.arc(sx, 112, 12, 0, Math.PI * 2);
        rCtx.fill();
      }

      // Perrondagi kuzatuvchi
      const obsWorld = Math.round(xTrainWorld / (step * 3)) * (step * 3) + step;
      const obsX = obsWorld - camX;
      rCtx.font = "22px sans-serif";
      rCtx.fillText("🧍", obsX - 10, 148);
      rCtx.fillStyle = "#94a3b8";
      rCtx.font = "11px sans-serif";
      rCtx.fillText("Yer", obsX - 8, 170);

      // Poyezd vagoni
      const tScreenX = xTrainWorld - camX;
      rCtx.fillStyle = "rgba(59, 130, 246, 0.22)";
      rCtx.strokeStyle = "#3b82f6";
      rCtx.lineWidth = 2;
      rCtx.beginPath();
      rCtx.roundRect(tScreenX, 82, trainLen, 58, 8);
      rCtx.fill();
      rCtx.stroke();

      // Vagon g'ildiraklari
      rCtx.fillStyle = "#64748b";
      rCtx.beginPath();
      rCtx.arc(tScreenX + 24, 146, 5, 0, Math.PI * 2);
      rCtx.arc(tScreenX + trainLen - 24, 146, 5, 0, Math.PI * 2);
      rCtx.fill();

      // Vagon ichidagi yo'lovchi
      const wScreenX = xWalkerWorld - camX;
      rCtx.font = "22px sans-serif";
      rCtx.fillText("🚶", wScreenX - 11, 132);

      // Nisbiy tezliklar va vektor strelkalari
      const vGroundRel = activeFrame === "ground" ? 0 : (activeFrame === "train" ? -vTrain : -(vTrain + vWalkerRel));
      const vTrainRel = activeFrame === "ground" ? vTrain : (activeFrame === "train" ? 0 : -vWalkerRel);
      const vPersonRel = activeFrame === "ground" ? (vTrain + vWalkerRel) : (activeFrame === "train" ? vWalkerRel : 0);

      drawMiniArrow(rCtx, tScreenX + trainLen * 0.5, 68, vTrainRel, "#3b82f6");
      drawMiniArrow(rCtx, wScreenX, 102, vPersonRel, "#10b981");

      relReadout.innerHTML =
        "<strong>Tanlangan kuzatuvchi uchun tezliklar:</strong><br>" +
        "🌍 Yer: <strong>" + vGroundRel + " m/s</strong> &nbsp;|&nbsp; " +
        "🚄 Poyezd: <strong style='color:#3b82f6;'>" + vTrainRel + " m/s</strong> &nbsp;|&nbsp; " +
        "🚶 Yo'lovchi: <strong style='color:#10b981;'>" + vPersonRel + " m/s</strong>";

      requestAnimationFrame(drawRelativity);
    }
    requestAnimationFrame(drawRelativity);
    /* 2-INTERAKTIV: KO'P NUQTALI VA ANIMATSIYALI YO'L VA KO'CHISH SIMULYATORI */
    const vecCanvas = container.querySelector("#vectorCanvas");
    const vCtx = vecCanvas.getContext("2d");
    const vecReadout = container.querySelector("#vectorMathReadout");

    const colors = ["#3b82f6", "#f59e0b", "#a855f7", "#ec4899", "#06b6d4", "#10b981"];
    let pathPts = [
      { x: -4, y: -2 },
      { x: -1, y: 3 },
      { x: 3, y: 1 }
    ];
    let draggingIdx = -1;
    let animProgress = 0; // 0 dan totalLength gacha
    let isAnimating = false;

    function getSegLengths() {
      const segs = [];
      let total = 0;
      for (let i = 0; i < pathPts.length - 1; i++) {
        const d = Math.hypot(pathPts[i + 1].x - pathPts[i].x, pathPts[i + 1].y - pathPts[i].y);
        segs.push(d);
        total += d;
      }
      return { segs, total };
    }

    container.querySelector("#addPointBtn").addEventListener("click", () => {
      if (pathPts.length >= 6) return;
      isAnimating = false;
      const last = pathPts[pathPts.length - 1];
      const nx = last.x >= 2 ? last.x - 3 : last.x + 2;
      const ny = last.y >= 1 ? last.y - 3 : last.y + 2;
      pathPts.push({ x: nx, y: ny });
      animProgress = getSegLengths().total;
      renderVectorLab();
    });

    container.querySelector("#closedPathBtn").addEventListener("click", () => {
      isAnimating = false;
      pathPts = [
        { x: -3, y: -2 },
        { x: 0, y: 3 },
        { x: 3, y: -1 },
        { x: -3, y: -2 }
      ];
      animProgress = getSegLengths().total;
      renderVectorLab();
    });

    container.querySelector("#resetPathBtn").addEventListener("click", () => {
      isAnimating = false;
      pathPts = [
        { x: -4, y: -2 },
        { x: -1, y: 3 },
        { x: 3, y: 1 }
      ];
      animProgress = getSegLengths().total;
      renderVectorLab();
    });

    container.querySelector("#playPathBtn").addEventListener("click", () => {
      animProgress = 0;
      isAnimating = true;
      runPathAnim();
    });

    function runPathAnim() {
      if (!isAnimating || !document.body.contains(vecCanvas)) return;
      const { total } = getSegLengths();
      animProgress += Math.max(0.06, total * 0.015);
      if (animProgress >= total) {
        animProgress = total;
        isAnimating = false;
      }
      renderVectorLab();
      if (isAnimating) requestAnimationFrame(runPathAnim);
    }

    function toPixel(gx, gy, w, h) {
      const scale = Math.min(w, h) / 10.5;
      return { px: w / 2 + gx * scale, py: h / 2 - gy * scale, scale };
    }

    function toGrid(px, py, w, h) {
      const scale = Math.min(w, h) / 10.5;
      return {
        gx: Math.max(-5, Math.min(5, Math.round((px - w / 2) / scale))),
        gy: Math.max(-4, Math.min(4, Math.round((h / 2 - py) / scale)))
      };
    }

    function drawVecArrow(ctx, x1, y1, x2, y2, color) {
      if (Math.hypot(x2 - x1, y2 - y1) < 5) return;
      const angle = Math.atan2(y2 - y1, x2 - x1);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - 11 * Math.cos(angle - 0.35), y2 - 11 * Math.sin(angle - 0.35));
      ctx.lineTo(x2 - 11 * Math.cos(angle + 0.35), y2 - 11 * Math.sin(angle + 0.35));
      ctx.closePath();
      ctx.fill();
    }

    function renderVectorLab() {
      const w = vecCanvas.clientWidth || 340;
      const h = vecCanvas.clientHeight || 260;
      if (vecCanvas.width !== w) vecCanvas.width = w;
      if (vecCanvas.height !== h) vecCanvas.height = h;

      const { scale } = toPixel(0, 0, w, h);
      vCtx.clearRect(0, 0, w, h);

      // Koordinata to'ri
      vCtx.strokeStyle = "rgba(148, 163, 184, 0.14)";
      vCtx.lineWidth = 1;
      for (let gx = -6; gx <= 6; gx++) {
        const x = w / 2 + gx * scale;
        vCtx.beginPath(); vCtx.moveTo(x, 0); vCtx.lineTo(x, h); vCtx.stroke();
      }
      for (let gy = -5; gy <= 5; gy++) {
        const y = h / 2 - gy * scale;
        vCtx.beginPath(); vCtx.moveTo(0, y); vCtx.lineTo(w, y); vCtx.stroke();
      }

      // O'qlar
      vCtx.strokeStyle = "#475569";
      vCtx.lineWidth = 2;
      vCtx.beginPath();
      vCtx.moveTo(0, h / 2); vCtx.lineTo(w, h / 2);
      vCtx.moveTo(w / 2, 0); vCtx.lineTo(w / 2, h);
      vCtx.stroke();

      // Rejalashtirilgan traektoriya (xira punktir)
      vCtx.save();
      vCtx.setLineDash();
      vCtx.strokeStyle = "rgba(245, 158, 11, 0.35)";
      vCtx.lineWidth = 2;
      vCtx.beginPath();
      pathPts.forEach((pt, idx) => {
        const p = toPixel(pt.x, pt.y, w, h);
        if (idx === 0) vCtx.moveTo(p.px, p.py);
        else vCtx.lineTo(p.px, p.py);
      });
      vCtx.stroke();
      vCtx.restore();

      // Jismning joriy holatini va bosib o'tgan yo'lini hisoblash
      const { segs, total } = getSegLengths();
      let rem = Math.min(animProgress, total);
      let curGx = pathPts[0].x;
      let curGy = pathPts[0].y;

      vCtx.strokeStyle = "#f59e0b";
      vCtx.lineWidth = 3;
      vCtx.beginPath();
      const p0 = toPixel(pathPts[0].x, pathPts[0].y, w, h);
      vCtx.moveTo(p0.px, p0.py);

      for (let i = 0; i < segs.length; i++) {
        const segLen = segs[i];
        const nextPt = pathPts[i + 1];
        if (rem >= segLen && segLen > 0) {
          const pNext = toPixel(nextPt.x, nextPt.y, w, h);
          vCtx.lineTo(pNext.px, pNext.py);
          rem -= segLen;
          curGx = nextPt.x;
          curGy = nextPt.y;
        } else if (segLen > 0) {
          const ratio = rem / segLen;
          curGx = pathPts[i].x + (nextPt.x - pathPts[i].x) * ratio;
          curGy = pathPts[i].y + (nextPt.y - pathPts[i].y) * ratio;
          const pCur = toPixel(curGx, curGy, w, h);
          vCtx.lineTo(pCur.px, pCur.py);
          rem = 0;
          break;
        }
      }
      vCtx.stroke();

      // Ko'chish vektori (Boshlang'ich nuqtadan joriy nuqtagacha)
      const pCur = toPixel(curGx, curGy, w, h);
      drawVecArrow(vCtx, p0.px, p0.py, pCur.px, pCur.py, "#10b981");

      // Harakatlanayotgan jism (oq halqali shar)
      vCtx.fillStyle = "#ffffff";
      vCtx.beginPath();
      vCtx.arc(pCur.px, pCur.py, 6, 0, Math.PI * 2);
      vCtx.fill();

      // Boshqariladigan nuqtalarni chizish
      pathPts.forEach((pt, idx) => {
        const p = toPixel(pt.x, pt.y, w, h);
        const col = idx === 0 ? "#3b82f6" : (idx === pathPts.length - 1 ? "#10b981" : colors[idx % colors.length]);
        vCtx.fillStyle = col;
        vCtx.beginPath();
        vCtx.arc(p.px, p.py, 8, 0, Math.PI * 2);
        vCtx.fill();
        vCtx.strokeStyle = "#fff";
        vCtx.lineWidth = 1.5;
        vCtx.stroke();

        const lbl = idx === 0 ? "A" : (idx === pathPts.length - 1 ? "B" : "M" + idx);
        vCtx.fillStyle = "#f8fafc";
        vCtx.font = "bold 11px sans-serif";
        vCtx.fillText(lbl + "(" + pt.x + ";" + pt.y + ")", p.px + 9, p.py - 7);
      });

      const sx = curGx - pathPts[0].x;
      const sy = curGy - pathPts[0].y;
      const disp = Math.hypot(sx, sy);

      vecReadout.innerHTML =
        "<strong>Jonli hisob-kitob (1 katak = 1 m):</strong><br>" +
        "• <span style='color:#f59e0b;'>Bosib o'tilgan yo'l (l):</span> <strong>" + animProgress.toFixed(2) + " m</strong> (Jami yo'l: " + total.toFixed(2) + " m)<br>" +
        "• <span style='color:#10b981;'>Ko'chish proyeksiyalari:</span> s<sub>x</sub> = " + sx.toFixed(1) + " m, &nbsp; s<sub>y</sub> = " + sy.toFixed(1) + " m<br>" +
        "• <span style='color:#10b981;'>Ko'chish moduli (s = √(s<sub>x</sub>² + s<sub>y</sub>²)):</span> <strong>" + disp.toFixed(2) + " m</strong>";
    }
    function getPointerPos(e) {
      const rect = vecCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches.clientX : e.clientX;
      const clientY = e.touches ? e.touches.clientY : e.clientY;
      return { px: clientX - rect.left, py: clientY - rect.top };
    }

    function onDown(e) {
      const { px, py } = getPointerPos(e);
      const w = vecCanvas.clientWidth;
      const h = vecCanvas.clientHeight;
      for (let i = pathPts.length - 1; i >= 0; i--) {
        const p = toPixel(pathPts[i].x, pathPts[i].y, w, h);
        if (Math.hypot(px - p.px, py - p.py) < 22) {
          draggingIdx = i;
          isAnimating = false;
          vecCanvas.style.cursor = "grabbing";
          break;
        }
      }
    }

    function onMove(e) {
      if (draggingIdx === -1) return;
      const { px, py } = getPointerPos(e);
      const { gx, gy } = toGrid(px, py, vecCanvas.clientWidth, vecCanvas.clientHeight);
      pathPts[draggingIdx].x = gx;
      pathPts[draggingIdx].y = gy;
      animProgress = getSegLengths().total;
      renderVectorLab();
    }

    function onUp() {
      draggingIdx = -1;
      vecCanvas.style.cursor = "grab";
    }

    vecCanvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    vecCanvas.addEventListener("touchstart", onDown, { passive: true });
    vecCanvas.addEventListener("touchmove", onMove, { passive: true });
    vecCanvas.addEventListener("touchend", onUp);

    animProgress = getSegLengths().total;
    renderVectorLab();

    /* 3-INTERAKTIV: 8 TA TEST SAVOLI */
    const quizData = [
      {
        q: "1. Sanoq sistemasi qanday elementlardan tashkil topadi?",
        opts: ["Faqat koordinata o'qlari va soatdan", "Sanoq jismi, koordinatalar sistemasi va soatdan", "Faqat moddiy nuqta va traektoriyadan"],
        ans: 1
      },
      {
        q: "2. Qaysi holda Yer sharini moddiy nuqta deb hisoblab BO'LMAYDI?",
        opts: ["Yerning Quyosh atrofida aylanish davrini hisoblaganda", "Yerning orbitadagi tezligini topganda", "Toshkent va Nyu-Yorkda quyosh chiqish vaqtini solishtirganda"],
        ans: 2
      },
      {
        q: "3. Moddiy nuqta koordinatasi A(2; -1) dan B(5; 3) ga ko'chdi. Ko'chish modulini toping (m).",
        opts: ["5 m", "7 m", "1 m"],
        ans: 0
      },
      {
        q: "4. Poyezd 20 m/s tezlik bilan sharqqa ketmoqda. Yo'lovchi vagonda 2 m/s tezlik bilan g'arbga yurmoqda. Yo'lovchining Yerga nisbatan tezligi qancha?",
        opts: ["22 m/s", "18 m/s", "2 m/s"],
        ans: 1
      },
      {
        q: "5. Bosib o'tilgan yo'l (l) va ko'chish moduli (s) qachon o'zaro teng bo'ladi?",
        opts: ["Aylana bo'ylab harakatda", "To'g'ri chiziq bo'ylab bir tomonga harakatda", "Har qanday tekis harakatda"],
        ans: 1
      },
      {
        q: "6. Quyidagi kattaliklardan qaysi biri skalyar kattalik?",
        opts: ["Ko'chish", "Radius-vektor", "Bosib o'tilgan yo'l"],
        ans: 2
      },
      {
        q: "7. Koptok 4 m balandlikdan tushib, yerga urilgach 1,5 m balandlikka ko'tarildi. Koptokning ko'chish moduli qancha?",
        opts: ["5,5 m", "2,5 m", "1,5 m"],
        ans: 1
      },
      {
        q: "8. Gorizontal tekis uchayotgan samolyotdan tashlangan yukning traektoriyasi Yerdagi kuzatuvchiga qanday shaklda ko'rinadi?",
        opts: ["Vertikal to'g'ri chiziq", "Aylana yoyi", "Parabola"],
        ans: 2
      }
    ];

    const quizBox = container.querySelector("#topicQuizBox");
    quizBox.innerHTML = quizData.map((item, idx) => {
      const optionsHtml = item.opts.map((opt, oIdx) =>
        '<label style="display:block; margin-bottom:4px; cursor:pointer; font-size:0.92rem;">' +
        '<input type="radio" name="tq_' + idx + '" value="' + oIdx + '"> ' + opt +
        '</label>'
      ).join("");

      return '<div style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:12px; margin-bottom:10px;">' +
        '<p style="font-weight:600; margin-bottom:8px;">' + item.q + '</p>' +
        optionsHtml +
        '</div>';
    }).join("");

    container.querySelector("#checkTopicQuizBtn").addEventListener("click", () => {
      let score = 0;
      quizData.forEach((item, idx) => {
        const checked = quizBox.querySelector('input[name="tq_' + idx + '"]:checked');
        if (checked && Number(checked.value) === item.ans) score++;
      });
      const resEl = container.querySelector("#topicQuizResult");
      resEl.style.color = score >= 6 ? "#10b981" : (score >= 4 ? "#f59e0b" : "#ef4444");
      resEl.textContent = "Natija: " + quizData.length + " ta savoldan " + score + " tasi to'g'ri!";
    });
  }
};
