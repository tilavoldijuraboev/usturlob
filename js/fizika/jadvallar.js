const FIZ_JADVALLAR = [
  {
    id: "jad_doimiylar",
    title: "1. Fundamental fizik doimiylar",
    icon: "📌",
    content: String.raw`
      <input type="text" class="table-search" placeholder="Jadval ichidan qidirish...">
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nomi</th>
              <th>Belgisi</th>
              <th>Qiymati</th>
              <th>Birligi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Erkin tushish tezlanishi</td>
              <td>$g$</td>
              <td class="copy-val" data-copy="9.81">$9{,}81$</td>
              <td>$\text{m/s}^2$</td>
            </tr>
            <tr>
              <td>Gravitatsiya doimiysi</td>
              <td>$G$</td>
              <td class="copy-val" data-copy="6.67e-11">$6{,}67 \cdot 10^{-11}$</td>
              <td>$\text{N}\cdot\text{m}^2/\text{kg}^2$</td>
            </tr>
            <tr>
              <td>Vakuumdagi yorug'lik tezligi</td>
              <td>$c$</td>
              <td class="copy-val" data-copy="3e8">$3 \cdot 10^{8}$</td>
              <td>$\text{m/s}$</td>
            </tr>
            <tr>
              <td>Plank doimiysi</td>
              <td>$h$</td>
              <td class="copy-val" data-copy="6.63e-34">$6{,}63 \cdot 10^{-34}$</td>
              <td>$\text{J}\cdot\text{s}$</td>
            </tr>
            <tr>
              <td>Elementar elektr zaryadi</td>
              <td>$e$</td>
              <td class="copy-val" data-copy="1.6e-19">$1{,}6 \cdot 10^{-19}$</td>
              <td>$\text{C}$</td>
            </tr>
            <tr>
              <td>Elektron massasi</td>
              <td>$m_e$</td>
              <td class="copy-val" data-copy="9.11e-31">$9{,}11 \cdot 10^{-31}$</td>
              <td>$\text{kg}$</td>
            </tr>
            <tr>
              <td>Proton massasi</td>
              <td>$m_p$</td>
              <td class="copy-val" data-copy="1.673e-27">$1{,}673 \cdot 10^{-27}$</td>
              <td>$\text{kg}$</td>
            </tr>
            <tr>
              <td>Neytron massasi</td>
              <td>$m_n$</td>
              <td class="copy-val" data-copy="1.675e-27">$1{,}675 \cdot 10^{-27}$</td>
              <td>$\text{kg}$</td>
            </tr>
            <tr>
              <td>Avogadro doimiysi</td>
              <td>$N_A$</td>
              <td class="copy-val" data-copy="6.02e23">$6{,}02 \cdot 10^{23}$</td>
              <td>$\text{mol}^{-1}$</td>
            </tr>
            <tr>
              <td>Bolsman doimiysi</td>
              <td>$k$</td>
              <td class="copy-val" data-copy="1.38e-23">$1{,}38 \cdot 10^{-23}$</td>
              <td>$\text{J/K}$</td>
            </tr>
            <tr>
              <td>Universal gaz doimiysi</td>
              <td>$R$</td>
              <td class="copy-val" data-copy="8.31">$8{,}31$</td>
              <td>$\text{J/(mol}\cdot\text{K)}$</td>
            </tr>
            <tr>
              <td>Elektr doimiysi</td>
              <td>$\varepsilon_0$</td>
              <td class="copy-val" data-copy="8.85e-12">$8{,}85 \cdot 10^{-12}$</td>
              <td>$\text{F/m}$</td>
            </tr>
            <tr>
              <td>Kulon doimiysi</td>
              <td>$k_{el}$</td>
              <td class="copy-val" data-copy="9e9">$9 \cdot 10^{9}$</td>
              <td>$\text{N}\cdot\text{m}^2/\text{C}^2$</td>
            </tr>
            <tr>
              <td>Magnit doimiysi</td>
              <td>$\mu_0$</td>
              <td class="copy-val" data-copy="1.256e-6">$1{,}256 \cdot 10^{-6}$</td>
              <td>$\text{H/m}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "jad_si_birliklar",
    title: "2. SI asosiy birliklari va old qo'shimchalar",
    icon: "📏",
    content: String.raw`
      <input type="text" class="table-search" placeholder="Jadval ichidan qidirish...">
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Kattalik / Old qo'shimcha</th>
              <th>Belgisi</th>
              <th>Birligi / Ko'paytuvchisi</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uzunlik</td><td>$l$</td><td>$\text{metr (m)}$</td></tr>
            <tr><td>Massa</td><td>$m$</td><td>$\text{kilogramm (kg)}$</td></tr>
            <tr><td>Vaqt</td><td>$t$</td><td>$\text{sekund (s)}$</td></tr>
            <tr><td>Tok kuchi</td><td>$I$</td><td>$\text{Amper (A)}$</td></tr>
            <tr><td>Termodinamik harorat</td><td>$T$</td><td>$\text{Kelvin (K)}$</td></tr>
            <tr><td>Modda miqdori</td><td>$\nu$</td><td>$\text{mol (mol)}$</td></tr>
            <tr><td>Yorug'lik kuchi</td><td>$I_v$</td><td>$\text{kandela (cd)}$</td></tr>
            <tr><td>Tera ($\text{T}$)</td><td>$\text{T}$</td><td class="copy-val" data-copy="1e12">$10^{12}$</td></tr>
            <tr><td>Giga ($\text{G}$)</td><td>$\text{G}$</td><td class="copy-val" data-copy="1e9">$10^{9}$</td></tr>
            <tr><td>Mega ($\text{M}$)</td><td>$\text{M}$</td><td class="copy-val" data-copy="1e6">$10^{6}$</td></tr>
            <tr><td>Kilo ($\text{k}$)</td><td>$\text{k}$</td><td class="copy-val" data-copy="1e3">$10^{3}$</td></tr>
            <tr><td>Gekto ($\text{h}$)</td><td>$\text{h}$</td><td class="copy-val" data-copy="1e2">$10^{2}$</td></tr>
            <tr><td>Deka ($\text{da}$)</td><td>$\text{da}$</td><td class="copy-val" data-copy="10">$10^{1}$</td></tr>
            <tr><td>Detsi ($\text{d}$)</td><td>$\text{d}$</td><td class="copy-val" data-copy="1e-1">$10^{-1}$</td></tr>
            <tr><td>Santi ($\text{c}$)</td><td>$\text{c}$</td><td class="copy-val" data-copy="1e-2">$10^{-2}$</td></tr>
            <tr><td>Milli ($\text{m}$)</td><td>$\text{m}$</td><td class="copy-val" data-copy="1e-3">$10^{-3}$</td></tr>
            <tr><td>Mikro ($\mu$)</td><td>$\mu$</td><td class="copy-val" data-copy="1e-6">$10^{-6}$</td></tr>
            <tr><td>Nano ($\text{n}$)</td><td>$\text{n}$</td><td class="copy-val" data-copy="1e-9">$10^{-9}$</td></tr>
            <tr><td>Piko ($\text{p}$)</td><td>$\text{p}$</td><td class="copy-val" data-copy="1e-12">$10^{-12}$</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
  ,
  {
    id: "jad_zichlik",
    title: "3. Moddalarning zichligi (qattiq, suyuq va gazlar)",
    icon: "⚖️",
    content: String.raw`
      <input type="text" class="table-search" placeholder="Modda nomini qidiring (masalan: oltin, suv, havo)...">
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Modda</th>
              <th>Holati</th>
              <th>Zichligi ($\text{kg/m}^3$)</th>
              <th>Zichligi ($\text{g/sm}^3$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Osmiy</td><td>Qattiq</td><td class="copy-val" data-copy="22600">$22\,600$</td><td class="copy-val" data-copy="22.6">$22{,}6$</td></tr>
            <tr><td>Platina</td><td>Qattiq</td><td class="copy-val" data-copy="21500">$21\,500$</td><td class="copy-val" data-copy="21.5">$21{,}5$</td></tr>
            <tr><td>Oltin</td><td>Qattiq</td><td class="copy-val" data-copy="19300">$19\,300$</td><td class="copy-val" data-copy="19.3">$19{,}3$</td></tr>
            <tr><td>Simob</td><td>Suyuq</td><td class="copy-val" data-copy="13600">$13\,600$</td><td class="copy-val" data-copy="13.6">$13{,}6$</td></tr>
            <tr><td>Qo'rg'oshin</td><td>Qattiq</td><td class="copy-val" data-copy="11300">$11\,300$</td><td class="copy-val" data-copy="11.3">$11{,}3$</td></tr>
            <tr><td>Kumush</td><td>Qattiq</td><td class="copy-val" data-copy="10500">$10\,500$</td><td class="copy-val" data-copy="10.5">$10{,}5$</td></tr>
            <tr><td>Mis</td><td>Qattiq</td><td class="copy-val" data-copy="8900">$8\,900$</td><td class="copy-val" data-copy="8.9">$8{,}9$</td></tr>
            <tr><td>Temir / Po'lat</td><td>Qattiq</td><td class="copy-val" data-copy="7800">$7\,800$</td><td class="copy-val" data-copy="7.8">$7{,}8$</td></tr>
            <tr><td>Alyuminiy</td><td>Qattiq</td><td class="copy-val" data-copy="2700">$2\,700$</td><td class="copy-val" data-copy="2.7">$2{,}7$</td></tr>
            <tr><td>Shisha</td><td>Qattiq</td><td class="copy-val" data-copy="2500">$2\,500$</td><td class="copy-val" data-copy="2.5">$2{,}5$</td></tr>
            <tr><td>Beton</td><td>Qattiq</td><td class="copy-val" data-copy="2200">$2\,200$</td><td class="copy-val" data-copy="2.2">$2{,}2$</td></tr>
            <tr><td>Sulfat kislota</td><td>Suyuq</td><td class="copy-val" data-copy="1840">$1\,840$</td><td class="copy-val" data-copy="1.84">$1{,}84$</td></tr>
            <tr><td>Dengiz suvi</td><td>Suyuq</td><td class="copy-val" data-copy="1030">$1\,030$</td><td class="copy-val" data-copy="1.03">$1{,}03$</td></tr>
            <tr><td>Toza suv ($4^\circ\text{C}$)</td><td>Suyuq</td><td class="copy-val" data-copy="1000">$1\,000$</td><td class="copy-val" data-copy="1.0">$1{,}0$</td></tr>
            <tr><td>Muz ($0^\circ\text{C}$)</td><td>Qattiq</td><td class="copy-val" data-copy="900">$900$</td><td class="copy-val" data-copy="0.9">$0{,}9$</td></tr>
            <tr><td>Neft / Kerosin</td><td>Suyuq</td><td class="copy-val" data-copy="800">$800$</td><td class="copy-val" data-copy="0.8">$0{,}8$</td></tr>
            <tr><td>Spirt (etanol)</td><td>Suyuq</td><td class="copy-val" data-copy="790">$790$</td><td class="copy-val" data-copy="0.79">$0{,}79$</td></tr>
            <tr><td>Benzin</td><td>Suyuq</td><td class="copy-val" data-copy="710">$710$</td><td class="copy-val" data-copy="0.71">$0{,}71$</td></tr>
            <tr><td>Quruq yog'och (qarag'ay)</td><td>Qattiq</td><td class="copy-val" data-copy="500">$500$</td><td class="copy-val" data-copy="0.5">$0{,}5$</td></tr>
            <tr><td>Po'kak</td><td>Qattiq</td><td class="copy-val" data-copy="240">$240$</td><td class="copy-val" data-copy="0.24">$0{,}24$</td></tr>
            <tr><td>Karbonat angidrid ($\text{CO}_2$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="1.98">$1{,}98$</td><td class="copy-val" data-copy="0.00198">$0{,}00198$</td></tr>
            <tr><td>Kislorod ($\text{O}_2$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="1.43">$1{,}43$</td><td class="copy-val" data-copy="0.00143">$0{,}00143$</td></tr>
            <tr><td>Havo ($0^\circ\text{C}$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="1.29">$1{,}29$</td><td class="copy-val" data-copy="0.00129">$0{,}00129$</td></tr>
            <tr><td>Azot ($\text{N}_2$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="1.25">$1{,}25$</td><td class="copy-val" data-copy="0.00125">$0{,}00125$</td></tr>
            <tr><td>Geliy ($\text{He}$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="0.18">$0{,}18$</td><td class="copy-val" data-copy="0.00018">$0{,}00018$</td></tr>
            <tr><td>Vodorod ($\text{H}_2$, n.sh.)</td><td>Gaz</td><td class="copy-val" data-copy="0.09">$0{,}09$</td><td class="copy-val" data-copy="0.00009">$0{,}00009$</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
    ,
  {
    id: "jad_issiqlik",
    title: "4. Issiqlik kattaliklari (c, t_erish, t_qaynash)",
    icon: "🔥",
    content: String.raw`
      <input type="text" class="table-search" placeholder="Moddani qidiring (masalan: suv, temir, simob)...">
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Modda</th>
              <th>Solishtirma issiqlik sig'imi $c$ ($\text{J/(kg}\cdot^\circ\text{C)}$)</th>
              <th>Erish harorati ($^\circ\text{C}$)</th>
              <th>Qaynash harorati ($^\circ\text{C}$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Suv</td><td class="copy-val" data-copy="4200">$4\,200$</td><td class="copy-val" data-copy="0">$0$</td><td class="copy-val" data-copy="100">$100$</td></tr>
            <tr><td>Muz</td><td class="copy-val" data-copy="2100">$2\,100$</td><td class="copy-val" data-copy="0">$0$</td><td>—</td></tr>
            <tr><td>Spirt (etanol)</td><td class="copy-val" data-copy="2400">$2\,400$</td><td class="copy-val" data-copy="-114">$-114$</td><td class="copy-val" data-copy="78">$78$</td></tr>
            <tr><td>Kerosin / Neft</td><td class="copy-val" data-copy="2100">$2\,100$</td><td>—</td><td class="copy-val" data-copy="150">$150\text{–}300$</td></tr>
            <tr><td>Alyuminiy</td><td class="copy-val" data-copy="920">$920$</td><td class="copy-val" data-copy="660">$660$</td><td class="copy-val" data-copy="2520">$2\,520$</td></tr>
            <tr><td>Shisha</td><td class="copy-val" data-copy="840">$840$</td><td class="copy-val" data-copy="1000">$\approx 1\,000$</td><td>—</td></tr>
            <tr><td>Temir / Po'lat</td><td class="copy-val" data-copy="460">$460$</td><td class="copy-val" data-copy="1538">$1\,538$</td><td class="copy-val" data-copy="2860">$2\,860$</td></tr>
            <tr><td>Mis</td><td class="copy-val" data-copy="400">$400$</td><td class="copy-val" data-copy="1085">$1\,085$</td><td class="copy-val" data-copy="2560">$2\,560$</td></tr>
            <tr><td>Rux</td><td class="copy-val" data-copy="380">$380$</td><td class="copy-val" data-copy="420">$420$</td><td class="copy-val" data-copy="907">$907$</td></tr>
            <tr><td>Kumush</td><td class="copy-val" data-copy="250">$250$</td><td class="copy-val" data-copy="962">$962$</td><td class="copy-val" data-copy="2160">$2\,160$</td></tr>
            <tr><td>Qalay</td><td class="copy-val" data-copy="230">$230$</td><td class="copy-val" data-copy="232">$232$</td><td class="copy-val" data-copy="2600">$2\,600$</td></tr>
            <tr><td>Simob</td><td class="copy-val" data-copy="140">$140$</td><td class="copy-val" data-copy="-39">$-39$</td><td class="copy-val" data-copy="357">$357$</td></tr>
            <tr><td>Qo'rg'oshin</td><td class="copy-val" data-copy="130">$130$</td><td class="copy-val" data-copy="327">$327$</td><td class="copy-val" data-copy="1750">$1\,750$</td></tr>
            <tr><td>Oltin</td><td class="copy-val" data-copy="130">$130$</td><td class="copy-val" data-copy="1064">$1\,064$</td><td class="copy-val" data-copy="2850">$2\,850$</td></tr>
            <tr><td>Volfram</td><td class="copy-val" data-copy="130">$130$</td><td class="copy-val" data-copy="3422">$3\,422$</td><td class="copy-val" data-copy="5555">$5\,555$</td></tr>
          </tbody>
        </table>
      </div>
    `
  }


];
