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
];
