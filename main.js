// Menü açma/kapama
const menuDugme = document.getElementById("menu-dugme");
const navBaglanti = document.getElementById("nav-baglanti");
const menuDugmeIkon = menuDugme.querySelector("i");

menuDugme.addEventListener("click", () => {
  navBaglanti.classList.toggle("acik");
  const acikMi = navBaglanti.classList.contains("acik");
  menuDugmeIkon.setAttribute(
    "class",
    acikMi ? "ri-close-line" : "ri-menu-line"
  );
});

navBaglanti.addEventListener("click", () => {
  navBaglanti.classList.remove("acik");
  menuDugmeIkon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animasyonları
const scrollRevealAyar = {
  distance: "60px",
  duration: 1200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
};

ScrollReveal().reveal(".baslik__icerik p", { ...scrollRevealAyar, delay: 300 });
ScrollReveal().reveal(".baslik__icerik h1", {
  ...scrollRevealAyar,
  delay: 600,
});
ScrollReveal().reveal(".baslik__dugmeler", { ...scrollRevealAyar, delay: 900 });
ScrollReveal().reveal(".baslik__resim img", {
  ...scrollRevealAyar,
  origin: "right",
  delay: 1200,
});
ScrollReveal().reveal(".ucak__kart", { ...scrollRevealAyar, interval: 400 });
ScrollReveal().reveal(".oteller__kart", { ...scrollRevealAyar, interval: 400 });
ScrollReveal().reveal(".destinasyon__kart", {
  ...scrollRevealAyar,
  interval: 400,
});
ScrollReveal().reveal(".seyahat__kart", { ...scrollRevealAyar, interval: 400 });
ScrollReveal().reveal(".vitrin__resim img", {
  ...scrollRevealAyar,
  origin: "left",
  delay: 300,
});
ScrollReveal().reveal(".vitrin__icerik h4", {
  ...scrollRevealAyar,
  delay: 600,
});
ScrollReveal().reveal(".vitrin__icerik p", { ...scrollRevealAyar, delay: 900 });
ScrollReveal().reveal(".banner__kart", { ...scrollRevealAyar, interval: 400 });
ScrollReveal().reveal(".kesfet__kart", { ...scrollRevealAyar, interval: 400 });
ScrollReveal().reveal(".musteri__kart", { ...scrollRevealAyar, interval: 400 });

// Swiper: Müşteri yorumları için slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});
