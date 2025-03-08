document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "slide", // Gunakan efek slide horizontal
    speed: 500, // Supaya transisinya lebih halus
    navigation: false,
    pagination: false,
  });
});

 document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".nav .fa-bars");
   const navMenu = document.querySelector(".nav ul");

   menuIcon.addEventListener("click", function () {
     navMenu.classList.toggle("active");
   });
 });