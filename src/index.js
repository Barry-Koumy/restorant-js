import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";
import "./style.css";

// Charger des pages
document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();

  document.getElementById("homeBtn").addEventListener("click", loadHomePage);
  document.getElementById("menuBtn").addEventListener("click", loadMenuPage);
  document.getElementById("aboutBtn").addEventListener("click", loadContactPage);
});

