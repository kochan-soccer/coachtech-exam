'use strict';

{

const menu = document.getElementsByClassName("menu");
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}
function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

  
  
}
