const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('.list');
let isClicked = true ;

function toggleMenu() {
  if (isClicked) {
    navMenu.classList.add('active'); 
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  } else {
    navMenu.classList.remove('active'); 
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
  isClicked = !isClicked;
}


menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);