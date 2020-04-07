//get objects from the dom and define basic variables
const slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".nav-button");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

//function for next slide
const nextSlide = () =>
{
   const current = document.querySelector(".current");
   const active = document.querySelector(".active");
   current.classList.remove("current");
   active.classList.remove("active");
   
   //check for next slide
   if(current.nextElementSibling)
   {
      current.nextElementSibling.classList.add("current");
      active.nextElementSibling.classList.add("active");
   }
   else
   {
      slides[0].classList.add("current");
      navButtons[0].classList.add("active");
   }

   //reset auto-switch timer
   setTimeout(() => current.classList.remove("current"))
}

//function for previous slide
const previousSlide = () =>
{
   const current = document.querySelector(".current");
   const active = document.querySelector(".active");
   current.classList.remove("current");
   active.classList.remove("active");
   
   if(current.previousElementSibling)
   {
      current.previousElementSibling.classList.add("current");
      active.previousElementSibling.classList.add("active");
   }
   else
   {
      slides[slides.length - 1].classList.add("current");
      navButtons[slides.length - 1].classList.add("active");
   }

   setTimeout(() => current.classList.remove("current"))
}

//add event listeners to call functions
next.addEventListener("click", e=>
{
   nextSlide();
   if(auto)
   {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
   }
});

prev.addEventListener("click", e=>
{
   previousSlide();
   if(auto)
   {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
   }
});