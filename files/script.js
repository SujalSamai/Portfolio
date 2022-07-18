let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#icon");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.remove("light-theme");

  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.add("light-theme");

  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
window.onload = function () {
  if (darkMode !== "enabled") {
    darkModeToggle.src = "./assets/moon.png";
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    darkModeToggle.src = "./assets/sun.png";
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    darkModeToggle.src = "./assets/moon.png";
    disableDarkMode();
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

// const visibility = primaryNav.classList.contains("visible");
// console.log(visibility);
