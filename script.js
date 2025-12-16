// Script for typewriter effect.
const text = "What is OFFSEASON?";
const speed = 100;      // typing speed (ms)
const deleteSpeed = 60; // deleting speed
const pause = 1000;     // pause before delete / retype

let i = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
  if (!isDeleting) {
    el.textContent = text.slice(0, i++);
    if (i > text.length) {
      setTimeout(() => isDeleting = true, pause);
    }
  } else {
    el.textContent = text.slice(0, i--);
    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(type, isDeleting ? deleteSpeed : speed);
}

type();