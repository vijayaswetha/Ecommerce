function toggleMenu() {
    var mobileMenu = document.querySelector('.navigation ul');
    mobileMenu.classList.toggle('show');
}


/*var loader=document.getElementById("loader");
window.addEventListener("load",function(){
    loader.style.display="none"
})*/
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    loader.classList.add("hide");
});


  
/*switer*/
var swiper1 = new Swiper("#slide-content2", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
/*seiper close*/

document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.remove('active');
});




/*coutdownclock*/
const targetDate = new Date("2024-05-28T10:00:00"); // Set your target date and time here

const countdown = document.getElementById('timer');

const updateTime = () => {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (timeDifference < 0) {
    clearInterval(interval);
    countdown.textContent = "Countdown Expired!";
  }
};

const interval = setInterval(updateTime, 10);

updateTime(); // Call initially to display the time right away





