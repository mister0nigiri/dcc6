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