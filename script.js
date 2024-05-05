// funcitonality for the hamburger menu

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

// End hamburger menu

// Start slider services
document.addEventListener("DOMContentLoaded", function () {
  const servicesContent = document.querySelector(".services-content");
  const services = document.querySelectorAll(".service");
  const bullets = document.querySelectorAll(".bult");

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      // Remove selected class from all bullets and services
      bullets.forEach((b) => b.classList.remove("selected"));
      services.forEach((s) => s.classList.remove("selected-service"));

      // Add selected class to the clicked bullet and corresponding service
      bullet.classList.add("selected");
      services[index].classList.add("selected-service");
    });
  });
});

// slider index line
document.addEventListener("DOMContentLoaded", function() {
    const indexElement = document.getElementById("index");
    const lengthElement = document.getElementById("length");
    const lineElement = document.getElementById("line");
    const bullets = document.querySelectorAll(".bult");
  
    // Initial index and length values
    let currentIndex = 0;
    const maxLength = bullets.length;
  
    // Update index and length elements
    function updateIndexAndLength() {
      indexElement.textContent = "0"+(currentIndex); // Adding 1 to start from 1 instead of 0
      lengthElement.textContent = "0"+maxLength;
      if (currentIndex === 0) {
        lineElement.style.width = "0%"; // Set width to 0 if currentIndex is 0
      } else {
        lineElement.style.width = `${(currentIndex / maxLength) * 100}%`;
      }
    }
  
    // Click event listener for bullets
    bullets.forEach((bullet, index) => {
      bullet.addEventListener("click", () => {
        currentIndex = index+1;
        updateIndexAndLength();
      });
    });
  
    // Initialize index and length elements
    updateIndexAndLength();
  });
  

// End slider services
