const type = document.querySelector('.type');
const menuSecond = document.querySelector('.menu-second');

type.addEventListener('mouseover', function() {
  menuSecond.classList.add('visible');
});

menuSecond.addEventListener('mouseover', function() {
  menuSecond.classList.add('visible');
});

type.addEventListener('mouseleave', function() {
  menuSecond.classList.remove('visible');
});

menuSecond.addEventListener('mouseleave', function() {
  menuSecond.classList.remove('visible');
});



document.querySelector(".openbtn1").addEventListener("click", function () {
  this.classList.toggle('active');
  document.getElementById("g-nav").classList.toggle('panelactive');
});

const gNavLinks = document.querySelectorAll("#g-nav a");
gNavLinks.forEach(function(link) {
  link.addEventListener("click", function () {
    document.querySelector(".openbtn1").classList.remove('active');
    document.getElementById("g-nav").classList.remove('panelactive');
  });
});

