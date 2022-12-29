let lightMode = localStorage.getItem("lightMode");
const darkModeToggle = document.querySelector("#icon");

const enableLightMode = () => {
  // 1. Add the class to the body
  document.body.classList.remove("dark-theme");

  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.add("dark-theme");

  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
window.onload = function () {
  if (lightMode === "enabled") {
    darkModeToggle.src = "./files/assets/moon.png";
    enableLightMode();
  } else {
    disableLightMode();
  }
};

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    darkModeToggle.src = "./files/assets/moon.png";
    enableLightMode();
    // if it has been enabled, turn it off
  } else {
    darkModeToggle.src = "./files/assets/sun.png";
    disableLightMode();
  }
});

const primaryNav = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav-toggler");
// const navItems = document.querySelector(".nav-items");

navToggle.addEventListener("click", () => {
  if (primaryNav.classList.contains("visible")) {
    primaryNav.classList.remove("visible");
    navToggle.classList.remove("visible-pos");
  } else {
    primaryNav.classList.add("visible");
    navToggle.classList.add("visible-pos");
  }
});
