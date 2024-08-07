 // Image Sliderım
 const mainimg = document.querySelector(".slider-image");
 const images = ['image/homepage/slider1.jpg', 'image/homepage/slider2.jpg'];
 let num = 0;
 const auto = true;
 const IntervalTime = 3000;
 let slideInterval;
 
 function next() {
     num++;
     if (num >= images.length) {
         num = 0;
     }
     mainimg.src = images[num];
 }
 
 function back() {
     num--;
     if (num < 0) {
         num = images.length - 1;
     }
     mainimg.src = images[num];
 }
 
 if (auto) {
     slideInterval = setInterval(next, IntervalTime);
 }
 
 document.addEventListener('DOMContentLoaded', function () {
     const menuIcon = document.querySelector(".account");
     const dropdownMenu = document.querySelector(".dropdown-menu");
     menuIcon.addEventListener('click', function () {
         dropdownMenu.classList.toggle("show");
     });
 
     window.addEventListener('click', function (event) {
         if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
             dropdownMenu.classList.remove("show");
         }
     });
 
     evenListener();
 });