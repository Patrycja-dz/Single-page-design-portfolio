// const nextSlide = document.querySelector(".arrow-next");
// const prevSlide = document.querySelector(".arrow-prev");
// const slides = document.querySelectorAll(".slide");
// const scrollContainer = document.querySelector(".scroll-container");

// // scrollContainer.addEventListener("scroll", (e) => {
// //   e.preventDefault();
// //   scrollContainer.scrollLeft += 500;
// //   console.log((scrollContainer.scrollLeft += e.scrollX));
// // });

// // nextSlide.addEventListener("click", () => {
// //   scrollContainer.scrollLeft += 500;
// // });
// // prevSlide.addEventListener("click", () => {
// //   scrollContainer.scrollLeft -= 500;
// // });
// nextSlide.addEventListener("click", () => {
//   const currentScroll = scrollContainer.scrollLeft;
//   const slideWidth = slides[0].offsetWidth;
//   scrollContainer.scrollLeft = currentScroll + slideWidth * 5; // Scroll to the next set of three images
// });

// prevSlide.addEventListener("click", () => {
//   const currentScroll = scrollContainer.scrollLeft;
//   const slideWidth = slides[0].offsetWidth;
//   scrollContainer.scrollLeft = currentScroll - slideWidth * 5; // Scroll to the previous set of three images
// });
// //const nextSlide = document.querySelector(".arrow-next");
const nextSlide = document.querySelector(".arrow-next");
const prevSlide = document.querySelector(".arrow-prev");
const slides = document.querySelectorAll(".slide");
const scrollContainer = document.querySelector(".scroll-container");

nextSlide.addEventListener("click", () => {
  const currentScroll = scrollContainer.scrollLeft;
  const slideWidth = slides[0].offsetWidth;
  scrollContainer.scrollLeft = currentScroll + slideWidth * 3; // Scroll to the next set of three images
});

prevSlide.addEventListener("click", () => {
  const currentScroll = scrollContainer.scrollLeft;
  const slideWidth = slides[0].offsetWidth;
  scrollContainer.scrollLeft = currentScroll - slideWidth * 3; // Scroll to the previous set of three images
});
