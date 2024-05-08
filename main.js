// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper", {
  loop: true,
  direction: "horizontal",
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
  spaceBetween: 50,
  grabCursor: true,
  fade: true,
  breakpoints: {
    // When screen width is less than 768px (mobile devices)
    768: {
      slidesPerView: 3, // Display one slide per view
    },

    // You can add more breakpoints as needed
  },
});
