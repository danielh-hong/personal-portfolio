'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

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



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default action

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);

        // update the hash part of the URL
        window.location.hash = this.innerHTML.toLowerCase();
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}




let counter = 0;

// Mouse particles effect
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



// Click effect for each click
var colors = ['dodgerblue', 'deepskyblue', 'cyan', 'magenta', 'yellow', 'lime'];

document.addEventListener('click', function(e) {
  var color1 = colors[Math.floor(Math.random() * colors.length)];
  var color2 = colors[Math.floor(Math.random() * colors.length)];
  var color3 = colors[Math.floor(Math.random() * colors.length)];

  const effect = document.createElement('div');
  effect.classList.add('click-effect');
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

/* make height of home same as sidebar */
/*
window.onload = function() {
  var sidebar = document.querySelector('.sidebar');
  var home = document.querySelector('.home');
  home.style.height = window.getComputedStyle(sidebar).height;
}
not needed anymore with new fixes
*/ 


/* Match Side bar height */
window.onload = function() {
  var sidebar = document.querySelector('.sidebar');
  var home = document.querySelector('.home');

  if (window.matchMedia("(min-width: 1250px)").matches) { // 768px is typically the breakpoint for mobile to tablet/desktop. Adjust as needed.
    home.style.height = window.getComputedStyle(sidebar).height;
  } else {
    // Perform some other action for mobile view
    home.style.height = "flex"; // For example, reset the height to auto
  }
}

