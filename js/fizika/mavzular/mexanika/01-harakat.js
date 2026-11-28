window.CURRENT_TOPIC = {
  headerTitle: "1-bob • Mexanika • 1.1-mavzu",
  content: String.raw`
    <!-- 1-BLOK: HAYOTIY MISOL VA HARAKAT NISBIYLIGI -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>1. Kirish: Nima uchun harakatni mutlaq deb bo'lmaydi?</h3>
      <p>Tasavvur qiling: siz Toshkentdan Samarqandga ketayotgan <strong>"Afrosiyob"</strong> tezyurar poyezdining vagonida o'tiribsiz. Oldingizdagi stol ustida piyola turibdi. Sizning nazaringizda piyola qimirlamayapti — u tinch holatda.</p>
      <p style="margin-top:8px;">Ammo temiryo'l chetida turgan kuzatuvchi uchun bu piyola ham, siz ham soatiga $210\text{ km/soat}$ ($58{,}3\text{ m/s}$) tezlik bilan uchib o'tyapsiz. Quyosh markazida turgan xayoliy kuzatuvchi esa sizni Yerning o'z o'qi va Quyosh atrofidagi aylanishi tufayli sekundiga $30\text{ km}$ ($30\,000\text{ m/s}$) tezlikda harakatlanayotganingizni ko'radi!</p>
      <p style="margin-top:8px;">Xuddi shunday, tungi osmonda bulutlar orasidan suzib ketayotgan Oyga qaraganimizda, gohida Oy bulutlar orasida yugurayotgandek, gohida esa bulutlar Oy oldidan o'tayotgandek tuyuladi. Bu hodisa tabiatning eng asosiy qonuniyatlaridan birini ko'rsatadi.</p>
      <div class="formula-box" style="text-align:left;">
        <strong>Fundamental xulosa (Mexanik harakatning nisbiyligi):</strong><br>
        Tabiatda "mutlaq tinchlik" yoki "mutlaq harakat" mavjud emas. Jismning harakati, tezligi va traektoriyasi faqatgina <em>tanlangan boshqa biror jismga nisbatan</em> aniq ma'noga ega bo'ladi.
      </div>
    </div>

    <!-- 2-BLOK: 1-QO'LDA BOSHQARILADIGAN INTERAKTIV (SANOQ SISTEMASI LABORATORIYASI) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>2. Interaktiv laboratoriya: Kuzatuvchi o'rnini almashtiring</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:12px;">
        <strong>Topshiriq:</strong> Pastdagi tugmalar orqali <em>"Kuzatuvchi kamerasi"</em>ni Yer (perron), Poyezd yoki Vagon ichida yurayotgan Yo'lovchiga o'tkazing. Slaydlar yordamida poyezd va yo'lovchi tezligini qo'lda o'zgartirib, nisbiy tezliklar qanday o'zgarishini kuzating.
      </p>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:14px; padding:14px;">
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
          <button class="back-btn frame-btn" data-frame="ground" style="background:var(--accent); color:#fff;">🌍 Sanoq jismi: Yer (Perron)</button>
          <button class="back-btn frame-btn" data-frame="train">🚄 Sanoq jismi: Poyezd</button>
          <button class="back-btn frame-btn" data-frame="walker">🚶 Sanoq jismi: Yo'lovchi</button>
        </div>

        <canvas id="relativityCanvas" style="width:100%; height:210px; display:block; border-radius:10px; background:#090f1d; border:1px solid var(--border);"></canvas>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-top:12px;">
          <div style="background:var(--bg-card); padding:10px; border-radius:10px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
              <span>🚄 Poyezd tezligi ($v_1$):</span>
              <strong id="trainSpeedLabel" style="color:var(--accent);">+15 m/s</strong>
            </div>
            <input type="range" id="trainSpeedSlider" min="-25" max="25" value="15" style="width:100%;">
          </div>

          <div style="background:var(--bg-card); padding:10px; border-radius:10px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
              <span>🚶 Yo'lovchi tezligi (vagonga nisbatan, $v_2$):</span>
              <strong id="walkerSpeedLabel" style="color:#10b981;">+4 m/s</strong>
            </div>
            <input type="range" id="walkerSpeedSlider" min="-10" max="10" value="4" style="width:100%;">
          </div>
        </div>

        <div id="relativityReadout" style="margin-top:12px; padding:10px 12px; border-radius:10px; background:var(--bg-card); border-left:4px solid var(--accent); font-size:0.9rem;"></div>
      </div>
    </div>
    <!-- 3-BLOK: CHUQUR NAZARIY ASOS VA SANOQ SISTEMASI -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>3. Chuqur nazariya: Mexanik harakat, Moddiy nuqta va Sanoq sistemasi</h3>
      
      <p><strong>Mexanik harakat</strong> — vaqt o'tishi bilan jismning (yoki uning ayrim qismlarining) fazodagi vaziyatining boshqa jismlarga nisbatan o'zgarishiga aytiladi. Mexanikaning asosiy vazifasi — har qanday $t$ vaqt momentida jismning fazodagi vaziyatini (koordinatalarini) aniqlashdan iborat.</p>
      
      <p style="margin-top:10px;"><strong>Moddiy nuqta (ideal fizik model):</strong> O'rganilayotgan masala shartlarida o'lchamlari va shaklini hisobga olmaslik mumkin bo'lgan, ammo massaga ega bo'lgan jismga <em>moddiy nuqta</em> deyiladi. Bunda jismning butun massasi bitta geometrik nuqtaga jamlangan deb qaraladi.</p>
      <ul style="margin:8px 0 12px 20px; color:var(--text-muted); line-height:1.7;">
        <li><strong>Qachon moddiy nuqta deb olish mumkin?</strong> Yer Quyosh atrofida aylanayotganda Yer radiusi ($R \approx 6\,400\text{ km}$) orbitaning o'rtacha radiusidan ($r \approx 150\,000\,000\text{ km}$) qariyb $23\,400$ marta kichik — demak, Yerning orbita bo'ylab harakatini o'rganishda uni moddiy nuqta deb olish mumkin.</li>
        <li><strong>Qachon mumkin emas?</strong> Xuddi shu Yer o'z o'qi atrofida aylanib, kun va tun almashishini tushuntirayotganimizda yoki poyezd ko'prikdan o'tayotganda uning uzunligini hisobga olish shart! Shuningdek, jismning aylanma harakatini o'rganishda uni moddiy nuqta deb bo'lmaydi.</li>
        <li><strong>Ilgarilanma harakat qoidasi:</strong> Agar qattiq jism <em>ilgarilanma harakat</em> qilsa (ya'ni jismda o'tkazilgan har qanday to'g'ri chiziq harakat davomida o'z-o'ziga parallel qolsa), uning barcha nuqtalari bir xil harakatlanadi va bitta nuqtasining (masalan, massa markazining) harakatini o'rganish kifoya.</li>
      </ul>

      <p><strong>Sanoq sistemasi:</strong> Jismning vaziyatini matematik jihatdan aniq belgilash uchun uchta elementning birlashmasi zarur:</p>
      <div class="formula-box" style="text-align:left;">
        $$\text{Sanoq sistemasi} = \text{Sanoq jismi} + \text{Koordinatalar sistemasi } (Oxyz) + \text{Vaqt o'lchagich (Soat)}$$
      </div>
      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7;">
        <strong>Muhim farq:</strong> <em>Sanoq jismi</em> — bu real fizik obyekt (masalan, Yer, daraxt, stansiya binosi). <em>Sanoq sistemasi</em> esa shu jismga mahkamlangan matematik koordinata o'qlari va sinxronlangan soatlar majmuasidir. Masalaning murakkabligiga qarab 1 o'lchovli ($Ox$ — to'g'ri chiziq), 2 o'lchovli ($Oxy$ — tekislik) yoki 3 o'lchovli ($Oxyz$ — fazo) Dekart koordinatalar sistemasi tanlanadi.
      </p>
    </div>
    <!-- 4-BLOK: TRAEKTORIYA, YO'L VA KO'CHISH (MATEMATIK KELTIRIB CHIQARISH) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>4. Traektoriya, Yo'l va Ko'chish: Fizika va Matematika birligi</h3>

      <p><strong>1. Traektoriya:</strong> Moddiy nuqtaning tanlangan sanoq sistemasida harakat davomida fazoda chizgan uzluksiz chizig'iga <em>traektoriya</em> deyiladi. Shakliga ko'ra harakat <strong>to'g'ri chiziqli</strong> va <strong>egri chiziqli</strong> bo'ladi. Matematikada traektoriya tenglamasi vaqt $t$ parametrini yo'qotish orqali $y = f(x)$ ko'rinishida yoziladi.</p>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;">
        <strong>Traektoriyaning nisbiyligi:</strong> Traektoriya shakli ham tanlangan sanoq sistemasiga bog'liq! Masalan, gorizontal tekis uchib ketayotgan samolyotdan tashlangan yuk uchuvchiga vertikal to'g'ri chiziq bo'lib ko'rinsa, Yerdagi kuzatuvchiga parabola shaklida ko'rinadi. Xuddi shunday, aylanayotgan g'ildirak chetidagi nuqta velosipedchiga aylana chizayotgandek, yo'l chetidagi kuzatuvchiga esa sikloida (egri chiziq) chizayotgandek ko'rinadi.
      </p>

      <p style="margin-top:12px;"><strong>2. Bosib o'tilgan yo'l ($l$ yoki $s_{\text{yo'l}}$):</strong> Traektoriyaning vaqt oralig'ida bosib o'tilgan qismining haqiqiy uzunligi. Yo'l — <strong>skalyar kattalik</strong> (faqat son qiymatiga ega, yo'nalishi yo'q). Harakat davomida yo'l hech qachon kamaymaydi va manfiy bo'lmaydi ($l \ge 0$). Xalqaro birliklar sistemasida (SI) asosiy birligi — <strong>metr ($\text{m}$)</strong>.</p>

      <p style="margin-top:12px;"><strong>3. Ko'chish vektori ($\vec{s}$ yoki $\Delta \vec{r}$):</strong> Jismning boshlang'ich vaziyatidan oxirgi vaziyatiga yo'nalgan to'g'ri chiziqli kesma (vektor). Ko'chish — <strong>vektor kattalik</strong> (ham son qiymatga, ham yo'nalishga ega).</p>

      <div class="formula-box" style="text-align:left; line-height:1.85;">
        <strong>Matematik keltirib chiqarish (Radius-vektor va proyeksiyalar usuli):</strong><br>
        1) Koordinata boshidan jismning boshlang'ich $A(x_1; y_1)$ nuqtasiga o'tkazilgan radius-vektor: $\vec{r}_1 = x_1\vec{i} + y_1\vec{j}$<br>
        2) Oxirgi $B(x_2; y_2)$ nuqtaga o'tkazilgan radius-vektor: $\vec{r}_2 = x_2\vec{i} + y_2\vec{j}$ (bu yerda $\vec{i}, \vec{j}$ — koordinata o'qlarining birlik vektorlari).<br>
        3) Vektorlarni ayirish qoidasiga ko'ra ko'chish vektori:<br>
        $$\vec{s} = \Delta \vec{r} = \vec{r}_2 - \vec{r}_1 = (x_2 - x_1)\vec{i} + (y_2 - y_1)\vec{j}$$
        4) Ko'chish vektorining koordinata o'qlaridagi proyeksiyalari: $s_x = x_2 - x_1$ &nbsp;va&nbsp; $s_y = y_2 - y_1$ (proyeksiyalar musbat, manfiy yoki nol bo'lishi mumkin!).<br>
        5) To'g'ri burchakli uchburchakda Pifagor teoremasiga ko'ra ko'chish moduli (uzunligi):<br>
        $$|\vec{s}| = s = \sqrt{s_x^2 + s_y^2} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
        <em>(3 o'lchovli fazoda: $s = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$)</em>
      </div>

      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7;">
        <strong>Fundamental tengsizlik:</strong> Har qanday harakatda bosib o'tilgan yo'l ko'chish modulidan katta yoki unga teng bo'ladi: $l \ge |\vec{s}|$. Ular faqat bitta holda — jism <em>to'g'ri chiziq bo'ylab yo'nalishini o'zgartirmasdan</em> harakatlangandagina o'zaro teng ($l = |\vec{s}|$) bo'ladi.
      </p>
    </div>
    <!-- 5-BLOK: 2-QO'LDA BOSHQARILADIGAN INTERAKTIV (KOORDINATA TEKISLIGIDA SUDRASH) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>5. Qo'lda boshqariladigan laboratoriya: Yo'l va Ko'chish konstruktori</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">
        <strong>Qo'llanma:</strong> Koordinata to'ridagi <strong style="color:#3b82f6;">A (Boshlang'ich)</strong>, <strong style="color:#f59e0b;">M (Burilish nuqtasi)</strong> va <strong style="color:#10b981;">B (Oxirgi)</strong> nuqtalarni barmoq yoki sichqoncha bilan ushlab xohlagan joyga sudrang! Tizim Pifagor teoremasi asosida real vaqtda hisob-kitob qiladi.
      </p>

      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:14px; padding:12px;">
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
          <button class="back-btn" id="resetPathBtn">🔄 Boshlang'ich holat</button>
          <button class="back-btn" id="straightPathBtn">📏 To'g'ri chiziqli qilish ($l = s$)</button>
          <button class="back-btn" id="closedPathBtn">🔁 Yopiq traektoriya ($s = 0$)</button>
        </div>

        <canvas id="vectorCanvas" style="width:100%; height:270px; display:block; border-radius:10px; background:#090f1d; border:1px solid var(--border); touch-action:none; cursor:grab;"></canvas>

        <div id="vectorMathReadout" style="margin-top:12px; padding:12px; border-radius:10px; background:var(--bg-card); border-left:4px solid #10b981; font-size:0.9rem; line-height:1.7;"></div>
      </div>
    </div>

    <!-- 6-BLOK: KONSEPTUAL SAVOL-JAVOB (MANTIQIY TAHLIL) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>6. Tezkor savol-javob: Mantiqiy tahlil</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;">Savol ustiga bosing va javobini tekshiring:</p>

      <details style="background:var(--bg-main); border:1px solid var(--border); border-radius:10px; padding:10px 14px; margin-bottom:8px; cursor:pointer;">
        <summary style="font-weight:600; color:var(--accent);">1. Jism harakatda bo'lsa-yu, lekin ko'chishi nolga teng bo'lishi mumkinmi?</summary>
        <p style="margin-top:8px; font-size:0.92rem;"><strong>Ha, albatta.</strong> Agar jism harakatni boshlagan nuqtasiga qaytib kelsa (yopiq traektoriya, masalan, Yerning Quyosh atrofida 1 yillik aylanishi yoki stadion yugurish yo'lagidan 1 marta to'liq aylanib chiqish), boshlang'ich va oxirgi koordinatalar ustma-ust tushadi ($x_2 = x_1, y_2 = y_1$). Natijada $\vec{s} = 0$, ammo bosib o'tilgan yo'l $l > 0$ bo'ladi.</p>
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
        <p style="margin-top:8px; font-size:0.92rem;"><strong>Ha, mumkin.</strong> Agar jism tanlangan koordinata o'qining musbat yo'nalishiga qarama-qarshi tomonga harakatlansa ($x_2 < x_1$), ko'chish proyeksiyasi $s_x = x_2 - x_1 < 0$ (manfiy) chiqadi. Masalan, yuqoriga yo'nalgan $Oy$ o'qida pastga tushayotgan jismning ko'chish proyeksiyasi manfiydir. Ammo ko'chishning moduli ($|\vec{s}|$) va bosib o'tilgan yo'l ($l$) doimo musbat yoki nolga teng.</p>
      </details>
    </div>
    <!-- 7-BLOK: MASALALAR (OSONDAN QIYINGA — 4 DARAJADA) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>7. Masalalar: Osondan qiyinga (4 darajada)</h3>

      <!-- 1-masala: Oson -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:12px;">
        <span style="background:#10b981; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">1-daraja • Oson</span>
        <p style="margin-top:8px;"><strong>Masala:</strong> Koptok $3\text{ m}$ balandlikdan vertikal pastga tashlandi va yerga urilib, $1\text{ m}$ balandlikka sakrab chiqdi, shu yerda ushlab olindi. Koptokning bosib o'tgan yo'lini ($l$) va ko'chish modulini ($s$) toping.</p>
        <details style="margin-top:8px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.92rem;">
            • <strong>Yo'l:</strong> Pastga $3\text{ m}$ + yuqoriga $1\text{ m}$ $\Rightarrow l = 3 + 1 = 4\text{ m}$.<br>
            • <strong>Ko'chish:</strong> Boshlang'ich nuqta $y_1 = 3\text{ m}$, oxirgi nuqta $y_2 = 1\text{ m}$. Ko'chish moduli: $s = |y_2 - y_1| = |1 - 3| = 2\text{ m}$ (pastga yo'nalgan).
          </p>
        </details>
      </div>

      <!-- 2-masala: O'rta -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:12px;">
        <span style="background:#3b82f6; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">2-daraja • O'rta</span>
        <p style="margin-top:8px;"><strong>Masala:</strong> Sayyoh avval sharqqa tomon $600\text{ m}$, so'ngra shimolga burilib $800\text{ m}$ yurdi. Sayyohning bosib o'tgan yo'li ko'chish modulidan necha metrga ortiq?</p>
        <details style="margin-top:8px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.92rem;">
            • <strong>Yo'l:</strong> $l = 600 + 800 = 1\,400\text{ m}$.<br>
            • <strong>Ko'chish:</strong> Sharq va shimol o'zaro $90^\circ$ burchak tashkil qiladi. Pifagor teoremasiga ko'ra: $s = \sqrt{600^2 + 800^2} = \sqrt{360\,000 + 640\,000} = 1\,000\text{ m}$.<br>
            • <strong>Farq:</strong> $\Delta = l - s = 1\,400 - 1\,000 = 400\text{ m}$.
          </p>
        </details>
      </div>

      <!-- 3-masala: Murakkab -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:12px;">
        <span style="background:#f59e0b; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">3-daraja • Murakkab</span>
        <p style="margin-top:8px;"><strong>Masala:</strong> Moddiy nuqta radiusi $R = 10\text{ m}$ bo'lgan aylana bo'ylab harakatlanib, aylananing to'rtdan bir qismini ($90^\circ$ yoyni) bosib o'tdi. Nuqtaning bosib o'tgan yo'li va ko'chish modulini toping.</p>
        <details style="margin-top:8px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Matematik yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.92rem;">
            • <strong>Yo'l:</strong> To'liq aylana uzunligi $L = 2\pi R$. Aylananing $\frac{1}{4}$ qismi uchun: $l = \frac{2\pi R}{4} = \frac{\pi R}{2} \approx \frac{3{,}14 \cdot 10}{2} = 15{,}7\text{ m}$.<br>
            • <strong>Ko'chish:</strong> Aylana markazidan boshlang'ich va oxirgi nuqtalarga o'tkazilgan radiuslar o'zaro $90^\circ$ burchak hosil qiladi. Ko'chish vektori teng yonli to'g'ri burchakli uchburchakning gipotenuzasiga teng: $s = \sqrt{R^2 + R^2} = R\sqrt{2} \approx 10 \cdot 1{,}41 = 14{,}1\text{ m}$.
          </p>
        </details>
      </div>

      <!-- 4-masala: Qiyin (Olimpiada) -->
      <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:14px;">
        <span style="background:#ef4444; color:#fff; padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">4-daraja • Chuqurlashtirilgan</span>
        <p style="margin-top:8px;"><strong>Masala:</strong> Radiusi $R = 2\text{ m}$ bo'lgan g'ildirak gorizontal yo'lda sirpanmasdan yarim aylanish ($180^\circ$) qildi. G'ildirakning dastlab yerga tegib turgan $A$ nuqtasining ko'chish modulini ($s$) toping.</p>
        <details style="margin-top:8px; cursor:pointer;">
          <summary style="color:var(--accent); font-weight:600;">Matematik yechimni ko'rish</summary>
          <p style="margin-top:6px; font-size:0.92rem;">
            • Yarim aylanishda g'ildirak markazi gorizontal yo'nalishda yarim aylana uzunligiga teng masofaga siljiydi: $s_x = \pi R$.<br>
            • $A$ nuqta esa eng pastki nuqtadan g'ildirakning eng yuqori nuqtasiga chiqadi, ya'ni vertikal siljish diametrga teng: $s_y = 2R$.<br>
            • Ko'chish moduli: $s = \sqrt{s_x^2 + s_y^2} = \sqrt{(\pi R)^2 + (2R)^2} = R\sqrt{\pi^2 + 4} \approx 2 \cdot \sqrt{9{,}87 + 4} \approx 7{,}45\text{ m}$.
          </p>
        </details>
      </div>
    </div>

    <!-- 8-BLOK: INTERAKTIV TESTLAR (8 TA SAVOL) -->
    <div class="content-box" style="margin-bottom:16px;">
      <h3>8. Bilimingizni tekshiring: Interaktiv test</h3>
      <div id="topicQuizBox"></div>
      <button class="back-btn" id="checkTopicQuizBtn" style="margin-top:12px; background:var(--accent); color:#fff;">Natijani tekshirish</button>
      <div id="topicQuizResult" style="margin-top:10px; font-weight:700;"></div>
    </div>

    <!-- 9-BLOK: FOYDALANILGAN ADABIYOTLAR -->
    <div class="content-box">
      <h3>9. Foydalanilgan adabiyotlar</h3>
      <ul style="margin-left:18px; color:var(--text-muted); font-size:0.9rem; line-height:1.8;">
        <li><strong>Qodirov O., Boydedayev A. va b.</strong> — <em>Fizika (Akademik litsey va kasb-hunar kollejlari uchun darslik)</em>, I qism: Mexanika, Toshkent.</li>
        <li><strong>Turdiyev N.Sh.</strong> — <em>Fizika 6–9-sinf darsliklari</em>, O'zbekiston Respublikasi Xalq ta'limi vazirligi nashri.</li>
        <li><strong>Halliday D., Resnick R., Walker J.</strong> — <em>Fundamentals of Physics (10th Edition)</em>, Chapter 2: Motion Along a Straight Line & Chapter 4: Motion in Two and Three Dimensions.</li>
        <li><strong>Kalashnikov S.G., Lansberg G.S.</strong> — <em>Elementar fizika kursi</em>, I tom: Mexanika, Issiqlik va Molekulyar fizika.</li>
      </ul>
    </div>
  `,
  onRender(container) {
    /* 1-INTERAKTIV: SANOQ SISTEMASI VA NISBIYLIK SIMULYATORI */
    const relCanvas = container.querySelector("#relativityCanvas");
    const rCtx = relCanvas.getContext("2d");
    const trainSlider = container.querySelector("#trainSpeedSlider");
    const walkerSlider = container.querySelector("#walkerSpeedSlider");
    const trainLabel = container.querySelector("#trainSpeedLabel");
    const walkerLabel = container.querySelector("#walkerSpeedLabel");
    const relReadout = container.querySelector("#relativityReadout");
    const frameBtns = container.querySelectorAll(".frame-btn");

    let activeFrame = "ground";
    let vTrain = 15;
    let vWalkerRel = 4;
    let xTrainWorld = 80;
    let xWalkerInTrain = 40;
    const trainLen = 190;

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

    function drawRelativity() {
      if (!document.body.contains(relCanvas)) return;
      const w = relCanvas.clientWidth || 600;
      const h = relCanvas.clientHeight || 210;
      if (relCanvas.width !== w) relCanvas.width = w;
      if (relCanvas.height !== h) relCanvas.height = h;

      xTrainWorld += vTrain * 0.08;
      xWalkerInTrain += vWalkerRel * 0.08;
      if (xWalkerInTrain > trainLen - 24) xWalkerInTrain = 14;
      if (xWalkerInTrain < 14) xWalkerInTrain = trainLen - 24;

      const xWalkerWorld = xTrainWorld + xWalkerInTrain;

      let camX = 0;
      if (activeFrame === "train") camX = xTrainWorld - w * 0.35;
      else if (activeFrame === "walker") camX = xWalkerWorld - w * 0.45;
      else camX = xTrainWorld - w * 0.45;

      rCtx.clearRect(0, 0, w, h);

      rCtx.strokeStyle = "#334155";
      rCtx.lineWidth = 3;
      rCtx.beginPath();
      rCtx.moveTo(0, 165);
      rCtx.lineTo(w, 165);
      rCtx.stroke();

      const step = 140;
      const firstObj = Math.floor(camX / step) * step;
      for (let gx = firstObj; gx < camX + w + step; gx += step) {
        const sx = gx - camX;
        rCtx.fillStyle = "#1e293b";
        rCtx.fillRect(sx - 3, 125, 6, 40);
        rCtx.fillStyle = "#10b981";
        rCtx.beginPath();
        rCtx.arc(sx, 118, 16, 0, Math.PI * 2);
        rCtx.fill();
      }

      const observerScreenX = (Math.floor(xTrainWorld / 600) * 600 + 250) - camX;
      rCtx.font = "24px sans-serif";
      rCtx.fillText("🧍", observerScreenX, 160);
      rCtx.fillStyle = "#94a3b8";
      rCtx.font = "11px sans-serif";
      rCtx.fillText("Yer", observerScreenX + 2, 182);

      const tScreenX = xTrainWorld - camX;
      rCtx.fillStyle = "rgba(59, 130, 246, 0.22)";
      rCtx.strokeStyle = "#3b82f6";
      rCtx.lineWidth = 2;
      rCtx.beginPath();
      rCtx.roundRect(tScreenX, 92, trainLen, 62, 10);
      rCtx.fill();
      rCtx.stroke();

      rCtx.fillStyle = "#64748b";
      rCtx.beginPath();
      rCtx.arc(tScreenX + 35, 159, 6, 0, Math.PI * 2);
      rCtx.arc(tScreenX + trainLen - 35, 159, 6, 0, Math.PI * 2);
      rCtx.fill();

      const wScreenX = xWalkerWorld - camX;
      rCtx.font = "24px sans-serif";
      rCtx.fillText("🚶", wScreenX, 146);

      const vGroundRel = activeFrame === "ground" ? 0 : (activeFrame === "train" ? -vTrain : -(vTrain + vWalkerRel));
      const vTrainRel = activeFrame === "ground" ? vTrain : (activeFrame === "train" ? 0 : -vWalkerRel);
      const vPersonRel = activeFrame === "ground" ? (vTrain + vWalkerRel) : (activeFrame === "train" ? vWalkerRel : 0);

      relReadout.innerHTML =
        "<strong>Tanlangan sanoq sistemasidagi tezliklar:</strong><br>" +
        "🌍 Yer (perron) tezligi: <strong>" + vGroundRel + " m/s</strong> &nbsp;|&nbsp; " +
        "🚄 Poyezd tezligi: <strong>" + vTrainRel + " m/s</strong> &nbsp;|&nbsp; " +
        "🚶 Yo'lovchi tezligi: <strong style='color:#10b981;'>" + vPersonRel + " m/s</strong>";

      requestAnimationFrame(drawRelativity);
    }
    requestAnimationFrame(drawRelativity);
    /* 2-INTERAKTIV: KOORDINATA TEKISLIGIDA SUDRALADIGAN VEKTOR LABORATORIYASI */
    const vecCanvas = container.querySelector("#vectorCanvas");
    const vCtx = vecCanvas.getContext("2d");
    const vecReadout = container.querySelector("#vectorMathReadout");

    let pts = {
      A: { x: -4, y: -2, color: "#3b82f6", label: "A" },
      M: { x: 1, y: 3, color: "#f59e0b", label: "M" },
      B: { x: 4, y: -1, color: "#10b981", label: "B" }
    };
    let draggingKey = null;

    container.querySelector("#resetPathBtn").addEventListener("click", () => {
      pts.A.x = -4; pts.A.y = -2;
      pts.M.x = 1;  pts.M.y = 3;
      pts.B.x = 4;  pts.B.y = -1;
      renderVectorLab();
    });

    container.querySelector("#straightPathBtn").addEventListener("click", () => {
      pts.A.x = -4; pts.A.y = -2;
      pts.M.x = 0;  pts.M.y = 0;
      pts.B.x = 4;  pts.B.y = 2;
      renderVectorLab();
    });

    container.querySelector("#closedPathBtn").addEventListener("click", () => {
      pts.A.x = -3; pts.A.y = -2;
      pts.M.x = 2;  pts.M.y = 3;
      pts.B.x = -3; pts.B.y = -2;
      renderVectorLab();
    });

    function toPixel(gx, gy, w, h) {
      const scale = Math.min(w, h) / 11;
      return { px: w / 2 + gx * scale, py: h / 2 - gy * scale, scale };
    }

    function toGrid(px, py, w, h) {
      const scale = Math.min(w, h) / 11;
      return {
        gx: Math.max(-5, Math.min(5, Math.round((px - w / 2) / scale))),
        gy: Math.max(-4, Math.min(4, Math.round((h / 2 - py) / scale)))
      };
    }

    function drawArrow(ctx, x1, y1, x2, y2, color) {
      const dist = Math.hypot(x2 - x1, y2 - y1);
      if (dist < 4) return;
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
      const w = vecCanvas.clientWidth || 600;
      const h = vecCanvas.clientHeight || 270;
      if (vecCanvas.width !== w) vecCanvas.width = w;
      if (vecCanvas.height !== h) vecCanvas.height = h;

      const { scale } = toPixel(0, 0, w, h);
      vCtx.clearRect(0, 0, w, h);

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

      vCtx.strokeStyle = "#475569";
      vCtx.lineWidth = 2;
      vCtx.beginPath();
      vCtx.moveTo(0, h / 2); vCtx.lineTo(w, h / 2);
      vCtx.moveTo(w / 2, 0); vCtx.lineTo(w / 2, h);
      vCtx.stroke();

      const pA = toPixel(pts.A.x, pts.A.y, w, h);
      const pM = toPixel(pts.M.x, pts.M.y, w, h);
      const pB = toPixel(pts.B.x, pts.B.y, w, h);

      vCtx.save();
      vCtx.setLineDash([6, 5]);
      vCtx.strokeStyle = "#f59e0b";
      vCtx.lineWidth = 2.5;
      vCtx.beginPath();
      vCtx.moveTo(pA.px, pA.py);
      vCtx.lineTo(pM.px, pM.py);
      vCtx.lineTo(pB.px, pB.py);
      vCtx.stroke();
      vCtx.restore();

      vCtx.save();
      vCtx.setLineDash([4, 4]);
      vCtx.strokeStyle = "rgba(16, 185, 129, 0.5)";
      vCtx.lineWidth = 1.5;
      vCtx.beginPath();
      vCtx.moveTo(pA.px, pA.py);
      vCtx.lineTo(pB.px, pA.py);
      vCtx.lineTo(pB.px, pB.py);
      vCtx.stroke();
      vCtx.restore();

      drawArrow(vCtx, pA.px, pA.py, pB.px, pB.py, "#10b981");

      ["M", "A", "B"].forEach(k => {
        const pt = pts[k];
        const p = toPixel(pt.x, pt.y, w, h);
        vCtx.fillStyle = pt.color;
        vCtx.beginPath();
        vCtx.arc(p.px, p.py, 9, 0, Math.PI * 2);
        vCtx.fill();
        vCtx.strokeStyle = "#ffffff";
        vCtx.lineWidth = 2;
        vCtx.stroke();

        vCtx.fillStyle = "#f8fafc";
        vCtx.font = "bold 12px sans-serif";
        vCtx.fillText(pt.label + "(" + pt.x + "; " + pt.y + ")", p.px + 11, p.py - 8);
      });

      const l1 = Math.hypot(pts.M.x - pts.A.x, pts.M.y - pts.A.y);
      const l2 = Math.hypot(pts.B.x - pts.M.x, pts.B.y - pts.M.y);
      const totalPath = l1 + l2;
      const sx = pts.B.x - pts.A.x;
      const sy = pts.B.y - pts.A.y;
      const disp = Math.hypot(sx, sy);

      vecReadout.innerHTML =
        "<strong>Jonli matematik hisob-kitob (1 katak = 1 m):</strong><br>" +
        "• <span style='color:#f59e0b;'>Bosib o'tilgan yo'l (l = AM + MB):</span> <strong>" + l1.toFixed(2) + " + " + l2.toFixed(2) + " = " + totalPath.toFixed(2) + " m</strong><br>" +
        "• <span style='color:#10b981;'>Ko'chish proyeksiyalari:</span> s<sub>x</sub> = " + pts.B.x + " - (" + pts.A.x + ") = " + sx + " m, &nbsp; s<sub>y</sub> = " + pts.B.y + " - (" + pts.A.y + ") = " + sy + " m<br>" +
        "• <span style='color:#10b981;'>Ko'chish moduli (s = √(s<sub>x</sub>² + s<sub>y</sub>²)):</span> √((" + sx + ")² + (" + sy + ")²) = <strong>" + disp.toFixed(2) + " m</strong>";
    }
    function getPointerPos(e) {
      const rect = vecCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { px: clientX - rect.left, py: clientY - rect.top };
    }

    function onDown(e) {
      const { px, py } = getPointerPos(e);
      const w = vecCanvas.clientWidth;
      const h = vecCanvas.clientHeight;
      for (const k of ["B", "A", "M"]) {
        const p = toPixel(pts[k].x, pts[k].y, w, h);
        if (Math.hypot(px - p.px, py - p.py) < 22) {
          draggingKey = k;
          vecCanvas.style.cursor = "grabbing";
          break;
        }
      }
    }

    function onMove(e) {
      if (!draggingKey) return;
      const { px, py } = getPointerPos(e);
      const { gx, gy } = toGrid(px, py, vecCanvas.clientWidth, vecCanvas.clientHeight);
      pts[draggingKey].x = gx;
      pts[draggingKey].y = gy;
      renderVectorLab();
    }

    function onUp() {
      draggingKey = null;
      vecCanvas.style.cursor = "grab";
    }

    vecCanvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    vecCanvas.addEventListener("touchstart", onDown, { passive: true });
    vecCanvas.addEventListener("touchmove", onMove, { passive: true });
    vecCanvas.addEventListener("touchend", onUp);

    renderVectorLab();

    /* 3-INTERAKTIV: 8 TA CHUQUR TEST TIZIMI */
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
