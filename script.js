const judulTengah = document.querySelector('.judul-tengah');

// ketika menu di klik===================================================================
document.querySelector("#menu-dekstop").onclick = () => {
  judulTengah.classList.toggle("active");
};
// klik diluar menu untuk menghilangkan menu==============================================
const dekstop = document.querySelector('#menu-dekstop');

document.addEventListener('click', function(e) {
  if(!dekstop.contains(e.target) && !judulTengah.contains(e.target)) {
    judulTengah.classList.remove('active');
  }
});
document.querySelector('#menu-dekstop').onclick = (e) => {
  e.preventDefault();
  judulTengah.classList.toggle("active");
};

// Pilihan Bahasa=========================================================================

const translations = {
  id: {
    pertama: "Menghubungkan Dunia Melalui Biji Kopi Terbaik Indonesia",
    kedua: "-Kualitas Ekspor Premium. Terbukti Secara Global.",
    ketiga: "-Bersumber Secara Berkelanjutan. Mitra Ekspor terpercaya.",
    keempat: "Produk Kami",
    kelima: "Mengapa memilih kopi kami",
    keenam:
      "Kami berdedikasi untuk menghadirkan biji kopi terbaik yang dipilih dengan cermat dari perkebunan terbaik. Semangat kami mendorong kami untuk melakukan pengadaan secara berkelanjutan, memastikan setiap cangkir menghadirkan profil rasa yang kaya dan autentik yang menghormati asalnya.",
    ketujuh:
      "Dari perkebunan hingga cangkir, Kami mempertahankan standart kontrol kualitas dan ketelitian tertinggi. Rasakan keseimbangan sempurna antara aroma dan rasa yang dirancang khusus untuk para pecinta kopi sejati.", 
      kedelapan: "Setiap biji kopi menceritakan kisah dedikasi, pertanian berkelanjutan, dan dukungan komunitas. Kami bekerjasama dengan petani lokal untuk menghadirkan kopi yang bersumber secara etis dan menghormati baik manusia maupun pelanet ini.",
      kesembilan: "Dengan memilih kopi kami. Anda mendukung masa depan yang hijau dan mata pencaharian yang adil. Nikmati pengalaman kopi premium yang tidak hanya enak tetapi juga bermanfaat.",
      kesepuluh: " Kami hanya menggunakan biji kopi premium pilihan untuk menjamin cita rasa dan aroma yang tak tertandingi dalam setiap seduhan.", 
      kesebelas: "Dengan komitmen terhadap keberlanjutan dan keunggulan. Kami menghadirkan budaya kopi terbaik dunia langsung ke pembeli."
  },
  en: {
    pertama: "Connecting the world through Indonesia's finest coffee beans",
    kedua: "-Premium Export Quality. Globally Proven.",
    ketiga: "- Sustainably Sourced. Trusted Export Partner.",
    keempat: "Our Product",
    kelima: "Why choose our coffee?",
    keenam:
      "From farm to cup, we maintain the highest standards of quality control and precision. Experience the perfect balance of aroma and taste crafted especially for tru coffe lovers.", 
      ketujuh: "From farm to cup, we maintain the highest standards of quality control and precision. Experience the perfect balance of aroma and taste crafted especially for tru coffe lovers.",
      kedelapan: "Every bean tells a story of dedication, sustainable farming, and community support. We work hand-in-hand with local famers to bring you ethically sourced coffee that respects both the people and the planet.",
      kesembilan: "By choosing our coffee, you are supporting a green future and fair livelihoods. Enjoy a premium coffee experience that not only tastes good but also does good.", 
      kesepuluh: "We source only premium, hand-picked coffee beans to guarantee an unmatched flavor and aroma in every single brew.", 
      kesebelas: "With a commitment to sustainability and excellence, we bring the world's best finest coffee culture directly to customers."
  },
};
const langSelect = document.getElementById("langSelect");

// Fungsi untuk mengganti bahasa
function changeLanguage(lang) {
  // Ambil semua elemen yang memiliki atribut data-i18n
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Ubah atribut lang pada tag <html> (bagus untuk SEO & aksesibilitas)
  document.documentElement.lang = lang;

  // Simpan pilihan bahasa di localStorage agar tidak hilang saat halaman direfresh
  localStorage.setItem("selectedLang", lang);
}

// Event listener saat pilihan dropdown diubah
langSelect.addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

// Cek bahasa yang tersimpan di localStorage saat halaman pertama kali dimuat
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en"; // Default Indonesia
  langSelect.value = savedLang;
  changeLanguage(savedLang);
});
