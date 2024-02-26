'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables - don't need no longer
/*
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
*/

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
/*
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
*/

/*
// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

*/

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



document.addEventListener("DOMContentLoaded", function() {
  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // function to update active page and nav link
  function updateActive(targetId) {
    for (let i = 0; i < pages.length; i++) {
      if (targetId === pages[i].id) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  }

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function (event) {
      event.preventDefault(); // prevent the default action

      const targetId = this.getAttribute('href').substring(1); // remove the '#' symbol

      // update the hash part of the URL
      window.location.hash = targetId;

      updateActive(targetId);
    });
  }

  // check for hash in URL on page load
  const hash = window.location.hash.substring(1);
  if (hash) {
    updateActive(hash);
  } else {
    updateActive(pages[0].id); // set the first page as active if there's no hash
  }
});

// when the hash changes, update the active navigation link
window.addEventListener("hashchange", function () {
  const hash = window.location.hash; // get the new hash from the URL

  for (let i = 0; i < navigationLinks.length; i++) {
    if (navigationLinks[i].getAttribute('href') === hash) {
      navigationLinks[i].classList.add("active");
      pages[i].classList.add("active");
    } else {
      navigationLinks[i].classList.remove("active");
      pages[i].classList.remove("active");
    }
  }
});



let counter = 0;

// Mouse particles effect (trailing mouse effect)
document.addEventListener('mousemove', function(e) {
  counter++;

  if (counter % 4 === 0) { // only create a particle on every other mousemove event
    const container = document.getElementById('particle-container');

    // Create 0.5 particles at a time
    for (let i = 0; i < 1; i++) {
      const particle = document.createElement('ion-icon');
      particle.classList.add('particle');
      particle.setAttribute('name', 'star'); // Set the icon

      // Add a larger random offset to each particle's position
      const x = e.pageX + Math.random() * 20 - 10;
      const y = e.pageY + Math.random() * 20 - 10;

      // Set random size
      const size = Math.random() * 7 + 1; 
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.fontSize = `${size}px`;

      // Set random color
      const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange']; // Add more colors if you want
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.color = color;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 750); // Remove the particle after .750 second
    }
  }
});



// Click effect for each click (mouse click effect)
var colors = ['dodgerblue', 'deepskyblue', 'cyan', 'magenta', 'yellow', 'lime'];
var shapes = ['diamond', 'circle']; // Add your shapes here

document.addEventListener('click', function(e) {
  var color1 = colors[Math.floor(Math.random() * colors.length)];
  var color2 = colors[Math.floor(Math.random() * colors.length)];
  var color3 = colors[Math.floor(Math.random() * colors.length)];
  var shape = shapes[Math.floor(Math.random() * shapes.length)];

  const effect = document.createElement('div');
  effect.classList.add('click-effect', shape); // Add the shape class
  effect.style.top = `${e.clientY - 50}px`; // subtract half the width/height to center the effect
  effect.style.left = `${e.clientX - 50}px`; // subtract half the width/height to center the effect

  var style = document.createElement('style');
  style.innerHTML = `
    .click-effect::before {
      background: linear-gradient(45deg, ${color1}, ${color2}, ${color3});
    }
  `;
  document.head.appendChild(style);

  document.getElementById('click-effect-container').appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 1000);
});

/* make height of home same as sidebar, and add birds vanta effect */
var vantaEffect = null;

function checkVanta() {
  var sidebar = document.querySelector('.sidebar');
  var home = document.querySelector('.home');

  if (window.matchMedia("(min-width: 1200px)").matches) {
    home.style.height = window.getComputedStyle(sidebar).height;

    if (vantaEffect == null) {
      vantaEffect = VANTA.BIRDS({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.00,
        color1: 0x431401,
        color2: 0xff5a00,
        backgroundColor: parseInt('1D1D1E', 16),
        birdSize: 2.50,
        wingSpan: 50.00,
        quantity: 1.00,
      });

      var vantaCanvas = document.querySelector("#home canvas");
      if (vantaCanvas) {
        vantaCanvas.style.opacity = "0.6";
      }
    }
  } else {
    home.style.height = "70vh";

    if (vantaEffect != null) {
      vantaEffect.destroy();
      vantaEffect = null;
    }
  }
}

// Get the home element
const home = document.querySelector('.home');

// Create a MutationObserver instance
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (home.classList.contains('active')) {
        checkVanta();
      }
    }
  });
});

// Start observing the home element for attribute changes
observer.observe(home, { attributes: true });