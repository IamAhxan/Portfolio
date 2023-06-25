// // Show text on Scroll

// window.addEventListener("scroll", function () {
//   showFunction();
// });

// function showFunction() {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     document.getElementById("animate").style.display = "block";
//   } else {
//     document.getElementById("animate").style.display = "none";
//   }
// }

// // Slick Slider
// $(".slider-one").slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   prevArrow: ".s1-prev",
//   nextArrow: ".s1-next",
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 700,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

// $(function () {
//   $("#container1").twentytwenty();
// });

// const container = document.querySelector(".compare-container");
// document.querySelector(".compare-slider").addEventListener("input", (e) => {
//   container.style.setProperty("--position", `${e.target.value}%`);
// });

// particlesJS.load(
//   "particles-js",
//   "assets/particles.js/particlesjs-config.json",
//   function () {
//     console.log("callback - particles.js config loaded");
//   }
// );

// var typed = new Typed("#element", {
//   strings: [
//     "Front-End Developer!",
//     "ReactJS Developer!",
//     "WordPress Developer!",
//   ],
//   typeSpeed: 50,
//   loop: true,
//   loopCount: Infinity,
// });
